import type { Block } from '@/lib/types';
import BlockRenderer from '@/components/BlockRenderer';
import EoArchitecture from './diagrams/EoArchitecture';
import ContentStudioWorkflow from './diagrams/ContentStudioWorkflow';
import WebDeveloperWorkflow from './diagrams/WebDeveloperWorkflow';

const DIAGRAM_REGISTRY: Record<string, React.ComponentType> = {
  EoArchitecture,
  ContentStudioWorkflow,
  WebDeveloperWorkflow,
};

type StepCardBlock = Extract<Block, { tag: 'step-card' }>;
type PhaseLaneBlock = Extract<Block, { tag: 'phase-lane' }>;
type DiagramRefBlock = Extract<Block, { tag: 'diagram-ref' }>;

const NEW_TAGS = new Set(['step-card', 'phase-lane', 'diagram-ref']);

export default function BlueprintRenderer({ blocks }: { blocks: Block[] }) {
  // Render by walking the block list, grouping runs of shared-blocks so BlockRenderer
  // handles them contiguously, and rendering blueprint-specific blocks inline.
  const rendered: React.ReactNode[] = [];
  let buffer: Block[] = [];
  let key = 0;

  const flush = () => {
    if (buffer.length === 0) return;
    rendered.push(<BlockRenderer key={`shared-${key++}`} blocks={buffer} />);
    buffer = [];
  };

  for (const block of blocks) {
    if (!NEW_TAGS.has(block.tag)) {
      buffer.push(block);
      continue;
    }
    flush();

    if (block.tag === 'step-card') {
      rendered.push(<StepCard key={`step-${key++}`} block={block} />);
    } else if (block.tag === 'phase-lane') {
      rendered.push(<PhaseLane key={`phase-${key++}`} block={block} />);
    } else if (block.tag === 'diagram-ref') {
      rendered.push(<DiagramRef key={`diagram-${key++}`} block={block} />);
    }
  }
  flush();

  return <>{rendered}</>;
}

function StepCard({ block }: { block: StepCardBlock }) {
  return (
    <section className="my-10 border border-white/10 bg-white/[0.03] p-8 md:p-10">
      {block.eyebrow && (
        <div className="inline-flex items-center gap-2 font-mono text-[11px] font-normal tracking-[0.18em] uppercase text-white/50 mb-4">
          <span className="inline-flex items-center justify-center w-[22px] h-[22px] border border-white/20 text-white text-[11px] font-normal">
            {block.eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-sans font-normal text-white text-[28px] md:text-[32px] tracking-[-0.01em] leading-[1.2] mb-5">
        {block.title}
      </h2>
      <div className="[&>*:first-child]:mt-0">
        <BlockRenderer blocks={block.body} />
      </div>
    </section>
  );
}

function PhaseLane({ block }: { block: PhaseLaneBlock }) {
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/10">
      {block.lanes.map((lane, i) => (
        <div
          key={i}
          className={`p-6 flex flex-col gap-3 ${
            i < block.lanes.length - 1 ? 'md:border-r lg:border-r border-white/10' : ''
          } ${i < 2 ? 'md:border-b lg:border-b-0 border-white/10' : ''}`}
        >
          <div className="font-mono text-[10px] font-normal tracking-[0.18em] uppercase text-white/50">
            Phase {String(i + 1).padStart(2, '0')}
          </div>
          <div className="font-sans font-medium text-white text-[15px] leading-tight">
            {lane.title}
          </div>
          <ul className="space-y-2 mt-1 list-none p-0 m-0">
            {lane.items.map((item, j) => (
              <li
                key={j}
                className="flex gap-2.5 text-[13px] text-white/70 leading-relaxed"
              >
                <span className="w-[10px] h-px bg-white/30 flex-shrink-0 mt-[10px]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function DiagramRef({ block }: { block: DiagramRefBlock }) {
  const Diagram = DIAGRAM_REGISTRY[block.component];
  if (!Diagram) {
    return (
      <div className="my-8 border border-dashed border-white/15 bg-white/[0.03] p-6 text-center text-white/50 text-[13px] font-mono uppercase tracking-[0.14em]">
        Unknown diagram: {block.component}
      </div>
    );
  }
  return <Diagram />;
}
