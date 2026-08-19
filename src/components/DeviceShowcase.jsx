import React, { useState, useEffect, useRef } from 'react';
import { 
    Activity, Cpu, Globe, Zap, Terminal, BarChart3, Binary, Shield, 
    CheckCircle2, TrendingUp, Layers, RefreshCw, ArrowUpRight, 
    Database, Network, Sparkles, Check, AlertCircle, FileCheck2,
    PieChart, Gauge, LineChart
} from 'lucide-react';
import logoImage from '../assets/kybrant-logo.png';

const DeviceShowcase = () => {
    const containerRef = useRef(null);

    // Boot sequence phase: 0 = unbooted, 1 = bg fade/scale, 2 = left card, 3 = right card, 4 = sweep, 5 = ambient live
    const [bootPhase, setBootPhase] = useState(0);
    const [isScanning, setIsScanning] = useState(false);

    // Dynamic Live Telemetry States (ERP & Agentic AI)
    const [networkRate, setNetworkRate] = useState(84.2);
    const [networkTicked, setNetworkTicked] = useState(false);
    const [tokenFlow, setTokenFlow] = useState(1.24);
    const [procurementVolume, setProcurementVolume] = useState(4.28);
    const [autoClearRate, setAutoClearRate] = useState(99.4);
    const [activeLogIndex, setActiveLogIndex] = useState(0);

    // Processing bars dynamic state
    const [procBars, setProcBars] = useState([
        { name: 'Agent-PO-Dispatch', code: 'PRC-01', base: 92, current: 92, ops: '1.8k/s' },
        { name: 'ERP-Deep-Reconcile', code: 'PRC-02', base: 78, current: 78, ops: '940/s' },
        { name: 'Vendor-Vector-Match', code: 'PRC-03', base: 86, current: 86, ops: '2.4k/s' }
    ]);

    // Live Event Logs
    const liveLogs = [
        { id: 'LOG-884', time: '12:04:18', text: 'Auto-cleared PO #8921 ($48,200) - 3-way match verified' },
        { id: 'LOG-885', time: '12:04:22', text: 'SAP S/4HANA Ledger sync completed (6ms latency)' },
        { id: 'LOG-886', time: '12:04:25', text: 'Procurement arbitrage captured +12.4% yield' },
        { id: 'LOG-887', time: '12:04:29', text: 'Oracle NetSuite invoice auto-reconciled (0-touch)' }
    ];

    // Mouse magnetic tilt & glass glare state
    const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
    const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    // Deploy button interactive state
    const [deployStatus, setDeployStatus] = useState('idle'); // 'idle' | 'deploying' | 'deployed'

    // 1. Trigger System Boot on Mount / In-View
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && bootPhase === 0) {
                    setBootPhase(1);
                    
                    const t1 = setTimeout(() => setBootPhase(2), 350);
                    const t2 = setTimeout(() => setBootPhase(3), 650);
                    const t3 = setTimeout(() => {
                        setBootPhase(4);
                        setIsScanning(true);
                    }, 1000);
                    const t4 = setTimeout(() => {
                        setBootPhase(5);
                    }, 2400);

                    return () => {
                        clearTimeout(t1);
                        clearTimeout(t2);
                        clearTimeout(t3);
                        clearTimeout(t4);
                    };
                }
            },
            { threshold: 0.15 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [bootPhase]);

    // 2. Autonomous Agentic Ambient Live Data Telemetry Loop
    useEffect(() => {
        if (bootPhase < 3) return;

        const tickInterval = setInterval(() => {
            const netDelta = (Math.random() * 0.8 - 0.4);
            setNetworkRate(parseFloat((84.2 + netDelta).toFixed(1)));
            setNetworkTicked(true);
            setTimeout(() => setNetworkTicked(false), 500);

            const tokDelta = (Math.random() * 0.1 - 0.05);
            setTokenFlow(parseFloat((1.24 + tokDelta).toFixed(2)));

            const procDelta = (Math.random() * 0.08 - 0.04);
            setProcurementVolume(parseFloat((4.28 + procDelta).toFixed(2)));

            setActiveLogIndex(prev => (prev + 1) % liveLogs.length);
        }, 3000);

        const barInterval = setInterval(() => {
            setProcBars(prev => prev.map(bar => {
                const shift = Math.floor(Math.random() * 7) - 3;
                const clamped = Math.min(98, Math.max(65, bar.base + shift));
                return { ...bar, current: clamped };
            }));
        }, 2200);

        return () => {
            clearInterval(tickInterval);
            clearInterval(barInterval);
        };
    }, [bootPhase]);

    // 3. Interactive Mouse Move (Magnetic Depth Tilt & Glass Glare)
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

    const handleDeployClick = () => {
        if (deployStatus === 'deploying') return;
        setDeployStatus('deploying');
        setTimeout(() => {
            setDeployStatus('deployed');
            setTimeout(() => setDeployStatus('idle'), 3500);
        }, 1000);
    };

    const isAmbientActive = bootPhase >= 5 && !isHovered;

    // Card transform calculations
    const leftTiltX = 6 + (isHovered ? mouseOffset.y * -6 : 0);
    const leftTiltY = 16 + (isHovered ? mouseOffset.x * 8 : 0);

    const centerTiltX = 5 + (isHovered ? mouseOffset.y * -4 : 0);
    const centerTiltY = 0 + (isHovered ? mouseOffset.x * 5 : 0);

    const rightTiltX = 7 + (isHovered ? mouseOffset.y * -6 : 0);
    const rightTiltY = -16 + (isHovered ? mouseOffset.x * 8 : 0);

    return (
        <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full aspect-[1/1] sm:aspect-[4/3] lg:aspect-video flex items-center justify-center perspective-[2000px] select-none py-2"
        >
            {/* Ambient Background Radial Mesh */}
            <div className="absolute inset-0 -z-10 bg-radial from-[#006D5B]/15 via-[#004C4C]/05 to-transparent blur-3xl opacity-70 pointer-events-none"></div>

            {/* ========================================================================= */}
            {/* 1. LAPTOP SCREEN: Autonomous ERP & Agentic AI Orchestrator Main Console  */}
            {/* ========================================================================= */}
            <div 
                className={`relative w-[92%] sm:w-[86%] aspect-[16/10] sm:aspect-[3/2] rounded-[1rem] sm:rounded-[1.4rem] bg-[#0c1015] border-[3px] sm:border-[6px] border-[#1c242e] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),0_0_30px_rgba(0,109,91,0.15)] z-10 overflow-hidden transition-all duration-[1200ms] ${
                    bootPhase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.05]'
                } ${isAmbientActive ? 'animate-ambient-center' : ''}`}
                style={{
                    transform: isAmbientActive 
                        ? undefined 
                        : `rotateX(${centerTiltX}deg) rotateY(${centerTiltY}deg)`,
                    transformStyle: 'preserve-3d',
                    transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)',
                    transitionProperty: 'transform, opacity, scale, box-shadow'
                }}
            >
                {/* Dynamic Glass Glare Overlay */}
                <div 
                    className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300"
                    style={{
                        opacity: isHovered ? 0.8 : 0.2,
                        background: `radial-gradient(circle 380px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.08), rgba(178, 216, 216, 0.03) 40%, transparent 80%)`
                    }}
                />

                {/* Reveal Sweep (Soft Mint #B2D8D8) */}
                {isScanning && (
                    <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
                        <div 
                            className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-[#B2D8D8]/40 to-transparent"
                            style={{ animation: 'border-scan-sweep 1.4s cubic-bezier(0.25, 1, 0.5, 1) forwards' }}
                        />
                    </div>
                )}

                {/* Laptop Inner High-Density Dashboard */}
                <div className="w-full h-full bg-[#080c10] flex flex-col justify-between p-2 sm:p-3 relative font-body text-white">
                    {/* Top Navigation Bar */}
                    <div className="border-b border-white/10 pb-1 sm:pb-1.5 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                            <img src={logoImage} alt="Kybrant" className="w-3 h-3 sm:w-4 sm:h-4 object-contain" />
                            <span className="text-[7px] sm:text-[9px] font-bold tracking-wider text-white/90 font-mono">KYBRANT CORE v4.8</span>
                            <span className="hidden sm:inline-block px-1 py-0.5 rounded bg-brand-primary/20 border border-brand-primary/30 text-[6px] text-brand-accent font-mono">ENTERPRISE ERP</span>
                        </div>

                        {/* Top Telemetry Pills */}
                        <div className="flex items-center gap-1.5 sm:gap-3 text-[6px] sm:text-[8px] font-mono text-white/60">
                            <span className="hidden sm:inline-block text-white/40">SAP S/4HANA SYNC</span>
                            <div className="flex items-center gap-1 text-brand-accent">
                                <Cpu className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-80" />
                                <span>0.4ms</span>
                            </div>
                            <Globe className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white/30 hidden sm:block" />
                        </div>
                    </div>

                    {/* Top KPI Metric Cards Row */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-1.5 my-0.5">
                        {/* Card 1: Network Ingestion */}
                        <div className="bg-[#111720]/95 rounded-md border border-white/10 p-1.5 flex flex-col justify-between">
                            <div className="flex justify-between items-center text-[6px] sm:text-[7.5px] text-white/60 font-semibold uppercase">
                                <div className="flex items-center gap-1">
                                    <BarChart3 className="text-brand-accent w-2.5 h-2.5" />
                                    <span>NETWORK</span>
                                </div>
                                <span className="text-[5px] sm:text-[6.5px] text-emerald-400 font-mono">+99.8%</span>
                            </div>
                            <div className="flex items-baseline gap-0.5 mt-0.5">
                                <span className={`text-xs sm:text-sm md:text-base font-extrabold text-white tracking-tight ${networkTicked ? 'text-brand-accent' : ''}`}>
                                    {networkRate}
                                </span>
                                <span className="text-[7px] sm:text-[8px] font-semibold text-brand-accent">%</span>
                            </div>
                            <div className="h-1.5 w-full mt-0.5 opacity-60">
                                <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                                    <path d="M0,15 Q25,4 50,12 T100,5" fill="none" stroke="#B2D8D8" strokeWidth="2" />
                                </svg>
                            </div>
                        </div>

                        {/* Card 2: Token Flow Velocity */}
                        <div className="bg-[#111720]/95 rounded-md border border-white/10 p-1.5 flex flex-col justify-between">
                            <div className="flex justify-between items-center text-[6px] sm:text-[7.5px] text-white/60 font-semibold uppercase">
                                <div className="flex items-center gap-1">
                                    <Binary className="text-brand-primary w-2.5 h-2.5" />
                                    <span>TOKEN FLOW</span>
                                </div>
                                <span className="text-[5px] sm:text-[6.5px] text-brand-accent font-mono">LIVE</span>
                            </div>
                            <div className="flex items-baseline mt-0.5">
                                <span className="text-xs sm:text-sm md:text-base font-extrabold text-white tracking-tight">
                                    {tokenFlow}M
                                </span>
                            </div>
                            <div className="h-1.5 w-full mt-0.5 opacity-60">
                                <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                                    <path d="M0,18 Q30,10 60,6 T100,2" fill="none" stroke="#006D5B" strokeWidth="2" />
                                </svg>
                            </div>
                        </div>

                        {/* Card 3: Auto-Cleared Procurement Volume */}
                        <div className="hidden sm:flex bg-[#111720]/95 rounded-md border border-white/10 p-1.5 flex-col justify-between">
                            <div className="flex justify-between items-center text-[6px] sm:text-[7.5px] text-white/60 font-semibold uppercase">
                                <div className="flex items-center gap-1">
                                    <FileCheck2 className="text-emerald-400 w-2.5 h-2.5" />
                                    <span>PO CLEARED</span>
                                </div>
                                <span className="text-[5px] sm:text-[6.5px] text-emerald-400 font-mono">+18%</span>
                            </div>
                            <div className="flex items-baseline mt-0.5">
                                <span className="text-xs sm:text-sm md:text-base font-extrabold text-white tracking-tight">
                                    ${procurementVolume}M
                                </span>
                            </div>
                            <div className="h-1.5 w-full mt-0.5 opacity-60">
                                <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                                    <path d="M0,16 Q20,12 50,4 T100,2" fill="none" stroke="#10b981" strokeWidth="2" />
                                </svg>
                            </div>
                        </div>

                        {/* Card 4: Autonomous Yield */}
                        <div className="hidden sm:flex bg-[#111720]/95 rounded-md border border-white/10 p-1.5 flex-col justify-between">
                            <div className="flex justify-between items-center text-[6px] sm:text-[7.5px] text-white/60 font-semibold uppercase">
                                <div className="flex items-center gap-1">
                                    <Sparkles className="text-brand-accent w-2.5 h-2.5" />
                                    <span>ERP YIELD</span>
                                </div>
                                <span className="text-[5px] sm:text-[6.5px] text-brand-accent font-mono">AUTO</span>
                            </div>
                            <div className="flex items-baseline gap-0.5 mt-0.5">
                                <span className="text-xs sm:text-sm md:text-base font-extrabold text-white tracking-tight">
                                    {autoClearRate}
                                </span>
                                <span className="text-[7px] sm:text-[8px] font-semibold text-brand-accent">%</span>
                            </div>
                            <div className="h-1.5 w-full mt-0.5 opacity-60">
                                <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                                    <path d="M0,14 Q40,18 70,8 T100,4" fill="none" stroke="#B2D8D8" strokeWidth="2" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Mid Section: Pipeline, Comparative Micro-Bar Chart & Area Graph */}
                    <div className="grid grid-cols-12 gap-1.5 my-auto">
                        {/* Left: Multi-Agent Pipeline Flow + Micro Step Bars */}
                        <div className="col-span-12 sm:col-span-7 bg-[#0e141c]/90 rounded-md border border-white/10 p-1.5 sm:p-2 flex flex-col justify-between">
                            <div className="flex justify-between items-center mb-1">
                                <div className="flex items-center gap-1">
                                    <Network className="text-brand-accent w-2.5 h-2.5" />
                                    <span className="text-[6px] sm:text-[7.5px] font-bold text-white uppercase tracking-wider">
                                        AGENTIC PIPELINE
                                    </span>
                                </div>
                                <span className="text-[5px] sm:text-[6.5px] text-emerald-400 font-mono bg-emerald-950/40 px-1 py-0.5 rounded border border-emerald-500/20">
                                    ORCHESTRATING
                                </span>
                            </div>

                            {/* 4 Pipeline Stages */}
                            <div className="grid grid-cols-4 gap-1 my-0.5 relative">
                                <div className="bg-[#141c26] rounded p-1 border border-white/5 text-center">
                                    <span className="text-[5px] sm:text-[6.5px] font-bold text-white block">PO Ingest</span>
                                    <span className="text-[4px] sm:text-[5.5px] text-white/40 font-mono">0.2ms</span>
                                </div>
                                <div className="bg-[#141c26] rounded p-1 border border-brand-accent/30 text-center">
                                    <span className="text-[5px] sm:text-[6.5px] font-bold text-brand-accent block">3-Way Match</span>
                                    <span className="text-[4px] sm:text-[5.5px] text-emerald-400 font-mono">100% OK</span>
                                </div>
                                <div className="bg-[#141c26] rounded p-1 border border-white/5 text-center">
                                    <span className="text-[5px] sm:text-[6.5px] font-bold text-white block">ERP Sync</span>
                                    <span className="text-[4px] sm:text-[5.5px] text-white/40 font-mono">SAP S/4</span>
                                </div>
                                <div className="bg-[#141c26] rounded p-1 border border-emerald-500/20 text-center">
                                    <span className="text-[5px] sm:text-[6.5px] font-bold text-emerald-400 block">Cleared</span>
                                    <span className="text-[4px] sm:text-[5.5px] text-emerald-400 font-mono">$0-Touch</span>
                                </div>
                            </div>

                            {/* Live Micro-Throughput Step Graph */}
                            <div className="my-0.5 bg-[#090d12] rounded p-1 border border-white/5 flex items-center justify-between gap-1">
                                <span className="text-[4.5px] sm:text-[6px] text-white/50 font-mono uppercase">LATENCY PROFILE:</span>
                                <div className="flex-1 h-2 flex items-end gap-0.5 px-1">
                                    {[30, 45, 25, 70, 40, 90, 35, 60, 20, 85, 50, 40, 65, 30, 80].map((h, i) => (
                                        <div key={i} className="flex-1 bg-brand-primary/60 rounded-t-[1px]" style={{ height: `${h}%` }}></div>
                                    ))}
                                </div>
                                <span className="text-[4.5px] sm:text-[6px] text-brand-accent font-mono">AVG 2.1ms</span>
                            </div>

                            {/* Log Stream Ticker */}
                            <div className="bg-[#080c10] rounded px-1.5 py-0.5 border border-white/5 flex items-center justify-between text-[4.5px] sm:text-[6.5px] font-mono">
                                <div className="flex items-center gap-1 truncate text-white/50">
                                    <Terminal className="w-2 h-2 text-brand-accent shrink-0" />
                                    <span className="text-brand-accent/90 truncate">{liveLogs[activeLogIndex].text}</span>
                                </div>
                                <span className="text-emerald-400 text-[4px] sm:text-[5.5px] shrink-0 uppercase ml-1">AUTO-EXEC</span>
                            </div>
                        </div>

                        {/* Right: Comparative Multi-Curve Area & Bar Chart */}
                        <div className="col-span-12 sm:col-span-5 bg-[#0e141c]/90 rounded-md border border-white/10 p-1.5 sm:p-2 flex flex-col justify-between">
                            <div className="flex justify-between items-center mb-0.5">
                                <div className="flex items-center gap-1">
                                    <TrendingUp className="text-emerald-400 w-2.5 h-2.5" />
                                    <span className="text-[6px] sm:text-[7.5px] font-bold text-white uppercase tracking-wider">
                                        RESOLUTION
                                    </span>
                                </div>
                                <span className="text-[5px] sm:text-[6.5px] text-brand-accent font-mono">30D TREND</span>
                            </div>

                            {/* Rich Area Multi-Curve SVG Graph */}
                            <div className="w-full h-9 sm:h-12 relative my-auto">
                                <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#006D5B" stopOpacity="0.5" />
                                            <stop offset="100%" stopColor="#006D5B" stopOpacity="0.0" />
                                        </linearGradient>
                                        <linearGradient id="chartLine" x1="0" y1="0" x2="1" y2="0">
                                            <stop offset="0%" stopColor="#006D5B" />
                                            <stop offset="50%" stopColor="#B2D8D8" />
                                            <stop offset="100%" stopColor="#10b981" />
                                        </linearGradient>
                                    </defs>
                                    {/* Secondary baseline comparison curve */}
                                    <path d="M0,55 Q50,48 100,52 T200,46" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="3 2" />
                                    
                                    {/* Primary Area Fill */}
                                    <path d="M0,50 Q40,35 80,42 T140,20 T200,10 L200,60 L0,60 Z" fill="url(#chartGrad)" />
                                    {/* Primary Line */}
                                    <path d="M0,50 Q40,35 80,42 T140,20 T200,10" fill="none" stroke="url(#chartLine)" strokeWidth="2" />
                                </svg>
                            </div>

                            {/* Dynamic Multi-Bar Volume Meter */}
                            <div className="flex items-center justify-between gap-1 pt-1 border-t border-white/5 text-[4.5px] sm:text-[6.5px] font-mono text-white/50">
                                <span>FRICTION: 0.02%</span>
                                <div className="flex items-center gap-0.5">
                                    <span className="w-1.5 h-1.5 rounded-[1px] bg-brand-primary"></span>
                                    <span className="w-1.5 h-2 rounded-[1px] bg-brand-accent"></span>
                                    <span className="w-1.5 h-2.5 rounded-[1px] bg-emerald-400"></span>
                                </div>
                                <span className="text-brand-accent">SAVINGS: $482K</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Status Bar with Live Real-time Oscilloscope Pulse Wave */}
                    <div className="bg-[#0e141c]/80 rounded-md border border-white/10 p-1 sm:p-1.5 flex items-center justify-between text-[5.5px] sm:text-[7.5px]">
                        <span className="font-bold text-white tracking-wider uppercase font-heading">
                            LOGIC ENGINE <span className="text-white/40 font-normal font-mono">| US-EAST</span>
                        </span>

                        {/* Center Oscilloscope Telemetry Stream */}
                        <div className="hidden sm:flex items-center gap-1.5 opacity-70 w-28 h-2">
                            <svg className="w-full h-full" viewBox="0 0 100 12" preserveAspectRatio="none">
                                <path d="M0,6 L20,6 L25,1 L30,11 L35,6 L50,6 L55,2 L60,10 L65,6 L100,6" fill="none" stroke="#B2D8D8" strokeWidth="1.5" />
                            </svg>
                        </div>

                        <div className="flex items-center gap-2 font-mono">
                            <span className="px-1.5 py-0.5 rounded bg-[#006D5B]/30 border border-[#006D5B]/50 text-[5px] sm:text-[6.5px] text-brand-accent font-semibold">
                                AUTO-PILOT
                            </span>
                            <span className="text-emerald-400 font-bold">STATUS: OPTIMAL</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Laptop Base / Shadow Edge */}
            <div 
                className="absolute bottom-[2%] sm:bottom-[4%] left-[6%] sm:left-[9%] w-[88%] sm:w-[82%] h-[1.8%] sm:h-[2.5%] bg-[#1a2029] rounded-b-xl origin-top shadow-[0_15px_30px_rgba(0,0,0,0.9)] -z-5"
                style={{ transform: 'perspective(1200px) rotateX(70deg)' }}
            />

            {/* ========================================================================= */}
            {/* 2. TABLET SCREEN (Left): Autonomous Node Performance & Logic Matrix       */}
            {/* ========================================================================= */}
            <div 
                className={`absolute left-[-4%] sm:left-[0%] top-[12%] sm:top-[16%] w-[54%] sm:w-[46%] aspect-[4/3] rounded-[1rem] sm:rounded-[1.5rem] bg-[#121820] border-[2.5px] sm:border-[4px] border-[#222c38] shadow-[0_25px_50px_rgba(0,0,0,0.75),0_0_25px_rgba(0,109,91,0.25)] z-20 overflow-hidden transition-all duration-700 ${
                    bootPhase >= 2 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : 'opacity-0 translate-y-[30px] scale-95'
                } ${isAmbientActive ? 'animate-ambient-left' : ''}`}
                style={{
                    transform: isAmbientActive
                        ? undefined
                        : `translateY(${bootPhase >= 2 ? '0px' : '30px'}) rotateY(${leftTiltY}deg) rotateX(${leftTiltX}deg) rotate(-6deg)`,
                    transformStyle: 'preserve-3d',
                    transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)',
                    transitionProperty: 'transform, opacity, box-shadow'
                }}
            >
                {/* Mint scan sweep line */}
                {isScanning && (
                    <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
                        <div 
                            className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-[#B2D8D8]/50 to-transparent"
                            style={{ animation: 'border-scan-sweep 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards' }}
                        />
                    </div>
                )}

                {/* Tablet Content */}
                <div className="w-full h-full bg-[#0c1218]/98 p-2.5 sm:p-3.5 font-body flex flex-col justify-between relative text-white">
                    {/* Header with Mini Radial Ring Metric */}
                    <div>
                        <div className="flex items-center justify-between mb-1 sm:mb-1.5">
                            <div className="flex items-center gap-1 sm:gap-1.5">
                                <img src={logoImage} alt="Kybrant" className="w-3 h-3 sm:w-4 sm:h-4 object-contain" />
                                <span className="text-[7px] sm:text-[9px] font-bold tracking-tight text-white font-heading">KYBRANT</span>
                            </div>
                            
                            {/* Radial Ring Mini Gauge */}
                            <div className="flex items-center gap-1 bg-emerald-950/60 px-1 py-0.5 rounded border border-emerald-500/20">
                                <svg className="w-2.5 h-2.5 -rotate-90" viewBox="0 0 36 36">
                                    <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
                                    <circle cx="18" cy="18" r="14" fill="none" stroke="#10b981" strokeWidth="4" strokeDasharray="88, 100" />
                                </svg>
                                <span className="text-[5px] sm:text-[6.5px] font-mono text-emerald-400">99.99% HEALTH</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between border-b border-white/10 pb-1 mb-1">
                            <div className="flex items-center gap-1">
                                <Activity className="text-brand-accent w-2.5 h-2.5" />
                                <span className="text-[6px] sm:text-[7.5px] font-bold uppercase tracking-wider text-white/80">
                                    NODE PERFORMANCE
                                </span>
                            </div>
                            <span className="text-[5px] sm:text-[6.5px] font-mono text-white/40">3 NODES</span>
                        </div>
                    </div>

                    {/* Process Execution Meters */}
                    <div className="space-y-1 my-auto">
                        {procBars.map((proc, index) => (
                            <div key={index} className="space-y-0.5 bg-[#101720] p-1 sm:p-1.5 rounded border border-white/5">
                                <div className="flex justify-between text-[5.5px] sm:text-[7.5px] font-mono">
                                    <div className="flex items-center gap-1">
                                        <span className="text-brand-accent font-semibold">{proc.code}</span>
                                        <span className="text-white/70 font-medium">{proc.name}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="text-white/40 text-[4.5px] sm:text-[6px]">{proc.ops}</span>
                                        <span className="font-bold text-emerald-400">{proc.current}%</span>
                                    </div>
                                </div>
                                <div className="h-1 sm:h-1.5 w-full bg-[#080d12] rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-gradient-to-r from-[#004C4C] to-[#006D5B] rounded-full bar-teal-glow"
                                        style={{ 
                                            width: `${proc.current}%`,
                                            transition: 'width 0.8s cubic-bezier(0.25, 1, 0.5, 1)'
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Micro Equalizer Histogram & Waveform Telemetry */}
                    <div className="bg-[#101720] p-1 sm:p-1.5 rounded border border-white/5">
                        <div className="flex justify-between items-center mb-0.5 text-[5px] sm:text-[6.5px] text-white/60 font-mono">
                            <span className="flex items-center gap-1">
                                <Zap className="w-2 h-2 text-brand-accent" />
                                LOAD BALANCER
                            </span>
                            <span className="text-brand-accent">64 THREADS</span>
                        </div>
                        <div className="h-4 sm:h-5 flex items-end gap-0.5">
                            {[45, 75, 60, 90, 55, 80, 70, 95, 65, 85, 50, 78, 62, 88].map((val, i) => (
                                <div key={i} className="flex-1 bg-gradient-to-t from-brand-primary to-brand-accent/60 rounded-t-[1px]" style={{ height: `${val}%` }}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ========================================================================= */}
            {/* 3. PHONE SCREEN (Right): Executive Mobile Command & Verification Center    */}
            {/* ========================================================================= */}
            <div 
                className={`absolute right-[-3%] sm:right-[1%] bottom-[5%] sm:bottom-[9%] w-[28%] sm:w-[23%] aspect-[9/19] rounded-[1.2rem] sm:rounded-[2rem] bg-[#121820] border-[2.5px] sm:border-[4.5px] border-[#222c38] shadow-[0_30px_60px_rgba(0,0,0,0.85),0_0_30px_rgba(0,109,91,0.3)] z-30 overflow-hidden transition-all duration-700 ${
                    bootPhase >= 3 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : 'opacity-0 translate-y-[30px] scale-95'
                } ${isAmbientActive ? 'animate-ambient-right' : ''}`}
                style={{
                    transform: isAmbientActive
                        ? undefined
                        : `translateY(${bootPhase >= 3 ? '0px' : '30px'}) rotateY(${rightTiltY}deg) rotateX(${rightTiltX}deg) rotate(4deg)`,
                    transformStyle: 'preserve-3d',
                    transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)',
                    transitionProperty: 'transform, opacity, box-shadow'
                }}
            >
                {/* Mint scan sweep line */}
                {isScanning && (
                    <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
                        <div 
                            className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-[#B2D8D8]/50 to-transparent"
                            style={{ animation: 'border-scan-sweep 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards' }}
                        />
                    </div>
                )}

                {/* Mobile Screen Interior */}
                <div className="w-full h-full bg-[#090e14]/98 p-2 sm:p-2.5 flex flex-col justify-between relative font-body text-white">
                    {/* Top Speaker Notch & Header */}
                    <div className="flex flex-col items-center">
                        <div className="w-6 sm:w-8 h-0.5 sm:h-1 bg-[#222c38] rounded-full mx-auto mb-1"></div>
                        <div className="flex items-center gap-1 opacity-90">
                            <img src={logoImage} alt="Kybrant" className="w-2.5 h-2.5 sm:w-3 sm:h-3 object-contain" />
                            <span className="text-[6px] sm:text-[7.5px] font-bold tracking-tight text-white font-heading">KYBRANT MOBILE</span>
                        </div>
                    </div>

                    {/* Center Security & Verification Shield */}
                    <div className="flex flex-col items-center my-auto w-full">
                        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-b from-[#006D5B]/30 to-[#004C4C]/20 border border-[#006D5B]/50 flex items-center justify-center mb-1">
                            <Shield className="text-brand-accent w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <span className="text-[6px] sm:text-[8px] text-white font-bold tracking-wide">
                            Security Guardrails
                        </span>
                        <span className="text-[5px] sm:text-[6px] text-emerald-400 font-mono mt-0.5">
                            SOC-2 TYPE II ACTIVE
                        </span>

                        {/* Invoice Clearance Mini Card */}
                        <div className="w-full bg-[#101720] rounded-md p-1 sm:p-1.5 border border-white/10 mt-1 text-left space-y-0.5">
                            <div className="flex justify-between items-center text-[5px] sm:text-[6.5px]">
                                <span className="text-white/60 font-mono">PO #9928</span>
                                <span className="text-brand-accent font-bold">$128,400</span>
                            </div>
                            <div className="flex items-center justify-between text-[4px] sm:text-[5.5px] text-emerald-400 font-mono pt-0.5 border-t border-white/5">
                                <span>3-WAY MATCH [OK]</span>
                                <span>RISK 0.01 [OK]</span>
                            </div>
                        </div>

                        {/* 7-Day Approval Sparkline Curve (Filling space elegantly) */}
                        <div className="w-full bg-[#101720]/80 rounded p-1 border border-white/5 mt-1">
                            <div className="flex justify-between text-[4px] sm:text-[5.5px] text-white/50 font-mono mb-0.5">
                                <span>7D VELOCITY</span>
                                <span className="text-emerald-400">+24.8%</span>
                            </div>
                            <div className="h-3 w-full">
                                <svg className="w-full h-full" viewBox="0 0 80 16" preserveAspectRatio="none">
                                    <path d="M0,14 Q20,10 40,4 T80,2" fill="none" stroke="#10b981" strokeWidth="1.5" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Compact Interactive Deploy Button */}
                    <div className="relative group/deploy mt-0.5">
                        <button 
                            onClick={handleDeployClick}
                            className="relative w-full py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-[#006D5B] to-[#004C4C] hover:from-[#00856F] hover:to-[#005B5B] text-white text-[5.5px] sm:text-[7.5px] font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_2px_10px_rgba(0,109,91,0.3)] border border-brand-accent/25 flex items-center justify-center gap-1 active:scale-95"
                        >
                            {deployStatus === 'idle' && (
                                <span>DEPLOY AGENT</span>
                            )}
                            {deployStatus === 'deploying' && (
                                <>
                                    <div className="w-2 h-2 border border-white border-t-transparent rounded-full animate-spin"></div>
                                    <span>DEPLOYING</span>
                                </>
                            )}
                            {deployStatus === 'deployed' && (
                                <>
                                    <CheckCircle2 className="w-2.5 h-2.5 text-brand-accent" />
                                    <span>ACTIVE</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeviceShowcase;
