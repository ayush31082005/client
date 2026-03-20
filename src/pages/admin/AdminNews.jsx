import React, { useState, useEffect } from "react";
import api from "../../api";
import { 
    Newspaper, Plus, Trash2, Calendar, User, 
    Tag, Image as ImageIcon, X, Loader2, Search,
    Filter, MoreVertical, Edit, Clock
} from "lucide-react";
import toast from "react-hot-toast";

const AdminNews = () => {
    const [newsList, setNewsList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    
    // Form State
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("Product");
    const [readTime, setReadTime] = useState("5 min read");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        setLoading(true);
        try {
            const { data } = await api.get("/news");
            if (data.success) {
                setNewsList(data.data);
            }
        } catch (error) {
            console.error("Error fetching news:", error);
            toast.error("Failed to load news items");
        } finally {
            setLoading(false);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                toast.error("File size should be less than 2MB");
                return;
            }
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !content || !image) {
            toast.error("Please fill all required fields");
            return;
        }

        setSubmitting(true);
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("category", category);
        formData.append("readTime", readTime);
        formData.append("image", image);

        try {
            const { data } = await api.post("/news/add", formData);

            if (data.success) {
                toast.success("News added successfully!");
                setIsAdding(false);
                resetForm();
                fetchNews();
            }
        } catch (error) {
            console.error("Error adding news:", error);
            if (error.response) {
                console.error("Server Error Data:", error.response.data);
                toast.error(error.response.data.message || "Failed to add news");
            } else {
                toast.error("Failed to add news - network error");
            }
        } finally {
            setSubmitting(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this news item?")) return;
        
        try {
            const { data } = await api.delete(`/news/${id}`);
            if (data.success) {
                toast.success("News deleted successfully");
                fetchNews();
            }
        } catch (error) {
            console.error("Error deleting news:", error);
            toast.error("Failed to delete news");
        }
    };

    const resetForm = () => {
        setTitle("");
        setContent("");
        setCategory("Product");
        setReadTime("5 min read");
        setImage(null);
        setPreview(null);
    };

    const formatDate = (dateString) => {
        if (!dateString) return "";
        const d = new Date(dateString);
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        if (d.toDateString() === today.toDateString()) {
            return "Today";
        } else if (d.toDateString() === yesterday.toDateString()) {
            return "Yesterday";
        } else {
            return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
        }
    };

    const filteredNews = newsList.filter(news => 
        news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        news.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8 animate-fadeIn">
            {/* Header section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black text-zinc-100">News Management</h2>
                    <p className="text-zinc-300 mt-1">Manage company updates and announcements</p>
                </div>
                <button 
                    onClick={() => setIsAdding(!isAdding)}
                    className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                        isAdding ? 'bg-zinc-800 text-zinc-300' : 'bg-gradient-to-r from-zinc-700 to-emerald-600 text-zinc-100'
                    }`}
                >
                    {isAdding ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    {isAdding ? 'Cancel' : 'Add New News'}
                </button>
            </div>

            {/* Quick Stats & Search */}
            {!isAdding && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-zinc-900 p-6 rounded-2xl shadow-sm border border-yellow-50 flex items-center gap-4">
                        <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600">
                            <Newspaper className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm text-zinc-300 font-medium tracking-wide uppercase">Total News</p>
                            <p className="text-2xl font-black text-zinc-100">{newsList.length}</p>
                        </div>
                    </div>
                    
                    <div className="md:col-span-2 bg-zinc-900 p-4 rounded-2xl shadow-sm border border-yellow-50 flex items-center">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-300 w-5 h-5" />
                            <input 
                                type="text"
                                placeholder="Search news by title or category..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-zinc-900 border-none rounded-xl focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Form Section */}
            {isAdding && (
                <div className="bg-zinc-900 rounded-3xl shadow-xl border border-yellow-50 overflow-hidden animate-slideUp">
                    <div className="bg-gradient-to-r from-yellow-600 to-emerald-700 px-8 py-6">
                        <h3 className="text-xl font-bold text-zinc-100 flex items-center gap-3">
                            <Plus className="w-6 h-6" />
                            Create New Announcement
                        </h3>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="p-8 space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Left Side: Fields */}
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-zinc-200 mb-2 uppercase tracking-wider">News Title *</label>
                                    <input 
                                        type="text"
                                        placeholder="e.g. New Product Launch: Herbal Sunscreen"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="w-full px-4 py-3 bg-zinc-900 border border-yellow-900/30 rounded-xl focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-zinc-200 mb-2 uppercase tracking-wider">Category *</label>
                                        <select 
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                            className="w-full px-4 py-3 bg-zinc-900 border border-yellow-900/30 rounded-xl focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
                                        >
                                            <option value="Product">Product</option>
                                            <option value="Event">Event</option>
                                            <option value="Achievement">Achievement</option>
                                            <option value="Update">Company Update</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-zinc-200 mb-2 uppercase tracking-wider">Read Time</label>
                                        <input 
                                            type="text"
                                            placeholder="e.g. 4 min read"
                                            value={readTime}
                                            onChange={(e) => setReadTime(e.target.value)}
                                            className="w-full px-4 py-3 bg-zinc-900 border border-yellow-900/30 rounded-xl focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-zinc-200 mb-2 uppercase tracking-wider">Content Description *</label>
                                    <textarea 
                                        rows="6"
                                        placeholder="Enter detailed news content here..."
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        className="w-full px-4 py-3 bg-zinc-900 border border-yellow-900/30 rounded-xl focus:ring-2 focus:ring-yellow-500 outline-none transition-all resize-none"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Right Side: Image Upload */}
                            <div className="space-y-6">
                                <label className="block text-sm font-bold text-zinc-200 mb-2 uppercase tracking-wider">Cover Image *</label>
                                <div className={`relative h-[320px] rounded-2xl border-2 border-dashed transition-all flex flex-col items-center justify-center p-6 bg-zinc-900 ${
                                    preview ? 'border-yellow-500 bg-zinc-900' : 'border-yellow-800/40 hover:border-yellow-500 hover:bg-yellow-50/50'
                                }`}>
                                    {preview ? (
                                        <div className="relative w-full h-full group">
                                            <img src={preview} alt="Preview" className="w-full h-full object-cover rounded-xl" />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <button 
                                                    type="button"
                                                    onClick={() => { setImage(null); setPreview(null); }}
                                                    className="bg-red-500 text-zinc-100 p-3 rounded-full hover:scale-110 transition-transform"
                                                >
                                                    <X className="w-6 h-6" />
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mb-4 animate-bounce">
                                                <ImageIcon className="w-8 h-8" />
                                            </div>
                                            <p className="text-zinc-200 font-bold text-center">Drag and drop or click to upload</p>
                                            <p className="text-zinc-300 text-xs mt-2">Recommended: 1200x800px (Max 2MB)</p>
                                            <input 
                                                type="file" 
                                                accept="image/*"
                                                onChange={handleImageChange}
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                required={!preview}
                                            />
                                        </>
                                    )}
                                </div>
                                
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm text-yellow-700">
                                                News titles should be catchy and concise. Make sure content is well-checked before posting.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-yellow-900/30 flex justify-end gap-4">
                            <button 
                                type="button"
                                onClick={() => { setIsAdding(false); resetForm(); }}
                                className="px-8 py-3 rounded-xl font-bold text-zinc-300 hover:bg-zinc-800 transition-all font-sans uppercase tracking-wider text-sm"
                            >
                                Discard
                            </button>
                            <button 
                                type="submit"
                                disabled={submitting}
                                className="px-10 py-3 bg-gradient-to-r from-yellow-600 to-emerald-700 text-zinc-100 rounded-xl font-bold shadow-lg shadow-yellow-200 hover:shadow-xl hover:shadow-yellow-300 transform hover:-translate-y-1 transition-all disabled:opacity-50 disabled:transform-none flex items-center gap-2 font-sans uppercase tracking-wider text-sm"
                            >
                                {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Plus className="w-5 h-5" />}
                                {submitting ? "Publishing..." : "Publish News"}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* List Section */}
            {!isAdding && (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {loading ? (
                        [1,2,3].map(i => (
                            <div key={i} className="h-96 bg-zinc-800 rounded-3xl animate-pulse" />
                        ))
                    ) : filteredNews.length > 0 ? (
                        filteredNews.map((news) => (
                            <div key={news._id} className="group bg-zinc-900 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-yellow-50 overflow-hidden flex flex-col">
                                {/* Card Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <img 
                                        src={news.image.startsWith('http') ? news.image : `${import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") || "http://localhost:5001"}${news.image}`}
                                        alt={news.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-zinc-900/90 backdrop-blur-md text-[#C9A84C] text-[10px] font-bold tracking-widest uppercase rounded-lg shadow-sm">
                                            {news.category}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4">
                                        <div className="flex gap-2">
                                            <button 
                                                onClick={() => handleDelete(news._id)}
                                                className="p-3 bg-red-500 text-zinc-100 rounded-xl hover:bg-red-600 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Calendar className="w-4 h-4 text-zinc-300" />
                                        <span className="text-xs text-zinc-300 font-medium">
                                            {formatDate(news.createdAt)}
                                        </span>
                                        <span className="text-gray-300">•</span>
                                        <Clock className="w-4 h-4 text-zinc-300" />
                                        <span className="text-xs text-zinc-300 font-medium">{news.readTime}</span>
                                    </div>
                                    
                                    <h4 className="text-lg font-bold text-zinc-100 mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2">
                                        {news.title}
                                    </h4>
                                    
                                    <p className="text-sm text-zinc-300 line-clamp-3 mb-6 flex-1">
                                        {news.content}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-yellow-900/30">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center font-bold text-xs">
                                                {news.authorAvatar || (news.author ? news.author[0] : 'A')}
                                            </div>
                                            <span className="text-sm font-semibold text-zinc-200">{news.author || 'Admin'}</span>
                                        </div>
                                        <button 
                                            onClick={() => handleDelete(news._id)}
                                            className="text-red-500 hover:text-red-600 p-2 hover:bg-red-50 rounded-lg transition-all"
                                            title="Delete News"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full py-20 bg-zinc-900 rounded-3xl border border-dashed border-yellow-800/40 flex flex-col items-center justify-center text-center">
                            <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center text-gray-300 mb-4">
                                <Newspaper className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-100">No news items found</h3>
                            <p className="text-zinc-300 max-w-xs mt-2">
                                {searchTerm ? "No results match your search term. Try something else." : "Get started by adding your first company announcement!"}
                            </p>
                            {!searchTerm && (
                                <button 
                                    onClick={() => setIsAdding(true)}
                                    className="mt-6 text-yellow-600 font-bold hover:underline"
                                >
                                    Add your first news item
                                </button>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default AdminNews;
