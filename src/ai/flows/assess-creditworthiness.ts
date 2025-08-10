'use server';

/**
 * @fileOverview This file defines a Genkit flow to assess a student's creditworthiness.
 *
 * The flow takes into account GPA, learning behavior, social activities, and spending habits
 * to provide an EduScore, helping students understand their financial standing.
 *
 * @exports assessCreditworthiness - The main function to trigger the creditworthiness assessment flow.
 * @exports AssessCreditworthinessInput - The input type for the assessCreditworthiness function.
 * @exports AssessCreditworthinessOutput - The output type for the assessCreditworthiness function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AssessCreditworthinessInputSchema = z.object({
  gpa: z.number().describe('Grade Point Average of the student.'),
  learningBehavior: z.string().describe('Description of the student\'s learning habits and engagement.'),
  socialActivities: z
    .string()
    .describe('Details of the student\'s participation in social activities and community involvement.'),
  spendingHabits: z
    .string()
    .describe('Information on the student\'s spending habits and financial management.'),
});

export type AssessCreditworthinessInput = z.infer<typeof AssessCreditworthinessInputSchema>;

const AssessCreditworthinessOutputSchema = z.object({
  eduScore: z.number().describe('A score representing the student\'s creditworthiness.'),
  scoreExplanation: z
    .string()
    .describe('An explanation of the factors contributing to the EduScore.'),
  recommendations: z
    .string()
    .describe('Personalized recommendations for improving the EduScore.'),
});

export type AssessCreditworthinessOutput = z.infer<typeof AssessCreditworthinessOutputSchema>;

export async function assessCreditworthiness(
  input: AssessCreditworthinessInput
): Promise<AssessCreditworthinessOutput> {
  return assessCreditworthinessFlow(input);
}

const assessCreditworthinessPrompt = ai.definePrompt({
  name: 'assessCreditworthinessPrompt',
  input: {schema: AssessCreditworthinessInputSchema},
  output: {schema: AssessCreditworthinessOutputSchema},
  prompt: `You are an AI assistant designed to assess the creditworthiness of students based on their academic performance, learning behavior, social activities, and spending habits.

  Evaluate the student based on the following information:
  GPA: {{gpa}}
  Learning Behavior: {{learningBehavior}}
  Social Activities: {{socialActivities}}
  Spending Habits: {{spendingHabits}}

  Provide an EduScore (a number between 0 and 100, with higher scores indicating better creditworthiness), explain the factors contributing to the score, and offer personalized recommendations for improving the EduScore.

  Ensure that the EduScore is appropriate given the data, and the explanation and recommendations are tailored to the individual student.

  Output in JSON format.
  `,
});

const assessCreditworthinessFlow = ai.defineFlow(
  {
    name: 'assessCreditworthinessFlow',
    inputSchema: AssessCreditworthinessInputSchema,
    outputSchema: AssessCreditworthinessOutputSchema,
  },
  async input => {
    const {output} = await assessCreditworthinessPrompt(input);
    return output!;
  }
);
