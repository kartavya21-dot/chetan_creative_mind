import WhatsAppButton from "./WhatsAppButton";

export default function Contact(){
  return (
    <div className="grid lg:grid-cols-2 gap-10">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let’s build your brand</h2>
        <p className="mt-4 text-slate-600">Ping us on WhatsApp and we’ll reply within one business day. Clear pricing, quick timelines, and a friendly process.</p>
        <div className="mt-6 flex gap-3">
          <WhatsAppButton size="lg" label="Open WhatsApp"/>
        </div>
        <ul className="mt-6 space-y-3 text-sm">
          <li>📧 hello@yourbrand.com</li>
          <li>📍 India</li>
          <li>🔗 Instagram & FrameBrush links in footer</li>
        </ul>
      </div>
      <form className="card p-6" onSubmit={(e)=>e.preventDefault()}>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm" htmlFor="name">Name</label>
            <input id="name" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 ring-slate-400" placeholder="Your name" />
          </div>
          <div>
            <label className="text-sm" htmlFor="email">Email</label>
            <input id="email" type="email" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 ring-slate-400" placeholder="you@example.com" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm" htmlFor="message">Project details</label>
            <textarea id="message" rows={5} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 ring-slate-400" placeholder="What are you building?" />
          </div>
          <div className="sm:col-span-2 flex items-center justify-between">
            <div className="text-xs text-slate-500">By submitting, you agree to our friendly privacy policy.</div>
            <button className="btn btn-primary">Send</button>
          </div>
        </div>
      </form>
    </div>
  )
}
