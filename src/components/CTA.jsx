import React from 'react';
import { Link } from 'react-router-dom';
import { brand } from '../config/brand';
import { ArrowUpRight } from 'lucide-react';

export default function CTA() {
    return (
        <section className="py-24 relative z-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="relative rounded-3xl overflow-hidden">

                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary to-brand-bg opacity-90 z-0"></div>

                    {/* Decorative Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/40 rounded-full blur-[80px] pointer-events-none z-0"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-[80px] pointer-events-none z-0"></div>

                    {/* Glass Panel Overlay */}
                    <div className="relative z-10 glass-panel border-none !rounded-3xl p-12 md:p-20 text-center flex flex-col items-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-2xl">
                            Ready to future-proof your digital infrastructure?
                        </h2>
                        <p className="text-brand-text/70 mb-10 max-w-xl text-lg">
                            Join leading enterprises using {brand.name} to orchestrate operations with autonomous intelligence.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-8">
                            <Link to="/portfolio" className="w-full sm:w-auto">
                                <button className="glass-button-primary px-8 py-4 text-lg w-full">
                                    View Portfolio
                                </button>
                            </Link>
                            <Link to="/contact" className="w-full sm:w-auto">
                                <button className="glass-button px-8 py-4 text-lg w-full">
                                    Contact Enterprise Team
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
