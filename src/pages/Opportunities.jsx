import React from 'react';
import { Link } from 'react-router-dom';
import {
    ChevronRight,
    Award,
    Users,
    Globe,
    Clock,
    TrendingUp,
    Shield,
    Star,
    Heart,
    Briefcase,
    Target,
    Zap,
    BarChart3,
    Gift,
    Crown,
    Rocket,
    CheckCircle,
    ExternalLink
} from 'lucide-react';

const OpportunitiesPage = () => {
    const benefits = [
        "Be your own Boss. You decide your effort & time to get business- 'Full time or Part time'.",
        "You choose people with whom you'd like to work.",
        "You can decide to expand your business in other State/City/Town.",
        "Own choice of lifestyle on own terms."
    ];

    const whySayuktParivar = [
        "Experienced, humble and reliable management",
        "World class products at affordable price",
        "Growth oriented marketing plan",
        "Effective services and customer support",
        "Top notch education and training support system",
        "Mentorship and Leadership support from company Founder Leadership and Top Leadership"
    ];

    const compensationBenefits = [
        {
            title: "Long-Term Visionary Growth Plan",
            description: "A strategic compensation system designed to support your financial growth for the long run, helping you build sustainable income and future wealth."
        },
        {
            title: "Lifetime & Legacy Benefits",
            description: "Our plan is structured to support you throughout your life while also creating financial advantages that can benefit your family in the future."
        },
        {
            title: "International Standard System",
            description: "Built according to global direct selling standards, ensuring transparency, reliability, and professional business practices."
        },
        {
            title: "Fast-Track Income Opportunity",
            description: "A dynamic earning model that allows members to start generating income quickly through active participation and network growth."
        },
        {
            title: "Industry-Leading Rewards & Commissions",
            description: "Enjoy competitive commissions, attractive bonuses, and a rewarding distribution structure designed to maximize your earning potential."
        },
        {
            title: "Performance-Based Growth System",
            description: "Your rewards increase as your performance grows, recognizing dedication, teamwork, and long-term contribution to the network."
        }
    ];

    return (
        <div className="bg-[#0D0D0D] font-sans min-h-screen">
            {/* Hero Banner */}
            <header className="relative h-[250px] bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}>
                <div className="absolute inset-0 bg-black/65"></div>
                <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-3 animate-slide-up">
                        OPPORTUNITIES
                    </h1>
                    <div className="flex items-center text-zinc-100/90 text-sm md:text-base flex-wrap justify-center">
                        <Link to="/" className="hover:text-zinc-100 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-zinc-100">OPPORTUNITIES</span>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <section className="py-12 px-4 max-w-7xl mx-auto">
                {/* Benefits of Direct Selling */}
                <div className="mb-12 animate-slide-up">
                    <div className="bg-zinc-900 rounded-[14px] shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-[#C9A84C] to-[#C9A84C] p-6 text-zinc-100">
                            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                                <Award className="w-8 h-8" />
                                BENEFITS OF DIRECT SELLING
                            </h2>
                        </div>
                        <div className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {benefits.map((benefit, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 p-4 bg-[#0D0D0D] rounded-lg hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <CheckCircle className="w-6 h-6 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                                        <p className="text-[#F5F5F5]">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-zinc-300 mt-4">*Terms and conditions apply</p>
                        </div>
                    </div>
                </div>

                {/* Why Sayukt Parivar Global Marketing? */}
                <div className="mb-12 animate-slide-up animation-delay-200">
                    <div className="bg-zinc-900 rounded-[14px] shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-[#C9A84C] to-[#F8B84A] p-6 text-zinc-100">
                            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                                <Heart className="w-8 h-8" />
                                WHY Sanyukt Parivaar & Rich Life Pvt.Ltd.?
                            </h2>
                        </div>
                        <div className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {whySayuktParivar.map((reason, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 p-4 bg-[#0D0D0D] rounded-lg hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <Star className="w-6 h-6 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                                        <p className="text-[#F5F5F5]">{reason}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Compensation Plan */}
                <div className="mb-12 animate-slide-up animation-delay-400">
                    <div className="bg-zinc-900 rounded-[14px] shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-[#C9A84C] to-[#C9A84C] p-6 text-zinc-100">
                            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                                <TrendingUp className="w-8 h-8" />
                                WHY Sanyukt Parivaar & Rich Life HAS BEST COMPENSATION PLAN?
                            </h2>
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold text-[#C9A84C] mb-6 flex items-center gap-2">
                                <Gift className="w-6 h-6" />
                                6 Powerful Benefits of Our Compensation Plan
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {compensationBenefits.map((benefit, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#0D0D0D] p-6 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in group"
                                        style={{ animationDelay: `${index * 150}ms` }}
                                    >
                                        <div className="w-12 h-12 bg-[#C9A84C] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            {index === 0 && <Crown className="w-6 h-6 text-zinc-100" />}
                                            {index === 1 && <Heart className="w-6 h-6 text-zinc-100" />}
                                            {index === 2 && <Globe className="w-6 h-6 text-zinc-100" />}
                                            {index === 3 && <Zap className="w-6 h-6 text-zinc-100" />}
                                            {index === 4 && <Award className="w-6 h-6 text-zinc-100" />}
                                            {index === 5 && <BarChart3 className="w-6 h-6 text-zinc-100" />}
                                        </div>
                                        <h4 className="font-bold text-[#C9A84C] mb-2">{benefit.title}</h4>
                                        <p className="text-sm text-[#F5F5F5]">{benefit.description}</p>
                                    </div>
                                ))}
                            </div>

                            {/* View Compensation Plan Button */}
                            <div className="flex justify-center mt-8">
                                <Link to="/compensation-plan" className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#C9A84C]/90 text-zinc-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
                                    VIEW COMPENSATION PLAN
                                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Benefits Section - Expanded Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-zinc-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in">
                        <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-4">
                            <Briefcase className="w-7 h-7 text-[#C9A84C]" />
                        </div>
                        <h3 className="font-bold text-[#C9A84C] mb-2">Flexible Working Hours</h3>
                        <p className="text-sm text-[#F5F5F5]">Work full-time or part-time based on your schedule. Complete freedom to manage your time and achieve work-life balance.</p>
                    </div>

                    <div className="bg-zinc-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in animation-delay-200">
                        <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-4">
                            <Globe className="w-7 h-7 text-[#C9A84C]" />
                        </div>
                        <h3 className="font-bold text-[#C9A84C] mb-2">Pan-India Expansion</h3>
                        <p className="text-sm text-[#F5F5F5]">Expand your business across different states, cities, and towns. Build a nationwide network with unlimited growth potential.</p>
                    </div>

                    <div className="bg-zinc-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in animation-delay-400">
                        <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-4">
                            <Rocket className="w-7 h-7 text-[#C9A84C]" />
                        </div>
                        <h3 className="font-bold text-[#C9A84C] mb-2">Rapid Growth Potential</h3>
                        <p className="text-sm text-[#F5F5F5]">One of the fastest income plans in the industry with accelerated growth opportunities and quick returns on your efforts.</p>
                    </div>
                </div>

                {/* Success Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    <div className="bg-zinc-900 p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-all duration-300">
                        <div className="text-3xl font-bold text-[#C9A84C] mb-2">10K+</div>
                        <p className="text-sm text-zinc-300">Active Distributors</p>
                    </div>
                    <div className="bg-zinc-900 p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-all duration-300">
                        <div className="text-3xl font-bold text-[#C9A84C] mb-2">500+</div>
                        <p className="text-sm text-zinc-300">Cities Covered</p>
                    </div>
                    <div className="bg-zinc-900 p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-all duration-300">
                        <div className="text-3xl font-bold text-[#C9A84C] mb-2">₹50Cr+</div>
                        <p className="text-sm text-zinc-300">Commission Paid</p>
                    </div>
                    <div className="bg-zinc-900 p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-all duration-300">
                        <div className="text-3xl font-bold text-[#C9A84C] mb-2">15+</div>
                        <p className="text-sm text-zinc-300">Years of Excellence</p>
                    </div>
                </div>
            </section>

            {/* CTA Section - Light Green */}
            <section className="py-16 px-4 bg-gradient-to-r from-[#A8D5BA] to-[#C8E6C9] mt-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#C9A84C] mb-6">
                        Start Your Entrepreneurial Journey Today!
                    </h2>
                    <p className="text-[#2F4F4F] mb-8 max-w-2xl mx-auto font-medium">
                        Join Sanyukt Parivaar & Rich Life Pvt.Ltd. and unlock unlimited earning potential with the industry's best compensation plan.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/register"
                            className="bg-[#C9A84C] text-zinc-100 hover:bg-[#C9A84C] font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Register Now
                        </Link>
                        <Link
                            to="/contact"
                            className="bg-[#C9A84C] text-zinc-100 hover:bg-[#C9A84C]/90 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </section>



            {/* Search Bar - Bottom */}
            <div className="fixed bottom-20 right-4 bg-zinc-900 rounded-full shadow-lg p-2 animate-bounce-subtle">
                <button className="bg-[#C9A84C] text-zinc-100 p-3 rounded-full hover:bg-[#C9A84C]/90 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>

        </div>
    );
};

export default OpportunitiesPage;