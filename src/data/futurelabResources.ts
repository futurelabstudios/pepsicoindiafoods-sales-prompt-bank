export const futurelabPromptingPractices = [
  {
    title: "Start with role + context",
    description: "Tell the model who it is supporting and the environment it is operating in.",
  },
  {
    title: "State the exact task",
    description: "Ask for a specific deliverable rather than a vague request for help.",
  },
  {
    title: "Give constraints",
    description: "Mention grade, subject, language, geography, audience, timeline, and practical limits.",
  },
  {
    title: "Ask for structured outputs",
    description: "Specify whether you want a table, checklist, plan, email draft, SOP, tracker, or memo.",
  },
  {
    title: "Name the audience",
    description: "Outputs change a lot depending on whether they are for teachers, officials, internal teams, or partners.",
  },
  {
    title: "Ask for assumptions",
    description: "When information is missing, tell the model to make reasonable assumptions and label them clearly.",
  },
  {
    title: "Ask for multiple versions",
    description: "Request concise, practical, or leadership-ready versions when useful.",
  },
  {
    title: "Keep it India-specific",
    description: "Ground outputs in Indian classrooms, government-school realities, multilingual settings, and uneven connectivity.",
  },
  {
    title: "Prefer plain language",
    description: "Especially for teacher-facing, field-facing, or partner-facing communication.",
  },
  {
    title: "Ask for risks and gaps",
    description: "End by asking for weak assumptions, practical risks, and anything you may be missing.",
  },
];

export const futurelabAdvancedTips = [
  {
    title: "ELI5 - Explain Like I'm 5/10/PhD",
    summary: "Ask it to 'Explain Like I'm 5/10/PhD' based on audience level.",
    benefit: "This adjusts complexity to match your target audience much more reliably.",
  },
  {
    title: "Ask What It Doesn't Know",
    summary: "Encourages self-checking and reduces hallucinations.",
    benefit: "Ask the model to identify limitations, uncertainties, and what would need validation.",
  },
  {
    title: "Take Your Time",
    summary: "Slows response and often improves reasoning.",
    benefit: "Adding 'take your time' usually leads to more thoughtful, more careful responses.",
  },
  {
    title: "First Principles Thinking",
    summary: "Request bottom-up explanation, not surface summaries.",
    benefit: "Ask it to start from fundamentals and build up to the more complex idea.",
  },
  {
    title: "Treat It Like a Person",
    summary: "Use dialogue, not search queries.",
    benefit: "Natural conversation patterns usually work better than terse keyword commands.",
  },
  {
    title: "Ask for a Second Opinion",
    summary: "Get multiple answers, approaches, or versions.",
    benefit: "Requesting alternate perspectives often leads to more balanced and complete solutions.",
  },
];

export const futurelabAdvancedTipsQuote =
  "These six techniques will transform your AI interactions from basic queries to expert-level collaborations.";

export const futurelabMasterPrefix = `You are an expert assistant supporting Khan Academy India teams. Your work should reflect the realities of curriculum-aligned learning, government-school partnerships, multilingual delivery, teacher enablement, student engagement, and data-informed program improvement in India. Keep outputs practical, structured, simple, and implementation-ready. Where information is missing, make smart assumptions and label them clearly.`;

export const futurelabCrossTeamPatterns = [
  {
    title: "Create",
    prompt: "Create a practical [document type] for [audience] in the context of Khan Academy India's work with [state / teachers / schools / students]. Include [specific components]. Keep it [tone].",
  },
  {
    title: "Review",
    prompt: "Review the following [draft / plan / deck / email / tracker] for clarity, completeness, risks, and practicality. Then rewrite it into a stronger version.",
  },
  {
    title: "Diagnose",
    prompt: "Analyze why [problem] may be happening in this context. Give likely causes, evidence to look for, quick fixes, and structural fixes.",
  },
  {
    title: "Summarize",
    prompt: "Synthesize the following notes into key themes, risks, decisions, and next actions. Group similar issues together.",
  },
  {
    title: "Compare",
    prompt: "Compare 3 options for [decision]. Evaluate each on cost, complexity, impact, timeline, risk, and suitability for government-school realities in India.",
  },
];

export const futurelabWorkflow = [
  "Pick the closest prompt.",
  "Fill the placeholders with your real context.",
  "Add any constraints the team cares about.",
  "Ask for a structured format such as a table, checklist, or memo.",
  "Review the output for factual accuracy and local relevance before sharing.",
];
