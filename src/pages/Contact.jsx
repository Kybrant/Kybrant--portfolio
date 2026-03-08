import React from 'react';

export default function Contact() {
    return (
        <main className="pt-32 pb-24 min-h-screen flex items-center">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Partner with Kybrant.</h1>
                            <p className="text-brand-text/70 mb-8 leading-relaxed">
                                Ready to transition from reactive to autonomous? Contact our enterprise team to discuss your operational bottlenecks and how scalable AI architecture can resolve them.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-white font-medium mb-1">Enterprise Inquiries</h4>
                                    <p className="text-brand-text/50 text-sm">partnerships@kybrant.com</p>
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Technical Support</h4>
                                    <p className="text-brand-text/50 text-sm">support@kybrant.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Form Placeholder */}
                        <div>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-brand-text/80 mb-1">Work Email</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary/50 transition-colors" placeholder="name@company.com" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-brand-text/80 mb-1">First Name</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary/50 transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-brand-text/80 mb-1">Last Name</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary/50 transition-colors" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-brand-text/80 mb-1">How can we help?</label>
                                    <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary/50 transition-colors resize-none"></textarea>
                                </div>
                                <button type="button" className="glass-button-primary w-full py-3 justify-center">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
