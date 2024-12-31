import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Brain, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-primary-blue" />
            <span className="font-bold">Scottish AI Guy</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/services" className="text-sm font-medium">Services</Link>
            <Link to="/about" className="text-sm font-medium">About</Link>
            <Link to="/industries" className="text-sm font-medium">Industries</Link>
            <Link to="/learning" className="text-sm font-medium">Learning</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Contact</Button>
            <Button className="bg-primary-blue hover:bg-primary-blue/90">Free Assessment</Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t p-4">
          <nav className="flex flex-col gap-4">
            <Link to="/services" className="text-sm font-medium">Services</Link>
            <Link to="/about" className="text-sm font-medium">About</Link>
            <Link to="/industries" className="text-sm font-medium">Industries</Link>
            <Link to="/learning" className="text-sm font-medium">Learning</Link>
            <Button variant="ghost" className="justify-start">Contact</Button>
            <Button className="w-full bg-primary-blue hover:bg-primary-blue/90">Free Assessment</Button>
          </nav>
        </div>
      )}
    </header>
  );
}