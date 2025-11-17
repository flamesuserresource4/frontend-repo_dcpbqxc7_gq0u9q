import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1633265486064-086b2198d5ca?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621351183012-e2f9972dd9d1?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1619901555923-5c6b86485a1a?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1600&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">See it in action</h2>
          <p className="mt-2 text-zinc-600">A minimal gallery to showcase the product across contexts.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((src, i) => (
            <motion.div
              key={src}
              className="group relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <img
                src={src}
                alt="Product visual"
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
