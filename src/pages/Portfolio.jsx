import React from 'react';

export default function Portfolio() {
    return (
        <main className="pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-6 md:px-12 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                    <span className="text-xs font-medium text-brand-text/80 uppercase tracking-widest">Case Studies</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                    Autonomous Architecture in Action.
                </h1>
                <p className="text-xl text-brand-text/70 mb-16 max-w-3xl leading-relaxed">
                    Explore how leading enterprises are using Kybrant to eliminate bottlenecks and orchestrate complex operations with absolute precision.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Placeholder Case Studies */}
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="glass-panel p-8 group">
                            <div className="w-full h-48 bg-white/5 rounded-2xl mb-8 flex items-center justify-center border border-white/10">
                                <span className="text-white/20 font-medium">Visual {i}</span>
                            </div>
                            <div className="text-brand-accent text-sm font-medium tracking-widest uppercase mb-3">Industry {i}</div>
                            <h3 className="text-2xl font-bold text-white mb-4">Enterprise Implementation {i}</h3>
                            <p className="text-brand-text/70 mb-6">Transforming legacy systems into dynamic, self-optimizing networks capable of handling massive workloads effortlessly.</p>
                            <a href="#" className="text-brand-primary font-medium flex items-center gap-2 group-hover:text-white transition-colors">
                                Read Case Study <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
