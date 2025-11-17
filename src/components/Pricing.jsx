import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section className="bg-zinc-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Simple pricing</h2>
          <p className="mt-2 text-zinc-600">One clear plan. No surprises.</p>
        </div>
        <motion.div
          className="mx-auto mt-10 max-w-xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="relative overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl">Premium Card</CardTitle>
              <p className="text-zinc-600">Everything you need for everyday spending.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-end gap-2">
                <span className="text-5xl font-extrabold tracking-tight">$9</span>
                <span className="mb-2 text-zinc-600">/ month</span>
              </div>
              <ul className="grid gap-3 text-sm text-zinc-700">
                <li>• Zero annual fees</li>
                <li>• Instant virtual card</li>
                <li>• Advanced controls and insights</li>
                <li>• 24/7 priority support</li>
              </ul>
              <Button className="w-full">Start your 30‑day free trial</Button>
              <p className="text-center text-xs text-zinc-500">Cancel anytime</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
