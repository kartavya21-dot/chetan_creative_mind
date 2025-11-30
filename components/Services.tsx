"use client";
import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

const CARDS = [
  {
    title: "AI Video Editing",
    desc: "High-impact edits powered by AI: auto-cut, scene rebuilds, voice clones, subtitles and platform-native exports (YT/IG/TT).",
    points: ["Fast turnaround","Platform-native formats","Data-backed hooks"]
  },
  {
    title: "Creative Branding",
    desc: "Visual identity systems with logo, color tokens, typography, and social kits that scale across campaigns.",
    points: ["Logo & system","Brand voice","Social kit"]
  },
  {
    title: "Marketing Strategy",
    desc: "Full-funnel strategy: content, paid ads, influencers, and attribution with dashboards.",
    points: ["Funnel mapping","Influencer ops","Paid performance"]
  }
];

export default function Services(){
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {CARDS.map((c,i)=> (
        <motion.article key={c.title} initial={{opacity:0, y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.06}}
          className="card p-6 hover:shadow-lg hover:-translate-y-0.5 transition">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">{c.title}</h3>
            <span className="badge">2025</span>
          </div>
          <p className="mt-3 text-sm text-slate-600">{c.desc}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {c.points.map(p=> <li key={p} className="flex items-center gap-2"><span>•</span>{p}</li>)}
          </ul>
          <div className="mt-6">
            <WhatsAppButton label="Get Pricing"/>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
