import React from 'react';
import { brand } from '../config/brand';

export default function Company() {
    return (
        <main className="pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                        <span className="text-xs font-medium text-brand-text/80 uppercase tracking-widest">Our Mission</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                        Building the invisible layer of the modern enterprise.
                    </h1>
                    <p className="text-xl text-brand-text/70 leading-relaxed">
                        At {brand.name}, we believe that your team should focus on strategy, not execution. We are engineers, AI researchers, and systems architects dedicated to eliminating manual workflows.
                    </p>
                </div>

                {/* Team Section */}
                <div className="mt-24">
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">Meet the Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Soumasnigdha Pal', role: 'Co-Founder' },
                            { name: 'Sayan Das', role: 'Co-Founder' },
                            { name: 'Shivaye Swar', role: 'Co-Founder' }
                        ].map((member, i) => (
                            <div key={i} className="glass-panel p-6 text-center">
                                <div className="w-32 h-32 mx-auto bg-white/10 rounded-full mb-6 border border-white/20"></div>
                                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                <p className="text-brand-text/60 text-sm">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
