export type Department = string;

export type Difficulty = "Simple" | "Intermediate" | "Advanced JSON" | "Chain-of-Thought" | "Few-Shot" | "Tree-of-Thought";

export interface Prompt {
  id: string;
  title: string;
  department: Department;
  difficulty: Difficulty;
  purpose: string;
  expectedOutput: string;
  promptText: string;
}

export interface PromptTechnique {
  name: string;
  description: string;
  example: string;
  icon: string;
}
