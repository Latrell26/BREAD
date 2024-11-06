import React, { useState } from 'react';
import './DonationPage.css';
import mayaQRCode from "../../../assets/maya.jpg";
import gcashQRCode from "../../../assets/gcash.jpg";
import Footer from '../../Footer/Footer';

const DonationPage = () => {
    const [step, setStep] = useState(1);
    const [donationAmount, setDonationAmount] = useState('');
    const [donorInfo, setDonorInfo] = useState({ name: '', email: '', contact: '' });
    const [paymentMethod, setPaymentMethod] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    // Confirm Donation with Loading and Success State
    const handleConfirm = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
                setStep(1);
                setDonationAmount('');
                setDonorInfo({ name: '', email: '', contact: '' });
                setPaymentMethod('');
            }, 2000); // Show success message for 2 seconds before resetting
        }, 2000); // Simulate a 2-second loading delay
    };

    // Step 1: Select Donation Amount
    const renderStep1 = () => (
        <div className="donation-step">
            <h2>Select Donation Amount</h2>
            <button onClick={() => setDonationAmount('500')}>₱500</button>
            <button onClick={() => setDonationAmount('1000')}>₱1000</button>
            <button onClick={() => setDonationAmount('1500')}>₱1500</button>
            <input 
                type="number" 
                placeholder="Enter custom amount" 
                value={donationAmount} 
                onChange={(e) => setDonationAmount(e.target.value)} 
            />
            <button onClick={() => setStep(2)}>Next</button>
        </div>
    );

    // Step 2: Collect Donor Information
    const renderStep2 = () => (
        <div className="donation-step">
            <h2>Enter Your Information</h2>
            <input 
                type="text" 
                placeholder="Name" 
                value={donorInfo.name} 
                onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })} 
            />
            <input 
                type="email" 
                placeholder="Email" 
                value={donorInfo.email} 
                onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })} 
            />
            <input 
                type="text" 
                placeholder="Contact Number" 
                value={donorInfo.contact} 
                onChange={(e) => setDonorInfo({ ...donorInfo, contact: e.target.value })} 
            />
            <button onClick={() => setStep(3)}>Next</button>
            <button onClick={() => setStep(1)}>Back</button>
        </div>
    );

    // Step 3: Select Payment Method
    const renderStep3 = () => (
        <div className="donation-step">
            <h2>Select Payment Method</h2>
            <div className="payment-options">
                <button onClick={() => setPaymentMethod('gcash')}>GCash</button>
                <button onClick={() => setPaymentMethod('paymaya')}>PayMaya</button>
                <button onClick={() => setPaymentMethod('paypal')}>PayPal</button>
                <button onClick={() => setPaymentMethod('bpi')}>BPI</button>
                <button onClick={() => setPaymentMethod('bdo')}>BDO</button>
            </div>
    
            {paymentMethod && (
                <div className="payment-details">
                    <h3>
                        {paymentMethod === 'gcash' ? 'GCash QR Code' : 
                         paymentMethod === 'paymaya' ? 'PayMaya QR Code' : 
                         paymentMethod === 'paypal' ? 'PayPal Account Info' : 
                         'Bank Information'}
                    </h3>
    
                    {/* Conditionally rendering content for each payment method */}
                    {paymentMethod === 'gcash' && (
                        <div>
                            <p>Scan the QR code to pay via GCash:</p>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img src={gcashQRCode} alt="PayMaya QR Code" style={{ maxWidth: '300px' }} />
                            </div>
                        </div>
                    )}
    
                    {paymentMethod === 'paymaya' && (
                        <div>
                            <p>Scan the QR code to pay via PayMaya:</p>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img src={mayaQRCode} alt="PayMaya QR Code" style={{ maxWidth: '300px' }} />
                            </div>
                        </div>
                    )}
    
                    {paymentMethod === 'paypal' && (
                        <div>
                            <p>PayPal Account: manalangmatthew2@gmail.com</p>
                        </div>
                    )}
    
                    {paymentMethod === 'bpi' && (
                        <div>
                            <p>BPI Bank Account: 9325 5678 9012</p>
                        </div>
                    )}
    
                    {paymentMethod === 'bdo' && (
                        <div>
                            <p>BDO Bank Account: 0987 6543 2109</p>
                        </div>
                    )}
                </div>
            )}
            <button onClick={handleConfirm}>Confirm</button>
        </div>
    );
    return (
        <div className="main-container">
            <div className="donation-container">
                {loading && <p>Loading...</p>}
                {success && <p>Donation Successful!</p>}
                {!loading && !success && (
                    <>
                        {step === 1 && renderStep1()}
                        {step === 2 && renderStep2()}
                        {step === 3 && renderStep3()}
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default DonationPage;
