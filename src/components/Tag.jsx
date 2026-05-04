import React from 'react';

export default function Tag({ children }) {
  return (
    <span className="text-secondary text-xs uppercase font-bold tracking-wider inline-block">
      @{children}
    </span>
  );
}
