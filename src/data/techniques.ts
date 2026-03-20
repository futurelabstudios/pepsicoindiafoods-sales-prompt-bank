import type { PromptTechnique } from "./types";

export const promptTechniques: PromptTechnique[] = [
  {
    name: "Zero-Shot",
    description: "Use direct instruction when the task is straightforward and you need a fast first draft.",
    example: `List the top 5 reasons numeric distribution may be dropping for Lay's in general trade in Uttar Pradesh, and suggest one immediate sales action for each.`,
    icon: "Zap",
  },
  {
    name: "Few-Shot",
    description: "Give 2-3 examples when you want the model to mirror tone, structure, or analysis style.",
    example: `Here are examples of strong PepsiCo India Foods action notes:\n- Distributor review: "Billing is stable but secondary sales are weak in town-class B outlets. Focus next week on route productivity and top 50 outlet recovery."\n- Key account review: "Promo delivered sell-in but shelf compliance lagged in the south cluster. Fix compliance before scaling the mechanic."\n\nNow write a similar action note for a Kurkure market visit in Maharashtra.`,
    icon: "List",
  },
  {
    name: "Chain-of-Thought",
    description: "Ask the model to reason through a commercial problem step by step before recommending action.",
    example: `Analyze why PepsiCo India Foods is underperforming in premium snack packs in modern trade. Think step by step through assortment, pricing, shelf visibility, competitor activity, promo dependence, and shopper mission before giving a recommendation.`,
    icon: "GitBranch",
  },
  {
    name: "Role Prompting",
    description: "Assign a concrete business role so the answer sounds like it comes from the right commercial operator.",
    example: `You are a Regional Sales Manager for PepsiCo India Foods with deep experience in general trade and distributor management in South India. Draft a 30-day turnaround plan for a weak distributor in Karnataka where service levels and secondary sales have slipped.`,
    icon: "User",
  },
  {
    name: "JSON/Structured Output",
    description: "Request the answer in a structured format when you need a tracker, data object, or repeatable template.",
    example: `Analyze outlet execution issues for PepsiCo India Foods and return the answer as JSON with fields: outlet_type, issue, likely_cause, urgency, owner, action, and review_metric.`,
    icon: "Code",
  },
  {
    name: "Tree-of-Thought",
    description: "Use multiple paths when the decision has real trade-offs across growth, margin, and execution complexity.",
    example: `PepsiCo India Foods wants to grow Kurkure in east India. Explore three approaches: expanding low-unit packs in rural markets, pushing premium packs in modern trade, and driving retailer-led display contests in urban general trade. Compare each on growth impact, spend, execution risk, and margin quality before recommending one path.`,
    icon: "Network",
  },
];
