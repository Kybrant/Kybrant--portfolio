import React from 'react';

export default function Blog() {
    return (
        <main className="pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                        <span className="text-xs font-medium text-brand-text/80 uppercase tracking-widest">Insights & Updates</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                        The Agentic Enterprise.
                    </h1>
                    <p className="text-xl text-brand-text/70 leading-relaxed">
                        Thoughts, whitepapers, and guides on transitioning from reactive human operations to autonomous AI ecosystems.
                    </p>
                </div>

                {/* Featured Post */}
                <div className="glass-panel p-8 mb-16 group cursor-pointer hover:bg-white/5 transition-colors">
                    <div className="w-full h-64 bg-white/5 rounded-2xl mb-8 border border-white/10 overflow-hidden relative">
                        {/* Placeholder Image Space */}
                        <div className="absolute inset-0 bg-brand-primary/20 flex items-center justify-center">
                            <span className="text-white/30 tracking-widest uppercase">Featured Article Image</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-brand-text/60 text-sm mb-4">
                        <span className="text-brand-accent font-medium">Whitepaper</span>
                        <span>•</span>
                        <span>5 min read</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">
                        Why the Modern Enterprise Requires Agentic Orchestration
                    </h2>
                    <p className="text-brand-text/70 leading-relaxed max-w-4xl">
                        A deep dive into why deterministic rules engines are failing under complex edge cases, and how autonomous LLM-powered agents provide the necessary flexibility to scale operations without expanding headcount.
                    </p>
                </div>

                {/* Grid of Posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="glass-panel p-6 group cursor-pointer hover:bg-white/5 transition-colors">
                            <div className="w-full h-40 bg-white/5 rounded-xl mb-6 border border-white/10"></div>
                            <div className="text-brand-accent text-xs font-medium uppercase tracking-widest mb-3">Engineering</div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">
                                Technical Deep Dive {i}: Building resilient AI memory
                            </h3>
                            <p className="text-brand-text/70 text-sm mb-6">
                                How we structure state and context windows to ensure long-running autonomous processes never lose track of truth.
                            </p>
                            <span className="text-brand-text/50 text-xs font-medium">Oct {i + 10}, 2026</span>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
