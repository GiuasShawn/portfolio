import React from 'react';

export default function CodeSnippet({ code, language }) {
  const lines = code.trim().split('\n');
  
  return (
    <div className="bg-surface-container-low border border-outline font-mono text-sm overflow-x-auto">
      <table className="w-full border-collapse">
        <tbody>
          {lines.map((line, index) => (
            <tr key={index} className="hover:bg-surface-container-high group">
              <td className="w-12 px-2 py-1 border-r border-outline text-right text-on-surface-variant select-none">
                {index + 1}
              </td>
              <td className="px-4 py-1 text-on-surface whitespace-pre">
                {/* Basic syntax highlighting simulation */}
                <span dangerouslySetInnerHTML={{
                  __html: line
                    .replace(/public|private|protected|class|void|static|import|return/g, '<span class="text-[#569CD6]">$&</span>')
                    .replace(/String|int|boolean/g, '<span class="text-secondary">$&</span>')
                    .replace(/".*?"/g, '<span class="text-primary">$&</span>')
                    .replace(/\/\/.*$/g, '<span class="text-on-surface-variant">$&</span>')
                }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
