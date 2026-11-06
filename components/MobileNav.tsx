'use client';
import Link from 'next/link';
import {useState} from 'react';
export function MobileNav(){
 const [open,setOpen]=useState(false);
 return <div className="mobile-nav"><button className="menu-button" aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(!open)}>Menu</button>{open&&<div id="mobile-menu" className="mobile-menu">
  <Link href="/how-we-read" onClick={()=>setOpen(false)}>How We Read</Link>
  <Link href="/problems" onClick={()=>setOpen(false)}>Problems</Link>
  <Link href="/services" onClick={()=>setOpen(false)}>Services</Link>
  <Link href="/proof" onClick={()=>setOpen(false)}>Proof</Link>
  <Link href="/team" onClick={()=>setOpen(false)}>Our Team</Link>
  <Link href="/about" onClick={()=>setOpen(false)}>About</Link>
  <Link className="button" href="/request-sample" onClick={()=>setOpen(false)}>Start With Your Manuscript Question</Link>
 </div>}</div>
}
