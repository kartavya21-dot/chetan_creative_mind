"use client";
import { motion } from "framer-motion";
import WhatsAppButton from "../components/WhatsAppButton";
import Services from "../components/Services";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";

export default function HomePage(){
  return (
    <main>
      {/* Hero */}
      <section id="home" className="section">
        <div className="container grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="badge">AI + Creative Agency</span>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              We craft <span className="text-primary">AI-powered videos</span>, bold branding & growth strategies.
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-prose">
              2025-ready performance website built for speed (&lt;1s feel on Vercel), trust and conversions. Clean UI like Instagram, Myntra and Amazon product cards.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <WhatsAppButton size="lg" label="Talk on WhatsApp"/>
              <a href="#services" className="btn btn-outline">Explore Services</a>
            </div>
            <ul className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              {["Fast","Secure","SEO-Ready","Responsive"].map(k=> (
                <li key={k} className="card px-3 py-2 text-center">{k}</li>
              ))}
            </ul>
          </div>
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}
            className="card aspect-[4/3] w-full bg-gradient-to-br from-primary/15 via-fuchsia-500/10 to-blue-500/10"/>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section bg-slate-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">Services</h2>
          <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">Pick a package or mix what you need. Hover for details.</p>
          <Services />
        </div>
      </section>

      {/* Blogs */}
      <section id="blogs" className="section">
        <div className="container">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Insights & Case Studies</h2>
            <WhatsAppButton variant="ghost" label="WhatsApp us"/>
          </div>
          <Blogs />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section bg-slate-50">
        <div className="container">
          <Contact />
        </div>
      </section>
    </main>
  );
}