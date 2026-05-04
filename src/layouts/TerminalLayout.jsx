import React from 'react';

export default function TerminalLayout({ children }) {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary selection:text-on-primary">
      <div className="max-w-[1100px] mx-auto py-12 px-6">
        {children}
      </div>
    </div>
  );
}
