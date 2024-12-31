// Brand Colors
export const COLORS = {
  primary: {
    blue: '#1E3A8A',
    purple: '#4C1D95',
  },
  secondary: {
    grey: '#9CA3AF',
    green: '#065F46',
  },
} as const;

// Routes Configuration
export const ROUTES = {
  home: '/',
  courses: '/courses',
  blog: '/blog',
  dashboard: '/dashboard',
  admin: '/admin',
} as const;

// API Endpoints
export const API = {
  auth: '/api/auth',
  courses: '/api/courses',
  blog: '/api/blog',
  payments: '/api/payments',
} as const;