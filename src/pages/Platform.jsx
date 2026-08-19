import React from 'react';
import { Cpu, Network, GitFork, ShieldCheck, Zap, Activity, Sparkles } from 'lucide-react';

const capabilities = [
    {
        id: "01",
        title: "Autonomous Reasoning Core",
        tag: "Inference Engine",
        icon: Cpu,
        description: "Self-directed reasoning engines that analyze complex business contexts, formulate multi-step execution plans, and run with deterministic precision.",
        metric: "< 12ms Latency",
        accent: "from-teal-500/20 to-emerald-500/5"
    },
    {
        id: "02",
        title: "Self-Healing Integration Mesh",
        tag: "Adaptive Connectors",
        icon: Network,
        description: "Connects dynamically to legacy databases, modern SaaS tools, and APIs, auto-adapting schemas and healing endpoints without downtime.",
        metric: "200+ Connectors",
        accent: "from-cyan-500/20 to-teal-500/5"
    },
    {
        id: "03",
        title: "Multi-Agent Swarm Orchestration",
        tag: "Distributed Logic",
        icon: GitFork,
        description: "Specialized autonomous sub-agents collaborate asynchronously across workflows, delegating sub-tasks and synthesizing outcomes seamlessly.",
        metric: "Auto-Scaling",
        accent: "from-emerald-500/20 to-teal-500/5"
    },
    {
        id: "04",
        title: "Ephemeral Isolated Sandbox",
        tag: "Zero-Trust Security",
        icon: ShieldCheck,
        description: "Executes code and sensitive data transformations inside isolated, zero-retention micro-containers with strict boundary enforcement.",
        metric: "SOC 2 Type II",
        accent: "from-teal-500/20 to-cyan-500/5"
    },
    {
        id: "05",
        title: "Real-time Event Stream Processing",
        tag: "Event-Driven",
        icon: Zap,
        description: "Processes high-throughput telemetry and live webhook feeds instantly, triggering intelligent agent reactions in sub-milliseconds.",
        metric: "100k+ Events/sec",
        accent: "from-sky-500/20 to-emerald-500/5"
    },
    {
        id: "06",
        title: "Continuous Guardrails & Telemetry",
        tag: "Deterministic Verification",
        icon: Activity,
        description: "Real-time validation pipelines ensure full auditability, rollback triggers, and strict compliance alignment at every execution step.",
        metric: "100% Auditable",
        accent: "from-teal-500/20 to-emerald-500/5"
    }
];

export default function Platform() {
    return (
        <main className="pt-32 pb-24 min-h-screen relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-brand-primary/20 blur-[140px] rounded-full pointer-events-none -z-10" />
            <div className="absolute bottom-40 right-10 w-[450px] h-[350px] bg-brand-secondary/30 blur-[130px] rounded-full pointer-events-none -z-10" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.2)] hover:border-brand-accent/40 transition-colors duration-300">
                        <Sparkles size={14} className="text-brand-accent animate-pulse" />
                        <span className="text-xs font-semibold text-brand-text/90 uppercase tracking-widest">Platform Overview</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
                        The Core Engine of <span className="bg-gradient-to-r from-white via-brand-text to-brand-accent bg-clip-text text-transparent">Agentic AI.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-brand-text/70 leading-relaxed">
                        Discover the architecture that powers our autonomous workflows across the enterprise. Built for scale, security, and absolute precision.
                    </p>
                </div>

                {/* Animated Capabilities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                    {capabilities.map((cap, index) => {
                        const Icon = cap.icon;
                        return (
                            <div
                                key={cap.id}
                                className="group relative glass-panel p-8 rounded-2xl border border-white/10 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-brand-accent/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(0,109,91,0.25)] animate-card-float overflow-hidden flex flex-col justify-between"
                                style={{
                                    animationDelay: `${index * 0.45}s`,
                                    animationDuration: `${6 + (index % 3) * 0.8}s`
                                }}
                            >
                                {/* Top Edge Animated Shimmer Bar */}
                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />

                                {/* Internal Ambient Gradient Mesh on Hover */}
                                <div className={`absolute -inset-1 bg-gradient-to-br ${cap.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none -z-10`} />

                                <div>
                                    {/* Top Row: Badge & Status / Metric */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-brand-primary/20 border border-brand-accent/30 flex items-center justify-center text-brand-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-primary/40 group-hover:border-brand-accent/70 group-hover:shadow-[0_0_15px_rgba(178,216,216,0.35)]">
                                            <Icon size={22} className="transition-transform duration-300 group-hover:rotate-6" />
                                        </div>

                                        <div>
                                            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-brand-accent/90 group-hover:border-brand-accent/40 group-hover:bg-brand-primary/20 transition-colors duration-300">
                                                {cap.id}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Tag pill */}
                                    <div className="mb-3">
                                        <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-accent/70 bg-brand-primary/10 px-2 py-0.5 rounded border border-brand-accent/20">
                                            {cap.tag}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-200">
                                        {cap.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-brand-text/70 leading-relaxed text-sm mb-6">
                                        {cap.description}
                                    </p>
                                </div>

                                {/* Bottom Metric */}
                                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-brand-text/60">
                                    <span className="font-mono text-brand-accent/80">{cap.metric}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
