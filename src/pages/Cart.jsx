import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { API_URL } from '../api';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, Info, Award } from 'lucide-react';

const CartPage = () => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
    const navigate = useNavigate();

    const handleCheckout = (item) => {
        navigate('/checkout', { state: { product: item } });
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 2
        }).format(amount || 0);
    };

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-[#f8fafc] py-12 flex flex-col items-center justify-center">
                <div className="bg-zinc-900 p-12 rounded-2xl shadow-sm border border-yellow-900/30 flex flex-col items-center max-w-md text-center">
                    <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center mb-6">
                        <ShoppingBag className="w-10 h-10 text-[#C9A84C]" />
                    </div>
                    <h2 className="text-2xl font-black text-zinc-100 mb-2">Your Cart is Empty</h2>
                    <p className="text-zinc-300 mb-8 leading-relaxed">Discover amazing wellness products and start your healthy journey today!</p>
                    <button
                        onClick={() => navigate('/products')}
                        className="w-full py-4 bg-[#C9A84C] text-zinc-100 rounded-xl font-bold hover:bg-[#086325] transition-all shadow-lg shadow-yellow-900/10 active:scale-95"
                    >
                        Explore Products
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f8fafc] py-8 pb-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-black text-zinc-100 tracking-tight">My Cart</h1>
                        <p className="text-zinc-300 text-sm mt-1">Review your items before proceeding to checkout</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 text-sm text-zinc-300 bg-zinc-900 px-4 py-2 rounded-full border border-yellow-900/30 shadow-sm">
                        <ShoppingBag size={16} className="text-[#C9A84C]" />
                        <span className="font-bold text-zinc-200">{cartItems.length}</span> Items
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Cart Items List */}
                    <div className="lg:col-span-2 space-y-5">
                        {cartItems.map((item) => (
                            <div key={item._id} className="group bg-zinc-900 rounded-2xl shadow-sm border border-yellow-900/30 p-5 transition-all hover:shadow-md hover:border-yellow-100 relative overflow-hidden">
                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* Item Image */}
                                    <div className="w-full md:w-32 h-32 flex-shrink-0 bg-zinc-900 rounded-xl overflow-hidden border border-slate-50 relative group-hover:scale-105 transition-transform duration-500">
                                        {item.image ? (
                                            <img
                                                src={item.image.startsWith('http') ? item.image : `${API_URL}${item.image.startsWith('/uploads') ? item.image : '/uploads/' + item.image}`}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }}
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-slate-300">
                                                <ShoppingBag size={32} />
                                            </div>
                                        )}
                                    </div>

                                    {/* Item Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-bold text-lg text-zinc-100 line-clamp-1 group-hover:text-[#C9A84C] transition-colors">
                                                {item.name}
                                            </h3>
                                            <button
                                                onClick={() => removeFromCart(item._id)}
                                                className="p-2 text-zinc-300 hover:text-[#C9A84C] hover:bg-yellow-50 rounded-full transition-all"
                                                title="Remove Item"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>

                                        <p className="text-sm text-zinc-300 line-clamp-2 mb-4 leading-relaxed">
                                            {item.description || "Premium quality health and wellness product."}
                                        </p>

                                        <div className="flex flex-wrap items-center gap-4">
                                            {item.bv && (
                                                <div className="flex items-center gap-1.5 px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-xs font-bold border border-yellow-100">
                                                    <Award size={14} />
                                                    BV: {item.bv}
                                                </div>
                                            )}
                                            <div className="flex items-center gap-1.5 px-3 py-1 bg-zinc-900 text-zinc-300 rounded-full text-xs font-medium border border-yellow-900/30">
                                                <Info size={14} />
                                                Price: {formatCurrency(item.price)}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-slate-50 flex flex-col sm:flex-row items-center justify-between gap-6">
                                    <div className="flex items-center bg-zinc-900 p-1 rounded-xl border border-yellow-900/30">
                                        <button
                                            onClick={() => updateQuantity(item._id, (item.cartQuantity || 1) - 1)}
                                            className="w-10 h-10 flex items-center justify-center bg-zinc-900 rounded-lg shadow-sm text-zinc-300 hover:text-[#C9A84C] hover:shadow transition-all active:scale-90"
                                            disabled={item.cartQuantity <= 1}
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="w-12 text-center text-lg font-bold text-zinc-100">{item.cartQuantity || 1}</span>
                                        <button
                                            onClick={() => updateQuantity(item._id, (item.cartQuantity || 1) + 1)}
                                            className="w-10 h-10 flex items-center justify-center bg-zinc-900 rounded-lg shadow-sm text-zinc-300 hover:text-[#C9A84C] hover:shadow transition-all active:scale-90"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <div className="flex items-center gap-6">
                                        <div className="text-right">
                                            <p className="text-xs text-zinc-300 font-medium uppercase tracking-wider mb-0.5">Item Total</p>
                                            <p className="text-xl font-black text-[#C9A84C]">{formatCurrency((Number(item.price) || 0) * (Number(item.cartQuantity) || 1))}</p>
                                        </div>
                                        <button
                                            onClick={() => handleCheckout(item)}
                                            className="px-6 py-3 bg-[#C9A84C] text-zinc-100 rounded-xl font-bold flex items-center gap-2 hover:bg-[#086325] shadow-lg shadow-yellow-900/10 transition-all active:scale-95"
                                        >
                                            Buy Item <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Cart Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-zinc-900 rounded-3xl shadow-xl shadow-slate-200/50 border border-yellow-900/30 p-8 sticky top-24">
                            <h2 className="text-xl font-black text-zinc-100 mb-6 flex items-center gap-2">
                                <ShoppingBag className="text-[#C9A84C]" size={20} />
                                Order Summary
                            </h2>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-zinc-300 font-medium">
                                    <span>Total Items</span>
                                    <span className="text-zinc-100 font-bold">{cartItems.reduce((acc, item) => acc + (item.cartQuantity || 1), 0)}</span>
                                </div>
                                <div className="flex justify-between text-zinc-300 font-medium">
                                    <span>Shipping</span>
                                    <span className="text-yellow-600 font-bold">Free</span>
                                </div>
                                <div className="h-px bg-zinc-800 my-4"></div>
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-sm text-zinc-300 font-medium mb-1">Estimated Total</p>
                                        <p className="text-3xl font-black text-[#C9A84C] leading-none">{formatCurrency(getCartTotal())}</p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-[11px] text-zinc-300 text-center leading-relaxed bg-zinc-900 p-4 rounded-xl border border-yellow-900/30">
                                Note: You are currently purchasing each item individually to ensure optimal shipping and processing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
