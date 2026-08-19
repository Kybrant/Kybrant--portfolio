import React, { useState, useEffect, useRef } from 'react';
import { brand } from '../config/brand';
import { TrendingUp, TrendingDown, Clock, Sparkles, Activity, CheckCircle2 } from 'lucide-react';

export default function Impact() {
    const containerRef = useRef(null);

    // Mouse magnetic tilt & glare states
    const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
    const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    // Live agentic telemetry fluctuations
    const [manualHours, setManualHours] = useState(78);
    const [strategicOutput, setStrategicOutput] = useState(3.2);
    const [hoursTicked, setHoursTicked] = useState(false);
    const [outputTicked, setOutputTicked] = useState(false);

    // Periodic live telemetry ticks
    useEffect(() => {
        const interval = setInterval(() => {
            const hDelta = Math.floor(Math.random() * 3) - 1;
            setManualHours(78 + hDelta);
            setHoursTicked(true);
            setTimeout(() => setHoursTicked(false), 500);

            const outDelta = (Math.random() * 0.4 - 0.2);
            setStrategicOutput(parseFloat((3.2 + outDelta).toFixed(1)));
            setOutputTicked(true);
            setTimeout(() => setOutputTicked(false), 500);
        }, 3400);

        return () => clearInterval(interval);
    }, []);

    // Handle mouse move for magnetic 3D tilt & glare
    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        
        const normX = (e.clientX - rect.left) / rect.width - 0.5;
        const normY = (e.clientY - rect.top) / rect.height - 0.5;
        
        const pctX = Math.round(((e.clientX - rect.left) / rect.width) * 100);
        const pctY = Math.round(((e.clientY - rect.top) / rect.height) * 100);

        setMouseOffset({ x: normX, y: normY });
        setGlarePos({ x: pctX, y: pctY });
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setMouseOffset({ x: 0, y: 0 });
        setIsHovered(false);
    };

    const tiltX = isHovered ? mouseOffset.y * -8 : 0;
    const tiltY = isHovered ? mouseOffset.x * 10 : 0;

    return (
        <section className="py-24 relative z-10 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Side - Responsive Interactive Tablet Frame */}
                    <div 
                        ref={containerRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="flex-1 w-full relative perspective-[1800px] select-none"
                    >
                        {/* Ambient Glow behind tablet */}
                        <div className="absolute inset-0 bg-[#006D5B]/25 blur-[100px] rounded-full pointer-events-none -z-10"></div>

                        {/* Tablet Device Frame with 3D Tilt */}
                        <div 
                            className="relative rounded-[1.75rem] sm:rounded-[2.4rem] bg-[#0c1219] border-[6px] sm:border-[10px] border-[#1f2732] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(0,109,91,0.2)] overflow-hidden transition-all duration-500"
                            style={{
                                transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
                                transformStyle: 'preserve-3d',
                                transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)'
                            }}
                        >
                            {/* Glass Glare Overlay */}
                            <div 
                                className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300"
                                style={{
                                    opacity: isHovered ? 0.75 : 0.15,
                                    background: `radial-gradient(circle 360px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.08), rgba(178, 216, 216, 0.03) 40%, transparent 80%)`
                                }}
                            />

                            {/* Inner Screen Display */}
                            <div className="w-full aspect-[4/3] bg-[#070b10] p-5 sm:p-8 flex flex-col justify-between relative font-body">
                                
                                {/* Top Metrics Header */}
                                <div className="flex justify-between items-start z-10">
                                    {/* Left: Manual Operational Hours */}
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-1.5 text-white/80 mb-1">
                                            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/70 animate-spin" style={{ animationDuration: '12s' }} />
                                            <span className="text-xs sm:text-sm font-medium text-white/90">
                                                Manual Operational Hours
                                            </span>
                                        </div>
                                        <span className={`text-3xl sm:text-5xl font-extrabold text-white tracking-tight transition-transform duration-300 ${hoursTicked ? 'scale-105 text-white/70' : ''}`}>
                                            -{manualHours}%
                                        </span>
                                    </div>

                                    {/* Right: Strategic Output */}
                                    <div className="flex flex-col items-end">
                                        <div className="flex items-center gap-1.5 text-white/80 mb-1">
                                            <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                                            <span className="text-xs sm:text-sm font-medium text-white/90">
                                                Strategic Output
                                            </span>
                                        </div>
                                        <span className={`text-3xl sm:text-5xl font-extrabold text-emerald-400 tracking-tight transition-transform duration-300 ${outputTicked ? 'scale-105 text-emerald-300' : ''}`}>
                                            +{strategicOutput}x
                                        </span>
                                    </div>
                                </div>

                                {/* Graph Area with Flowing Dashed Curves & Cute Cartoon AI Agents */}
                                <div className="relative w-full flex-1 my-2 flex items-center justify-center overflow-hidden">
                                    <svg className="w-full h-full overflow-visible" viewBox="0 0 300 120" preserveAspectRatio="none">
                                        <defs>
                                            <linearGradient id="impactGreenArea" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#006D5B" stopOpacity="0.45" />
                                                <stop offset="100%" stopColor="#006D5B" stopOpacity="0.0" />
                                            </linearGradient>
                                        </defs>

                                        {/* Horizontal Grid Lines */}
                                        <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                                        <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                                        <line x1="0" y1="80" x2="300" y2="80" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                                        <line x1="0" y1="105" x2="300" y2="105" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

                                        {/* Green Area Gradient Fill */}
                                        <path 
                                            d="M0,100 Q150,80 300,20 L300,120 L0,120 Z" 
                                            fill="url(#impactGreenArea)" 
                                        />

                                        {/* Descending Flowing Dashed Curve (Manual Hours going down) */}
                                        <path 
                                            d="M0,28 Q150,60 300,98" 
                                            fill="none" 
                                            stroke="rgba(255,255,255,0.4)" 
                                            strokeWidth="2.2" 
                                            strokeDasharray="5 5" 
                                        >
                                            <animate attributeName="stroke-dashoffset" from="0" to="20" dur="2s" repeatCount="indefinite" />
                                        </path>

                                        {/* Ascending Flowing Dashed Green Curve (Strategic Output going up) */}
                                        <path 
                                            d="M0,100 Q150,80 300,20" 
                                            fill="none" 
                                            stroke="#10b981" 
                                            strokeWidth="2.5" 
                                            strokeDasharray="5 5" 
                                        >
                                            <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.8s" repeatCount="indefinite" />
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge: MANUAL EFFORT Automated with Parallax Float */}
                        <div 
                            className="absolute -right-2 sm:-right-4 -bottom-6 sm:-bottom-8 bg-[#111720]/95 border border-white/15 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-3.5 shadow-[0_20px_40px_rgba(0,0,0,0.85),0_0_20px_rgba(0,109,91,0.2)] z-20 backdrop-blur-md animate-[bounce_4s_ease-in-out_infinite]"
                            style={{ animationDuration: '5s' }}
                        >
                            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#004C4C]/60 border border-[#006D5B]/70 flex items-center justify-center shadow-inner">
                                <TrendingDown className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-400 animate-pulse" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[7px] sm:text-[9px] uppercase tracking-wider text-white/50 font-bold font-mono flex items-center gap-1">
                                    MANUAL EFFORT
                                </span>
                                <span className="text-sm sm:text-lg font-extrabold text-white leading-tight font-heading flex items-center gap-1.5">
                                    Automated
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                                </span>
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
