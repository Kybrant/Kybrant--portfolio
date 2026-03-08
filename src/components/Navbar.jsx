import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { brand } from '../config/brand';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/kybrant-logo.png';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-bg/80 backdrop-blur-xl border-b border-white/10 shadow-lg py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-1.5 focus:outline-none">
                    <img src={logoImage} alt={`${brand.name} logo`} className="h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,109,91,0.4)]" />
                    <span className="text-3xl font-bold tracking-tight text-white">{brand.name}</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6 xl:gap-8 text-sm font-medium text-brand-text/80">
                    <Link to="/" className={`hover:text-white transition-colors ${location.pathname === '/' ? 'text-white' : ''}`}>Home</Link>
                    <Link to="/platform" className={`hover:text-white transition-colors ${location.pathname === '/platform' ? 'text-white' : ''}`}>Platform</Link>
                    <Link to="/integrations" className={`hover:text-white transition-colors ${location.pathname === '/integrations' ? 'text-white' : ''}`}>Integrations</Link>
                    <Link to="/security" className={`hover:text-white transition-colors ${location.pathname === '/security' ? 'text-white' : ''}`}>Security</Link>
                    <Link to="/portfolio" className={`hover:text-white transition-colors ${location.pathname === '/portfolio' ? 'text-white' : ''}`}>Portfolio</Link>
                    <Link to="/blog" className={`hover:text-white transition-colors ${location.pathname === '/blog' ? 'text-white' : ''}`}>Blog</Link>
                    <Link to="/company" className={`hover:text-white transition-colors ${location.pathname === '/company' ? 'text-white' : ''}`}>Company</Link>
                </div>

                {/* CTA */}
                <div className="hidden md:block">
                    <Link to="/contact">
                        <button className="glass-button text-sm px-6 py-2">
                            Contact Us
                        </button>
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-brand-text/80 hover:text-white transition-colors focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile nav */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full max-h-[calc(100vh-80px)] overflow-y-auto bg-brand-bg/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
                    <Link to="/" className="text-brand-text/90 hover:text-white transition-colors font-medium border-b border-white/5 pb-3 block">Home</Link>
                    <Link to="/platform" className="text-brand-text/90 hover:text-white transition-colors font-medium border-b border-white/5 pb-3 block">Platform</Link>
                    <Link to="/integrations" className="text-brand-text/90 hover:text-white transition-colors font-medium border-b border-white/5 pb-3 block">Integrations</Link>
                    <Link to="/security" className="text-brand-text/90 hover:text-white transition-colors font-medium border-b border-white/5 pb-3 block">Security</Link>
                    <Link to="/portfolio" className="text-brand-text/90 hover:text-white transition-colors font-medium border-b border-white/5 pb-3 block">Portfolio</Link>
                    <Link to="/blog" className="text-brand-text/90 hover:text-white transition-colors font-medium border-b border-white/5 pb-3 block">Blog</Link>
                    <Link to="/company" className="text-brand-text/90 hover:text-white transition-colors font-medium border-b border-white/5 pb-3 block">Company</Link>
                    <Link to="/contact" className="block mt-4">
                        <button className="glass-button-primary w-full justify-center py-3">
                            Contact Us
                        </button>
                    </Link>
                </div>
            )}
        </nav>
    );
}
