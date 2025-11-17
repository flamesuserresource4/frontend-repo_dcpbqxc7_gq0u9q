import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  { q: "How fast is approval?", a: "Most users are approved within minutes using smart checks." },
  { q: "Is there an annual fee?", a: "No. Our pricing is simple and transparent." },
  { q: "Can I freeze my card?", a: "Yes, instantly from the mobile app with a single tap." },
  { q: "Is my data secure?", a: "We use advanced encryption, tokenization, and biometric locks." },
];

export default function FAQ() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">FAQs</h2>
        <p className="mt-2 text-center text-zinc-600">Short answers to common questions.</p>
        <div className="mt-8 rounded-xl border border-zinc-200 bg-white p-2">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
