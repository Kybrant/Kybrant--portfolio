import React from 'react';
import { Link } from 'react-router-dom';
import { brand } from '../config/brand';
import logoImage from '../assets/kybrant-logo.png';

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-brand-surface/30 backdrop-blur-md pt-16 pb-8 relative overflow-hidden z-10">
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_bottom_center,var(--color-primary),transparent_70%)]"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
                        <Link to="/" className="flex items-center gap-1.5 mb-3 focus:outline-none">
                            <img src={logoImage} alt={`${brand.name} logo`} className="h-16 w-auto object-contain opacity-90 drop-shadow-[0_0_15px_rgba(0,109,91,0.4)]" />
                            <span className="text-3xl font-bold tracking-tight text-white/90">{brand.name}</span>
                        </Link>
                        <p className="text-sm text-brand-text/50 max-w-xs text-center md:text-left">
                            Orchestrating complex logic for forward-thinking enterprises.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-brand-text/70 max-w-lg md:max-w-none">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <Link to="/platform" className="hover:text-white transition-colors">Platform</Link>
                        <Link to="/integrations" className="hover:text-white transition-colors">Integrations</Link>
                        <Link to="/security" className="hover:text-white transition-colors">Security</Link>
                        <Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
                        <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
                        <Link to="/company" className="hover:text-white transition-colors">Company</Link>
                        <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                    </div>
                </div>

                <div className="text-center text-xs text-brand-text/40 pt-8 border-t border-white/5">
                    © {new Date().getFullYear()} {brand.name}. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
