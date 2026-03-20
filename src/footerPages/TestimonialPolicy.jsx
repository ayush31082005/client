import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MessageSquare, Calendar, Lock, Star, Users, Shield, AlertCircle, CheckCircle, XCircle, Camera, FileText } from 'lucide-react';

const TestimonialPolicy = () => {
    const lastUpdated = "March 15, 2024";

    return (
        <div className="bg-[#0D0D0D] font-sans min-h-screen">
            {/* Hero Banner */}
            <header className="relative h-[200px] bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}>
                <div className="absolute inset-0 bg-black/65"></div>
                <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-3 animate-fade-in">
                        Testimonial Policy
                    </h1>
                    <div className="flex items-center text-zinc-100/90 text-sm md:text-base flex-wrap justify-center">
                        <Link to="/" className="hover:text-zinc-100 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <Link to="/company/legal" className="hover:text-zinc-100 transition-colors">Legal</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-zinc-100">Testimonial Policy</span>
                    </div>
                </div>
            </header>

            {/* Content */}
            <section className="py-12 px-4 max-w-4xl mx-auto">
                <article className="bg-zinc-900 rounded-[14px] shadow-lg overflow-hidden animate-slide-up">
                    {/* Header */}
                    <div className="bg-[#C9A84C] p-6 text-zinc-100">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-zinc-900/20 rounded-full flex items-center justify-center">
                                <MessageSquare className="w-6 h-6 text-zinc-100" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold">Testimonial Policy</h2>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                        <p className="text-[#F5F5F5] mb-8 leading-relaxed text-lg border-l-4 border-[#C9A84C] pl-4">
                            Sanyukt Parivaar & Rich Life Pvt.Ltd. values authentic feedback from our community. This policy outlines how testimonials are collected, used, and displayed to ensure transparency, honesty, and compliance with direct selling guidelines.
                        </p>

                        {/* Testimonial Collection */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-[#C9A84C] mb-4 pb-2 border-b border-yellow-900/30 flex items-center gap-2">
                                <Users className="w-5 h-5" />
                                Testimonial Collection
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-bold text-[#F5F5F5] mb-3">1. How We Collect Testimonials</h4>
                                    <div className="space-y-4 pl-4">
                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Voluntary Submission</h5>
                                            <p className="text-[#F5F5F5] text-sm">Testimonials are collected voluntarily from customers and distributors who wish to share their genuine experiences with our products, services, or business opportunity.</p>
                                        </div>

                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Collection Methods</h5>
                                            <p className="text-[#F5F5F5] text-sm">Testimonials may be collected through feedback forms, email submissions, social media mentions, video recordings, or during events and training sessions with explicit consent.</p>
                                        </div>

                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">No Incentivization</h5>
                                            <p className="text-[#F5F5F5] text-sm">We do not offer monetary compensation or incentives for testimonials to ensure they remain authentic and unbiased. Voluntary feedback is always preferred.</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-[#F5F5F5] mb-3">2. Consent and Authorization</h4>
                                    <div className="space-y-4 pl-4">
                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Written Consent</h5>
                                            <p className="text-[#F5F5F5] text-sm">All individuals providing testimonials must give explicit written consent allowing us to use their name, image, statement, and other provided information for marketing purposes.</p>
                                        </div>

                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Right to Withdraw</h5>
                                            <p className="text-[#F5F5F5] text-sm">Testimonial providers may withdraw their consent at any time by contacting us. Upon request, their testimonial will be removed from our platforms within 7 business days.</p>
                                        </div>

                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Minor Testimonials</h5>
                                            <p className="text-[#F5F5F5] text-sm">Testimonials from individuals under 18 require parental or guardian consent and must be submitted by the parent or guardian on their behalf.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial Guidelines */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-[#C9A84C] mb-4 pb-2 border-b border-yellow-900/30 flex items-center gap-2">
                                <FileText className="w-5 h-5" />
                                Testimonial Guidelines
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-bold text-[#F5F5F5] mb-3">1. Content Requirements</h4>
                                    <div className="space-y-4 pl-4">
                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Authenticity</h5>
                                            <p className="text-[#F5F5F5] text-sm">All testimonials must reflect genuine, personal experiences with our products, services, or business opportunity. Fictional or exaggerated testimonials are strictly prohibited.</p>
                                        </div>

                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Accuracy</h5>
                                            <p className="text-[#F5F5F5] text-sm">Statements about product performance, income potential, or business results must be accurate, verifiable, and not misleading. Typical results should be clearly distinguished from exceptional cases.</p>
                                        </div>

                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">No False Claims</h5>
                                            <p className="text-[#F5F5F5] text-sm">Testimonials must not contain false, misleading, or deceptive claims about products, services, or income potential. Medical or therapeutic claims require scientific substantiation.</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-[#F5F5F5] mb-3">2. Prohibited Content</h4>
                                    <div className="space-y-4 pl-4">
                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Offensive Material</h5>
                                            <p className="text-[#F5F5F5] text-sm">Testimonials containing offensive language, discriminatory remarks, hate speech, or inappropriate content will not be published.</p>
                                        </div>

                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Confidential Information</h5>
                                            <p className="text-[#F5F5F5] text-sm">Sharing confidential business information, trade secrets, or personal data of others in testimonials is strictly prohibited.</p>
                                        </div>

                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Competitor Disparagement</h5>
                                            <p className="text-[#F5F5F5] text-sm">Testimonials must not disparage, defame, or make negative comparisons with competitors or their products.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Income Testimonials */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-[#C9A84C] mb-4 pb-2 border-b border-yellow-900/30 flex items-center gap-2">
                                <Star className="w-5 h-5" />
                                Income Testimonials
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-bold text-[#F5F5F5] mb-3">1. Income Disclosure Requirements</h4>
                                    <div className="space-y-4 pl-4">
                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Average Earnings</h5>
                                            <p className="text-[#F5F5F5] text-sm">Income testimonials must be accompanied by a clear disclosure of average earnings for all distributors, not just top performers. Exceptional results must be identified as non-typical.</p>
                                        </div>

                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">No Guaranteed Income</h5>
                                            <p className="text-[#F5F5F5] text-sm">Testimonials must not imply or suggest guaranteed income. Clear disclaimers must state that income depends on individual effort and performance.</p>
                                        </div>

                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Verification</h5>
                                            <p className="text-[#F5F5F5] text-sm">Income claims in testimonials must be verifiable through company records. We reserve the right to request documentation supporting income claims before publication.</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-[#F5F5F5] mb-3">2. Required Disclaimers</h4>
                                    <div className="space-y-4 pl-4">
                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Standard Disclaimer</h5>
                                            <p className="text-[#F5F5F5] text-sm">All income testimonials must include this disclaimer: "Income results shown are not typical. Individual results vary based on effort, skill, and dedication. This is not a guarantee of earnings."</p>
                                        </div>

                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Exceptional Results</h5>
                                            <p className="text-[#F5F5F5] text-sm">For testimonials showing exceptional income, additional disclosure must state: "This represents an exceptional result and is not typical for the average distributor."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Video and Photo Testimonials */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-[#C9A84C] mb-4 pb-2 border-b border-yellow-900/30 flex items-center gap-2">
                                <Camera className="w-5 h-5" />
                                Video & Photo Testimonials
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-bold text-[#F5F5F5] mb-3">1. Visual Testimonial Guidelines</h4>
                                    <div className="space-y-4 pl-4">
                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Release Forms</h5>
                                            <p className="text-[#F5F5F5] text-sm">All video and photo testimonials require signed release forms granting permission to use the individual's likeness, voice, and image across all marketing platforms.</p>
                                        </div>

                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Authentic Representation</h5>
                                            <p className="text-[#F5F5F5] text-sm">Visual testimonials must authentically represent the individual's experience. Staged or scripted testimonials must be clearly identified as such.</p>
                                        </div>

                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Editing and Alteration</h5>
                                            <p className="text-[#F5F5F5] text-sm">Minor editing for clarity and length is permitted, but the core message and meaning must not be altered. Any significant edits must be disclosed.</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-[#F5F5F5] mb-3">2. Platform-Specific Rules</h4>
                                    <div className="space-y-4 pl-4">
                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Social Media</h5>
                                            <p className="text-[#F5F5F5] text-sm">User-generated content on social media may be reposted with proper attribution and permission. Platform terms of service must be followed.</p>
                                        </div>

                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Website Display</h5>
                                            <p className="text-[#F5F5F5] text-sm">Video testimonials on our website must include captions for accessibility and clearly identify the individual and their relationship to the company.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial Approval Process */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-[#C9A84C] mb-4 pb-2 border-b border-yellow-900/30 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5" />
                                Testimonial Approval Process
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-bold text-[#F5F5F5] mb-3">1. Review Process</h4>
                                    <div className="space-y-4 pl-4">
                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Submission Review</h5>
                                            <p className="text-[#F5F5F5] text-sm">All testimonials undergo review by our compliance team to ensure they meet our guidelines, accuracy standards, and regulatory requirements before publication.</p>
                                        </div>

                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Verification</h5>
                                            <p className="text-[#F5F5F5] text-sm">We may verify the identity of testimonial providers and the accuracy of their claims through follow-up communication or documentation review.</p>
                                        </div>

                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Approval Timeline</h5>
                                            <p className="text-[#F5F5F5] text-sm">The review process typically takes 5-7 business days. Submitters will be notified of approval or rejection via email.</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-[#F5F5F5] mb-3">2. Rejection Reasons</h4>
                                    <div className="space-y-4 pl-4">
                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Common Rejection Grounds</h5>
                                            <p className="text-[#F5F5F5] text-sm">Testimonials may be rejected for containing false claims, violating guidelines, lacking proper consent, or not meeting our quality standards.</p>
                                        </div>

                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Appeal Process</h5>
                                            <p className="text-[#F5F5F5] text-sm">Rejected submissions may be appealed by providing additional information or documentation supporting the claims made in the testimonial.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial Usage Rights */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-[#C9A84C] mb-4 pb-2 border-b border-yellow-900/30">
                                Testimonial Usage Rights
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-bold text-[#F5F5F5] mb-3">1. How We Use Testimonials</h4>
                                    <div className="space-y-4 pl-4">
                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Marketing Platforms</h5>
                                            <p className="text-[#F5F5F5] text-sm">Approved testimonials may be used on our website, social media, marketing materials, presentations, events, and other promotional channels.</p>
                                        </div>

                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Duration of Use</h5>
                                            <p className="text-[#F5F5F5] text-sm">Unless otherwise specified, testimonials may be used indefinitely until the provider withdraws consent or the information becomes outdated.</p>
                                        </div>

                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Attribution</h5>
                                            <p className="text-[#F5F5F5] text-sm">Testimonials will typically include the provider's name, city/state (with permission), and their relationship to the company (customer, distributor, etc.).</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-[#F5F5F5] mb-3">2. Limitations</h4>
                                    <div className="space-y-4 pl-4">
                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">No Endorsement</h5>
                                            <p className="text-[#F5F5F5] text-sm">Testimonials do not constitute endorsements by the company. They represent individual experiences and opinions only.</p>
                                        </div>

                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Non-Transferable</h5>
                                            <p className="text-[#F5F5F5] text-sm">Permission to use testimonials is non-transferable and applies only to the specific individual who provided the testimonial.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Compliance and Regulatory */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-[#C9A84C] mb-4 pb-2 border-b border-yellow-900/30 flex items-center gap-2">
                                <Shield className="w-5 h-5" />
                                Compliance and Regulatory
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-bold text-[#F5F5F5] mb-3">1. Regulatory Requirements</h4>
                                    <div className="space-y-4 pl-4">
                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">FTC Guidelines</h5>
                                            <p className="text-[#F5F5F5] text-sm">We comply with FTC guidelines regarding testimonials and endorsements, including disclosure requirements for material connections.</p>
                                        </div>

                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Direct Selling Guidelines</h5>
                                            <p className="text-[#F5F5F5] text-sm">Our testimonial practices align with applicable Direct Selling Guidelines and industry best practices.</p>
                                        </div>

                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">State and Local Laws</h5>
                                            <p className="text-[#F5F5F5] text-sm">We comply with all applicable state and local laws regarding testimonials, endorsements, and advertising practices.</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-[#F5F5F5] mb-3">2. Record Keeping</h4>
                                    <div className="space-y-4 pl-4">
                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Documentation</h5>
                                            <p className="text-[#F5F5F5] text-sm">We maintain records of all testimonial submissions, consent forms, and approval documentation for compliance purposes.</p>
                                        </div>

                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Retention Period</h5>
                                            <p className="text-[#F5F5F5] text-sm">Testimonial records are retained for as long as the testimonial is in use plus additional period as required by applicable laws.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Violations and Consequences */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-[#C9A84C] mb-4 pb-2 border-b border-yellow-900/30 flex items-center gap-2">
                                <AlertCircle className="w-5 h-5" />
                                Violations and Consequences
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-bold text-[#F5F5F5] mb-3">1. Policy Violations</h4>
                                    <div className="space-y-4 pl-4">
                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Distributor Violations</h5>
                                            <p className="text-[#F5F5F5] text-sm">Distributors who submit false testimonials or encourage misleading testimonials may face disciplinary action, including suspension or termination.</p>
                                        </div>

                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Customer Violations</h5>
                                            <p className="text-[#F5F5F5] text-sm">Customers submitting fraudulent testimonials may have their testimonials removed and future submissions rejected.</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-[#F5F5F5] mb-3">2. Corrective Actions</h4>
                                    <div className="space-y-4 pl-4">
                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Removal</h5>
                                            <p className="text-[#F5F5F5] text-sm">Non-compliant testimonials will be removed from all platforms immediately upon discovery.</p>
                                        </div>

                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Corrections</h5>
                                            <p className="text-[#F5F5F5] text-sm">If a testimonial contains minor inaccuracies, we may request corrections from the provider before republishing.</p>
                                        </div>

                                        <div className="pl-4 border-l-2 border-[#C9A84C]">
                                            <h5 className="font-bold text-[#C9A84C] mb-1">Public Notice</h5>
                                            <p className="text-[#F5F5F5] text-sm">In cases of significant misleading testimonials, we may issue public corrections or clarifications.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial Policy Summary */}
                        <div className="mb-8 bg-[#0D0D0D] p-6 rounded-lg">
                            <h3 className="text-lg font-bold text-[#C9A84C] mb-3 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5" />
                                Testimonial Policy Summary
                            </h3>
                            <ul className="space-y-2 text-sm text-[#F5F5F5]">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full mt-1.5"></span>
                                    <span>All testimonials must be authentic and reflect genuine experiences</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full mt-1.5"></span>
                                    <span>Written consent required for using name, image, and statement</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full mt-1.5"></span>
                                    <span>Income testimonials must include earnings disclaimers</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full mt-1.5"></span>
                                    <span>No false, misleading, or exaggerated claims permitted</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full mt-1.5"></span>
                                    <span>Testimonials undergo compliance review before publication</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full mt-1.5"></span>
                                    <span>Providers may withdraw consent at any time</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full mt-1.5"></span>
                                    <span>Violations may result in testimonial removal or disciplinary action</span>
                                </li>
                            </ul>
                        </div>

                        {/* Legal Disclaimer */}
                        <div className="mt-8 bg-[#C9A84C]/10 border-l-4 border-[#C9A84C] p-6 rounded-r-lg">
                            <div className="flex items-start gap-4">
                                <Lock className="w-6 h-6 text-[#C9A84C] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-[#C9A84C] mb-2">Legal Disclaimer</h3>
                                    <p className="text-[#F5F5F5] text-sm">
                                        Sanyukt Parivaar & Rich Life Pvt.Ltd. follows applicable Direct Selling Guidelines and FTC regulations regarding testimonials and endorsements. Income depends on individual effort and performance. No guaranteed earnings. Testimonials represent individual experiences and are not guarantees of similar results. This policy is subject to change without prior notice.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Last Updated */}
                        <div className="mt-8 pt-6 border-t border-yellow-900/30 flex items-center gap-2 text-zinc-300">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">Last Updated: {lastUpdated}</span>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default TestimonialPolicy;


