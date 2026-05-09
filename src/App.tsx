import { useCallback, useState } from 'react';
import Diorama from './components/Diorama';
import CustomizerPanel from './components/customizer/CustomizerPanel';
import { getConfig, useAgentStore } from './store/agentStore';

export default function App() {
  const [copied, setCopied] = useState(false);
  const randomize = useAgentStore((s) => s.randomize);
  const reset = useAgentStore((s) => s.reset);

  const onExport = useCallback(async () => {
    const state = useAgentStore.getState();
    const json = JSON.stringify(getConfig(state), null, 2);
    try {
      await navigator.clipboard.writeText(json);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // fallback: prompt
      window.prompt('Agent JSON', json);
    }
  }, []);

  return (
    <div className="flex h-full min-h-screen flex-col">
      <header className="flex items-center justify-between border-b border-white/5 bg-ink-900/70 px-6 py-3 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-accent to-[#6B3F7A] shadow-lg" />
          <div>
            <div className="text-sm font-semibold tracking-wide text-ink-100">Agent Customizer</div>
            <div className="text-[11px] text-ink-300">Isometric diorama · seven species · seven palette colors</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" className="btn btn-ghost" onClick={randomize}>
            <span aria-hidden>🎲</span> Randomize
          </button>
          <button type="button" className="btn btn-ghost" onClick={reset}>
            Reset
          </button>
          <button type="button" className="btn btn-primary" onClick={onExport}>
            {copied ? 'Copied ✓' : 'Export JSON'}
          </button>
        </div>
      </header>

      <main className="grid flex-1 grid-cols-12 gap-6 p-6">
        <section className="col-span-12 lg:col-span-7 flex items-center justify-center">
          <Diorama />
        </section>
        <section className="col-span-12 lg:col-span-5 max-h-[calc(100vh-120px)]">
          <CustomizerPanel />
        </section>
      </main>
    </div>
  );
}
