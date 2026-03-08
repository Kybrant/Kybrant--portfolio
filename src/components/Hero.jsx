import React from 'react';
import { brand } from '../config/brand';
import { ArrowRight, Play } from 'lucide-react';
import logoImage from '../assets/kybrant-logo.png';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
            {/* Background gradients and glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[120px] pointer-events-none opacity-60"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-secondary/40 rounded-full blur-[150px] pointer-events-none opacity-50"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">

                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                        <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></div>
                        <span className="text-xs font-medium text-brand-text/80 uppercase tracking-widest">Autonomous Execution</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
                        Turn your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">operational friction</span> into scalable momentum.
                    </h1>

                    <p className="text-xl text-brand-text/70 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                        At {brand.name}, we build the invisible, autonomous architecture that powers your enterprise—eliminating the manual bottlenecks that choke your growth.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <button className="glass-button-primary w-full sm:w-auto">
                            Start Orchestrating
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Visual Content - Abstract Nodes */}
                <div className="flex-1 w-full max-w-lg lg:max-w-none relative mt-12 lg:mt-0">
                    <div className="relative aspect-square w-full">
                        {/* Central Node */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-3xl bg-brand-primary/30 border border-brand-accent/40 backdrop-blur-2xl flex items-center justify-center z-20 shadow-[0_0_50px_rgba(0,109,91,0.5),inset_0_0_20px_rgba(178,216,216,0.3)]">
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.4)] relative">
                                {/* Spinning Square */}
                                <div className="absolute inset-0 m-auto w-8 h-8 rounded-lg border-2 border-brand-accent/50 animate-[spin_10s_linear_infinite]"></div>
                                {/* Center Logo (Stationary) */}
                                <img src={logoImage} alt="Kybrant Center" className="w-6 h-6 object-contain relative z-10 drop-shadow-md brightness-0 invert opacity-90" />
                            </div>
                        </div>

                        {/* Orbiting data points (floating glass elements) */}
                        <div className="absolute top-[10%] right-[20%] w-24 h-24 glass-panel flex flex-col items-center justify-center p-3 animate-[translate-y_6s_ease-in-out_infinite_alternate]">
                            <div className="w-full h-2 bg-white/10 rounded-full mb-2"></div>
                            <div className="w-3/4 h-2 bg-white/10 rounded-full"></div>
                        </div>

                        <div className="absolute bottom-[15%] left-[10%] w-32 h-20 glass-panel flex items-center gap-3 p-3 animate-[translate-y_8s_ease-in-out_infinite_alternate-reverse]">
                            <div className="w-8 h-8 rounded-full bg-brand-primary/40 border border-brand-accent/30 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></div>
                            </div>
                            <div className="flex-1 space-y-2">
                                <div className="w-full h-1.5 bg-white/20 rounded-full"></div>
                                <div className="w-1/2 h-1.5 bg-white/10 rounded-full"></div>
                            </div>
                        </div>

                        <div className="absolute top-[30%] left-[5%] w-16 h-16 rounded-2xl glass-panel animate-[translate-x_7s_ease-in-out_infinite_alternate]"></div>
                        <div className="absolute bottom-[25%] right-[5%] w-20 h-20 rounded-full bg-brand-secondary border border-white/10 shadow-[inner_0_0_10px_rgba(0,0,0,0.5)] flex items-center justify-center animate-[translate-y_5s_ease-in-out_infinite_alternate]">
                            <div className="w-8 h-8 opacity-30 text-white">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                            </div>
                        </div>

                        {/* Connecting lines SVG */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-white/10" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M 50 50 L 80 20" strokeWidth="0.2" strokeDasharray="1 1" className="animate-[dash_20s_linear_infinite]"></path>
                            <path d="M 50 50 L 10 30" strokeWidth="0.2" strokeDasharray="1 1"></path>
                            <path d="M 50 50 L 25 80" strokeWidth="0.1" strokeDasharray="1 2"></path>
                            <path d="M 50 50 L 90 70" strokeWidth="0.15"></path>
                        </svg>
                    </div>
                </div>

            </div>
        </section>
    );
}
