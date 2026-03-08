import React from 'react';

export default function Integrations() {
    return (
        <main className="pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-6 md:px-12 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                    <span className="text-xs font-medium text-brand-text/80 uppercase tracking-widest">Integrations</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                    Connects seamlessly to your existing stack.
                </h1>
                <p className="text-xl text-brand-text/70 mb-16 max-w-3xl leading-relaxed">
                    Kybrant does not require you to rip and replace. Our agentic architecture integrates directly with your mission-critical ERPs, CRMs, and databases.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {/* Placeholder Integrations */}
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div key={i} className="glass-panel p-6 flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-colors cursor-pointer">
                            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <span className="text-white/30 text-xs">Logo</span>
                            </div>
                            <h3 className="text-white font-medium">Enterprise Tool {i}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
