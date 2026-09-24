'use client';
import {useEffect,useRef} from 'react';
import {mountGlassButton} from '@speedrun/glass-effects';
import '@speedrun/glass-effects/styles.css';

// Stable, declarative anatomy keeps React in control of the live label and props.
// Pass a real video element as `video`, once its ref is available.
export function GlassButton({children,video=null,lift=true,className='',...props}) {
  const root=useRef(null);
  useEffect(()=>{
    const effect=mountGlassButton(root.current,{video,lift});
    return ()=>effect.destroy();
  },[video,lift]);
  return <button {...props} ref={root} className={className}>
    <span className="sr-button-visual"><span className="sr-button-clip"><span className="sr-button-content"><span>{children}</span></span></span></span>
    <span className="sr-button-hit-area" aria-hidden="true" />
  </button>;
}
