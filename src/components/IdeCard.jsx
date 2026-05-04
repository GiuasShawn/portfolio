import React from 'react';

export default function IdeCard({ filename, children, className = '' }) {
  return (
    <div className={`border border-outline bg-surface-container flex flex-col rounded-none ${className}`}>
      {/* Top Bar */}
      <div className="h-8 bg-surface-bright border-b border-outline flex items-center px-4 justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-error rounded-none border border-error-container"></div>
          <div className="w-3 h-3 bg-secondary rounded-none border border-secondary-container"></div>
          <div className="w-3 h-3 bg-primary rounded-none border border-primary-container"></div>
        </div>
        <div className="text-on-surface-variant text-xs tracking-wider">{filename}</div>
        <div className="w-12"></div> {/* Spacer for centering */}
      </div>
      {/* Content */}
      <div className="p-4 flex-1">
        {children}
      </div>
    </div>
  );
}
