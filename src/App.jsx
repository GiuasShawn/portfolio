import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TerminalLayout from './layouts/TerminalLayout';
import Button from './components/Button';
import Tag from './components/Tag';
import IdeCard from './components/IdeCard';
import InputField from './components/InputField';
import CodeSnippet from './components/CodeSnippet';
import ProgressBar from './components/ProgressBar';

export default function App() {
  const [command, setCommand] = useState('');
  const [logs, setLogs] = useState([]);
  const [saved, setSaved] = useState([]);

  // fetch saved messages on mount
  useEffect(() => {
    axios.get('http://localhost:4000/messages')
      .then(res => setSaved(res.data))
      .catch(err => console.error('Fetch error', err));
  }, []);

  const handleExecute = async () => {
    if (!command.trim()) return;
    const newLog = { time: new Date().toLocaleTimeString(), text: command };
    setLogs(prev => [...prev, newLog]);
    try {
      const resp = await axios.post('http://localhost:4000/messages', { text: command });
      setSaved(prev => [resp.data, ...prev]);
    } catch (e) {
      console.error('Save error', e);
    }
    setCommand('');
  };

  const codeSample = `
import com.portfolio.core.SystemEngine;

public class TerminalProfile {
    // Initialize high-performance portfolio
    public static void main(String[] args) {
        SystemEngine engine = new SystemEngine();
        engine.bootSequence();
        System.out.println("System Ready.");
    }
}
  `;

  return (
    <TerminalLayout>
      <header className="mb-16 border-b border-outline pb-8">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-[#569CD6]">public class</span> <span className="text-primary">SoftwareEngineer</span> {'{'}
        </h1>
        <div className="step-indent-1">
          <p className="text-on-surface-variant text-lg mb-6 max-w-2xl">
            /* High-performance backend developer specializing in distributed systems, 
               JVM optimization, and scalable microservices. */
          </p>
          <div className="flex gap-4 mb-6">
            <Tag>java</Tag>
            <Tag>spring-boot</Tag>
            <Tag>kubernetes</Tag>
            <Tag>postgresql</Tag>
          </div>
          <Button onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
            INITIALIZE_CONTACT
          </Button>
        </div>
        {saved.length > 0 && (
          <div className="mt-6 pt-4 border-t border-outline">
            <h3 className="text-sm font-medium text-primary mb-2">📂 Saved messages (SQLite)</h3>
            {saved.map(msg => (
              <div key={msg.id} className="font-mono text-sm mb-1 text-on-surface">
                <span className="text-secondary">[{new Date(msg.timestamp).toLocaleTimeString()}]</span>{' '}
                <span className="text-primary">System.in:</span> {msg.text}
              </div>
            ))}
          </div>
        )}
      </header>

      <main className="space-y-24">
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-secondary">
            {'//'} SYSTEM_SKILLS
          </h2>
          <div className="step-indent-1">
            <div className="p-6 border border-outline bg-surface-container-low mb-8 max-w-2xl">
              <ProgressBar label="Java / JVM" percentage={95} />
              <ProgressBar label="Spring Boot" percentage={90} />
              <ProgressBar label="System Design" percentage={85} />
              <ProgressBar label="Docker/K8s" percentage={80} />
              <ProgressBar label="CI/CD" percentage={75} />
            </div>
            
            <IdeCard filename="ProfileConfig.java" className="max-w-3xl">
              <CodeSnippet code={codeSample} language="java" />
            </IdeCard>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-8 text-secondary">
            {'//'} DEPLOYED_PROJECTS
          </h2>
          <div className="step-indent-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            <IdeCard filename="DistributedCache.java">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">Hazelcast Node Synchronizer</h3>
                <p className="text-on-surface-variant">
                  Engineered a distributed caching layer utilizing Hazelcast, achieving 40% reduction in database read load across 15 microservices.
                </p>
                <div className="flex gap-2">
                  <Tag>java 17</Tag>
                  <Tag>hazelcast</Tag>
                </div>
              </div>
            </IdeCard>

            <IdeCard filename="TradeProcessor.java">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">Real-time Trade Aggregator</h3>
                <p className="text-on-surface-variant">
                  High-throughput stream processing application utilizing Kafka Streams. Processes over 10k messages/second with sub-millisecond latency.
                </p>
                <div className="flex gap-2">
                  <Tag>kafka</Tag>
                  <Tag>spring-webflux</Tag>
                </div>
              </div>
            </IdeCard>
          </div>
        </section>
      </main>

      <footer className="mt-24 pt-12 border-t border-outline pb-12">
        <div className="step-indent-1">
          <h2 className="text-3xl font-semibold mb-6">
            System.out.println(<span className="text-primary">"Contact"</span>);
          </h2>
          <div className="max-w-md bg-surface-container p-6 border border-outline">
            <div className="mb-4 text-on-surface-variant">
              Input command to send message to system administrator.
            </div>
            <InputField 
              value={command} 
              onChange={(e) => setCommand(e.target.value)} 
              placeholder="Enter message..." 
              prompt="$"
            />
            <div className="mt-6 text-right">
              <Button onClick={handleExecute}>EXECUTE</Button>
            </div>

            {logs.length > 0 && (
              <div className="mt-6 pt-4 border-t border-outline">
                {logs.map((log, idx) => (
                  <div key={idx} className="font-mono text-sm mb-2 text-on-surface">
                    <span className="text-secondary">[{log.time}]</span>{' '}
                    <span className="text-primary">System.in:</span> {log.text}
                  </div>
                ))}
              </div>
            )}

            {saved.length > 0 && (
              <div className="mt-6 pt-4 border-t border-outline">
                <h3 className="text-sm font-medium text-primary mb-2">📂 Saved messages (SQLite)</h3>
                {saved.map(msg => (
                  <div key={msg.id} className="font-mono text-sm mb-1 text-on-surface">
                    <span className="text-secondary">[{new Date(msg.timestamp).toLocaleTimeString()}]</span>{' '}
                    <span className="text-primary">System.in:</span> {msg.text}
                  </div>
                ))}
              </div>
            )}

            </div>
        </div>
        <div className="text-center text-on-surface-variant mt-24 text-sm">
          {'}'} // End of SoftwareEngineer class
        </div>
      </footer>
    </TerminalLayout>
  );
}
