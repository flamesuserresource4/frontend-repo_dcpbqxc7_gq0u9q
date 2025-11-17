import React from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex Rivera",
    text: "Sleek design and the app is insanely good. Replaced my old card in a day.",
  },
  { name: "Priya N.", text: "Got approved in minutes. The virtual card saved me on a trip!" },
  { name: "Sam K.", text: "I love the controls and spending insights. Feels premium everywhere." },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="bg-zinc-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Stars />
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Loved by modern spenders</h2>
          <p className="mt-2 text-zinc-600">Thousands switch every week for a simpler, smarter card.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <Stars />
                  <p className="mt-3 text-zinc-700">“{t.text}”</p>
                  <p className="mt-4 text-sm font-medium text-zinc-900">{t.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
