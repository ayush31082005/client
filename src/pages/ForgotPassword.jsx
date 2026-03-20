import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, ShieldCheck, ChevronLeft, Eye, EyeOff } from 'lucide-react';
import api from '../api';

const ForgotPassword = () => {
    const navigate = useNavigate();

    // Steps: 1 = Email, 2 = Verify OTP, 3 = New Password
    const [step, setStep] = useState(1);

    // Form States
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // UI States
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // ================= STEP 1: SEND OTP =================
    const handleSendOTP = async (e) => {
        e.preventDefault();
        if (!email) {
            setError('Please enter your email address');
            return;
        }

        setIsLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await api.post('/forgot-password', { email });
            setSuccess(response.data.message || 'OTP sent to your email');
            setStep(2); // Move to OTP input step
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to send OTP. Please check your email.');
        } finally {
            setIsLoading(false);
        }
    };

    // ================= RESEND OTP =================
    const handleResendOTP = async () => {
        setIsLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await api.post('/resend-otp', { email });
            setSuccess(response.data.message || 'New OTP sent successfully');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to resend OTP');
        } finally {
            setIsLoading(false);
        }
    };

    // ================= STEP 2: VERIFY OTP AND RESET =================
    const handleResetPassword = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (step === 2) {
            if (!otp || otp.length < 4) {
                setError('Please enter a valid OTP');
                return;
            }
            setStep(3); // Move to new password step
            return;
        }

        if (step === 3) {
            if (newPassword !== confirmPassword) {
                setError('Passwords do not match');
                return;
            }
            if (newPassword.length < 6) {
                setError('Password must be at least 6 characters long');
                return;
            }

            setIsLoading(true);

            try {
                const response = await api.post('/reset-password', {
                    email,
                    otp,
                    newPassword
                });

                setSuccess(response.data.message || 'Password reset successful!');

                // Redirect to login after 2 seconds
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            } catch (err) {
                setError(err.response?.data?.message || 'Failed to reset password. OTP might be invalid or expired.');
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-900 flex items-center justify-center p-4">

            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-md w-full relative z-10">
                <div className="bg-zinc-900 rounded-2xl shadow-xl overflow-hidden border border-yellow-900/30 transform transition-all">

                    {/* Top Accent Bar */}
                    <div className="h-2 bg-[#C9A84C] w-full" />

                    <div className="p-8">
                        {/* Header Details */}
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-100">
                                {step === 1 && <Mail className="w-8 h-8 text-[#C9A84C]" />}
                                {step === 2 && <ShieldCheck className="w-8 h-8 text-[#C9A84C]" />}
                                {step === 3 && <Lock className="w-8 h-8 text-[#C9A84C]" />}
                            </div>

                            <h2 className="text-2xl font-black text-zinc-100 mb-2">
                                {step === 1 ? 'Forgot Password?' : step === 2 ? 'Verify OTP' : 'New Password'}
                            </h2>
                            <p className="text-zinc-300 text-sm">
                                {step === 1 && "Enter your email address to receive a password reset OTP."}
                                {step === 2 && `Enter the OTP sent to ${email}`}
                                {step === 3 && "Create a strong new password for your account."}
                            </p>
                        </div>

                        {/* Error & Success Messages */}
                        {error && (
                            <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100 text-center animate-slide-up">
                                {error}
                            </div>
                        )}

                        {success && (
                            <div className="mb-6 p-4 bg-yellow-50 text-[#C9A84C] rounded-xl text-sm border border-yellow-100 text-center animate-slide-up">
                                {success}
                            </div>
                        )}

                        {/* FORM START */}
                        <form onSubmit={step === 1 ? handleSendOTP : handleResetPassword}>

                            {/* STEP 1: EMAIL INPUT */}
                            {step === 1 && (
                                <div className="space-y-2 mb-6 animate-slide-left">
                                    <label className="block text-sm font-semibold text-zinc-200">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-300" />
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                setError('');
                                            }}
                                            placeholder="Ex: youremail@domain.com"
                                            className="w-full pl-11 pr-4 py-3 bg-zinc-900 border border-yellow-900/30 rounded-xl focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent transition-all outline-none"
                                            required
                                        />
                                    </div>
                                </div>
                            )}

                            {/* STEP 2: OTP INPUT */}
                            {step === 2 && (
                                <div className="space-y-4 mb-6 animate-slide-left">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-zinc-200">6-Digit OTP</label>
                                        <div className="relative">
                                            <ShieldCheck className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-300" />
                                            <input
                                                type="text"
                                                maxLength="6"
                                                value={otp}
                                                onChange={(e) => {
                                                    setOtp(e.target.value.replace(/[^0-9]/g, ''));
                                                    setError('');
                                                }}
                                                placeholder="000000"
                                                className="w-full pl-11 pr-4 py-3 bg-zinc-900 border border-yellow-900/30 rounded-xl text-lg tracking-widest focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent transition-all outline-none"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center text-sm">
                                        <button
                                            type="button"
                                            onClick={() => setStep(1)}
                                            className="text-zinc-300 hover:text-zinc-100 transition-colors"
                                        >
                                            Change email
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleResendOTP}
                                            disabled={isLoading}
                                            className="font-medium text-[#C9A84C] hover:underline"
                                        >
                                            Resend OTP
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* STEP 3: NEW PASSWORD INPUT */}
                            {step === 3 && (
                                <div className="space-y-4 mb-6 animate-slide-left">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-zinc-200">New Password</label>
                                        <div className="relative">
                                            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-300" />
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                value={newPassword}
                                                onChange={(e) => {
                                                    setNewPassword(e.target.value);
                                                    setError('');
                                                }}
                                                className="w-full pl-11 pr-12 py-3 bg-zinc-900 border border-yellow-900/30 rounded-xl focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent transition-all outline-none"
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zinc-300 hover:text-zinc-300"
                                            >
                                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-zinc-200">Confirm Password</label>
                                        <div className="relative">
                                            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-300" />
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                value={confirmPassword}
                                                onChange={(e) => {
                                                    setConfirmPassword(e.target.value);
                                                    setError('');
                                                }}
                                                className="w-full pl-11 pr-12 py-3 bg-zinc-900 border border-yellow-900/30 rounded-xl focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent transition-all outline-none"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* SUBMIT BUTTON */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full relative flex items-center justify-center py-4 px-6 bg-[#C9A84C] text-zinc-100 rounded-xl font-bold shadow-lg shadow-yellow-200 hover:bg-[#A07830] hover:-translate-y-0.5 transition-all duration-200 overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {isLoading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            <span>Processing...</span>
                                        </>
                                    ) : (
                                        <>
                                            {step === 1 ? 'Send OTP' : step === 2 ? 'Verify OTP' : 'Reset Password'}
                                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                        </>
                                    )}
                                </span>
                            </button>
                        </form>

                        {/* Return to Login */}
                        <div className="mt-8 text-center">
                            <Link
                                to="/login"
                                className="inline-flex items-center gap-1 text-sm font-medium text-zinc-300 hover:text-[#C9A84C] transition-colors"
                            >
                                <ChevronLeft className="w-4 h-4" />
                                Back to Login
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            <style>{`
                @keyframes slide-left {
                    from { opacity: 0; transform: translateX(10px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .animate-slide-left {
                    animation: slide-left 0.3s ease-out forwards;
                }
                @keyframes slide-up {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-slide-up {
                    animation: slide-up 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default ForgotPassword;
