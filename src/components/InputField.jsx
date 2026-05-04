import React, { useState, useEffect } from 'react';

export default function InputField({ value, onChange, placeholder, type = 'text', prompt = '>' }) {
  const [isFocused, setIsFocused] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center text-primary text-lg">
      <span className="mr-2">{prompt}</span>
      <div className="relative flex-1 flex items-center">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="bg-transparent border-none outline-none w-full text-on-surface placeholder:text-on-surface-variant font-mono z-10"
        />
        {isFocused && (
          <span 
            className="absolute bg-primary h-[1.2em] w-[0.6em] pointer-events-none transition-opacity duration-75"
            style={{ 
              opacity: cursorVisible ? 1 : 0,
              left: `calc(${value?.length || 0}ch)`
            }}
          ></span>
        )}
      </div>
    </div>
  );
}
