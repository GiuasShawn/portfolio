import React from 'react';

export default function ProgressBar({ label, percentage }) {
  const totalChars = 20;
  const filledChars = Math.round((percentage / 100) * totalChars);
  const emptyChars = totalChars - filledChars;
  
  const bar = '#'.repeat(filledChars) + '-'.repeat(emptyChars);
  
  return (
    <div className="font-mono flex items-center mb-2">
      <div className="w-32 text-on-surface">{label}</div>
      <div className="text-primary tracking-[0.2em] font-bold">
        [{bar}]
      </div>
      <div className="ml-4 text-on-surface-variant w-12 text-right">
        {percentage}%
      </div>
    </div>
  );
}
