'use client';
import {useEffect,useRef} from 'react';
import {mountGlassQuote} from '@speedrun/glass-effects';
import '@speedrun/glass-effects/styles.css';

export function GlassQuote({children,headerOffset=64,safariGPU=false,className='',...props}) {
  const root=useRef(null),content=useRef(null);
  useEffect(()=>{
    const effect=mountGlassQuote(root.current,{content:content.current,headerOffset,safariGPU});
    return ()=>effect.destroy();
  },[headerOffset,safariGPU]);
  return <section {...props} ref={root} className={className}>
    <div ref={content} className="sr-quote-content">{children}</div>
  </section>;
}
