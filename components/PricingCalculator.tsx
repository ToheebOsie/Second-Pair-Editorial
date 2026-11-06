'use client';
import {useMemo,useState} from 'react'; import {services} from '../config/services';
type ServiceSlug = typeof services[number]['slug'];
const money=(amount:number, fractionDigits=2)=>`$${amount.toLocaleString('en-US',{maximumFractionDigits:fractionDigits,minimumFractionDigits:0})}`;
export function PricingCalculator({initialService=services[0].slug}:{initialService?:ServiceSlug}){
 const [slug,setSlug]=useState<ServiceSlug>(initialService); const [words,setWords]=useState('50000');
 const service=services.find(s=>s.slug===slug)!;
 const rate=service.rate;
 const wordCount=Math.max(0,Number(words)||0);
 const calculated=useMemo(()=>rate==null?0:wordCount*rate,[words,rate]);
 const total=rate==null?0:Math.max(service.minimumFee,calculated);
 const usesMinimum=rate!=null&&total>calculated;
 return <div className="calculator">
  <div>
   <label>Service<select value={slug} onChange={e=>setSlug(e.currentTarget.value as ServiceSlug)}>{services.map(s=><option key={s.slug} value={s.slug}>{s.name}</option>)}</select></label>
   <label>Word count<input type="number" min="0" step="1000" value={words} onChange={e=>setWords(e.target.value)} disabled={service.rate==null}/></label>
  </div>
  <div className="calc-result">
   {rate==null ? <><span>Project pricing</span><strong>From {money(service.minimumFee)}</strong><small>Starting fee only. Final price depends on manuscript length, condition, complexity, and the agreed scope.</small></> :
   <><span>Indicative starting estimate</span><strong>{money(total)}</strong><small>{service.name} · {money(rate,4)}/word{usesMinimum?` · ${money(service.minimumFee)} minimum fee`:''}. Final scope and price are confirmed before work begins.</small></>}
  </div>
 </div>
}
