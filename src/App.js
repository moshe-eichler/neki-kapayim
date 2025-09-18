// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Navigate } from 'react-router-dom';
import './App.css';
import NakiKapayimQuestionnaire from './components/NakiKapayimQuestionnaire';

// Component to handle the redirect
function PaymentRedirect() {
    const { amount } = useParams();

    useEffect(() => {
        // Only redirect if it's a valid number
        if (amount && !isNaN(amount) && amount.trim() !== '' && parseFloat(amount) > 0) {
            const redirectUrl = `https://ultra.kesherhk.info/external/paymentPage/317774?total=${amount}`;
            window.location.href = redirectUrl;
        }
    }, [amount]);

    // If not a valid number, redirect to home using Navigate component
    if (!amount || isNaN(amount) || amount.trim() === '' || parseFloat(amount) <= 0) {
        return <Navigate to="/" replace />;
    }

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <p>Redirecting to payment page...</p>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<NakiKapayimQuestionnaire />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;