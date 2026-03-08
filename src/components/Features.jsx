import React from 'react';
import { brand } from '../config/brand';
import { Network, Layers, Cpu } from 'lucide-react';

export default function Features() {
    const features = [
        {
            title: "Connect",
            icon: <Network size={28} className="text-brand-accent" />,
            description: "Deploy agentic AI to bridge your fragmented systems without ripping and replacing your current stack."
        },
        {
            title: "Structure",
            icon: <Layers size={28} className="text-brand-accent" />,
            description: "Transform messy, unstructured data into a clean, unified foundation that powers real-time decision-making."
        },
        {
            title: "Orchestrate",
            icon: <Cpu size={28} className="text-brand-accent" />,
            description: "Move beyond static rules. Our AI autonomously orchestrates complex logic, self-optimizing to handle any workload."
        }
    ];

    return (
        <section id="solutions" className="py-24 relative z-10">
            <div className="container mx-auto px-6 md:px-12">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-brand-accent font-medium tracking-widest uppercase text-sm mb-4">Core Platform</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Deploy agentic AI as your core operational layer.</h2>
                    <p className="text-lg text-brand-text/70">Connecting fragmented systems, structuring messy data, and autonomously orchestrating complex logic in real time.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Subtle background glow behind the cards */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-brand-primary/20 blur-[100px] rounded-full pointer-events-none"></div>

                    {features.map((feature, index) => (
                        <div key={index} className="glass-panel p-8 relative group hover:-translate-y-2 transition-transform duration-500">
                            {/* Top accent line */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>

                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-brand-primary/20 group-hover:border-brand-primary/30 transition-colors duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                                {feature.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                            <p className="text-brand-text/70 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
