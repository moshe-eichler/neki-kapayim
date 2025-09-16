// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import './App.css';
import NakiKapayimQuestionnaire from './components/NakiKapayimQuestionnaire';

// Component to handle the redirect
function PaymentRedirect() {
    const { amount } = useParams();

    useEffect(() => {
        // Validate that amount is a number
        if (amount && !isNaN(amount) && amount.trim() !== '') {
            const redirectUrl = `https://ultra.kesherhk.info/external/paymentPage/317774?total=${amount}`;
            window.location.href = redirectUrl;
        } else {
            // If it's not a number, redirect to base URL
            window.location.href = '/';
        }
    }, [amount]);

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <p>Redirecting...</p>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    {/* Route for payment redirect - matches any number */}
                    <Route path="/:amount" element={<PaymentRedirect />} />

                    {/* Default route for the questionnaire */}
                    <Route path="/" element={<NakiKapayimQuestionnaire />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;