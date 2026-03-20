import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Wallet, Clock } from 'lucide-react';
import api from '../../api';

const GenerationWithdrawal = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [withdrawals, setWithdrawals] = useState([]);

    useEffect(() => {
        const fetchWithdrawals = async () => {
            try {
                const res = await api.get('/wallet/withdrawal-history');
                if (res.data.success) {
                    setWithdrawals(res.data.withdrawals || []);
                }
            } catch (err) {
                console.error("Error fetching withdrawals:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchWithdrawals();
    }, []);

    return (
        <div className="p-4 md:p-6 max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <button onClick={() => navigate('/my-account/wallet/generation')}
                    className="p-2 hover:bg-zinc-800 rounded-lg transition-all">
                    <ArrowLeft className="w-5 h-5 text-zinc-300" />
                </button>
                <div>
                    <h1 className="text-2xl font-black text-zinc-100">Withdrawal History</h1>
                    <p className="text-sm text-zinc-300">Status of your generation wallet payouts</p>
                </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl border border-yellow-900/30 shadow-sm overflow-hidden">
                {loading ? (
                    <div className="py-20 flex justify-center"><div className="w-8 h-8 border-4 border-[#C9A84C] border-t-transparent rounded-full animate-spin"></div></div>
                ) : withdrawals.length === 0 ? (
                    <div className="py-20 text-center text-zinc-300">
                        <Clock className="w-12 h-12 mx-auto mb-4 opacity-20" />
                        <p className="font-bold">No withdrawals found</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-zinc-900 border-b border-yellow-900/30">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-black text-zinc-300 uppercase">Date</th>
                                    <th className="px-6 py-4 text-xs font-black text-zinc-300 uppercase">Amount</th>
                                    <th className="px-6 py-4 text-xs font-black text-zinc-300 uppercase">Status</th>
                                    <th className="px-6 py-4 text-xs font-black text-zinc-300 uppercase">Details</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {withdrawals.map((w, i) => (
                                    <tr key={i} className="hover:bg-zinc-900 transition-colors">
                                        <td className="px-6 py-4 text-sm text-zinc-300">
                                            {new Date(w.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-sm font-black text-zinc-100">₹{w.amount.toFixed(2)}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                                                w.status === 'Approved' ? 'bg-yellow-100 text-yellow-700' : 
                                                w.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                                            }`}>
                                                {w.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-zinc-300">
                                            {w.remark || 'N/A'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GenerationWithdrawal;
