import React from 'react';
import ThemeToggle from '$components/buttons/ThemeToggle';

export default function Header() {
  return (
    <nav className="bg-base-100 h-12 shadow-2xl flex justify-between px-8 items-center">
      <div>{/* Logo */}</div>

      {/* Nav */}
      <div className="hover:text-primary">
        <ThemeToggle height="h-8" />
      </div>
    </nav>
  );
}
