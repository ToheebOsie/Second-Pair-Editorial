export const onboardingConfig = {
  packageName: 'Feedback-to-Final Manuscript',
  route: '/onboarding/feedback-to-final-manuscript',
  maxFileSizeBytes: 10 * 1024 * 1024,
  maxTotalUploadBytes: 25 * 1024 * 1024,
  allowedExtensions: ['docx', 'pdf'],
  allowedMimeTypes: [
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ],
} as const;

export const onboardingSteps = [
  {id: 'project', label: 'Project'},
  {id: 'effect', label: 'Intended effect'},
  {id: 'uncertainty', label: 'Current uncertainty'},
  {id: 'evidence', label: 'Reader evidence'},
  {id: 'context', label: 'Manuscript context'},
  {id: 'editing', label: 'Editing expectations'},
  {id: 'consent', label: 'Consent and submission'},
] as const;
