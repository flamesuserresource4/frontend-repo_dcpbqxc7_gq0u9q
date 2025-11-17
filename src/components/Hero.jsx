import React from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs text-zinc-700 backdrop-blur">
              New • Glassmorphic fintech card
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              The Only Card You’ll Ever Need
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">
              Experience sleek design, instant approvals, and smarter spending—all
              wrapped in a modern, minimalist card built for today.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button className="w-full sm:w-auto">Get Started</Button>
              <Button variant="outline" className="w-full sm:w-auto">
                Explore Features
              </Button>
            </div>
            <p className="mt-3 text-xs text-zinc-500">No fees. Cancel anytime.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative h-[420px] w-full md:h-[520px]"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100/60 via-cyan-100/50 to-purple-100/50 blur-2xl pointer-events-none" />
            <div className="relative h-full w-full rounded-3xl border border-white/40 bg-white/50 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur">
              <Spline
                scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
