"use client";

import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  Clock01Icon,
  Cancel01Icon,
  ArrowLeft01Icon,
  ArrowUp01Icon,
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

interface BlogPost {
  id: number;
  tag: string;
  tagColor: string;
  date: string;
  readTime: string;
  title: string;
  subtitle: string;
  excerpt: string;
  body: React.ReactNode;
  index: string; // big decorative number
}

const posts: BlogPost[] = [
  {
    id: 1,
    index: "01",
    tag: "Design Process",
    tagColor: "text-olive-400 bg-olive-800 border-olive-700",
    date: "Apr 12, 2026",
    readTime: "6 min",
    title: "The Problem with \"User-Centered\" Design",
    subtitle: "Why centering the user might actually be harming your product.",
    excerpt:
      "Everyone says they do user-centered design. Almost nobody actually does. Here's what happens when you interrogate the gap between the principle and the practice.",
    body: (
      <div className="space-y-6 text-olive-400 text-lg leading-relaxed">
        <p>
          There is a version of user-centered design that has become so widely
          adopted it has lost all meaning. It shows up on agency websites, in job
          postings, and in pitch decks. It is the design equivalent of saying your
          company values{" "}
          <em className="text-olive-300">integrity</em>.
        </p>
        <h3 className="font-instrument-serif text-3xl text-olive-200 mt-10">
          The Simulation of Empathy
        </h3>
        <p>
          Real user-centered design is uncomfortable. It means sitting with someone
          while they struggle with something you built and not jumping in to help.
          It means watching a 68-year-old try to navigate your checkout flow and
          feeling genuine shame. It means shipping later because the research
          revealed that your core assumption was wrong.
        </p>
        <p>
          Most teams do not do this. Most teams do a round of usability testing
          after the design is 90% locked, collect a list of minor cosmetic issues,
          fix three of them, and ship. Then they write a case study about being
          user-centered.
        </p>
        <blockquote className="border-l-2 border-olive-500 pl-6 my-8 text-olive-300 italic text-xl">
          "The map is not the territory. The persona is not the user."
        </blockquote>
        <h3 className="font-instrument-serif text-3xl text-olive-200 mt-10">
          What Actually Works
        </h3>
        <p>
          The teams I've seen do this well share one trait: they treat user research
          as a continuous background process, not a project phase. There is always
          someone on a call. There is always a Loom recording being watched. The
          insights don't arrive in a quarterly report — they arrive in Slack at 2pm
          on a Tuesday and immediately change what someone is building.
        </p>
        <p>
          The other thing that works is making research painful to ignore. Not just
          sharing a report, but putting designers in the room (or on the call) with
          real users every two weeks. When you have looked someone in the eye and
          watched them fail, it is very hard to deprioritize fixing it.
        </p>
        <h3 className="font-instrument-serif text-3xl text-olive-200 mt-10">
          The Honest Version
        </h3>
        <p>
          The honest version of user-centered design is this: you are always
          operating with incomplete information about the people you are designing
          for. The goal is not to achieve perfect empathy — it is to systematically
          reduce your ignorance over time, and to build processes that make it
          harder to make decisions that ignore what you already know.
        </p>
        <p>
          That's it. That's the whole thing. Everything else is ceremony.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    index: "02",
    tag: "Engineering",
    tagColor: "text-olive-300 bg-olive-800 border-olive-700",
    date: "Mar 28, 2026",
    readTime: "9 min",
    title: "Why I Stopped Using Component Libraries",
    subtitle: "And what I learned from building everything from scratch (twice).",
    excerpt:
      "I've built the same modal component four times in my career. Each time I learned something different. Here's what the fourth iteration taught me about design systems, abstraction, and when to reach for the framework.",
    body: (
      <div className="space-y-6 text-olive-400 text-lg leading-relaxed">
        <p>
          The first time I built a modal from scratch, I was 22 and working on a
          startup with zero design system. It took me three days. It had bugs. The
          z-index was wrong. Focus trapping was nonexistent. It was, by every
          objective measure, bad software.
        </p>
        <h3 className="font-instrument-serif text-3xl text-olive-200 mt-10">
          The Allure of the Library
        </h3>
        <p>
          For several years after that, I reached for component libraries
          reflexively. MUI, Ant Design, Chakra. Whatever the team had chosen,
          whatever was in the boilerplate. The productivity gains were real. You
          could move fast. Accessibility was (mostly) handled. The design
          language was (mostly) consistent.
        </p>
        <p>
          The problems were subtler. Every time a design required something
          slightly off-spec — a non-standard animation, a layout that didn't
          fit the grid assumptions, a component composition that the library
          authors hadn't anticipated — you were fighting the library instead of
          building the product. The abstraction started leaking.
        </p>
        <blockquote className="border-l-2 border-olive-500 pl-6 my-8 text-olive-300 italic text-xl">
          "The best abstraction is the one you don't have to think about.
          The worst is the one you have to fight."
        </blockquote>
        <h3 className="font-instrument-serif text-3xl text-olive-200 mt-10">
          What I Actually Recommend
        </h3>
        <p>
          Use headless component libraries (Radix, Headless UI) for behavior and
          accessibility primitives. Build your own visual layer on top. This gives
          you the hard parts for free — focus management, ARIA attributes, keyboard
          navigation — while leaving the visual expression completely in your
          control.
        </p>
        <p>
          Shadcn/ui got this right. It's not a library you install — it's a
          collection of components you own. You read the source, you understand
          it, you modify it. That's the relationship you should have with every
          component in your system.
        </p>
        <h3 className="font-instrument-serif text-3xl text-olive-200 mt-10">
          The Fourth Modal
        </h3>
        <p>
          The fourth time I built a modal — last year, for this portfolio — I did it
          in about two hours. Not because I'm faster than I was, but because I finally
          understood what the component actually needed to do versus what I had been
          trying to make it do. Most of the complexity I was managing in earlier
          versions was complexity I had introduced by overconstrained design
          decisions.
        </p>
        <p>
          Simplicity is a skill. It takes a long time to learn.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    index: "03",
    tag: "Thinking",
    tagColor: "text-olive-400 bg-olive-800 border-olive-700",
    date: "Feb 14, 2026",
    readTime: "4 min",
    title: "On Finishing Things",
    subtitle: "A short essay about shipping, perfectionism, and why done is not the enemy of good.",
    excerpt:
      "My hard drive has 23 half-finished projects on it. I used to think this was a problem. Now I think it's just what creative work looks like — and the skill isn't avoiding it, it's knowing which ones to finish.",
    body: (
      <div className="space-y-6 text-olive-400 text-lg leading-relaxed">
        <p>
          I shipped my first real product in 2021. It was bad. The onboarding
          was confusing, the mobile experience was broken, the copy was written
          by someone (me) who had not yet learned to write. I shipped it anyway
          because my co-founder said something I still think about: "Users can't
          give you feedback on things you haven't shipped."
        </p>
        <h3 className="font-instrument-serif text-3xl text-olive-200 mt-10">
          The Trap of the Unfinished
        </h3>
        <p>
          Unfinished projects are safe. They cannot fail. They cannot be
          criticized. They exist in a permanent state of potential — they could
          be everything you imagined if only you had the time, the resources,
          the right collaborators. This is psychologically very comfortable and
          practically useless.
        </p>
        <p>
          The act of shipping converts a hypothesis into data. Sometimes the data
          is painful. The feature you were most excited about goes unused. The
          "temporary" workaround becomes load-bearing. Your assumptions about
          what users want turn out to be projections of what you wanted. This is
          the good stuff. This is how you get better.
        </p>
        <blockquote className="border-l-2 border-olive-500 pl-6 my-8 text-olive-300 italic text-xl">
          "A good plan executed now is better than a perfect plan executed next week."
          <span className="block text-sm text-olive-500 mt-2 not-italic">— Patton, adapted</span>
        </blockquote>
        <h3 className="font-instrument-serif text-3xl text-olive-200 mt-10">
          Which 23 to Finish
        </h3>
        <p>
          The harder question is which projects deserve to be finished. My rough
          heuristic: if I'm excited about the problem and bored by the
          implementation, it will stay unfinished. If I'm excited about both,
          it might get done. If the problem is important enough that boredom
          doesn't matter, it will definitely get done.
        </p>
        <p>
          Most of my 23 unfinished things are solutions to problems I no longer
          have. That's fine. The act of starting them wasn't wasted — I learned
          something from each one. But I've stopped feeling guilty about them.
          They're not failures. They're research.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    index: "04",
    tag: "Civic Tech",
    tagColor: "text-olive-400 bg-olive-800 border-olive-700",
    date: "Jan 3, 2026",
    readTime: "11 min",
    title: "Technology Doesn't Save Cities",
    subtitle: "Three years working in civic tech taught me what actually makes government digital services work.",
    excerpt:
      "I spent three years consulting for local governments on digital transformation projects. Most of them failed. Not because of the technology — the technology was fine. Here's what actually went wrong.",
    body: (
      <div className="space-y-6 text-olive-400 text-lg leading-relaxed">
        <p>
          The pitch for civic tech is irresistible: take the clunky, paper-based,
          appointment-only systems that government has been running for decades and
          replace them with clean, modern, digital-first experiences. Save time for
          citizens. Save money for the city. Everyone wins.
        </p>
        <p>
          In practice, roughly 70% of government digital transformation projects
          fail to achieve their stated goals. I've worked on several of them. Here
          is what I've learned.
        </p>
        <h3 className="font-instrument-serif text-3xl text-olive-200 mt-10">
          Problem 1: The Product Is Not the Problem
        </h3>
        <p>
          The most common failure mode is building a great product that solves
          the wrong problem. A beautiful online permit application system doesn't
          help if the permits are being reviewed by one overworked inspector who
          takes four months to respond. You've digitized the queue. You haven't
          fixed the queue.
        </p>
        <p>
          Good civic tech starts with a rigorous process audit, not a design sprint.
          Where is the actual friction? Who is experiencing it? What would have to
          be true for the system to work well? Usually the answer involves changing
          something about the organization, not just the software.
        </p>
        <blockquote className="border-l-2 border-olive-500 pl-6 my-8 text-olive-300 italic text-xl">
          "You cannot automate dysfunction. You just make it faster."
        </blockquote>
        <h3 className="font-instrument-serif text-3xl text-olive-200 mt-10">
          Problem 2: The Procurement Kills It
        </h3>
        <p>
          Government procurement is designed to prevent corruption, not to produce
          good software. The result is that the vendors who win government contracts
          are typically not the vendors who build good software — they're the
          vendors who know how to win government contracts. These are different skills.
        </p>
        <p>
          The projects I've seen succeed have all involved some version of
          circumventing the traditional procurement process — either through
          innovation procurement frameworks, pilot-first approaches, or having
          a senior official willing to stake their political capital on a different
          way of working.
        </p>
        <h3 className="font-instrument-serif text-3xl text-olive-200 mt-10">
          What Actually Works
        </h3>
        <p>
          The projects that work share a few characteristics. They start small —
          one service, one team, one city. They have a specific, measurable outcome
          they're trying to achieve ("reduce permit processing time from 90 days to
          30 days") rather than a vague transformation goal. And they have a
          government champion who is willing to be accountable for the outcome.
        </p>
        <p>
          Technology is a tool. Tools don't save cities. People do.
        </p>
      </div>
    ),
  },
];

// Reading progress bar
function ReadingProgress({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const pct = scrollTop / (scrollHeight - clientHeight);
      setProgress(Math.min(1, Math.max(0, pct)));
    };
    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, [containerRef]);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[9999] bg-olive-800">
      <div
        className="h-full bg-olive-300 transition-all duration-75"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}

export function BlogSection() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="container z-50 mx-auto py-30">
      {/* Section header */}
      <div className="flex items-end justify-between mb-16">
        <div>

          <h2 className="text-7xl text-olive-300 tracking-tight font-instrument-serif">
            What I'm <span className="italic">thinking about.</span>
          </h2>
        </div>
        <p className="text-olive-500 text-lg font-medium max-w-md text-right">
          Long-form thoughts on design, engineering, AI, and the space between.
        </p>
      </div>

      {/* Blog list — editorial / table-of-contents style */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-olive-800" />

        <div className="space-y-0">
          {posts.map((post, i) => (
            <button
              key={post.id}
              onClick={() => setActivePost(post)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="w-full text-left group"
            >
              <div
                className={cn(
                  "relative pl-10 pr-6 py-10 border-b border-olive-800 transition-all duration-300",
                  hoveredIndex === i ? "bg-olive-900/60" : "bg-transparent"
                )}
              >
                {/* Active bar */}
                <div
                  className={cn(
                    "absolute left-0 top-0 bottom-0 w-[2px] bg-olive-300 transition-all duration-300",
                    hoveredIndex === i ? "opacity-100" : "opacity-0"
                  )}
                />

                <div className="flex items-start gap-10">
                  {/* Big index number */}
                  <span
                    className={cn(
                      "font-instrument-serif text-7xl leading-none transition-all duration-300 select-none flex-shrink-0 w-20",
                      hoveredIndex === i ? "text-olive-300" : "text-olive-800"
                    )}
                  >
                    {post.index}
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={cn(
                          "text-xs font-mono uppercase tracking-widest px-2 py-0.5 rounded border",
                          post.tagColor
                        )}
                      >
                        {post.tag}
                      </span>
                      <span className="text-olive-600 text-sm">{post.date}</span>
                      <span className="flex items-center gap-1 text-olive-600 text-sm">
                        <HugeiconsIcon icon={Clock01Icon} className="w-3 h-3" />
                        {post.readTime} read
                      </span>
                    </div>

                    <h3
                      className={cn(
                        "font-instrument-serif text-4xl leading-tight mb-2 transition-colors duration-300",
                        hoveredIndex === i ? "text-olive-200" : "text-olive-300"
                      )}
                    >
                      {post.title}
                    </h3>
                    <p className="text-olive-500 text-lg font-medium leading-snug">
                      {post.subtitle}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div
                    className={cn(
                      "flex-shrink-0 self-center transition-all duration-300 -translate-x-2 opacity-0",
                      hoveredIndex === i && "translate-x-0 opacity-100"
                    )}
                  >
                    <div className="w-10 h-10 rounded-full border border-olive-600 flex items-center justify-center">
                      <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4 text-olive-300" />
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Blog post dialog — full reading experience */}
      <Dialog open={!!activePost} onOpenChange={(o) => !o && setActivePost(null)}>
        <DialogContent
          showCloseButton={false}
          className="max-w-none w-screen h-screen p-0 bg-olive-950 border-0 rounded-none overflow-hidden"
          style={{ maxWidth: "100vw", maxHeight: "100vh" }}
        >
          {/* Hidden accessible title */}
          <DialogTitle className="sr-only">
            {activePost?.title ?? "Blog post"}
          </DialogTitle>

          {activePost && (
            <>
              <ReadingProgress containerRef={scrollRef} />

              {/* Sticky top bar */}
              <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-8 py-5 bg-olive-950/80 backdrop-blur-sm border-b border-olive-800">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setActivePost(null)}
                    className="flex items-center gap-2 text-olive-500 hover:text-olive-300 transition-colors text-sm font-medium"
                  >
                    <HugeiconsIcon icon={ArrowLeft01Icon} className="w-4 h-4" />
                    Back
                  </button>
                  <span className="text-olive-700">·</span>
                  <span
                    className={cn(
                      "text-xs font-mono uppercase tracking-widest px-2 py-0.5 rounded border",
                      activePost.tagColor
                    )}
                  >
                    {activePost.tag}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-olive-600 text-sm">
                  <span className="flex items-center gap-1">
                    <HugeiconsIcon icon={Clock01Icon} className="w-3 h-3" />
                    {activePost.readTime} read
                  </span>
                  <span>{activePost.date}</span>
                  <button
                    onClick={() => setActivePost(null)}
                    className="w-8 h-8 rounded-full border border-olive-700 flex items-center justify-center text-olive-400 hover:text-olive-200 hover:border-olive-500 transition-all"
                  >
                    <HugeiconsIcon icon={Cancel01Icon} className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Scrollable content */}
              <div ref={scrollRef} className="h-full overflow-y-auto pt-20">
                <div className="max-w-2xl mx-auto px-8 pb-32 pt-16">
                  {/* Post header */}
                  <div className="mb-14">
                    <p className="font-mono text-olive-600 text-sm uppercase tracking-[0.3em] mb-6">
                      {activePost.index} / 04
                    </p>
                    <h1 className="font-instrument-serif text-6xl text-olive-100 leading-tight mb-6">
                      {activePost.title}
                    </h1>
                    <p className="text-olive-400 text-2xl font-medium leading-snug">
                      {activePost.subtitle}
                    </p>

                    {/* Decorative divider */}
                    <div className="flex items-center gap-4 mt-10">
                      <div className="h-[1px] flex-1 bg-olive-800" />
                      <span className="text-olive-600 text-xs font-mono">
                        Matyas Toth · {activePost.date}
                      </span>
                      <div className="h-[1px] flex-1 bg-olive-800" />
                    </div>
                  </div>

                  {/* Lead paragraph */}
                  <p className="text-olive-300 text-xl leading-relaxed font-medium border-l-2 border-olive-500 pl-6 mb-10">
                    {activePost.excerpt}
                  </p>

                  {/* Body */}
                  {activePost.body}

                  {/* Footer */}
                  <div className="mt-20 pt-10 border-t border-olive-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-olive-600 text-sm font-mono uppercase tracking-widest mb-1">
                          Written by
                        </p>
                        <p className="text-olive-300 font-instrument-serif text-2xl">
                          Matyas Toth
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        onClick={() => setActivePost(null)}
                        className="border-olive-700 text-olive-400 hover:text-olive-200 hover:border-olive-500"
                      >
                        <HugeiconsIcon icon={ArrowUp01Icon} className="w-4 h-4 mr-2" />
                        Back to top
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
