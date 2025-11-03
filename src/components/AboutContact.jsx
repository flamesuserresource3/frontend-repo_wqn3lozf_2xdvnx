import React from 'react';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

export default function AboutContact() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 text-white shadow">
          <h3 className="text-2xl font-bold">About Kay's Drive</h3>
          <p className="mt-3 text-white/80">
            We are a Ghana-based dealership offering a curated selection of high-quality vehicles — from
            rugged pickups to refined luxury sedans. Our mission is simple: make it effortless for you to
            find, inspect, and purchase your next car with confidence.
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-white/80">
            <li>Trusted listings with transparent details</li>
            <li>Flexible viewing and test drive schedules</li>
            <li>Dedicated support via WhatsApp, email, or phone</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 text-white shadow">
          <h3 className="text-2xl font-bold">Get in touch</h3>
          <p className="mt-3 text-white/80">Reach us anytime using your preferred channel.</p>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a
              href="https://wa.me/233200000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 font-semibold text-black transition hover:brightness-110"
            >
              <MessageCircle size={18} /> WhatsApp Chat
            </a>

            <a
              href="tel:+233200000000"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#ff0000] px-4 py-3 font-semibold text-black transition hover:brightness-110"
            >
              <Phone size={18} /> Call Now
            </a>

            <a
              href="mailto:sales@kaysdrive.com"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white transition hover:border-[#ff0000] hover:bg-[#ff0000]/10"
            >
              <Mail size={18} /> Email Us
            </a>

            <a
              href="https://maps.google.com/?q=Accra%2C+Ghana"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white transition hover:border-[#ff0000] hover:bg-[#ff0000]/10"
            >
              <MapPin size={18} /> Find Us on Maps
            </a>
          </div>

          <div className="mt-6 overflow-hidden rounded-lg border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop"
              alt="Showroom"
              className="h-48 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
