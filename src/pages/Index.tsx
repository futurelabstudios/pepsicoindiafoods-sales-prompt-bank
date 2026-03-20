import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  ChevronUp,
  Code,
  Copy,
  FileText,
  GitBranch,
  Handshake,
  List,
  Megaphone,
  Network,
  Package,
  Presentation,
  Search,
  Sparkles,
  Store,
  Target,
  Truck,
  User,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { prompts } from "@/data/prompts";
import {
  pepsicoAdvancedTips,
  pepsicoAdvancedTipsQuote,
  pepsicoCrossTeamPatterns,
  pepsicoMasterPrefix,
  pepsicoPromptingPractices,
  pepsicoWorkflow,
} from "@/data/pepsicoResources";
import { promptTechniques } from "@/data/techniques";
import type { Department, Difficulty, Prompt, PromptTechnique } from "@/data/types";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const DEPARTMENTS: Department[] = [
  "Sales Planning",
  "GTM & Distribution",
  "Outlet Execution",
  "Trade Marketing",
  "Modern Trade & Key Accounts",
  "Revenue Growth Management",
  "Demand & Supply Coordination",
  "Capability & Coaching",
  "Insights & Analytics",
  "Leadership Communication",
];

const DEPARTMENT_ORDER = Object.fromEntries(DEPARTMENTS.map((department, index) => [department, index])) as Record<Department, number>;

type Lens = Department | "All";

type DepartmentMeta = {
  icon: LucideIcon;
  summary: string;
  badgeClass: string;
};

const DEPARTMENT_META: Record<Department, DepartmentMeta> = {
  "Sales Planning": {
    icon: Target,
    summary: "Annual plans, target setting, seasonal priorities, and territory opportunity sizing.",
    badgeClass: "border-blue-200 bg-blue-50 text-blue-950",
  },
  "GTM & Distribution": {
    icon: Truck,
    summary: "Distributor design, route-to-market, beat productivity, and coverage expansion.",
    badgeClass: "border-sky-200 bg-sky-50 text-sky-950",
  },
  "Outlet Execution": {
    icon: Store,
    summary: "Perfect store standards, field coaching, visibility, and launch execution.",
    badgeClass: "border-cyan-200 bg-cyan-50 text-cyan-950",
  },
  "Trade Marketing": {
    icon: Megaphone,
    summary: "Schemes, promos, activations, POSM, and retail-facing communication.",
    badgeClass: "border-orange-200 bg-orange-50 text-orange-950",
  },
  "Modern Trade & Key Accounts": {
    icon: Handshake,
    summary: "Joint business plans, account reviews, assortment, and negotiation prep.",
    badgeClass: "border-indigo-200 bg-indigo-50 text-indigo-950",
  },
  "Revenue Growth Management": {
    icon: Wallet,
    summary: "Pack-price architecture, mix, margin, trade spend, and pricing decisions.",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-950",
  },
  "Demand & Supply Coordination": {
    icon: Package,
    summary: "Forecasting, launch readiness, stock recovery, ageing, and supply escalations.",
    badgeClass: "border-teal-200 bg-teal-50 text-teal-950",
  },
  "Capability & Coaching": {
    icon: Presentation,
    summary: "Onboarding, coaching, training, incentives, and manager routines.",
    badgeClass: "border-violet-200 bg-violet-50 text-violet-950",
  },
  "Insights & Analytics": {
    icon: BarChart3,
    summary: "Whitespace analysis, competitor synthesis, dashboard narratives, and data quality.",
    badgeClass: "border-slate-200 bg-slate-50 text-slate-950",
  },
  "Leadership Communication": {
    icon: FileText,
    summary: "MBRs, executive summaries, escalation notes, and leadership narratives.",
    badgeClass: "border-rose-200 bg-rose-50 text-rose-950",
  },
};

const DIFFICULTY_META: Record<Difficulty, string> = {
  Simple: "border-emerald-200 bg-emerald-50 text-emerald-950",
  Intermediate: "border-amber-200 bg-amber-50 text-amber-950",
  "Advanced JSON": "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-950",
  "Chain-of-Thought": "border-cyan-200 bg-cyan-50 text-cyan-950",
  "Few-Shot": "border-sky-200 bg-sky-50 text-sky-950",
  "Tree-of-Thought": "border-violet-200 bg-violet-50 text-violet-950",
};

const CURATED_SHELVES: Array<{ title: string; description: string; department: Department; search?: string }> = [
  {
    title: "Plan the quarter",
    description: "Start with territory plans, seasonal priorities, and target-setting prompts.",
    department: "Sales Planning",
  },
  {
    title: "Fix distribution",
    description: "Open distributor, route, beat, and coverage prompts when the market model is the issue.",
    department: "GTM & Distribution",
  },
  {
    title: "Win at shelf",
    description: "Use execution prompts for visibility, launch compliance, coaching, and perfect store work.",
    department: "Outlet Execution",
  },
  {
    title: "Shape commercial investments",
    description: "Go to schemes, activations, trade spend, and revenue growth management prompts.",
    department: "Trade Marketing",
    search: "scheme",
  },
  {
    title: "Manage key accounts",
    description: "Open JBP, range, account review, and modern trade decision prompts.",
    department: "Modern Trade & Key Accounts",
  },
  {
    title: "Prepare leadership reviews",
    description: "Use MBR, executive summary, and escalation prompts for sharper communication.",
    department: "Leadership Communication",
  },
];

const QUICK_SEARCHES = [
  { label: "Distributor", value: "distributor" },
  { label: "Scheme", value: "scheme" },
  { label: "Modern trade", value: "account" },
  { label: "Visibility", value: "visibility" },
  { label: "Margin", value: "margin" },
];

const HERO_STARTERS: Array<{ label: string; department: Department; note: string }> = [
  { label: "Sales planning", department: "Sales Planning", note: "Targets, reviews, seasonal plans" },
  { label: "Distribution", department: "GTM & Distribution", note: "Distributors, beats, route coverage" },
  { label: "Trade marketing", department: "Trade Marketing", note: "Schemes, promos, POSM, activations" },
  { label: "Revenue growth", department: "Revenue Growth Management", note: "Pack-price, mix, margin" },
];

const COMMON_OUTPUTS = ["Action plans", "Review decks", "Trackers", "Scheme memos", "Coaching notes", "Escalation drafts"];

const TECHNIQUE_ICON_MAP: Record<string, LucideIcon> = {
  Zap,
  List,
  GitBranch,
  Network,
  User,
  Code,
  Sparkles,
};

const INITIAL_VISIBLE_COUNT = 15;

const Index = () => {
  const [search, setSearch] = useState("");
  const [selectedDept, setSelectedDept] = useState<Lens>("All");
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const { toast } = useToast();

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, [search, selectedDept]);

  const filteredPrompts = prompts
    .filter((prompt) => {
      const query = search.trim().toLowerCase();
      const matchesDepartment = selectedDept === "All" || prompt.department === selectedDept;
      const matchesSearch =
        !query ||
        prompt.title.toLowerCase().includes(query) ||
        prompt.purpose.toLowerCase().includes(query) ||
        prompt.expectedOutput.toLowerCase().includes(query) ||
        prompt.department.toLowerCase().includes(query) ||
        prompt.difficulty.toLowerCase().includes(query) ||
        prompt.promptText.toLowerCase().includes(query);

      return matchesDepartment && matchesSearch;
    })
    .sort((left, right) => {
      const departmentDiff = DEPARTMENT_ORDER[left.department] - DEPARTMENT_ORDER[right.department];
      if (departmentDiff !== 0) {
        return departmentDiff;
      }

      return left.title.localeCompare(right.title);
    });

  const displayedPrompts = filteredPrompts.slice(0, visibleCount);
  const hasMorePrompts = visibleCount < filteredPrompts.length;
  const selectedMeta = selectedDept === "All" ? null : DEPARTMENT_META[selectedDept];
  const totalPromptingTips = pepsicoPromptingPractices.length + pepsicoAdvancedTips.length;

  const scrollToLibrary = () => {
    document.getElementById("library")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openShelf = (department: Department, nextSearch = "") => {
    setSelectedDept(department);
    setSearch(nextSearch);
    scrollToLibrary();
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedDept("All");
  };

  const toggleCard = (id: string) => {
    setExpandedCards((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const copyPrompt = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      toast({ title: "Prompt copied", description: "It is ready to paste into your workflow." });
      window.setTimeout(() => setCopiedId(null), 2000);
    } catch {
      toast({
        title: "Clipboard unavailable",
        description: "Copy did not complete. Please try again in a secure browser tab.",
        variant: "destructive",
      });
    }
  };

  const promptCountByDepartment = (department: Department) => prompts.filter((prompt) => prompt.department === department).length;
  const hasActiveFilters = selectedDept !== "All" || search.trim().length > 0;

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <img alt="PepsiCo official logo" className="h-12 w-auto shrink-0 object-contain sm:h-14" src="/pepsico-logo.png" />
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-primary/70">India Foods commercial library</p>
              <p className="text-base font-semibold text-foreground">Sales Prompt Bank</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            <a href="#overview" className="transition hover:text-primary">
              Overview
            </a>
            <a href="#toolkit" className="transition hover:text-primary">
              Toolkit
            </a>
            <a href="#library" className="transition hover:text-primary">
              Library
            </a>
          </nav>

          <div className="hidden items-center gap-3 rounded-full border border-border/70 bg-white px-4 py-2 lg:flex">
            <div>
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Commercial use</p>
              <p className="text-sm font-semibold text-foreground">India Foods sales teams</p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <section id="overview" className="hero-shell p-6 sm:p-8 lg:p-10">
          <div className="relative grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="eyebrow">Commercial prompt bank</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline" className="rounded-full border-primary/20 bg-white/90 px-3 py-1 text-primary">
                  {prompts.length} sales prompts
                </Badge>
                <Badge variant="outline" className="rounded-full border-primary/20 bg-white/90 px-3 py-1 text-primary">
                  PepsiCo India Foods context
                </Badge>
                <Badge variant="outline" className="rounded-full border-primary/20 bg-white/90 px-3 py-1 text-primary">
                  Crafted by Futurelab Studios
                </Badge>
              </div>
              <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.98] text-foreground sm:text-6xl lg:text-[5rem]">
                The working prompt bank for PepsiCo India Foods sales teams.
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
                Use this library to plan routes, sharpen distributor reviews, improve shelf execution, structure schemes, prepare account plans,
                and write cleaner leadership updates across India Foods sales workflows.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <StatPill label="Prompts" value={prompts.length} />
                <StatPill label="Tracks" value={DEPARTMENTS.length} />
                <StatPill label="Techniques" value={promptTechniques.length} />
                <StatPill label="Hacks" value={totalPromptingTips} />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#library"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/95"
                >
                  Browse the prompt bank
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#toolkit"
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/90 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary/20 hover:text-primary"
                >
                  See techniques and hacks
                  <Sparkles className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 max-w-2xl">
                <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-primary/70" htmlFor="hero-search">
                  Search the prompt bank
                </label>
                <div className="relative">
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="hero-search"
                    className="h-14 rounded-full border-border/70 bg-white/90 pl-11 text-base shadow-none"
                    placeholder="Search by region, channel, brand, outlet type, or business problem..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                  />
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {QUICK_SEARCHES.map((item) => (
                    <button
                      key={item.value}
                      className={cn(
                        "rounded-full border px-3 py-1.5 text-sm transition",
                        search.toLowerCase() === item.value.toLowerCase()
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border/70 bg-white/90 text-foreground hover:border-primary/20 hover:text-primary",
                      )}
                      onClick={() => {
                        setSearch(item.value);
                        scrollToLibrary();
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="hero-panel p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow">Built for field and leadership use</p>
                    <h2 className="mt-2 font-display text-3xl leading-tight text-foreground">
                      Commercial prompts that work across planning, market execution, and reviews.
                    </h2>
                  </div>
                  <img alt="PepsiCo official logo" className="h-16 w-auto shrink-0 object-contain sm:h-20" src="/pepsico-logo.png" />
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[22px] border border-border/70 bg-white/80 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">Context-aware</p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      Grounded in Indian route-to-market realities across GT, MT, e-commerce, wholesale, and rural coverage.
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-border/70 bg-white/80 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">Execution-first</p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      Designed for action plans, trackers, negotiation prep, scheme notes, and leadership-ready summaries.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="hero-panel p-6">
                  <p className="eyebrow">Start with a track</p>
                  <div className="mt-4 space-y-3">
                    {HERO_STARTERS.map((item) => (
                      <button
                        key={item.department}
                        className="flex w-full items-center justify-between rounded-[20px] border border-border/70 bg-white/80 px-4 py-3 text-left transition hover:border-primary/20 hover:text-primary"
                        onClick={() => openShelf(item.department)}
                      >
                        <div>
                          <p className="text-sm font-semibold text-foreground">{item.label}</p>
                          <p className="text-xs text-muted-foreground">{item.note}</p>
                        </div>
                        <span className="text-xs font-semibold text-primary">{promptCountByDepartment(item.department)} prompts</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="hero-panel p-6">
                  <p className="eyebrow">Common outputs</p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    The bank is designed to produce reusable commercial outputs with minimal editing.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {COMMON_OUTPUTS.map((item) => (
                      <span key={item} className="rounded-full border border-border/70 bg-white/90 px-3 py-1.5 text-sm text-foreground/80">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-[20px] border border-primary/15 bg-primary/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">Brand-ready context</p>
                    <p className="mt-2 text-sm leading-7 text-foreground/80">
                      Built around PepsiCo India Foods selling realities: distributors, retail execution, trade investment, packs, and category growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="toolkit" className="mt-10 grid gap-6 xl:grid-cols-[1.06fr_0.94fr]">
          <div className="space-y-6">
            <div className="section-shell p-6 sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="eyebrow">Prompting hacks</p>
                  <h2 className="mt-2 font-display text-3xl text-foreground sm:text-4xl">The habits that make commercial prompts materially stronger.</h2>
                </div>
                <p className="text-sm text-muted-foreground">{totalPromptingTips} quick rules for better outputs</p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {pepsicoPromptingPractices.map((practice, index) => (
                  <div key={practice.title} className="rounded-[22px] border border-border/70 bg-white p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-sm font-semibold text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-foreground">{practice.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground">{practice.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[24px] border border-border/70 bg-muted/20 p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="eyebrow">Six more prompt tips</p>
                    <h3 className="font-display text-2xl text-foreground sm:text-[2rem]">Small moves that make AI feel sharper and more commercially useful.</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{pepsicoAdvancedTips.length} extra techniques</p>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {pepsicoAdvancedTips.map((tip, index) => (
                    <div key={tip.title} className="rounded-[22px] border border-border/70 bg-white p-5">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-sm font-semibold text-primary">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="text-base font-semibold text-foreground">{tip.title}</h4>
                          <p className="mt-2 text-sm leading-7 text-muted-foreground">{tip.summary}</p>
                          <p className="mt-2 text-sm leading-7 text-foreground/75">{tip.benefit}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-[22px] border border-primary/15 bg-primary/5 p-5">
                  <p className="font-display text-2xl leading-tight text-foreground sm:text-[2rem]">"{pepsicoAdvancedTipsQuote}"</p>
                </div>
              </div>
            </div>

            <div className="section-shell p-6 sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="eyebrow">Cross-team prompt patterns</p>
                  <h2 className="mt-2 font-display text-3xl text-foreground sm:text-4xl">Fast starter patterns for common commercial asks.</h2>
                </div>
                <p className="text-sm text-muted-foreground">Copy, adapt, and add market detail</p>
              </div>

              <div className="mt-6 grid gap-3">
                {pepsicoCrossTeamPatterns.map((pattern) => (
                  <div key={pattern.title} className="rounded-[22px] border border-border/70 bg-white p-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-base font-semibold text-foreground">{pattern.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground">{pattern.prompt}</p>
                      </div>
                      <Button
                        className="rounded-full"
                        size="sm"
                        variant="outline"
                        onClick={() => void copyPrompt(`pattern-${pattern.title.toLowerCase()}`, pattern.prompt)}
                      >
                        {copiedId === `pattern-${pattern.title.toLowerCase()}` ? (
                          <>
                            <Check className="h-4 w-4" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            Copy
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="section-shell p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="eyebrow">Technique notes</p>
                  <h2 className="mt-2 font-display text-3xl text-foreground sm:text-4xl">Prompting techniques worth keeping in reach.</h2>
                </div>
                <p className="text-sm text-muted-foreground">{promptTechniques.length} technique notes</p>
              </div>

              <div className="mt-6 grid gap-4">
                {promptTechniques.map((technique) => (
                  <TechniqueNoteCard key={technique.name} tech={technique} />
                ))}
              </div>
            </div>

            <div className="section-shell p-6 sm:p-8">
              <div className="rounded-[24px] border border-border/70 bg-white p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="eyebrow">Recommended master prefix</p>
                    <h2 className="mt-1 font-display text-3xl text-foreground sm:text-4xl">Start with the PepsiCo India Foods commercial context.</h2>
                  </div>
                  <Button className="rounded-full" onClick={() => void copyPrompt("pepsico-master-prefix", pepsicoMasterPrefix)}>
                    {copiedId === "pepsico-master-prefix" ? (
                      <>
                        <Check className="h-4 w-4" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Copy prefix
                      </>
                    )}
                  </Button>
                </div>
                <pre className="mt-5 whitespace-pre-wrap rounded-[20px] border border-border/70 bg-muted/25 p-4 font-mono text-sm leading-7 text-foreground">
                  {pepsicoMasterPrefix}
                </pre>
              </div>

              <div className="mt-6 rounded-[24px] border border-border/70 bg-white p-5">
                <p className="eyebrow">Simple usage workflow</p>
                <div className="mt-4 space-y-3">
                  {pepsicoWorkflow.map((step, index) => (
                    <div key={step} className="flex items-start gap-4 rounded-[20px] border border-border/70 bg-muted/20 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-sm font-semibold text-primary">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-7 text-muted-foreground">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Curated shelves</p>
              <h2 className="mt-2 font-display text-3xl text-foreground sm:text-4xl">Start from the shelf that matches the commercial problem in front of you.</h2>
            </div>
            <a href="#library" className="text-sm font-semibold text-primary transition hover:text-primary/80">
              Jump to all prompts
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {CURATED_SHELVES.map((shelf) => {
              const meta = DEPARTMENT_META[shelf.department];
              const Icon = meta.icon;

              return (
                <button
                  key={shelf.title}
                  className="rounded-[24px] border border-border/70 bg-white p-5 text-left transition hover:border-primary/20 hover:shadow-sm"
                  onClick={() => openShelf(shelf.department, shelf.search)}
                >
                  <div className={cn("flex h-11 w-11 items-center justify-center rounded-2xl border", meta.badgeClass)}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{shelf.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{shelf.description}</p>
                  <p className="mt-4 text-sm font-semibold text-primary">{promptCountByDepartment(shelf.department)} prompts</p>
                </button>
              );
            })}
          </div>
        </section>

        <section id="library" className="mt-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Prompt bank</p>
              <h2 className="mt-2 font-display text-3xl text-foreground sm:text-4xl">A clean commercial library that is easy to scan, filter, and open.</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Showing {displayedPrompts.length} of {filteredPrompts.length} matching prompts
            </p>
          </div>

          <div className="mt-6 rounded-[28px] border border-border/70 bg-white p-4 sm:p-5">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">{selectedDept === "All" ? "All tracks" : selectedDept}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {selectedMeta
                      ? selectedMeta.summary
                      : "Browse the full commercial library, then narrow by track or search once you know the channel, brand, output, or problem you need."}
                  </p>
                </div>

                {hasActiveFilters && (
                  <Button className="rounded-full" variant="outline" onClick={clearFilters}>
                    Clear filters
                  </Button>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                <FilterChip active={selectedDept === "All"} count={prompts.length} label="All tracks" onClick={() => setSelectedDept("All")} />
                {DEPARTMENTS.map((department) => (
                  <FilterChip
                    key={department}
                    active={selectedDept === department}
                    count={promptCountByDepartment(department)}
                    label={department}
                    onClick={() => setSelectedDept(department)}
                  />
                ))}
              </div>
            </div>
          </div>

          {filteredPrompts.length === 0 ? (
            <div className="mt-6 rounded-[28px] border border-border/70 bg-white p-10 text-center">
              <p className="font-display text-3xl text-foreground">No prompts match that search yet.</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Try a broader keyword like distributor, scheme, modern trade, visibility, or margin.
              </p>
            </div>
          ) : (
            <>
              <div className="mt-6 grid gap-4 xl:grid-cols-2">
                {displayedPrompts.map((prompt) => (
                  <PromptCard
                    key={prompt.id}
                    copiedId={copiedId}
                    isOpen={expandedCards.has(prompt.id)}
                    onCopy={copyPrompt}
                    onToggle={toggleCard}
                    prompt={prompt}
                  />
                ))}
              </div>

              {hasMorePrompts && (
                <div className="mt-8 flex justify-center">
                  <Button className="rounded-full px-5" variant="outline" onClick={() => setVisibleCount((count) => count + INITIAL_VISIBLE_COUNT)}>
                    Load {INITIAL_VISIBLE_COUNT} more prompts
                  </Button>
                </div>
              )}
            </>
          )}
        </section>

        <footer className="mt-12 rounded-[28px] border border-border/70 bg-white px-6 py-8 sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <img alt="PepsiCo official logo" className="h-14 w-auto shrink-0 object-contain sm:h-16" src="/pepsico-logo.png" />
                <div>
                  <p className="text-base font-semibold text-foreground">Sales Prompt Bank</p>
                  <p className="text-sm leading-7 text-muted-foreground">Built for practical commercial planning, execution, and review work.</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Adapted by Futurelab Studios as a sales-focused prompt bank for PepsiCo India Foods teams across GT, MT, e-commerce, wholesale,
                and rural routes.
              </p>
              <div className="mt-4 flex items-center gap-3 rounded-[20px] border border-border/70 bg-muted/20 px-4 py-3">
                <img alt="Futurelab Studios logo" className="h-7 w-auto" src="/futurelab-logo.svg" />
                <p className="text-sm text-muted-foreground">Crafted by Futurelab Studios</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <StatPill label="Prompts" value={prompts.length} />
              <StatPill label="Tracks" value={DEPARTMENTS.length} />
              <StatPill label="Techniques" value={promptTechniques.length} />
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

function FilterChip({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-medium transition",
        active ? "border-primary bg-primary text-primary-foreground" : "border-border/70 bg-white text-foreground hover:border-primary/20 hover:text-primary",
      )}
      onClick={onClick}
    >
      {label} ({count})
    </button>
  );
}

function StatPill({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-full border border-border/70 bg-white px-4 py-2 text-sm">
      <span className="font-semibold text-foreground">{value}</span>
      <span className="ml-2 text-muted-foreground">{label}</span>
    </div>
  );
}

function PromptCard({
  prompt,
  isOpen,
  copiedId,
  onToggle,
  onCopy,
}: {
  prompt: Prompt;
  isOpen: boolean;
  copiedId: string | null;
  onToggle: (id: string) => void;
  onCopy: (id: string, text: string) => Promise<void>;
}) {
  const meta = DEPARTMENT_META[prompt.department];
  const Icon = meta.icon;

  return (
    <Collapsible open={isOpen} onOpenChange={() => onToggle(prompt.id)}>
      <Card className="h-full rounded-[28px] border border-border/70 bg-white shadow-none">
        <CardHeader className="space-y-4 pb-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <Badge variant="outline" className={cn("gap-2 rounded-full px-3 py-1", meta.badgeClass)}>
              <Icon className="h-3.5 w-3.5" />
              {prompt.department}
            </Badge>
            <Badge variant="outline" className={cn("rounded-full px-3 py-1", DIFFICULTY_META[prompt.difficulty])}>
              {prompt.difficulty}
            </Badge>
          </div>

          <div>
            <CardTitle className="font-display text-[1.8rem] leading-tight tracking-[-0.02em]">{prompt.title}</CardTitle>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{prompt.purpose}</p>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="rounded-[22px] border border-border/70 bg-muted/25 p-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary/70">Expected output</p>
            <p className="mt-2 text-sm leading-7 text-foreground/80">{prompt.expectedOutput}</p>
          </div>

          <div className="rounded-[22px] border border-border/70 bg-white p-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary/70">Prompt opening</p>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">{getPromptLead(prompt.promptText)}</p>
          </div>

          <CollapsibleContent>
            <div className="rounded-[22px] border border-border/70 bg-[linear-gradient(180deg,rgba(240,247,255,0.92),rgba(255,255,255,1))] p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary/70">Full prompt</p>
              <pre className="mt-4 whitespace-pre-wrap font-mono text-sm leading-7 text-foreground">{prompt.promptText}</pre>
            </div>
          </CollapsibleContent>

          <div className="flex flex-wrap gap-3">
            <CollapsibleTrigger asChild>
              <Button className="rounded-full" variant="outline">
                {isOpen ? (
                  <>
                    <ChevronUp className="h-4 w-4" />
                    Hide prompt
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4" />
                    View full prompt
                  </>
                )}
              </Button>
            </CollapsibleTrigger>

            <Button className="rounded-full" onClick={() => void onCopy(prompt.id, prompt.promptText)}>
              {copiedId === prompt.id ? (
                <>
                  <Check className="h-4 w-4" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy prompt
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Collapsible>
  );
}

function TechniqueNoteCard({ tech }: { tech: PromptTechnique }) {
  const [open, setOpen] = useState(false);
  const Icon = TECHNIQUE_ICON_MAP[tech.icon] ?? Sparkles;

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <Card className="rounded-[24px] border border-border/70 bg-white shadow-none">
        <CardHeader className="space-y-4 pb-3">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-xl font-semibold leading-tight">{tech.name}</CardTitle>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{tech.description}</p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <CollapsibleContent>
            <div className="rounded-[20px] border border-border/70 bg-muted/25 p-4">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary/70">Commercial example</p>
              <pre className="mt-3 whitespace-pre-wrap font-mono text-xs leading-6 text-foreground/80">{tech.example}</pre>
            </div>
          </CollapsibleContent>

          <CollapsibleTrigger asChild>
            <Button className="rounded-full" variant="outline">
              {open ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  Hide example
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  Show example
                </>
              )}
            </Button>
          </CollapsibleTrigger>
        </CardContent>
      </Card>
    </Collapsible>
  );
}

function getPromptLead(promptText: string) {
  return promptText
    .split("\n")
    .map((line) => line.trim())
    .find(Boolean) ?? "";
}

export default Index;
