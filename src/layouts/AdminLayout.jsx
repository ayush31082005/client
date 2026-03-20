import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import {
    Home, Users, Package, BarChart3, LogOut,
    Menu, X, Search, Bell, ChevronDown, Shield, Newspaper
} from 'lucide-react';

const AdminLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = [
        { path: '/admin/dashboard', label: 'Dashboard', icon: Home },
        { path: '/admin/users', label: 'Users', icon: Users },
        { path: '/admin/products', label: 'Products', icon: Package },
        { path: '/admin/franchise', label: 'Franchise', icon: BarChart3 },
        { path: '/admin/grievance', label: 'Grievance', icon: BarChart3 },
        { path: '/admin/orders', label: 'Orders', icon: Package },
        { path: '/admin/gallery', label: 'Gallery', icon: Package },
        { path: '/admin/seminar', label: 'Seminar', icon: Package },
        { path: '/admin/news', label: 'News Management', icon: Newspaper },
        { path: '/admin/mlm', label: 'MLM Management', icon: Shield }
    ];

    // Logout function
    const handleLogout = () => {
        // Clear all stored data
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('admin');

        // Clear session storage if used
        sessionStorage.clear();

        // Redirect to login page
        navigate('/login', { replace: true });

        // Optional: Show logout message
        console.log('Logged out successfully');
    };

    // Get current admin info from localStorage
    const getAdminInfo = () => {
        try {
            const userStr = localStorage.getItem('user');
            if (userStr) {
                const user = JSON.parse(userStr);
                return user.name || 'Admin';
            }
            return 'Sayukt Parivar';
        } catch (error) {
            return 'Sayukt Parivar';
        }
    };

    const adminName = getAdminInfo();

    return (
        <div className="h-screen overflow-hidden bg-gradient-to-br from-zinc-900 via-white to-zinc-900 flex">
            {/* Sidebar */}
            <div className={`${sidebarOpen ? 'w-80' : 'w-20'} bg-zinc-900 shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col`}>
                {/* Sidebar Header */}
                <div className="h-24 flex items-center justify-between px-6 border-b border-yellow-100">
                    {sidebarOpen ? (
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-zinc-700 to-yellow-600 rounded-xl flex items-center justify-center">
                                <Shield className="h-6 w-6 text-zinc-100" />
                            </div>
                            <span className="text-2xl font-black text-zinc-100">Snyukt Parivar</span>
                        </div>
                    ) : (
                        <div className="w-10 h-10 bg-gradient-to-r from-zinc-700 to-yellow-600 rounded-xl flex items-center justify-center mx-auto">
                            <Shield className="h-6 w-6 text-zinc-100" />
                        </div>
                    )}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="p-2 hover:bg-yellow-50 rounded-lg transition-colors"
                    >
                        {sidebarOpen ? <X className="h-5 w-5 text-zinc-300" /> : <Menu className="h-5 w-5 text-zinc-300" />}
                    </button>
                </div>

                {/* Welcome Section */}
                {sidebarOpen && (
                    <div className="px-6 py-6 border-b border-yellow-100">
                        <p className="text-sm text-zinc-300 mb-1">Welcome back,</p>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-2xl font-black text-zinc-100">{adminName}</p>
                                <p className="text-sm text-yellow-600">Administrator</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Navigation - flex-1 to push logout to bottom */}
                <nav className="flex-1 p-4 overflow-y-auto">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl mb-1 transition-all duration-200 ${isActive
                                    ? 'bg-gradient-to-r from-zinc-900 to-zinc-900 text-yellow-700'
                                    : 'text-zinc-300 hover:bg-yellow-50'
                                    }`}
                            >
                                <item.icon className={`h-5 w-5 ${isActive ? 'text-yellow-600' : ''}`} />
                                {sidebarOpen && <span className="font-medium">{item.label}</span>}
                            </Link>
                        );
                    })}
                </nav>

                {/* Logout Button - Fixed at bottom */}
                <div className="p-4 border-t border-yellow-100 mt-auto">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors group"
                    >
                        <LogOut className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        {sidebarOpen && (
                            <span className="font-medium group-hover:translate-x-1 transition-transform">
                                Logout
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Header */}
                <header className="bg-zinc-900 shadow-sm sticky top-0 z-10">
                    <div className="flex items-center justify-between px-8 py-4">
                        {/* Page Title */}
                        <div>
                            <h1 className="text-2xl font-black text-zinc-100 capitalize">
                                {location.pathname.split('/').pop() || 'Dashboard'}
                            </h1>
                            <p className="text-sm text-zinc-300">Welcome back, {adminName}</p>
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center space-x-4">
                            {/* Search */}
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-300" />
                                <input
                                    type="text"
                                    placeholder="Type here to search..."
                                    className="pl-9 pr-4 py-2 border border-yellow-900/30 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent w-64"
                                />
                            </div>

                            {/* Admin Profile Dropdown */}
                            <div className="relative group">
                                <button className="flex items-center space-x-2 p-2 hover:bg-yellow-50 rounded-lg">
                                    <div className="w-8 h-8 bg-gradient-to-r from-zinc-700 to-yellow-600 rounded-full flex items-center justify-center">
                                        <Shield className="h-4 w-4 text-zinc-100" />
                                    </div>
                                    <span className="text-sm font-medium text-zinc-200">{adminName}</span>
                                    <ChevronDown className="h-4 w-4 text-zinc-300" />
                                </button>

                                {/* Dropdown Menu */}
                                <div className="absolute right-0 mt-2 w-48 bg-zinc-900 rounded-lg shadow-xl border border-yellow-900/30 hidden group-hover:block">
                                    <div className="py-2">
                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
                                        >
                                            <LogOut className="h-4 w-4" />
                                            <span>Logout</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content - Scrollable */}
                <main className="flex-1 overflow-y-auto p-8">
                    <Outlet />
                </main>

                {/* Footer */}
                <footer className="bg-zinc-900 border-t border-yellow-100 py-4 px-8">
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-zinc-300">© 2024 Sanyukt Parivar. All rights reserved.</p>
                        <p className="text-sm text-zinc-300">Type here to search</p>
                    </div>
                </footer>
            </div>

            {/* Custom styles for scrollbar */}
            <style jsx>{`
                /* Hide scrollbar for Chrome, Safari and Opera */
                .overflow-y-auto::-webkit-scrollbar {
                    width: 6px;
                }
                
                .overflow-y-auto::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }
                
                .overflow-y-auto::-webkit-scrollbar-thumb {
                    background: #888;
                    border-radius: 10px;
                }
                
                .overflow-y-auto::-webkit-scrollbar-thumb:hover {
                    background: #555;
                }
            `}</style>
        </div>
    );
};

export default AdminLayout;
