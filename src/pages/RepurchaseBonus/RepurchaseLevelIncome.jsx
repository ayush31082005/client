import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Users, Layers } from 'lucide-react';
import api from '../../api';

const RepurchaseLevelIncome = () => {
    const navigate = useNavigate();
    const cardsRef = useRef([]);
    const tableRef = useRef(null);
    const rowsRef = useRef([]);

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await api.get('/repurchase/level-income');
                setData(res.data.data);
            } catch (err) {
                setError(err?.response?.data?.message || 'Failed to load data');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="p-6 max-w-7xl mx-auto bg-zinc-900 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-zinc-300 text-sm font-medium">Loading income data...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-6 max-w-7xl mx-auto bg-zinc-900 min-h-screen flex items-center justify-center">
                <div className="text-center bg-zinc-900 rounded-xl p-8 border border-red-100 shadow-sm">
                    <p className="text-red-500 font-bold text-lg mb-2">⚠️ Error</p>
                    <p className="text-zinc-300 text-sm">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 px-4 py-2 bg-yellow-600 text-zinc-100 rounded-lg text-sm font-bold hover:bg-yellow-700 transition"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    const {
        totalLevelIncome = 0,
        activeDownline = 0,
        activeLevels = 0,
        generationBreakdown = [],
        recentTransactions = [],
    } = data || {};

    return (
        <div className="p-4 md:p-6 max-w-7xl mx-auto bg-zinc-900 min-h-screen">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <button
                    onClick={() => navigate('/my-account')}
                    className="p-2 hover:bg-zinc-800 rounded-lg transition-all"
                >
                    <ArrowLeft className="w-5 h-5 text-zinc-300" />
                </button>
                <div>
                    <h1 className="text-2xl md:text-3xl font-black text-zinc-100">Repurchase Level Income</h1>
                    <p className="text-sm text-zinc-300 mt-1">Earnings from team repurchases</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-zinc-900 p-5 rounded-xl border border-yellow-900/30 shadow-sm transition-all hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-3">
                        <TrendingUp className="w-8 h-8 text-yellow-600" />
                        <span className="text-xs font-bold text-yellow-700 bg-yellow-50 px-2 py-1 rounded-full border border-yellow-200">Total</span>
                    </div>
                    <p className="text-2xl font-black text-zinc-100">₹{totalLevelIncome.toLocaleString('en-IN')}</p>
                    <p className="text-xs text-zinc-300 mt-1">Total Level Income</p>
                </div>

                <div className="bg-zinc-900 p-5 rounded-xl border border-yellow-900/30 shadow-sm transition-all hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-3">
                        <Users className="w-8 h-8 text-yellow-600" />
                        <span className="text-xs font-bold text-yellow-700 bg-yellow-50 px-2 py-1 rounded-full border border-yellow-200">Active</span>
                    </div>
                    <p className="text-2xl font-black text-zinc-100">{activeDownline}</p>
                    <p className="text-xs text-zinc-300 mt-1">Active Downline</p>
                </div>

                <div className="bg-zinc-900 p-5 rounded-xl border border-yellow-900/30 shadow-sm transition-all hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-3">
                        <Layers className="w-8 h-8 text-yellow-600" />
                        <span className="text-xs font-bold text-yellow-700 bg-yellow-50 px-2 py-1 rounded-full border border-yellow-200">Levels</span>
                    </div>
                    <p className="text-2xl font-black text-zinc-100">{activeLevels}</p>
                    <p className="text-xs text-zinc-300 mt-1">Active Levels</p>
                </div>
            </div>
            
            {/* Generation Breakdown Grid */}
            <div className="mb-6">
                <h3 className="text-xl font-black text-zinc-100 mb-4 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-yellow-600" />
                    Generation Breakdown
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {generationBreakdown.map((gen) => (
                        <div key={gen.generation} className="bg-zinc-900 p-4 rounded-xl border border-yellow-900/30 shadow-sm hover:border-yellow-200 transition-all">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-xs font-black text-zinc-100 bg-[#C9A84C] px-2 py-0.5 rounded-md">
                                    GEN {gen.generation}
                                </span>
                                <span className="text-xs font-bold text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded-md">
                                    {gen.commissionPercent}%
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-black text-zinc-100">₹{gen.totalIncome.toFixed(2)}</span>
                                <div className="flex justify-between mt-1 pt-1 border-t border-gray-50">
                                    <span className="text-[10px] text-zinc-300 font-bold uppercase tracking-wider">Members: {gen.downlineMembers}</span>
                                    <span className="text-[10px] text-zinc-300 font-bold uppercase tracking-wider">BV: {gen.totalBV}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    {generationBreakdown.length === 0 && (
                        <div className="col-span-full py-8 bg-zinc-900 rounded-xl border border-yellow-900/30 text-center text-zinc-300 italic">
                            No generation data available yet.
                        </div>
                    )}
                </div>
            </div>

            {/* Recent Transactions Table */}
            <div>
                <h3 className="text-xl font-black text-zinc-100 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-yellow-600" />
                    Recent Credits
                </h3>
                <div className="bg-zinc-900 rounded-xl border border-yellow-900/30 shadow-sm overflow-hidden">
                    {recentTransactions.length === 0 ? (
                        <div className="p-12 text-center">
                            <Layers className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                            <p className="text-zinc-300 font-medium">No recent transactions found.</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-zinc-900 border-b border-yellow-900/30">
                                        <th className="px-6 py-4 text-xs font-black text-zinc-300 uppercase tracking-wider">Date</th>
                                        <th className="px-6 py-4 text-xs font-black text-zinc-300 uppercase tracking-wider">From User</th>
                                        <th className="px-6 py-4 text-xs font-black text-zinc-300 uppercase tracking-wider">Level</th>
                                        <th className="px-6 py-4 text-xs font-black text-zinc-300 uppercase tracking-wider">BV</th>
                                        <th className="px-6 py-4 text-xs font-black text-zinc-300 uppercase tracking-wider">Amount</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {recentTransactions.map((tx) => (
                                        <tr key={tx._id} className="hover:bg-zinc-900 transition-colors">
                                            <td className="px-6 py-4 text-sm text-zinc-300">
                                                {new Date(tx.createdAt).toLocaleDateString('en-IN', {
                                                    day: '2-digit', month: 'short', year: 'numeric'
                                                })}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-bold text-zinc-100">{tx.fromUserId?.userName || tx.fromUserId?.name || 'Unknown'}</span>
                                                    <span className="text-[10px] text-zinc-300 font-bold uppercase tracking-widest">{tx.fromUserId?.memberId}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="px-2 py-1 bg-yellow-50 text-yellow-700 text-xs font-bold rounded-md border border-yellow-100">
                                                    GEN {tx.generation}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium text-zinc-300">{tx.bv}</td>
                                            <td className="px-6 py-4 text-sm font-black text-yellow-600">₹{tx.commissionAmount?.toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RepurchaseLevelIncome;
