"use client";

import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NewsletterForm() {
  return (
    <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
      <Input
        type="email"
        placeholder="Your email"
        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary h-10 text-sm"
      />
      <Button
        type="submit"
        size="icon"
        className="bg-primary hover:bg-primary/90 h-10 w-10 shrink-0"
      >
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
