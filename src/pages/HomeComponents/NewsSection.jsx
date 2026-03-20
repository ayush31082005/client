import React, { useState, useEffect } from 'react';
import api, { API_URL } from '../../api';
import NewsDetailsModal from '../../components/NewsDetailsModal';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const NewsSection = () => {
    const [newsItems, setNewsItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedNews, setSelectedNews] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => { fetchNews(); }, []);

    const fetchNews = async () => {
        try {
            const { data } = await api.get('/news');
            if (data.success) setNewsItems(data.data);
        } catch (error) {
            console.error('Error fetching news:', error);
        } finally {
            setLoading(false);
        }
    };

    const getImageUrl = (url) => {
        if (!url) return "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop";
        if (url.startsWith('http')) return url;
        const path = url.startsWith('/uploads') ? url : `/uploads/${url}`;
        return `${API_URL}${path}`;
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const d = new Date(dateString);
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        if (d.toDateString() === today.toDateString()) return 'Today';
        if (d.toDateString() === yesterday.toDateString()) return 'Yesterday';
        return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    const sectionStyle = {
        background: '#F5EDD8',
        padding: '80px 0',
        borderTop: '1px solid rgba(201,168,76,0.1)'
    };

    const headerBlock = (
        <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-3">
                <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, transparent, #c9a84c)' }} />
                <span style={{ color: '#c9a84c', fontSize: '0.65rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 600 }}>News & Updates</span>
                <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, #c9a84c, transparent)' }} />
            </div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#000000', marginBottom: '10px' }}>
                Latest <em style={{ color: '#e8c97a', fontStyle: 'italic' }}>News</em>
            </h2>
            <p style={{ color: '#000000', fontSize: '0.85rem', maxWidth: '520px', margin: '0 auto' }}>
                Stay updated with latest announcements, seminars, product launches, and success stories.
            </p>
        </div>
    );

    if (loading) return (
        <section style={sectionStyle}>
            <div className="container mx-auto px-4">
                {headerBlock}
                <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 0' }}>
                    <div style={{
                        width: '40px', height: '40px', borderRadius: '50%',
                        border: '2px solid transparent',
                        borderTopColor: '#c9a84c',
                        animation: 'spin 0.8s linear infinite'
                    }} />
                    <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
                </div>
            </div>
        </section>
    );

    if (!loading && newsItems.length === 0) return (
        <section style={sectionStyle}>
            <div className="container mx-auto px-4 text-center">
                {headerBlock}
                <p style={{ color: 'rgba(196,185,154,0.6)', fontSize: '0.85rem' }}>
                    No updates at the moment. Check back soon.
                </p>
            </div>
        </section>
    );

    return (
        <section style={sectionStyle}>
            <div className="container mx-auto px-4 md:px-12">
                {headerBlock}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {newsItems.map((news) => (
                        <div
                            key={news._id}
                            onClick={() => { setSelectedNews(news); setIsModalOpen(true); }}
                            style={{
                                background: '#13100a',
                                border: '1px solid rgba(201,168,76,0.15)',
                                borderRadius: '4px', overflow: 'hidden',
                                cursor: 'pointer', transition: 'all 0.35s',
                                display: 'flex', flexDirection: 'column'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.border = '1px solid rgba(201,168,76,0.45)';
                                e.currentTarget.style.transform = 'translateY(-6px)';
                                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.5)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.border = '1px solid rgba(201,168,76,0.15)';
                                e.currentTarget.style.transform = 'none';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {/* Image */}
                            <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                                <img
                                    src={getImageUrl(news.image)}
                                    alt={news.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8) sepia(0.15)', transition: 'transform 0.5s' }}
                                    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.transform = 'none'; }}
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,8,0,0.6), transparent 60%)' }} />
                                {news.category && (
                                    <div style={{
                                        position: 'absolute', top: '12px', left: '12px',
                                        background: 'linear-gradient(135deg, #c9a84c, #8a6b2a)',
                                        color: '#0a0800', fontSize: '0.58rem', fontWeight: 700,
                                        letterSpacing: '2px', textTransform: 'uppercase',
                                        padding: '3px 10px', borderRadius: '2px'
                                    }}>
                                        {news.category}
                                    </div>
                                )}
                            </div>

                            {/* Body */}
                            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px', color: 'rgba(196,185,154,0.55)', fontSize: '0.72rem' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <Calendar size={12} /> {formatDate(news.createdAt)}
                                    </span>
                                    {news.readTime && (
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            <Clock size={12} /> {news.readTime}
                                        </span>
                                    )}
                                </div>

                                <h4 style={{
                                    fontFamily: 'Georgia, serif', fontSize: '1.05rem',
                                    color: '#f5efe0', marginBottom: '10px', lineHeight: 1.4,
                                    display: '-webkit-box', WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical', overflow: 'hidden'
                                }}>
                                    {news.title}
                                </h4>

                                <p style={{
                                    fontSize: '0.8rem', color: 'rgba(196,185,154,0.7)',
                                    lineHeight: 1.75, flex: 1, marginBottom: '16px',
                                    display: '-webkit-box', WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical', overflow: 'hidden'
                                }}>
                                    {news.content}
                                </p>

                                <div style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                    paddingTop: '14px', borderTop: '1px solid rgba(201,168,76,0.12)'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <div style={{
                                            width: '28px', height: '28px', borderRadius: '50%',
                                            background: 'rgba(201,168,76,0.15)',
                                            border: '1px solid rgba(201,168,76,0.3)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            color: '#c9a84c', fontSize: '0.65rem', fontWeight: 700
                                        }}>
                                            {(news.author || 'A')[0].toUpperCase()}
                                        </div>
                                        <span style={{ fontSize: '0.72rem', color: 'rgba(196,185,154,0.7)' }}>{news.author || 'Admin'}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#c9a84c', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                                        Read More <ArrowRight size={12} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <NewsDetailsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                news={selectedNews}
            />
        </section>
    );
};

export default NewsSection;
