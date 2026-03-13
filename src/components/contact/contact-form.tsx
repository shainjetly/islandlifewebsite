"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-16 bg-primary/5 rounded-xl border border-primary/10">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-bold mb-2">Thank You!</h3>
        <p className="text-muted-foreground">
          We&apos;ve received your enquiry and will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Full Name
          </label>
          <Input
            placeholder="John Doe"
            required
            className="bg-transparent"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Email Address
          </label>
          <Input
            type="email"
            placeholder="john@example.com"
            required
            className="bg-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Phone Number
          </label>
          <Input
            type="tel"
            placeholder="+1 234 567 8900"
            className="bg-transparent"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Travel Dates
          </label>
          <Input type="text" placeholder="e.g. Dec 2024" className="bg-transparent" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Tell Us About Your Dream Trip
        </label>
        <Textarea
          placeholder="Number of guests, preferred atoll, type of experience, budget range..."
          rows={5}
          className="bg-transparent resize-none"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider py-6"
      >
        Send Request
        <Send className="ml-2 h-4 w-4" />
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting, you agree to our Privacy Policy. We&apos;ll respond
        within 24 hours.
      </p>
    </form>
  );
}
