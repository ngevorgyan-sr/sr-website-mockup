(() => {
  const {mountGlassButton,getGlassPreset}=window.SpeedrunGlass;
  const preset=getGlassPreset(),effects=[],accents=new Map(),visible=new Set();
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const buttons=[...document.querySelectorAll('[data-button-design]')];
  const finish=className=>{const node=document.createElement('span');node.className=`comparison-finish ${className}`;node.setAttribute('aria-hidden','true');return node;};
  function stopAccent(element){for(const animation of accents.get(element)||[])animation.cancel();accents.delete(element);}
  function playAccent(element){
    stopAccent(element);
    if(reduced.matches||document.hidden||!visible.has(element))return;
    const reflection=element.querySelector('.comparison-gloss-reflection');
    const edge=element.querySelector('.comparison-gloss-edge-light');
    const animations=[reflection.animate([
      {transform:'translateX(-110%)',opacity:0},
      {opacity:.85,offset:.4},{opacity:.85,offset:.6},
      {transform:'translateX(110%)',opacity:0},
    ],{duration:preset.button.duration,easing:'cubic-bezier(.25,.1,.35,1)'})];
    if(getComputedStyle(edge).display!=='none')animations.push(edge.animate([
      {transform:'translateY(-50%) rotate(0deg)'},
      {transform:'translateY(-50%) rotate(180deg)'},
    ],{duration:preset.button.duration,easing:'cubic-bezier(.25,1,.5,1)'}));
    accents.set(element,animations);
    Promise.all(animations.map(animation=>animation.finished)).then(()=>{
      if(accents.get(element)===animations)stopAccent(element);
    }).catch(()=>{});
  }
  for(const element of buttons){
    const variant=element.dataset.buttonDesign;
    // Custom CSS finishes skip the unused static material shader. The black
    // surface gets slightly brighter ripple light; motion keeps the locked preset.
    const settings=variant==='01'?{}:{surface:{opacity:0}};
    if(variant==='03')Object.assign(settings,{
      glow:preset.button.glow*1.6875,
      sheen:preset.button.sheen*(4/3),
    });
    effects.push(mountGlassButton(element,{settings}));
    const clip=element.querySelector('.sr-button-clip');
    if(variant==='03')clip.prepend(finish('comparison-flat-body'));
    if(variant==='02'){
      const edge=finish('comparison-gloss-edge'),light=document.createElement('span');
      light.className='comparison-gloss-edge-light';edge.append(light);
      clip.prepend(finish('comparison-gloss-body'),finish('comparison-gloss-reflection'),edge);
      element.addEventListener('pointerenter',event=>{if(event.pointerType!=='touch')playAccent(element);});
      element.addEventListener('focus',()=>{if(element.matches(':focus-visible'))playAccent(element);});
      element.addEventListener('click',()=>playAccent(element));
    }
  }
  const visibility=new IntersectionObserver(entries=>{
    for(const entry of entries){
      if(entry.isIntersecting)visible.add(entry.target);
      else{visible.delete(entry.target);stopAccent(entry.target);}
    }
  });
  buttons.forEach(button=>visibility.observe(button));
  const stopAll=()=>buttons.forEach(stopAccent);
  reduced.addEventListener('change',()=>{if(reduced.matches)stopAll();});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stopAll();});
  window.addEventListener('pagehide',event=>{stopAll();if(!event.persisted){visibility.disconnect();effects.forEach(effect=>effect.destroy());}});

  const links=[...document.querySelectorAll('.comparison-nav nav a')];
  const sections=[...document.querySelectorAll('main>.benefits')];
  const navigation=new IntersectionObserver(entries=>{
    for(const entry of entries)if(entry.isIntersecting){
      links.forEach(link=>{if(link.hash===`#${entry.target.id}`)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});
    }
  },{rootMargin:'-20% 0px -70% 0px'});
  sections.forEach(section=>navigation.observe(section));
})();
