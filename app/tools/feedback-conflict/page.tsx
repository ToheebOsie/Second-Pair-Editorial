'use client';
import {useMemo, useState} from 'react';
import Link from 'next/link';

type Comment = {line: string; kind: string; reason: string};
const rules: Array<{kind: string; reason: string; pattern: RegExp}> = [
  {kind: 'Preference or expectation', reason: 'This line may express taste or an expectation rather than a verifiable craft issue.', pattern: /\b(i prefer|i would rather|not my thing|not for me|i like|i dislike|wish|i expected|i wanted|genre convention|personal preference)\b/i},
  {kind: 'Suggested fix', reason: 'This line appears to recommend an action.', pattern: /\b(should|could|try|add|remove|cut|rewrite|change|move|delete|expand|shorten|explain|clarify|include|show|tell)\b/i},
  {kind: 'Possible cause', reason: 'This line appears to explain why a reaction happens.', pattern: /\b(because|since|due to|the reason|caused by|unclear because|hard to follow|doesn.t make sense|not enough|too much|too many|repetitive|confusing)\b/i},
  {kind: 'Reader reaction', reason: 'This line appears to describe a reading experience or response.', pattern: /\b(felt|feel|felt|boring|slow|dragged|engaging|confused|confusing|lost|enjoyed|loved|hated|interested|bored|cared|believed|surprised|expected|wanted|couldn.t follow|didn.t understand)\b/i},
 ];
function classify(line: string): Comment {
  const matched = rules.find(rule => rule.pattern.test(line));
  return matched ? {line, kind: matched.kind, reason: matched.reason} : {line, kind: 'Needs context', reason: 'This line does not fit a simple text pattern; return to the relevant manuscript passage before interpreting it.'};
}
export default function FeedbackConflict(){
  const [text,setText]=useState('');
  const [done,setDone]=useState(false);
  const comments = useMemo(() => text.split(/\n+/).map(line=>line.trim()).filter(Boolean).map(classify),[text]);
  const grouped = useMemo(() => rules.map(rule=>({kind:rule.kind, items:comments.filter(item=>item.kind===rule.kind)})).concat([{kind:'Needs context',items:comments.filter(item=>item.kind==='Needs context')}]),[comments]);
  const reset = () => setDone(false);
  return <main>
    <section className="page-hero"><div className="container narrow"><span className="eyebrow">FEEDBACK-CONFLICT REFLECTION TOOL</span><h1>Turn conflicting comments into questions you can investigate.</h1><p>Paste one comment per line. This tool uses simple, visible keyword rules in your browser to sort possible reactions, explanations and suggested fixes. It is not an AI reader, it may misclassify comments, and it cannot decide who is right. Avoid names, identifying details or confidential manuscript text.</p></div></section>
    <section className="section"><div className="container narrow">
      <label htmlFor="feedback-comments"><strong>Reader or editor comments</strong></label>
      <textarea id="feedback-comments" className="tool-textarea" rows={12} value={text} onChange={e=>{setText(e.target.value);reset();}} placeholder={'Reader 1: The middle drags\nReader 2: I loved the middle\nEditor: The structure needs tightening'} />
      <p className="fine-print">Separate comments with line breaks. The text is processed in this page and is not sent to our server by this tool.</p>
      <button className="button" disabled={!text.trim()} onClick={()=>setDone(true)}>Sort these comments</button>
      {done&&<div className="tool-result" aria-live="polite"><span className="eyebrow">A FIRST-PASS SORT — NOT A VERDICT</span><h2>What the wording may be telling you</h2><p>These labels are rough prompts based on wording, not judgments about accuracy. One comment can contain a reaction, a theory and a proposed fix at the same time. Read the original comment and the relevant pages before acting.</p>
        {grouped.filter(group=>group.items.length>0).map(group=><section className="tool-result-card" key={group.kind}><h3>{group.kind} <span>({group.items.length})</span></h3><ul>{group.items.map((item,index)=><li key={`${item.line}-${index}`}><strong>{item.line}</strong><p>{item.reason}</p></li>)}</ul></section>)}
        <h3>Questions to take back to the manuscript</h3><ul><li>Which comments describe the same reader effect, even if they use different words?</li><li>Which comments genuinely conflict, and which may come from different expectations?</li><li>Can you find the passage that supports or complicates each explanation?</li><li>Is a suggested fix the only solution, or just one reader's proposal?</li></ul>
        <div className="tool-actions"><Link className="button" href="/start/feedback-reconciliation">Discuss the feedback with us</Link><Link className="text-link" href="/problems/beta-readers-disagree">Read the disagreement guide →</Link></div>
      </div>}
    </div></section>
  </main>
}
