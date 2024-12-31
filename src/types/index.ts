// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'ADMIN' | 'STUDENT';
  avatar?: string;
}

// Course Types
export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  instructor: User;
  modules: Module[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  order: number;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  videoUrl?: string;
  content: string;
  order: number;
  duration: number;
}

// Progress Types
export interface Progress {
  userId: string;
  courseId: string;
  lessonId: string;
  completed: boolean;
  watchTime: number;
  lastPosition: number;
}

// Blog Types
export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: User;
  publishedAt: Date;
  tags: string[];
}