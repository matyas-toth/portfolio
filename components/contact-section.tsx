"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Mail01Icon,
  Linkedin01Icon,
  GithubIcon,
  ArrowRight01Icon,
  CheckmarkCircle01Icon,
  TwitterIcon,
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

// Typewriter for the heading word cycle
function TypewriterCycle({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const word = words[index];
    if (pause) {
      const t = setTimeout(() => setPause(false), 1200);
      return () => clearTimeout(t);
    }
    if (!deleting) {
      if (displayed.length < word.length) {
        const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 70);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setDeleting(true), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setPause(true);
        setIndex((i) => (i + 1) % words.length);
      }
    }
  }, [displayed, deleting, index, pause, words]);

  return (
    <span className="italic text-olive-300 relative">
      {displayed}
      <span className="animate-pulse ml-0.5 inline-block w-[3px] h-[0.85em] bg-olive-400 align-middle" />
    </span>
  );
}

// Fancy floating label input
function FloatInput({
  label,
  id,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const filled = value.length > 0;

  return (
    <div className="relative group">
      <label
        htmlFor={id}
        className={cn(
          "absolute left-4 transition-all duration-200 pointer-events-none font-medium",
          focused || filled
            ? "top-2 text-xs text-olive-500 tracking-widest uppercase"
            : "top-1/2 -translate-y-1/2 text-lg text-olive-600"
        )}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={cn(
          "w-full bg-olive-900 border rounded-2xl px-4 pt-7 pb-3 text-olive-200 text-lg outline-none transition-all duration-200",
          focused ? "border-olive-500 shadow-[0_0_0_3px_rgba(120,110,80,0.15)]" : "border-olive-800",
          "hover:border-olive-700"
        )}
      />
    </div>
  );
}

function FloatTextarea({
  label,
  id,
  value,
  onChange,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const filled = value.length > 0;

  return (
    <div className="relative group">
      <label
        htmlFor={id}
        className={cn(
          "absolute left-4 transition-all duration-200 pointer-events-none font-medium",
          focused || filled
            ? "top-2 text-xs text-olive-500 tracking-widest uppercase"
            : "top-5 text-lg text-olive-600"
        )}
      >
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={5}
        className={cn(
          "w-full bg-olive-900 border rounded-2xl px-4 pt-7 pb-3 text-olive-200 text-lg outline-none transition-all duration-200 resize-none",
          focused ? "border-olive-500 shadow-[0_0_0_3px_rgba(120,110,80,0.15)]" : "border-olive-800",
          "hover:border-olive-700"
        )}
      />
    </div>
  );
}

const socialLinks = [
  {
    label: "LinkedIn",
    handle: "Mátyás Tóth",
    icon: Linkedin01Icon,
    href: "https://www.linkedin.com/in/mátyás-tóth-56920926b/",
  },
  {
    label: "GitHub",
    handle: "@matyas-toth",
    icon: GithubIcon,
    href: "https://github.com/matyas-toth",
  },
  {
    label: "Twitter",
    handle: "@madebyreig",
    icon: TwitterIcon,
    href: "https://x.com/madebyreig",
  },
];

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1400);
  };

  return (
    <section className="container z-50 mx-auto py-30 pb-40">
      {/* Section label */}


      {/* Big heading with typewriter */}
      <h2 className="text-7xl text-olive-400 tracking-tight font-instrument-serif mb-20 leading-tight">
        Let&apos;s make something{" "}
        <TypewriterCycle
          words={["remarkable.", "unexpected.", "together.", "that matters.", "extraordinary."]}
        />
      </h2>

      <div className="grid grid-cols-5 gap-16 items-start">
        {/* Left — social + info */}
        <div className="col-span-2 space-y-10">
          <p className="text-olive-500 text-lg font-medium leading-relaxed">
            Whether you have a project in mind, a problem to solve, or just want
            to talk about stuff, my inbox is open.
          </p>

          <div className="space-y-1">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-4 border-b border-olive-800 hover:border-olive-600 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-olive-800 group-hover:bg-olive-700 transition-colors flex items-center justify-center flex-shrink-0">
                  <HugeiconsIcon icon={s.icon} className="w-5 h-5 text-olive-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono text-olive-600 uppercase tracking-widest">
                    {s.label}
                  </p>
                  <p className="text-olive-300 font-medium">{s.handle}</p>
                </div>
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  className="w-4 h-4 text-olive-600 group-hover:text-olive-300 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                />
              </a>
            ))}
          </div>


        </div>


      </div>
      <div className="text-4xl font-instrument-serif tracking-tight text-olive-600 mt-10">© {new Date().getFullYear()} Matyas Toth. All rights reserved.</div>
    </section>
  );
}
