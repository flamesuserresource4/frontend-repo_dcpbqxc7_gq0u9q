import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Sparkles, CreditCard, Lock, Smartphone } from "lucide-react";

const features = [
  { icon: CreditCard, title: "Instant Approval", text: "Apply and get approved in minutes with smart risk checks." },
  { icon: ShieldCheck, title: "Zero Annual Fee", text: "No hidden charges—keep more of your money working for you." },
  { icon: Zap, title: "Lightning Fast", text: "Smooth, real-time payments with top-tier reliability." },
  { icon: Lock, title: "Bank‑Grade Security", text: "Protected by advanced encryption and biometric lock." },
  { icon: Smartphone, title: "Powerful App", text: "Track spend, set limits, and freeze instantly from your phone." },
  { icon: Sparkles, title: "Beautiful Design", text: "Minimal, glassmorphic card that looks as good as it performs." },
];

export default function Features() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Everything you need, nothing you don’t</h2>
          <p className="mt-3 text-zinc-600">Hand‑picked benefits designed to make everyday spending smarter and simpler.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 text-zinc-600">{text}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
