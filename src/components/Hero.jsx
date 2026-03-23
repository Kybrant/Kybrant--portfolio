import React from 'react';
import { brand } from '../config/brand';
import { ArrowRight, Play } from 'lucide-react';
import logoImage from '../assets/kybrant-logo.png';

import DeviceShowcase from './DeviceShowcase';

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

                {/* Visual Content - 3D Device Showcase */}
                <div className="flex-1 w-full max-w-lg lg:max-w-none relative mt-12 lg:mt-0">
                    <DeviceShowcase />
                </div>

            </div>
        </section>
    );
}
