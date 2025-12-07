'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useRouter } from 'next/navigation';

export function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { label: 'Home', href: '#hero-section' },
    { label: 'Minigame', href: '#minigame' },
    { label: 'Cân bằng nhà ta', href: '#canbangnhata' },
    { label: 'Songs', href: '#song' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-51 bg-background/70 backdrop-blur-lg border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          ABC
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => {
            if (item.href === "#canbangnhata") {
              return (
                <button
                  key={item.href}
                  onClick={() => router.push("/card_menu")}
                  className="hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              );
            }

            if (item.href === "#hero-section") {
              return (
                <button
                  key={item.href}
                  onClick={() => router.push("/")}
                  className="hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              );
            }

            return (
              <Link key={item.href} href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </Link>
            );

          })}
        </nav>

        {/* Mobile Menu Button */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[260px] p-6">
            {/* Mobile Logo */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg font-bold">ABC</span>
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                <X />
              </Button>
            </div>

            {/* Mobile Nav */}
            <nav className="flex flex-col gap-4 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
