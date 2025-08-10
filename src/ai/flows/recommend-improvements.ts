// src/ai/flows/recommend-improvements.ts
'use server';
/**
 * @fileOverview A flow that recommends improvements to a student's EduScore.
 *
 * - getEduScoreImprovements - A function that returns personalized recommendations for improving a student's EduScore.
 * - GetEduScoreImprovementsInput - The input type for the getEduScoreImprovements function.
 * - GetEduScoreImprovementsOutput - The return type for the getEduScoreImprovements function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetEduScoreImprovementsInputSchema = z.object({
  gpa: z.number().describe('The student\u2019s GPA.'),
  learningBehavior: z.string().describe('Description of the student\u2019s learning behavior.'),
  socialActivities: z.string().describe('Description of the student\u2019s social activities.'),
  spendingHabits: z.string().describe('Description of the student\u2019s spending habits.'),
});
export type GetEduScoreImprovementsInput = z.infer<typeof GetEduScoreImprovementsInputSchema>;

const GetEduScoreImprovementsOutputSchema = z.object({
  recommendations: z.array(z.string()).describe('A list of personalized recommendations for improving the student\u2019s EduScore.'),
});
export type GetEduScoreImprovementsOutput = z.infer<typeof GetEduScoreImprovementsOutputSchema>;

export async function getEduScoreImprovements(input: GetEduScoreImprovementsInput): Promise<GetEduScoreImprovementsOutput> {
  return getEduScoreImprovementsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'getEduScoreImprovementsPrompt',
  input: {schema: GetEduScoreImprovementsInputSchema},
  output: {schema: GetEduScoreImprovementsOutputSchema},
  prompt: `You are an AI assistant designed to provide personalized recommendations for students to improve their EduScore.

  Based on the student's profile below, provide a list of specific and actionable recommendations for improving their EduScore. Recommendations should include online courses, volunteer activities, or changes in spending habits.

  Student Profile:
  GPA: {{{gpa}}}
  Learning Behavior: {{{learningBehavior}}}
  Social Activities: {{{socialActivities}}}
  Spending Habits: {{{spendingHabits}}}

  Recommendations:`,
});

const getEduScoreImprovementsFlow = ai.defineFlow(
  {
    name: 'getEduScoreImprovementsFlow',
    inputSchema: GetEduScoreImprovementsInputSchema,
    outputSchema: GetEduScoreImprovementsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
