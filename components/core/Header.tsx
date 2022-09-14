import React from 'react';
import ThemeToggle from '$components/buttons/ThemeToggle';

export default function Header() {
  return (
    <nav className="h-12 shadow-xl flex justify-between px-8 items-center">
      <div>{/* Logo */}</div>

      {/* Nav */}
      <div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
