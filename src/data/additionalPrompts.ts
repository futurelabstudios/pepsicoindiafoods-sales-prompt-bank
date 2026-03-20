import { Prompt } from "./types";

export const additionalPrompts: Prompt[] = [
  // CONTENT CREATION
  {
    id: "cc-8",
    title: "Microlearning Reel Script Builder",
    department: "Content Creation",
    difficulty: "Simple",
    purpose: "Turn one concept into a short, mobile-friendly teaching script for revision and discovery.",
    expectedOutput: "45-60 second script with hook, teaching beat, on-screen text, and end CTA.",
    promptText: `Create a Khan Academy India microlearning reel script for:

Subject: [SUBJECT]
Class: [CLASS]
Topic: [TOPIC]
Language: [English/Hindi/Hinglish/Regional language]
Goal: [revision / misconception fix / exam tip]

Return:
1. Hook for first 3 seconds
2. 4-6 short spoken lines
3. On-screen text cues
4. One relatable Indian example
5. End prompt leading students to a full lesson or practice set

Tone: Crisp, encouraging, easy to understand on a small screen.`,
  },
  {
    id: "cc-9",
    title: "Worksheet Differentiation Generator",
    department: "Content Creation",
    difficulty: "Intermediate",
    purpose: "Create differentiated worksheet variants for mixed-ability classrooms.",
    expectedOutput: "Three worksheet versions with scaffolds, answer keys, and teacher notes.",
    promptText: `Design a differentiated worksheet pack for Khan Academy India:

Subject: [SUBJECT]
Class: [CLASS]
Topic: [TOPIC]
Board: [CBSE/ICSE/State]
Classroom profile: [mixed ability details]

Create 3 versions:
- Foundation
- Core
- Stretch

For each version include:
1. 6-8 questions
2. Hint structure
3. Expected misconceptions
4. Answer key
5. One teacher note on when to assign it`,
  },
  {
    id: "cc-10",
    title: "Misconception-to-Remediation Pack",
    department: "Content Creation",
    difficulty: "Chain-of-Thought",
    purpose: "Translate a known student misconception into a targeted content and practice response.",
    expectedOutput: "Stepwise remediation pack with explanation strategy, examples, and follow-up practice.",
    promptText: `A recurring student misconception has been observed in Khan Academy India:

Subject: [SUBJECT]
Class: [CLASS]
Topic: [TOPIC]
Misconception: [DESCRIBE IT]
Evidence: [student answers / teacher notes / analytics]

Think through the response step by step:
1. Diagnose why students may hold this misconception
2. Identify the prerequisite idea they are missing
3. Design a short explanation sequence to correct it
4. Give 2 worked examples
5. Give 3 practice questions that test whether the misconception is resolved
6. Suggest one visual or animation cue for the content team

Return the final output as a clean remediation pack.`,
  },

  // LOCALIZATION & TRANSLATION
  {
    id: "lt-7",
    title: "Regional Language Terminology QA Checklist",
    department: "Localization & Translation",
    difficulty: "Intermediate",
    purpose: "Review translated learning content for terminology consistency and readability.",
    expectedOutput: "QA checklist with pass/fail criteria and flagged terms for reviewer attention.",
    promptText: `Build a terminology QA checklist for Khan Academy India translation review:

Source language: English
Target language: [LANGUAGE]
Subject: [SUBJECT]
Class range: [CLASS RANGE]
Content type: [video script / article / exercise]

Include:
1. 12 review checks
2. Examples of acceptable vs problematic terminology choices
3. Checks for transliteration consistency
4. Checks for student readability
5. A final sign-off rubric for reviewer approval`,
  },
  {
    id: "lt-8",
    title: "Subtitle Timing and Line Break Adapter",
    department: "Localization & Translation",
    difficulty: "Advanced JSON",
    purpose: "Prepare translated subtitles that remain readable within common video timing constraints.",
    expectedOutput: "JSON subtitle adaptation rules and sample subtitle entries.",
    promptText: `Create a subtitle adaptation spec for Khan Academy India videos.

Return JSON:
{
  "language": "[LANGUAGE]",
  "max_characters_per_line": 32,
  "max_lines": 2,
  "reading_speed_guideline": "",
  "line_break_rules": [],
  "timing_rules": [],
  "do_not_break_examples": [],
  "sample_entries": [
    {
      "source_text": "",
      "adapted_subtitle": ["", ""],
      "timing_note": ""
    }
  ]
}

Focus on keeping math and science explanations readable for students.`,
  },
  {
    id: "lt-9",
    title: "Bilingual STEM Glossary Builder",
    department: "Localization & Translation",
    difficulty: "Few-Shot",
    purpose: "Create a classroom-friendly bilingual glossary for STEM content.",
    expectedOutput: "Glossary table with approved terms, usage guidance, and student-friendly examples.",
    promptText: `Example glossary entries:
- numerator -> अंश -> Use in fractions context, explain with visual examples
- ecosystem -> पारितंत्र -> Use the Hindi term, but keep English once in brackets on first mention

Now create a bilingual STEM glossary for Khan Academy India:

Language pair: English + [TARGET LANGUAGE]
Subject: [SUBJECT]
Class: [CLASS]
Unit: [UNIT NAME]

Return 20 entries with:
1. English term
2. Approved translation
3. Transliteration if useful
4. Plain-language student explanation
5. One sentence showing correct usage`,
  },
  {
    id: "lt-10",
    title: "Voice-and-Tone Localisation Reviewer",
    department: "Localization & Translation",
    difficulty: "Simple",
    purpose: "Check whether translated copy still sounds warm, direct, and learner-friendly.",
    expectedOutput: "Tone review with rewrites for awkward or overly literal lines.",
    promptText: `Review this translated Khan Academy India content for voice and tone:

Target language: [LANGUAGE]
Audience: [students / teachers / parents]
Content:
"""
[PASTE CONTENT]
"""

Return:
1. Overall tone assessment
2. 5 lines that feel too literal, stiff, or confusing
3. Better rewrites
4. A short summary of tone rules reviewers should remember`,
  },

  // TEACHER TRAINING
  {
    id: "tt-7",
    title: "Demo Lesson Observation Rubric",
    department: "Teacher Training",
    difficulty: "Intermediate",
    purpose: "Create a rubric for observing model lessons that use Khan Academy resources well.",
    expectedOutput: "Observation rubric with scoring bands and coaching prompts.",
    promptText: `Create a classroom observation rubric for Khan Academy India teacher trainers.

Context: Teachers are delivering a demo lesson using KA videos, articles, or exercises.
Grade band: [GRADE BAND]
Subject: [SUBJECT]

Include:
1. 6 rubric dimensions
2. 4 scoring levels for each dimension
3. What evidence an observer should look for
4. 3 coaching questions for the post-observation conversation
5. One version for in-person classrooms and one for low-tech classrooms`,
  },
  {
    id: "tt-8",
    title: "Teacher PD Workshop Agenda Generator",
    department: "Teacher Training",
    difficulty: "Simple",
    purpose: "Plan a practical professional development workshop around a teaching goal.",
    expectedOutput: "Workshop agenda with session timings, activities, and facilitator notes.",
    promptText: `Design a teacher professional development workshop for Khan Academy India.

Workshop theme: [TOPIC]
Audience: [new teachers / school leaders / volunteers]
Duration: [90 min / half day / full day]
Language: [LANGUAGE]

Create:
1. Opening activity
2. Core training segments with timings
3. Hands-on practice task
4. Reflection questions
5. Materials needed
6. Facilitator notes for common participant challenges`,
  },
  {
    id: "tt-9",
    title: "Classroom Tech Adoption Coaching Plan",
    department: "Teacher Training",
    difficulty: "Chain-of-Thought",
    purpose: "Help teacher coaches support adoption of Khan Academy tools in real classroom conditions.",
    expectedOutput: "Coaching plan with barriers, support moves, milestones, and evidence of progress.",
    promptText: `A school partner wants teachers to use Khan Academy India more consistently.

Teacher profile: [GRADE / SUBJECT / EXPERIENCE]
School context: [urban/rural, device access, timetable, language]
Current challenge: [LOW USAGE / HESITATION / TIME PRESSURE]

Think through the problem step by step:
1. Identify likely root causes
2. Separate mindset barriers from system barriers
3. Design a 4-week coaching plan
4. Suggest quick wins for week 1
5. Define what evidence would show adoption is improving

Return a practical coaching plan that a field coach can implement.`,
  },
  {
    id: "tt-10",
    title: "Teacher FAQ Knowledge Base Builder",
    department: "Teacher Training",
    difficulty: "Advanced JSON",
    purpose: "Structure common teacher questions into an internal support knowledge base.",
    expectedOutput: "JSON FAQ schema with categories, answer drafts, and escalation flags.",
    promptText: `Return JSON for a Khan Academy India teacher support FAQ knowledge base.

{
  "audience": "teachers",
  "categories": [],
  "faqs": [
    {
      "question": "",
      "category": "",
      "short_answer": "",
      "step_by_step_answer": [],
      "when_to_escalate": "",
      "related_resources": []
    }
  ]
}

Cover questions around onboarding, assigning content, tracking progress, language support, and classroom implementation.`,
  },

  // CURRICULUM ALIGNMENT
  {
    id: "ca-7",
    title: "NCERT to KA Coverage Matrix",
    department: "Curriculum Alignment",
    difficulty: "Advanced JSON",
    purpose: "Map NCERT chapters against available Khan Academy India resources and gaps.",
    expectedOutput: "Structured coverage matrix with chapter status, existing assets, and priority gaps.",
    promptText: `Create an NCERT alignment matrix for Khan Academy India.

Subject: [SUBJECT]
Class: [CLASS]

Return JSON:
{
  "subject": "",
  "class": "",
  "chapters": [
    {
      "chapter_name": "",
      "learning_objectives": [],
      "ka_assets_available": [],
      "coverage_status": "full/partial/missing",
      "gap_notes": "",
      "priority_level": "high/medium/low"
    }
  ]
}`,
  },
  {
    id: "ca-8",
    title: "Board Exam Competency Mapping",
    department: "Curriculum Alignment",
    difficulty: "Intermediate",
    purpose: "Translate board exam question patterns into teachable competencies and content requirements.",
    expectedOutput: "Competency map linked to question types, skill demands, and content recommendations.",
    promptText: `Map board exam requirements for Khan Academy India:

Board: [CBSE/ICSE/State]
Subject: [SUBJECT]
Class: [CLASS]
Chapter: [OPTIONAL]

Return:
1. Core competencies students need
2. Common board exam question types
3. Skill level required for each question type
4. KA content assets that support each competency
5. Content gaps that should be filled before board season`,
  },
  {
    id: "ca-9",
    title: "Learning Objective Rewrite Assistant",
    department: "Curriculum Alignment",
    difficulty: "Simple",
    purpose: "Rewrite academic objectives into clearer learner-facing outcomes.",
    expectedOutput: "Original and revised learning objectives with rationale.",
    promptText: `Rewrite these curriculum objectives for Khan Academy India so they are student-friendly and measurable.

Subject: [SUBJECT]
Class: [CLASS]
Original objectives:
"""
[PASTE OBJECTIVES]
"""

For each objective provide:
1. Revised version in plain language
2. Why the rewrite is clearer
3. One sample activity or assessment task aligned to it`,
  },
  {
    id: "ca-10",
    title: "Gap Prioritization Brief",
    department: "Curriculum Alignment",
    difficulty: "Tree-of-Thought",
    purpose: "Prioritize which curriculum gaps to address first when resources are limited.",
    expectedOutput: "Decision brief comparing multiple prioritization approaches and final recommendation.",
    promptText: `Khan Academy India has identified multiple curriculum gaps but cannot address all of them at once.

Candidate gaps: [LIST]
Constraints: [TEAM SIZE / TIME / BUDGET / LANGUAGE NEEDS]

Explore 3 prioritization approaches:
1. Highest learner need
2. Highest board exam relevance
3. Fastest to produce with current team capacity

For each approach evaluate:
- impact
- speed
- equity implications
- language complexity
- dependency on new assets

Then recommend the best sequencing plan.`,
  },

  // LEARNING ENGINEERING
  {
    id: "le-7",
    title: "Adaptive Practice Loop Designer",
    department: "Learning Engineering",
    difficulty: "Intermediate",
    purpose: "Design a tighter practice-feedback loop around one learning objective.",
    expectedOutput: "Practice loop with entry task, feedback branches, and mastery check.",
    promptText: `Design an adaptive practice loop for Khan Academy India:

Subject: [SUBJECT]
Class: [CLASS]
Learning objective: [OBJECTIVE]

Include:
1. Entry diagnostic question
2. Feedback paths for correct, partially correct, and incorrect responses
3. One short reteach intervention
4. Follow-up practice items
5. Final mastery check
6. Rule for when students move forward vs repeat`,
  },
  {
    id: "le-8",
    title: "Student Error Pattern Clusterer",
    department: "Learning Engineering",
    difficulty: "Advanced JSON",
    purpose: "Group student errors into actionable clusters for remediation design.",
    expectedOutput: "JSON schema for error clusters with likely causes and interventions.",
    promptText: `Return JSON for clustering student error patterns in Khan Academy India practice data.

{
  "topic": "[TOPIC]",
  "error_clusters": [
    {
      "cluster_name": "",
      "sample_errors": [],
      "likely_root_cause": "",
      "severity": "high/medium/low",
      "recommended_intervention": "",
      "teacher_note": ""
    }
  ]
}

Assume the input data comes from Class [CLASS] students studying [SUBJECT].`,
  },
  {
    id: "le-9",
    title: "Mastery Check Exit Ticket Generator",
    department: "Learning Engineering",
    difficulty: "Simple",
    purpose: "Create a short exit ticket that quickly checks whether students are ready to progress.",
    expectedOutput: "5-question exit ticket with answer key and interpretation notes.",
    promptText: `Generate an exit ticket for Khan Academy India:

Subject: [SUBJECT]
Class: [CLASS]
Topic: [TOPIC]
Instruction completed: [VIDEO / ARTICLE / PRACTICE SET]

Return:
1. 5 short questions
2. Answer key
3. One misconception each question is checking
4. Rule for who should progress, review, or receive reteaching`,
  },
  {
    id: "le-10",
    title: "Retention Intervention Planner",
    department: "Learning Engineering",
    difficulty: "Chain-of-Thought",
    purpose: "Plan a spaced reinforcement strategy when students forget concepts after initial mastery.",
    expectedOutput: "Intervention plan with timing, content mix, and measurement approach.",
    promptText: `Students mastered a topic initially but performance dropped after 3 weeks.

Subject: [SUBJECT]
Class: [CLASS]
Topic: [TOPIC]
Evidence of drop: [DESCRIBE]

Think step by step:
1. Identify what kind of forgetting may be happening
2. Suggest a spaced reinforcement schedule
3. Mix videos, articles, and practice intelligently
4. Add one low-bandwidth option
5. Define how to measure whether retention improves

Return a retention intervention plan that a learning team can pilot.`,
  },

  // COMMUNITY & PARTNERSHIPS
  {
    id: "cp-7",
    title: "School Partnership Pitch Deck Outline",
    department: "Community & Partnerships",
    difficulty: "Intermediate",
    purpose: "Draft a persuasive deck structure for prospective school or NGO partners.",
    expectedOutput: "Slide-by-slide outline with key messages, proof points, and call to action.",
    promptText: `Create a partnership pitch deck outline for Khan Academy India.

Partner type: [SCHOOL NETWORK / NGO / CSR PARTNER / DISTRICT]
Audience: [DECISION MAKERS]
Goal: [pilot / expansion / funding / content partnership]

Provide:
1. 8-10 slide titles
2. Key message for each slide
3. What evidence or case study to include
4. Suggested closing ask
5. Anticipated objections and responses`,
  },
  {
    id: "cp-8",
    title: "NGO Program Kickoff Brief",
    department: "Community & Partnerships",
    difficulty: "Simple",
    purpose: "Create a practical kickoff brief when launching a field partnership.",
    expectedOutput: "Kickoff note covering goals, responsibilities, timeline, and success measures.",
    promptText: `Draft a Khan Academy India partnership kickoff brief.

Partner: [NGO NAME]
Program objective: [OBJECTIVE]
Geography: [STATE / DISTRICT]
Audience served: [STUDENTS / TEACHERS / VOLUNTEERS]
Timeline: [DATES]

Include:
1. Shared goals
2. Roles and responsibilities
3. Training and onboarding steps
4. Reporting cadence
5. Risks to watch
6. Success metrics for the first 90 days`,
  },
  {
    id: "cp-9",
    title: "Stakeholder Meeting Summary Draft",
    department: "Community & Partnerships",
    difficulty: "Few-Shot",
    purpose: "Turn rough meeting notes into a polished summary with actions and follow-ups.",
    expectedOutput: "Clear summary email with decisions, owners, and next steps.",
    promptText: `Example summary style:
- Decision: Pilot will begin in July
- Owner: State program lead
- Next step: Share teacher list by Friday

Now convert the following notes into a Khan Academy India stakeholder summary:
"""
[PASTE NOTES]
"""

Return:
1. Meeting objective
2. Key decisions
3. Open questions
4. Action items with owners
5. Suggested follow-up email text`,
  },
  {
    id: "cp-10",
    title: "District Expansion Opportunity Scanner",
    department: "Community & Partnerships",
    difficulty: "Tree-of-Thought",
    purpose: "Evaluate multiple districts and identify the best next expansion opportunity.",
    expectedOutput: "Comparison memo with recommended district and rationale.",
    promptText: `Khan Academy India is considering expansion into multiple districts.

District options: [LIST]
Criteria: digital readiness, language fit, government interest, NGO ecosystem, subject need, implementation capacity

Explore at least 3 evaluation lenses:
1. Highest implementation readiness
2. Highest equity impact
3. Best long-term strategic fit

Compare the districts and recommend the strongest next opportunity, with clear reasoning and trade-offs.`,
  },

  // PRODUCT & TECHNOLOGY
  {
    id: "pt-8",
    title: "Internal Tool PRD Draft",
    department: "Product & Technology",
    difficulty: "Intermediate",
    purpose: "Create a crisp product requirement draft for an internal content or operations tool.",
    expectedOutput: "PRD outline with problem, user stories, scope, and launch metrics.",
    promptText: `Write a lightweight product requirements draft for Khan Academy India.

Tool idea: [TOOL NAME]
Primary users: [TEAM]
Problem to solve: [PROBLEM]
Current workaround: [DESCRIBE]

Include:
1. Problem statement
2. User stories
3. Must-have features
4. Non-goals
5. Dependencies
6. Success metrics for first release`,
  },
  {
    id: "pt-9",
    title: "AI Tutor Guardrail Specification",
    department: "Product & Technology",
    difficulty: "Advanced JSON",
    purpose: "Define safety and quality rules for an AI tutor feature in education.",
    expectedOutput: "JSON guardrail spec with allowed behaviors, blocked behaviors, and fallback handling.",
    promptText: `Return JSON for an AI tutor guardrail specification for Khan Academy India.

{
  "feature_name": "AI Tutor",
  "allowed_behaviors": [],
  "blocked_behaviors": [],
  "sensitive_cases": [],
  "fallback_responses": [],
  "language_support_notes": [],
  "review_checklist": []
}

Focus on student safety, age appropriateness, academic honesty, and curriculum accuracy.`,
  },
  {
    id: "pt-10",
    title: "Experiment Readout Template",
    department: "Product & Technology",
    difficulty: "Simple",
    purpose: "Summarize product experiments in a way that helps teams make fast decisions.",
    expectedOutput: "Experiment readout template with findings, implications, and next steps.",
    promptText: `Create a Khan Academy India experiment readout template for:

Feature or change tested: [FEATURE]
Hypothesis: [HYPOTHESIS]
User group: [AUDIENCE]
Metrics tracked: [LIST]

Return a template with these sections:
1. What changed
2. Why we tested it
3. What happened
4. What we learned
5. Recommendation
6. Follow-up experiments`,
  },

  // MARKETING & OUTREACH
  {
    id: "mo-7",
    title: "WhatsApp Campaign Copy Builder",
    department: "Marketing & Outreach",
    difficulty: "Simple",
    purpose: "Draft short WhatsApp messages for outreach, reminders, and engagement campaigns.",
    expectedOutput: "Message variations with tone guidance and CTA suggestions.",
    promptText: `Write a WhatsApp outreach pack for Khan Academy India.

Audience: [students / parents / teachers]
Campaign goal: [sign-up / reminder / challenge / board exam support]
Language: [LANGUAGE]

Create:
1. 5 short message variations
2. 2 CTA options
3. One friendly reminder message
4. One message optimized for low-attention readers

Keep copy concise, warm, and non-spammy.`,
  },
  {
    id: "mo-8",
    title: "Student Success Story Interview Guide",
    department: "Marketing & Outreach",
    difficulty: "Intermediate",
    purpose: "Help the team capture authentic learner stories for campaigns and case studies.",
    expectedOutput: "Interview guide with questions, prompts, and asset capture notes.",
    promptText: `Create a Khan Academy India student success story interview guide.

Profile of learner: [AGE / CLASS / LOCATION]
Outcome achieved: [EXAM IMPROVEMENT / CONSISTENT STUDY / SUBJECT CONFIDENCE]
Format: [VIDEO / BLOG / SOCIAL POST]

Include:
1. Warm-up questions
2. Story questions
3. Questions that surface specific impact
4. Questions for parent or teacher quotes
5. Visual asset capture checklist`,
  },
  {
    id: "mo-9",
    title: "Regional Launch Messaging Matrix",
    department: "Marketing & Outreach",
    difficulty: "Advanced JSON",
    purpose: "Adapt launch messaging for multiple regional audiences without losing consistency.",
    expectedOutput: "Messaging matrix with audience, channel, message angle, and CTA.",
    promptText: `Return JSON for a Khan Academy India regional launch messaging matrix.

{
  "campaign_name": "",
  "regions": [
    {
      "region": "",
      "primary_audience": "",
      "channel": "",
      "message_angle": "",
      "key_benefit": "",
      "cta": "",
      "localisation_note": ""
    }
  ]
}

Design it for a [PRODUCT / PROGRAM / COURSE] launch.`,
  },
  {
    id: "mo-10",
    title: "Parent Awareness Campaign Planner",
    department: "Marketing & Outreach",
    difficulty: "Chain-of-Thought",
    purpose: "Plan a parent-focused awareness campaign that builds trust and relevance.",
    expectedOutput: "Campaign plan with message pillars, channels, sequence, and measurement.",
    promptText: `Khan Academy India wants more parents to understand the value of its learning resources.

Audience: [PARENT PROFILE]
Priority concern: [exam pressure / screen time / English confidence / affordability]
Goal: [awareness / sign-up / repeat use]

Think through:
1. What parents care about most
2. What objections they may have
3. Which channels best match the audience
4. What message sequence builds trust
5. How to measure whether the campaign is working

Return a practical campaign plan.`,
  },

  // VOLUNTEER PROGRAMS
  {
    id: "vp-7",
    title: "Volunteer Onboarding Journey Designer",
    department: "Volunteer Programs",
    difficulty: "Intermediate",
    purpose: "Design a clean onboarding path for new volunteers joining a program.",
    expectedOutput: "Step-by-step onboarding journey with touchpoints, materials, and owner actions.",
    promptText: `Design a volunteer onboarding journey for Khan Academy India.

Volunteer type: [translator / reviewer / mentor / trainer]
Program goal: [GOAL]
Average weekly time available: [HOURS]

Map:
1. Pre-join communication
2. Orientation session
3. First-week tasks
4. Quality expectations
5. Support channels
6. Milestones for the first 30 days`,
  },
  {
    id: "vp-8",
    title: "Reviewer Calibration Pack",
    department: "Volunteer Programs",
    difficulty: "Few-Shot",
    purpose: "Align volunteer reviewers on what good output looks like before quality review begins.",
    expectedOutput: "Calibration pack with examples, scoring guidance, and discussion questions.",
    promptText: `Example of strong review feedback:
- Specific
- Actionable
- Respectful
- Linked to guideline

Example of weak review feedback:
- Vague
- Judgmental
- No clear fix

Now create a reviewer calibration pack for Khan Academy India volunteers working on [CONTENT TYPE].

Include sample cases, scoring guidance, and 5 discussion prompts for the calibration session.`,
  },
  {
    id: "vp-9",
    title: "Recognition and Retention Plan",
    department: "Volunteer Programs",
    difficulty: "Simple",
    purpose: "Build a lightweight recognition plan that helps volunteers stay engaged.",
    expectedOutput: "Retention plan with recognition moments, communication cadence, and feedback loops.",
    promptText: `Create a volunteer recognition and retention plan for Khan Academy India.

Volunteer group: [GROUP]
Program duration: [DURATION]
Current issue: [drop-off / low engagement / inconsistent quality]

Include:
1. Recognition moments by month
2. Communication rhythm
3. Peer community ideas
4. Feedback collection methods
5. Ways to celebrate impact without adding too much ops overhead`,
  },
  {
    id: "vp-10",
    title: "Volunteer Escalation Playbook",
    department: "Volunteer Programs",
    difficulty: "Advanced JSON",
    purpose: "Define when volunteer issues should be handled locally versus escalated to program leads.",
    expectedOutput: "JSON playbook with issue types, severity, owner, and escalation path.",
    promptText: `Return JSON for a volunteer program escalation playbook for Khan Academy India.

{
  "issue_types": [
    {
      "issue": "",
      "severity": "low/medium/high",
      "first_responder": "",
      "response_time": "",
      "escalation_trigger": "",
      "final_owner": ""
    }
  ],
  "communication_principles": [],
  "documentation_requirements": []
}`,
  },

  // IMPACT & RESEARCH
  {
    id: "ir-7",
    title: "Quasi-Experimental Study Design Generator",
    department: "Impact & Research",
    difficulty: "Intermediate",
    purpose: "Draft a realistic impact study design when randomized trials are not possible.",
    expectedOutput: "Study design with comparison strategy, data needs, threats to validity, and analysis plan.",
    promptText: `Design a quasi-experimental study for Khan Academy India.

Program: [PROGRAM]
Outcome of interest: [OUTCOME]
Population: [STUDENTS / TEACHERS / SCHOOLS]
Constraint: Random assignment is not possible.

Include:
1. Study question
2. Comparison strategy
3. Key variables to collect
4. Threats to validity
5. Analysis approach
6. Reporting caveats`,
  },
  {
    id: "ir-8",
    title: "Dashboard Metric Dictionary",
    department: "Impact & Research",
    difficulty: "Advanced JSON",
    purpose: "Define research and program metrics clearly so dashboards are interpreted consistently.",
    expectedOutput: "JSON metric dictionary with definitions, formulas, owners, and caveats.",
    promptText: `Return JSON for a Khan Academy India impact dashboard metric dictionary.

{
  "metrics": [
    {
      "metric_name": "",
      "definition": "",
      "formula": "",
      "data_source": "",
      "update_frequency": "",
      "owner": "",
      "caveats": []
    }
  ]
}

Include metrics for reach, engagement, completion, learning progress, and partner health.`,
  },
  {
    id: "ir-9",
    title: "State-wise Adoption Insight Memo",
    department: "Impact & Research",
    difficulty: "Simple",
    purpose: "Summarize what adoption data suggests about state-by-state program performance.",
    expectedOutput: "Insight memo with trends, hypotheses, and recommended follow-up questions.",
    promptText: `Write a short adoption insight memo for Khan Academy India.

Geography: [STATE LIST]
Time period: [TIME PERIOD]
Indicators available: [SIGN-UPS / ACTIVE USERS / CONTENT COMPLETION / TEACHER PARTICIPATION]

Return:
1. 3 notable trends
2. 3 possible explanations
3. States or regions that need closer review
4. Questions the team should investigate next`,
  },
  {
    id: "ir-10",
    title: "Mixed Methods Interview Guide",
    department: "Impact & Research",
    difficulty: "Chain-of-Thought",
    purpose: "Prepare an interview guide that complements quantitative program data with richer context.",
    expectedOutput: "Interview guide with sections, probes, and analysis framing notes.",
    promptText: `Khan Academy India has quantitative program data and now needs qualitative insight.

Respondent group: [students / teachers / parents / partner leads]
Research goal: [GOAL]
Existing quantitative findings: [SUMMARY]

Think through:
1. What the numbers already tell us
2. What context is still missing
3. What interview questions could explain the patterns
4. What probes would surface useful examples
5. How the responses should be coded later

Return a mixed methods interview guide with clear sections and probes.`,
  },
];
