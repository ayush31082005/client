import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Wallet, CreditCard, ChevronRight, ShieldCheck, ArrowRight } from 'lucide-react';

const PaymentMethodModal = ({ 
    isOpen, 
    onClose, 
    onSelect, 
    amount, 
    walletBalance, 
    isProcessing 
}) => {
    if (!isOpen) return null;

    const canPayWithWallet = walletBalance >= amount;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/25 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="bg-zinc-900 rounded-[32px] w-full max-w-md overflow-hidden flex flex-col shadow-2xl border border-white/20"
                >
                    {/* Header */}
                    <div className="p-6 border-b border-yellow-900/30 flex justify-between items-center bg-zinc-900/50">
                        <div>
                            <h3 className="text-xl font-black text-zinc-100 uppercase tracking-wider">Payment Method</h3>
                            <p className="text-[10px] text-zinc-300 font-bold uppercase tracking-widest mt-1 italic">Choose how you want to pay</p>
                        </div>
                        <button 
                            onClick={onClose} 
                            disabled={isProcessing}
                            className="w-10 h-10 rounded-full bg-zinc-900 shadow-sm flex items-center justify-center text-zinc-300 hover:text-red-500 transition-colors disabled:opacity-50"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="p-6 space-y-4">
                        {/* Summary */}
                        <div className="bg-[#C9A84C]/5 rounded-2xl p-4 border border-[#C9A84C]/10 flex items-center justify-between mb-2">
                            <span className="text-xs font-black text-[#C9A84C] uppercase tracking-widest">Total Payable</span>
                            <span className="text-2xl font-black text-[#C9A84C]">₹{amount}</span>
                        </div>

                        {/* Wallet Option */}
                        <motion.button
                            whileHover={canPayWithWallet && !isProcessing ? { x: 5 } : {}}
                            whileTap={canPayWithWallet && !isProcessing ? { scale: 0.98 } : {}}
                            onClick={() => canPayWithWallet && onSelect('wallet')}
                            disabled={!canPayWithWallet || isProcessing}
                            className={`w-full p-5 rounded-[24px] border-2 transition-all flex items-center justify-between relative group ${
                                canPayWithWallet 
                                    ? 'border-gray-50 hover:border-[#C9A84C] bg-zinc-900 cursor-pointer' 
                                    : 'border-yellow-900/30 bg-zinc-900 cursor-not-allowed grayscale'
                            }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm ${
                                    canPayWithWallet ? 'bg-yellow-50 text-[#C9A84C]' : 'bg-zinc-700 text-zinc-300'
                                }`}>
                                    <Wallet className="w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <div className="font-black text-zinc-100 uppercase text-xs tracking-wider">Sanyukt Wallet</div>
                                    <div className={`text-[10px] font-bold ${canPayWithWallet ? 'text-[#C9A84C]' : 'text-red-400'}`}>
                                        Balance: ₹{walletBalance?.toFixed(2)}
                                        {!canPayWithWallet && " (Insufficient)"}
                                    </div>
                                </div>
                            </div>
                            <ChevronRight className={`w-5 h-5 transition-colors ${canPayWithWallet ? 'text-gray-300 group-hover:text-[#C9A84C]' : 'text-gray-200'}`} />
                            
                            {canPayWithWallet && (
                                <div className="absolute -top-2 -right-2 bg-[#C9A84C] text-zinc-100 text-[8px] font-black px-2 py-1 rounded-lg shadow-lg uppercase">Fastest</div>
                            )}
                        </motion.button>

                        {/* Razorpay Option */}
                        <motion.button
                            whileHover={!isProcessing ? { x: 5 } : {}}
                            whileTap={!isProcessing ? { scale: 0.98 } : {}}
                            onClick={() => onSelect('online')}
                            disabled={isProcessing}
                            className={`w-full p-5 rounded-[24px] border-2 border-gray-50 hover:border-[#C9A84C] bg-zinc-900 cursor-pointer transition-all flex items-center justify-between group ${
                                isProcessing ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-yellow-50 text-[#C9A84C] flex items-center justify-center shadow-sm">
                                    <CreditCard className="w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <div className="font-black text-zinc-100 uppercase text-xs tracking-wider">Online Payment</div>
                                    <div className="text-[10px] font-bold text-zinc-300 uppercase tracking-tighter">UPI, Cards, Net Banking</div>
                                </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#C9A84C] transition-colors" />
                        </motion.button>
                    </div>

                    {/* Footer */}
                    <div className="p-6 bg-zinc-900 flex flex-col items-center gap-3">
                        <div className="flex items-center gap-2 text-[9px] font-black text-zinc-300 uppercase tracking-widest">
                            <ShieldCheck className="w-3 h-3 text-[#C9A84C]" />
                            100% Secure & Encrypted Payment
                        </div>
                        {isProcessing && (
                            <div className="flex items-center gap-2 text-[10px] font-black text-[#C9A84C] uppercase animate-pulse">
                                <div className="w-2 h-2 rounded-full bg-[#C9A84C]"></div>
                                Processing transaction...
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default PaymentMethodModal;
