import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText, AlertCircle } from 'lucide-react';
import api from '../../api';

const GenerationDeduction = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [deductions, setDeductions] = useState([]);

    useEffect(() => {
        const fetchDeductions = async () => {
            try {
                const res = await api.get('/wallet/deduction-report');
                if (res.data.success) {
                    // Filter or assume deductions handle all wallet types, or specific to gen if needed
                    setDeductions(res.data.deductions || []);
                }
            } catch (err) {
                console.error("Error fetching deductions:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchDeductions();
    }, []);

    return (
        <div className="p-4 md:p-6 max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <button onClick={() => navigate('/my-account/wallet/generation')}
                    className="p-2 hover:bg-zinc-800 rounded-lg transition-all">
                    <ArrowLeft className="w-5 h-5 text-zinc-300" />
                </button>
                <div>
                    <h1 className="text-2xl font-black text-zinc-100">Generation Deductions</h1>
                    <p className="text-sm text-zinc-300">TDS/Admin charges on your earnings</p>
                </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl border border-yellow-900/30 shadow-sm overflow-hidden text-center p-20">
                <FileText className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                <h3 className="text-xl font-black text-zinc-100 mb-2">Detailed Reports Loading...</h3>
                <p className="text-zinc-300 max-w-sm mx-auto">Currently, deduction details are included in the main transaction history. Specific deduction reports for Generation Wallet are being synchronized.</p>
            </div>
        </div>
    );
};

export default GenerationDeduction;
