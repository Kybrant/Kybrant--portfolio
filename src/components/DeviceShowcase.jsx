import React from 'react';
import { Activity, Cpu, Globe, Zap, Terminal, BarChart3, Binary, Shield } from 'lucide-react';
import logoImage from '../assets/kybrant-logo.png';

const DeviceShowcase = () => {
    return (
        <div className="relative w-full aspect-[1/1] sm:aspect-[4/3] lg:aspect-video flex items-center justify-center perspective-[2000px] scale-90 sm:scale-100">
            {/* Tablet (Left) */}
            <div 
                className="absolute left-[-5%] sm:left-[0%] top-[20%] w-[50%] sm:w-[42%] aspect-[4/3] rounded-[1.5rem] sm:rounded-[2rem] bg-[#1a1f26] border-[4px] sm:border-[8px] border-[#2d343d] shadow-2xl z-10 overflow-hidden group hover:z-30 transition-all duration-500 hover:scale-105"
                style={{ transform: 'rotateY(15deg) rotateX(5deg) rotate(-8deg)', transformStyle: 'preserve-3d' }}
            >
                <div className="w-full h-full bg-brand-bg/90 p-2 sm:p-4 font-body relative">
                    {/* Device Logo */}
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 flex items-center gap-1 opacity-80">
                        <img src={logoImage} alt="Kybrant" className="w-2.5 h-2.5 sm:w-4 sm:h-4 object-contain" />
                        <span className="text-[6px] sm:text-[8px] font-bold tracking-tighter text-white">KYBRANT</span>
                    </div>

                    <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-4 mt-6 sm:mt-8 border-b border-white/10 pb-1 sm:pb-2">
                        <Activity className="text-brand-accent w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-[7px] sm:text-[10px] font-bold uppercase tracking-tighter text-brand-text/60">Node Performance</span>
                    </div>
                    
                    <div className="space-y-2 sm:space-y-3">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="space-y-1">
                                <div className="flex justify-between text-[6px] sm:text-[8px] text-brand-text/40">
                                    <span>Proc-0{i}</span>
                                    <span>{40 + i * 15}%</span>
                                </div>
                                <div className="h-0.5 sm:h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-brand-primary" style={{ width: `${40 + i * 15}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-3 sm:mt-6 p-1 sm:p-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20">
                        <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                            <Zap className="text-brand-accent w-2 h-2 sm:w-3 sm:h-3" />
                            <span className="text-[7px] sm:text-[9px] font-medium text-brand-text">Active Optimization</span>
                        </div>
                        <div className="h-8 sm:h-12 flex items-end gap-0.5 sm:gap-1">
                            {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8].map((h, i) => (
                                <div key={i} className="flex-1 bg-brand-accent/30 rounded-[1px] sm:rounded-sm animate-pulse" style={{ height: `${h * 100}%` }}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Laptop (Middle, Background) */}
            <div 
                className="relative w-[90%] sm:w-[82%] aspect-[3/2] rounded-[1rem] sm:rounded-[1.5rem] bg-[#1a1f26] border-[6px] sm:border-[12px] border-[#2d343d] shadow-2xl z-0 overflow-hidden group-hover:scale-[0.98] transition-all duration-500"
                style={{ transform: 'rotateX(8deg)', transformStyle: 'preserve-3d' }}
            >
                {/* Screen Content */}
                <div className="w-full h-full bg-brand-bg/95 flex flex-col">
                    {/* Header */}
                    <div className="h-6 sm:h-10 border-b border-white/5 flex items-center px-2 sm:px-4 justify-between">
                        <div className="flex items-center gap-2 sm:gap-4">
                            <div className="hidden sm:flex gap-1.5 mr-2">
                                <div className="w-2 h-2 rounded-full bg-red-500/20 border border-red-500/40"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500/20 border border-green-500/40"></div>
                            </div>
                            {/* Device Logo */}
                            <div className="flex items-center gap-1 sm:gap-2">
                                <img src={logoImage} alt="Kybrant" className="w-3 h-3 sm:w-5 sm:h-5 object-contain" />
                                <span className="text-[7px] sm:text-[10px] font-bold tracking-tighter text-white/50">KYBRANT CORE v4.0</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-4">
                            <Cpu className="text-brand-primary w-2.5 h-2.5 sm:w-4 sm:h-4" />
                            <Globe className="text-white/20 w-2.5 h-2.5 sm:w-4 sm:h-4" />
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-3 sm:p-8 grid grid-cols-12 gap-3 sm:gap-8 overflow-hidden">
                        {/* Sidebar/Terminal */}
                        <div className="col-span-12 sm:col-span-4 bg-black/40 rounded-lg sm:rounded-xl p-3 sm:p-5 border border-white/5 font-mono text-[8px] sm:text-[10px] text-brand-accent/70 overflow-hidden">
                            <div className="flex items-center gap-2 mb-2 sm:mb-4">
                                <Terminal size={10} className="text-brand-primary" />
                                <span className="text-white/40 uppercase tracking-widest text-[6px] sm:text-[8px]">Autonomous OS</span>
                            </div>
                            <div className="space-y-1 sm:space-y-3 opacity-80 h-[40px] sm:h-auto overflow-hidden">
                                <div className="flex items-center gap-1.5 font-bold truncate"><div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-brand-primary rounded-full"></div>[SYSTEM START]</div>
                                <div className="text-brand-primary ml-2 sm:ml-3 animate-pulse truncate underline underline-offset-2">Running: kybrant_core...</div>
                                <div className="hidden sm:flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div>Vector database connected</div>
                                <div className="text-brand-primary flex items-center gap-2 truncate"><div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-brand-primary rounded-full"></div>New Agent Deployed</div>
                            </div>
                        </div>

                        {/* Visualizer */}
                        <div className="col-span-12 sm:col-span-8 flex flex-col gap-3 sm:gap-8">
                            <div className="grid grid-cols-2 gap-3 sm:gap-8">
                                <div className="aspect-[3/2] bg-white/5 rounded-lg sm:rounded-2xl border border-white/10 p-2 sm:p-6 flex flex-col justify-between group/card">
                                    <div className="flex justify-between items-center">
                                        <BarChart3 className="text-brand-primary w-3 h-3 sm:w-6 sm:h-6" />
                                        <span className="text-[6px] sm:text-[11px] text-white/40 uppercase tracking-wider font-bold">Network</span>
                                    </div>
                                    <span className="text-sm sm:text-4xl font-bold text-white tracking-tighter">84.2<span className="text-[8px] sm:text-sm text-brand-accent ml-0.5 sm:ml-1 font-normal">%</span></span>
                                </div>
                                <div className="aspect-[3/2] bg-white/5 rounded-lg sm:rounded-2xl border border-white/10 p-2 sm:p-6 flex flex-col justify-between group/card">
                                    <div className="flex justify-between items-center">
                                        <Binary className="text-brand-accent w-3 h-3 sm:w-6 sm:h-6" />
                                        <span className="text-[6px] sm:text-[11px] text-white/40 uppercase tracking-wider font-bold">Token Flow</span>
                                    </div>
                                    <span className="text-sm sm:text-4xl font-bold text-white tracking-tighter">1.2M</span>
                                </div>
                            </div>
                            <div className="flex-1 min-h-[60px] sm:min-h-[140px] bg-gradient-to-br from-brand-primary/15 to-transparent rounded-lg sm:rounded-2xl border border-brand-primary/20 p-2 sm:p-6 overflow-hidden relative group/graph">
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-12 h-12 sm:w-48 sm:h-48 rounded-full border border-brand-accent/5 animate-[ping_4s_linear_infinite]"></div>
                                </div>
                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-[8px] sm:text-sm font-bold text-white uppercase tracking-wider">Logic Engine</h3>
                                        </div>
                                        <span className="px-1 sm:px-3 py-0.5 sm:py-1 rounded-full bg-brand-primary/20 border border-brand-primary/30 text-[6px] sm:text-[10px] text-brand-accent font-bold">AUTO-PILOT</span>
                                    </div>
                                    <div className="flex items-center gap-1 sm:gap-3 text-[7px] sm:text-[12px] text-brand-primary font-bold">
                                        <div className="w-1 sm:w-2.5 h-1 sm:h-2.5 rounded-full bg-brand-primary animate-pulse shadow-[0_0_8px_#006D5B]"></div>
                                        STATUS: OPTIMAL
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Laptop Base */}
            <div 
                className="absolute bottom-[0%] sm:bottom-[3%] left-[5%] sm:left-[10%] w-[90%] sm:w-[82%] h-[2%] sm:h-[3%] bg-[#2d343d] rounded-b-xl origin-top shadow-3xl"
                style={{ transform: 'perspective(1200px) rotateX(70deg)' }}
            ></div>

            {/* Phone (Right, Overlapping) */}
            <div 
                className="absolute right-[-2%] sm:right-[0%] bottom-[5%] sm:bottom-[10%] w-[25%] sm:w-[21%] aspect-[9/19] rounded-[1.5rem] sm:rounded-[2.5rem] bg-[#1a1f26] border-[4px] sm:border-[6px] border-[#2d343d] shadow-2xl z-20 overflow-hidden group hover:z-30 transition-all duration-500 hover:scale-110"
                style={{ transform: 'rotateY(-15deg) rotateX(10deg) rotate(4deg)', transformStyle: 'preserve-3d' }}
            >
                <div className="w-full h-full bg-brand-bg/95 p-2 sm:p-5 flex flex-col relative">
                    {/* Device Logo */}
                    <div className="absolute top-4 sm:top-8 left-0 right-0 flex justify-center opacity-80">
                         <img src={logoImage} alt="Kybrant" className="w-3 h-3 sm:w-5 sm:h-5 object-contain" />
                    </div>

                    <div className="w-10 sm:w-16 h-2 sm:h-4 bg-[#2d343d] rounded-full mx-auto mb-4 sm:mb-8 mt-1 sm:mt-2"></div>
                    <div className="space-y-4 sm:space-y-6">
                        <div className="flex flex-col items-center gap-1 sm:gap-2">
                            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-brand-primary/20 border border-brand-primary/40 flex items-center justify-center">
                                <Shield className="text-brand-accent w-4 h-4 sm:w-6 sm:h-6" />
                            </div>
                            <span className="text-[6px] sm:text-[10px] text-white font-medium">Security</span>
                        </div>
                        <div className="space-y-2 sm:space-y-3">
                            {[1].map((i) => (
                                <div key={i} className="p-1 sm:p-2 rounded-lg bg-white/5 border border-white/5 flex items-center gap-1.5 sm:gap-3">
                                    <div className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-brand-primary"></div>
                                    <div className="flex-1 h-1 sm:h-2 bg-white/10 rounded-full"></div>
                                </div>
                            ))}
                        </div>
                        <div className="pt-2 sm:pt-4 mt-2 sm:mt-4 border-t border-white/10">
                            <button className="w-full py-1 sm:py-2 rounded-lg sm:rounded-xl bg-brand-primary text-white text-[6px] sm:text-[10px] font-bold shadow-[0_2px_8px_rgba(0,109,91,0.3)]">
                                DEPLOY
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeviceShowcase;
