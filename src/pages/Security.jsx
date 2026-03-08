import React from 'react';

export default function Security() {
    return (
        <main className="pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                        <span className="text-xs font-medium text-brand-text/80 uppercase tracking-widest">Trust & Security</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                        Enterprise-grade security by design.
                    </h1>
                    <p className="text-xl text-brand-text/70 leading-relaxed">
                        Your data is your most valuable asset. Our architecture is built from the ground up to ensure absolute compliance, privacy, and safety.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Certifications / Pillars */}
                    <div className="glass-panel p-8 lg:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-6">Data Privacy & Isolation</h3>
                        <p className="text-brand-text/70 leading-relaxed mb-6">
                            Tenant data is strictly isolated. Our agents process data in secure, ephemeral environments ensuring that sensitive information is never retained longer than necessary or used to train shared models.
                        </p>
                        <ul className="space-y-4 text-brand-text/80">
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                                Zero-retention AI processing policies
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                                End-to-end encryption at rest and in transit
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                                VPC deployment options for strict perimeter control
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-8">
                        {/* Badges Placeholder */}
                        {[1, 2].map((i) => (
                            <div key={i} className="glass-panel p-6 flex items-center gap-6">
                                <div className="w-16 h-16 rounded-xl bg-brand-primary/20 border border-brand-accent/30 flex-shrink-0"></div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Compliance Standard {i}</h4>
                                    <p className="text-brand-text/60 text-sm">Audited and certified</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
