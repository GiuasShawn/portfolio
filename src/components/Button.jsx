import React from 'react';

export default function Button({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`border border-primary text-primary px-4 py-2 uppercase tracking-wider font-bold text-sm bg-transparent hover:bg-primary hover:text-background transition-colors duration-150 rounded-none ${className}`}
    >
      [ {children} ]
    </button>
  );
}
