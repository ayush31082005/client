import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Construction } from 'lucide-react';

const BonusPlaceholder = ({ title }) => {
    const navigate = useNavigate();
    return (
        <div className="p-4 md:p-6 max-w-7xl mx-auto bg-zinc-900 min-h-screen flex flex-col items-center justify-center">
            <div className="flex items-center gap-4 mb-8 w-full">
                <button
                    onClick={() => navigate('/my-account')}
                    className="p-2 hover:bg-zinc-800 rounded-lg transition-all"
                >
                    <ArrowLeft className="w-5 h-5 text-zinc-300" />
                </button>
                <h1 className="text-2xl font-black text-zinc-100">{title}</h1>
            </div>
            <div className="bg-zinc-900 p-12 rounded-3xl border border-yellow-900/30 shadow-xl shadow-gray-200/50 flex flex-col items-center text-center max-w-md w-full">
                <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center mb-6">
                    <Construction className="w-10 h-10 text-yellow-500" />
                </div>
                <h2 className="text-2xl font-black text-zinc-100 mb-3">Under Construction</h2>
                <p className="text-zinc-300 font-medium">We're working hard to bring you the {title} details. Stay tuned!</p>
                <button 
                    onClick={() => navigate('/my-account')}
                    className="mt-8 px-8 py-3 bg-[#C9A84C] text-zinc-100 rounded-xl font-bold hover:bg-[#086628] transition-all shadow-lg shadow-yellow-900/20 active:scale-95"
                >
                    Back to Dashboard
                </button>
            </div>
        </div>
    );
};

export const SponsorIncome = () => <BonusPlaceholder title="Sponsor Income" />;
export const RoyaltyBonus = () => <BonusPlaceholder title="Royalty Bonus" />;
export const DirectorBonus = () => <BonusPlaceholder title="Director Bonus" />;
export const HouseFund = () => <BonusPlaceholder title="House Fund" />;
export const LeadershipFund = () => <BonusPlaceholder title="Leadership Fund" />;
export const CarFund = () => <BonusPlaceholder title="Car Fund" />;
export const TravelFund = () => <BonusPlaceholder title="Travel Fund" />;
export const BikeFund = () => <BonusPlaceholder title="Bike Fund" />;
