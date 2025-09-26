// api/track-redirect.js
const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  const { total } = req.query;

  // Collect tracking data
  const trackingData = {
    total,
    timestamp: new Date().toISOString(),
    ip: req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown',
    userAgent: req.headers['user-agent'] || 'unknown',
    referer: req.headers.referer || 'direct',
    country: req.headers['cf-ipcountry'] || 'unknown' // Cloudflare header
  };

  // Send email notification
  try {
    await sendGmailNotification(trackingData);
    console.log('✅ Email notification sent successfully');
  } catch (error) {
    console.error('❌ Email notification failed:', error.message);
    // Continue with redirect even if email fails
  }

  // Always redirect to payment page
  const destination = `https://ultra.kesherhk.info/external/paymentPage/317774?total=${total}`;
  res.redirect(301, destination);
}

async function sendGmailNotification(data) {
  // Create Gmail transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  // Email content
  const emailContent = {
    from: process.env.GMAIL_USER,
    to: process.env.NOTIFICATION_EMAIL,
    subject: `💰 התרעת הפנית תשלום - $${data.total}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          .container { 
            font-family: Arial, sans-serif; 
            max-width: 600px; 
            margin: 0 auto; 
            padding: 20px; 
            border: 2px solid #28a745; 
            border-radius: 10px; 
            background: #f8f9fa;
          }
          .header { 
            background: #28a745; 
            color: white; 
            padding: 15px; 
            border-radius: 5px; 
            text-align: center; 
            margin-bottom: 20px;
          }
          .amount { 
            font-size: 24px; 
            font-weight: bold; 
            color: #28a745; 
            text-align: center; 
            margin: 15px 0;
          }
          .info-box { 
            background: white; 
            padding: 15px; 
            border-radius: 5px; 
            margin: 10px 0;
            border-left: 4px solid #28a745;
          }
          .label { 
            font-weight: bold; 
            color: #333;
          }
          .value { 
            color: #666; 
            margin-left: 10px;
          }
          .footer { 
            text-align: center; 
            color: #666; 
            font-size: 12px; 
            margin-top: 20px; 
            padding-top: 15px; 
            border-top: 1px solid #ddd;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>🚨 התרעת הפנית תשלום</h2>
          </div>
          
          <div class="amount">
            Amount: $${data.total}
          </div>
          
          <div class="info-box">
            <div><span class="label">📅 תאריך ושעה:</span><span class="value">${new Date(data.timestamp).toLocaleString()}</span></div>
          </div>
          
          <div class="info-box">
            <div><span class="label">🌐 IP כתובת:</span><span class="value">${data.ip}</span></div>
          </div>
          
          <div class="info-box">
            <div><span class="label">🌍 מדינה:</span><span class="value">${data.country}</span></div>
          </div>
          
          <div class="info-box">
            <div><span class="label">🔗 הפניה:</span><span class="value">${data.referer}</span></div>
          </div>
          
          <div class="info-box">
            <div><span class="label">💻 מכשיר:</span><span class="value">${getUserDevice(data.userAgent)}</span></div>
          </div>
          
          <div class="footer">
            התראה זו נוצרה אוטומטית כאשר מישהו ניגש לקישור התשלום שלך.<br>
            כתובת אתר להפניה: /payment/${data.total}
          </div>
        </div>
      </body>
      </html>
    `,
    // Plain text version for compatibility
    text: `
התרעת הפנית תשלום!

סכום: $${data.total}
תאריך ושעה: ${new Date(data.timestamp).toLocaleString()}
IP: ${data.ip}
מדינה: ${data.country}
הפניה: ${data.referer}
User Agent: ${data.userAgent}

הודעה זו נשלחה אוטומטית.
    `
  };

  // Send email
  const info = await transporter.sendMail(emailContent);
  console.log('Email sent successfully:', info.messageId);
}

// Helper function to parse user agent
function getUserDevice(userAgent) {
  if (!userAgent) return 'Unknown';

  if (userAgent.includes('Mobile')) return '📱 Mobile';
  if (userAgent.includes('Tablet')) return '📱 Tablet';
  if (userAgent.includes('Windows')) return '🖥️ Windows PC';
  if (userAgent.includes('Mac')) return '🖥️ Mac';
  if (userAgent.includes('Linux')) return '🖥️ Linux';
  if (userAgent.includes('iPhone')) return '📱 iPhone';
  if (userAgent.includes('Android')) return '📱 Android';

  return '🖥️ Desktop';
}