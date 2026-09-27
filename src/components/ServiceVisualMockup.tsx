import React from 'react';
import {
  TrendingUp,
  BarChart3,
  CheckCircle2,
  Code2,
  Layers,
  Smartphone,
  Server,
  Play,
  Share2,
  Users,
  Search,
  Sparkles,
} from 'lucide-react';
import { ServiceDetail } from '../data/servicesData.ts';

interface ServiceVisualMockupProps {
  service: ServiceDetail;
}

export const ServiceVisualMockup: React.FC<ServiceVisualMockupProps> = ({ service }) => {
  const type = service.visualType;

  if (type === 'analytics') {
    return (
      <div className="relative rounded-xl border border-[#1E334D] bg-[#071A33] text-white p-5 shadow-2xl overflow-hidden font-sans">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-[#1E334D] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-[#94A3B8]">{service.name} Campaign Performance</span>
          </div>
          <span className="text-[10px] font-mono bg-[#1E334D] text-[#38BDF8] px-2 py-0.5 rounded">
            Live Attribution
          </span>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="p-3 rounded-lg bg-[#0B2A4F]/60 border border-[#1E334D]">
            <span className="text-[10px] text-[#94A3B8] uppercase block">Conversions</span>
            <div className="text-lg font-bold text-white mt-0.5">842</div>
            <div className="text-[10px] text-emerald-400 flex items-center gap-0.5 mt-0.5">
              <TrendingUp className="w-3 h-3" /> +28.4%
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#0B2A4F]/60 border border-[#1E334D]">
            <span className="text-[10px] text-[#94A3B8] uppercase block">ROAS</span>
            <div className="text-lg font-bold text-[#38BDF8] mt-0.5">4.8x</div>
            <div className="text-[10px] text-emerald-400 flex items-center gap-0.5 mt-0.5">
              <TrendingUp className="w-3 h-3" /> +14.2%
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#0B2A4F]/60 border border-[#1E334D]">
            <span className="text-[10px] text-[#94A3B8] uppercase block">Avg. CPL</span>
            <div className="text-lg font-bold text-white mt-0.5">₹312</div>
            <div className="text-[10px] text-emerald-400 flex items-center gap-0.5 mt-0.5">
              -18.6% cost
            </div>
          </div>
        </div>

        {/* Visual Simulated Chart Bars */}
        <div className="p-3 rounded-lg bg-[#0B2A4F]/40 border border-[#1E334D] space-y-2">
          <div className="flex items-center justify-between text-[11px] text-[#94A3B8] mb-1">
            <span>Intent-Keyword Query Quality</span>
            <span className="text-emerald-400 font-mono">9.8/10 Score</span>
          </div>
          <div className="h-2 w-full bg-[#1E334D] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#2563EB] to-[#38BDF8] rounded-full w-[94%]" />
          </div>
          <div className="flex justify-between text-[10px] text-[#64748B] pt-1">
            <span>Exact Match: 76%</span>
            <span>Phrase Intent: 24%</span>
            <span>Negative Filtered: 100%</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'code') {
    return (
      <div className="relative rounded-xl border border-[#1E334D] bg-[#071A33] text-white p-5 shadow-2xl overflow-hidden font-mono text-xs">
        <div className="flex items-center justify-between border-b border-[#1E334D] pb-3 mb-4">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[11px] text-[#94A3B8]">AppEngine.tsx</span>
          </div>
          <span className="text-[10px] bg-[#1E334D] text-emerald-400 px-2 py-0.5 rounded">
            Build Passing · 99 PageSpeed
          </span>
        </div>

        <div className="space-y-1.5 text-[11px] text-[#94A3B8]">
          <div className="text-[#38BDF8]">
            <span className="text-[#F43F5E]">export const</span> {service.name.replace(/[^a-zA-Z]/g, '')}Module = () =&gt; &#123;
          </div>
          <div className="pl-4 text-[#A78BFA]">
            <span className="text-[#38BDF8]">const</span> [performance] = useOptimization(&#123;
          </div>
          <div className="pl-8 text-emerald-300">
            coreWebVitals: &apos;OPTIMAL&apos;,
          </div>
          <div className="pl-8 text-emerald-300">
            serverLatency: &apos;18ms&apos;,
          </div>
          <div className="pl-8 text-emerald-300">
            seoSchema: &apos;JSON-LD Verified&apos;,
          </div>
          <div className="pl-4 text-[#A78BFA]">&#125;);</div>
          <div className="pl-4 text-[#F43F5E]">return &lt;<span className="text-[#38BDF8]">EnterpriseEngine</span> status=&#123;performance&#125; /&gt;;</div>
          <div className="text-[#38BDF8]">&#125;;</div>
        </div>

        <div className="mt-4 pt-3 border-t border-[#1E334D] flex items-center justify-between text-[10px] text-[#64748B]">
          <span>TypeScript 5.8 · React 19</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Production Deployed
          </span>
        </div>
      </div>
    );
  }

  if (type === 'crm') {
    return (
      <div className="relative rounded-xl border border-[#1E334D] bg-[#071A33] text-white p-5 shadow-2xl overflow-hidden font-sans">
        <div className="flex items-center justify-between border-b border-[#1E334D] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-xs font-semibold">Sales Pipeline &amp; Lead Ingestion</span>
          </div>
          <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">
            Zero Lead Leakage
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="p-2.5 rounded bg-[#0B2A4F]/60 border border-[#1E334D]">
            <div className="text-[10px] font-bold text-[#94A3B8] uppercase">New Leads</div>
            <div className="text-base font-bold text-white mt-1">42</div>
            <div className="text-[9px] text-[#38BDF8] mt-1 font-mono">Auto-assigned</div>
          </div>
          <div className="p-2.5 rounded bg-[#0B2A4F]/60 border border-[#1E334D]">
            <div className="text-[10px] font-bold text-[#94A3B8] uppercase">In Proposal</div>
            <div className="text-base font-bold text-amber-300 mt-1">18</div>
            <div className="text-[9px] text-amber-300/80 mt-1 font-mono">Active Deals</div>
          </div>
          <div className="p-2.5 rounded bg-[#0B2A4F]/60 border border-[#1E334D]">
            <div className="text-[10px] font-bold text-[#94A3B8] uppercase">Closed Won</div>
            <div className="text-base font-bold text-emerald-400 mt-1">₹14.2L</div>
            <div className="text-[9px] text-emerald-400 mt-1 font-mono">This Month</div>
          </div>
        </div>

        <div className="mt-4 p-2.5 rounded bg-[#0B2A4F]/30 border border-[#1E334D] flex items-center justify-between text-[11px]">
          <span className="text-[#94A3B8]">Average Response Time</span>
          <span className="font-bold text-emerald-400">&lt; 8 Minutes</span>
        </div>
      </div>
    );
  }

  if (type === 'mobile') {
    return (
      <div className="relative rounded-xl border border-[#1E334D] bg-[#071A33] text-white p-5 shadow-2xl overflow-hidden font-sans">
        <div className="flex items-center justify-between border-b border-[#1E334D] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-xs font-semibold">Mobile App Architecture</span>
          </div>
          <span className="text-[10px] bg-[#1E334D] text-[#38BDF8] px-2 py-0.5 rounded font-mono">
            iOS &amp; Android
          </span>
        </div>

        <div className="p-4 rounded-lg bg-[#0B2A4F]/50 border border-[#1E334D] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-white">Native UI Fluidity</span>
            <span className="text-xs font-mono text-emerald-400">60 FPS</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-white">Offline Sync Ready</span>
            <span className="text-xs font-mono text-emerald-400">SQLite / Room</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-white">App Store Compliance</span>
            <span className="text-xs font-mono text-[#38BDF8]">100% Passed</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'video') {
    return (
      <div className="relative rounded-xl border border-[#1E334D] bg-[#071A33] text-white p-5 shadow-2xl overflow-hidden font-sans">
        <div className="flex items-center justify-between border-b border-[#1E334D] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Play className="w-4 h-4 text-rose-400 fill-current" />
            <span className="text-xs font-semibold">Studio Production Timeline</span>
          </div>
          <span className="text-[10px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded font-mono">
            4K 60fps · HDR Grade
          </span>
        </div>

        <div className="space-y-2 mb-3">
          <div className="flex items-center justify-between text-[11px] text-[#94A3B8]">
            <span>First 3-Second Hook Retention</span>
            <span className="text-emerald-400 font-mono">82% Kept</span>
          </div>
          <div className="h-1.5 w-full bg-[#1E334D] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-rose-500 to-amber-400 rounded-full w-[82%]" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="p-2 rounded bg-[#0B2A4F]/40 border border-[#1E334D] text-[#94A3B8]">
            Sound: Dynamic Mastering
          </div>
          <div className="p-2 rounded bg-[#0B2A4F]/40 border border-[#1E334D] text-[#94A3B8]">
            Formats: 9:16 &amp; 16:9 Multi-Export
          </div>
        </div>
      </div>
    );
  }

  // Default: Design / Brand / Marketing Canvas
  return (
    <div className="relative rounded-xl border border-[#1E334D] bg-[#071A33] text-white p-5 shadow-2xl overflow-hidden font-sans">
      <div className="flex items-center justify-between border-b border-[#1E334D] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#38BDF8]" />
          <span className="text-xs font-semibold">{service.name} Asset System</span>
        </div>
        <span className="text-[10px] bg-[#1E334D] text-[#38BDF8] px-2 py-0.5 rounded font-mono">
          Commercial IP Included
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="p-3 rounded-lg bg-[#0B2A4F]/50 border border-[#1E334D]">
          <span className="text-[10px] text-[#94A3B8] uppercase block">Precision</span>
          <div className="text-sm font-bold text-white mt-0.5">100% Vector</div>
          <span className="text-[10px] text-[#38BDF8] mt-0.5 block">Scalable to Any Size</span>
        </div>
        <div className="p-3 rounded-lg bg-[#0B2A4F]/50 border border-[#1E334D]">
          <span className="text-[10px] text-[#94A3B8] uppercase block">Design Standards</span>
          <div className="text-sm font-bold text-emerald-400 mt-0.5">WCAG AAA</div>
          <span className="text-[10px] text-emerald-400/80 mt-0.5 block">High Contrast &amp; Clarity</span>
        </div>
      </div>

      <div className="p-2.5 rounded bg-[#0B2A4F]/30 border border-[#1E334D] flex items-center justify-between text-[11px] text-[#94A3B8]">
        <span>Export Packages</span>
        <span className="font-mono text-white">AI, EPS, SVG, PNG, PDF</span>
      </div>
    </div>
  );
};
