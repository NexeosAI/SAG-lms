import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for merging Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Scottish theme utility classes
export const scottishTheme = {
  // Layout
  container: 'container mx-auto px-4 sm:px-6 lg:px-8',
  
  // Typography
  heading: {
    h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
    h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
    h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
  },
  
  // Components
  card: {
    root: 'rounded-lg border bg-card text-card-foreground shadow-sm',
    header: 'flex flex-col space-y-1.5 p-6',
    content: 'p-6 pt-0',
    footer: 'flex items-center p-6 pt-0',
  },
  
  // Buttons
  button: {
    primary: 'bg-primary-blue hover:bg-primary-blue/90',
    secondary: 'bg-primary-purple hover:bg-primary-purple/90',
    highland: 'bg-secondary-green hover:bg-secondary-green/90',
  },
} as const;