export const pepsicoPromptingPractices = [
  {
    title: "Start with market context",
    description: "Tell the model which region, channel, quarter, and business situation it is supporting.",
  },
  {
    title: "Name the channel and outlet type",
    description: "Outputs change materially across general trade, modern trade, e-commerce, wholesale, and rural routes.",
  },
  {
    title: "Specify brands, packs, and SKUs",
    description: "Be explicit about brand, pack-price point, SKU mix, launch scope, and the priority portfolio.",
  },
  {
    title: "State the commercial objective",
    description: "Ask for one clear deliverable such as numeric distribution growth, off-take, visibility, margin, or scheme ROI.",
  },
  {
    title: "Anchor the geography",
    description: "Mention state, cluster, town class, or distributor territory so the answer reflects local route-to-market realities.",
  },
  {
    title: "Add hard constraints",
    description: "Call out budgets, outlet counts, manpower limits, stock availability, margin guardrails, and time windows.",
  },
  {
    title: "Ask for structured outputs",
    description: "Request a tracker, market visit checklist, account plan, deck outline, memo, scorecard, or field script.",
  },
  {
    title: "Prefer field-ready language",
    description: "Keep the output direct, operational, and usable by sales managers, distributor teams, and merchandisers.",
  },
  {
    title: "Ask for assumptions and risks",
    description: "Make the model state what it is assuming, what could fail in market, and what needs field validation.",
  },
  {
    title: "Request alternatives",
    description: "Ask for at least two options when the trade-off between growth, spend, margin, or execution complexity matters.",
  },
];

export const pepsicoAdvancedTips = [
  {
    title: "ELI5 - Explain Like I'm 5/10/VP Sales",
    summary: "Ask for the same output at field, manager, or leadership depth depending on the audience.",
    benefit: "This helps the model match the level of complexity to frontline teams, ASMs, RBMs, or leadership.",
  },
  {
    title: "Ask What It Doesn't Know",
    summary: "Use the prompt to force uncertainty checks before acting on recommendations.",
    benefit: "Ask the model to name missing data, weak assumptions, and what would need validation with the market team.",
  },
  {
    title: "Take Your Time",
    summary: "This often improves commercial reasoning on trade-offs and sequencing.",
    benefit: "Adding 'take your time' usually leads to more careful thinking on margins, route-to-market, and execution risk.",
  },
  {
    title: "First Principles Thinking",
    summary: "Ask the model to start from outlet economics, shopper behavior, and execution basics.",
    benefit: "This prevents shallow answers and builds more defensible plans from fundamentals upward.",
  },
  {
    title: "Treat It Like a Person",
    summary: "Use dialogue and context, not search-style fragments.",
    benefit: "Natural conversation gives the model the nuance it needs for distributor, retailer, and sales-team situations.",
  },
  {
    title: "Ask for a Second Opinion",
    summary: "Request alternate approaches before picking one plan.",
    benefit: "This is especially useful when growth, spend, and margin objectives are pulling in different directions.",
  },
];

export const pepsicoAdvancedTipsQuote =
  "These six techniques can move AI use from quick drafting to disciplined commercial thinking.";

export const pepsicoMasterPrefix = `You are an expert commercial assistant supporting PepsiCo India Foods sales teams. Your work should reflect real Indian route-to-market conditions across general trade, modern trade, e-commerce, wholesale, and rural channels; distributor economics; outlet execution; trade marketing; pack-price architecture; account negotiations; demand-supply coordination; and sales capability building. Keep outputs commercial, practical, structured, and ready for execution. When information is missing, make explicit assumptions and flag what should be validated with field teams.`;

export const pepsicoCrossTeamPatterns = [
  {
    title: "Create",
    prompt:
      "Create a practical [document type] for [sales audience] in the context of PepsiCo India Foods across [region/channel/brand]. Include [specific components]. Keep it commercially sharp and execution-ready.",
  },
  {
    title: "Review",
    prompt:
      "Review the following [plan / deck / email / tracker / scheme / activation brief] for clarity, commercial logic, execution feasibility, and risk. Then rewrite it into a stronger version.",
  },
  {
    title: "Diagnose",
    prompt:
      "Analyze why [commercial problem] may be happening in this market context. Give likely causes, evidence to check, quick fixes, and structural fixes.",
  },
  {
    title: "Compare",
    prompt:
      "Compare 3 options for [sales decision]. Evaluate each on growth impact, execution complexity, trade spend, margin implications, timeline, and channel fit.",
  },
  {
    title: "Summarize",
    prompt:
      "Synthesize the following market notes, distributor inputs, or review comments into patterns, risks, decisions, and next actions. Group similar themes together.",
  },
];

export const pepsicoWorkflow = [
  "Pick the closest prompt for the business problem in front of you.",
  "Fill in the region, channel, brand, pack, time window, and commercial objective.",
  "Add any constraints around spend, stock, manpower, or retailer/distributor realities.",
  "Ask for a structured output such as a tracker, memo, action plan, or review deck.",
  "Check the output for market realism before sending it to the field or leadership.",
];
