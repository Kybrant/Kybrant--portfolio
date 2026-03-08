import React from 'react';

export default function Platform() {
    return (
        <main className="pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                        <span className="text-xs font-medium text-brand-text/80 uppercase tracking-widest">Platform Overview</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                        The Core Engine of Agentic AI.
                    </h1>
                    <p className="text-xl text-brand-text/70 leading-relaxed">
                        Discover the architecture that powers our autonomous workflows across the enterprise. Built for scale, security, and absolute precision.
                    </p>
                </div>

                {/* Capabilities Placeholder */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="glass-panel p-8">
                            <div className="w-12 h-12 rounded-xl bg-brand-primary/20 border border-brand-accent/30 flex items-center justify-center mb-6">
                                <span className="text-brand-accent font-bold">{i}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Core Capability {i}</h3>
                            <p className="text-brand-text/70 leading-relaxed">
                                Detailed explanation of how this specific architectural component enables autonomous execution without human intervention.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
