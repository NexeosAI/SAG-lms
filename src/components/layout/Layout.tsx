import { ReactNode } from 'react';
import { Header } from './Header';
import { cn } from '@/lib/theme';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className={cn('container mx-auto py-6', className)}>
        {children}
      </main>
      <footer className="border-t bg-background/95 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Scottish AI Guy LMS. All rights reserved.
        </div>
      </footer>
    </div>
  );
}