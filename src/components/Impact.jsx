import React from 'react';
import { brand } from '../config/brand';
import { TrendingUp, TrendingDown, Clock } from 'lucide-react';

export default function Impact() {
    return (
        <section className="py-24 relative z-10 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Side - Visual Graph Representation */}
                    <div className="flex-1 w-full relative">
                        <div className="glass-panel p-8 md:p-10 relative">
                            {/* Background Glow */}
                            <div className="absolute inset-0 bg-brand-secondary/20 blur-[50px] rounded-full pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
                                    <div>
                                        <h4 className="text-white font-medium mb-1 flex items-center gap-2">
                                            <Clock size={16} className="text-brand-accent" />
                                            Manual Operational Hours
                                        </h4>
                                        <span className="text-3xl font-bold text-brand-text/50">-78%</span>
                                    </div>
                                    <div className="text-right">
                                        <h4 className="text-white font-medium mb-1 flex items-center gap-2 justify-end">
                                            <TrendingUp size={16} className="text-brand-primary" />
                                            Strategic Output
                                        </h4>
                                        <span className="text-3xl font-bold text-brand-primary">+3.2x</span>
                                    </div>
                                </div>

                                {/* Abstract Graph */}
                                <div className="h-64 relative flex items-end justify-between pt-10">
                                    {/* Grid Lines */}
                                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <div key={i} className="w-full h-px bg-white/5"></div>
                                        ))}
                                    </div>

                                    {/* Operational Hours Line (Going down) */}
                                    <svg className="absolute inset-0 w-full h-full preserve-3d" preserveAspectRatio="none" viewBox="0 0 100 100">
                                        <path
                                            d="M 0 20 C 40 20, 60 80, 100 80"
                                            fill="none"
                                            stroke="rgba(248, 249, 250, 0.3)"
                                            strokeWidth="2"
                                            strokeDasharray="4 6"
                                            vectorEffect="non-scaling-stroke"
                                        >
                                            <animate attributeName="stroke-dashoffset" from="0" to="20" dur="4s" repeatCount="indefinite" />
                                        </path>
                                    </svg>

                                    {/* Business Output Line (Going up) */}
                                    <svg className="absolute inset-0 w-full h-full preserve-3d" preserveAspectRatio="none" viewBox="0 0 100 100">
                                        {/* Base static line */}
                                        <path
                                            d="M 0 80 C 40 80, 60 20, 100 20"
                                            fill="none"
                                            stroke="var(--color-primary)"
                                            strokeWidth="3"
                                            opacity="0.2"
                                            vectorEffect="non-scaling-stroke"
                                        />

                                        {/* Animated flowing line */}
                                        <path
                                            d="M 0 80 C 40 80, 60 20, 100 20"
                                            fill="none"
                                            stroke="var(--color-primary)"
                                            strokeWidth="3"
                                            strokeDasharray="5 15"
                                            vectorEffect="non-scaling-stroke"
                                        >
                                            <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2s" repeatCount="indefinite" />
                                        </path>

                                        {/* Area under the curve gradient */}
                                        <path d="M 0 80 C 40 80, 60 20, 100 20 L 100 100 L 0 100 Z" fill="url(#gradient-primary)" opacity="0.1" />

                                        <defs>
                                            <linearGradient id="gradient-primary" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="var(--color-primary)" />
                                                <stop offset="100%" stopColor="transparent" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Floating metric card */}
                        <div className="absolute -right-4 md:-right-8 -bottom-8 glass-panel p-4 flex items-center gap-4 animate-[translate-y_6s_ease-in-out_infinite_alternate] z-20">
                            <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                                <TrendingDown size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-brand-text/60 font-medium uppercase tracking-wider">Manual Effort</p>
                                <p className="text-xl font-bold text-white">Automated</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="flex-1 mt-12 lg:mt-0">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">From reactive to autonomous.</h2>
                        <div className="space-y-6 text-lg text-brand-text/70 mb-8">
                            <p>
                                Your backend becomes dynamic and self-optimizing, running faster and with absolute precision at any workload.
                            </p>
                            <p>
                                By transforming your infrastructure from reactive to autonomous, we free your team from routine execution so you can focus entirely on strategic growth.
                            </p>
                        </div>

                        <ul className="space-y-4 mb-10">
                            {['Eliminate manual bottlenecks', 'Real-time self-optimizing logic', 'Zero-friction deployment'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white">
                                    <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center border border-brand-primary/30">
                                        <svg className="w-3.5 h-3.5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button className="glass-button">
                            Explore the Architecture
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
