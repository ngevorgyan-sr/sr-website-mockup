export type Curve = [number, number, number, number];
export interface Keyframe {t:number; value:number; ease?:Curve}
export interface Origin {x:number; y:number}
export interface HoverMotion {duration:number; delay:number; curve:Curve; keyframes:Keyframe[]; returnDuration:number; returnCurve:Curve; returnKeyframes:Keyframe[]}
export interface Material {
  tintColor:string|null; tintOpacity:number; videoTintOpacity:number; opacity:number; brightness:number;
  blur:number; saturation:number; refraction:number; chromAberration:number; distortion:number;
  edgeHighlight:number; specular:number; specularSharpness:number; fresnel:number;
  cornerRadius:number|null; zRadius:number; bevelMode:'pill'|'dome';
  shadowOpacity:number; shadowSpread:number; shadowCenterOpacity:number; shadowCenterSpread:number;
  videoShadowOpacity:number; videoShadowSpread:number; shine:number; edge:number;
}
export interface GlassSettings {
  duration:number; strength:number; width:number; radius:number; dispersion:number; glow:number; sheen:number;
  coreGlow:number; coreDuration:number; coreEnvelope:Keyframe[]; highlightSize:number; clickHighlightSize?:number;
  ringSoftness:number; stretch:number; stretchDuration:number; stretchDelay:number; stretchTravel:Curve;
  stretchEnvelope:Keyframe[]; lift:number; hoverScale:number; liftMotion:HoverMotion; scaleMotion:HoverMotion;
  origin:Origin; hoverOrigin:'entry'|'fixed'; clickOrigin:'pointer'|'fixed'; travel:Curve; envelope:Keyframe[];
  spectrum:{position:number;color:string}[]; spectrumShift:Keyframe[];
  coreMotion:{startScale:number; releaseScale:number; endScale:number; contractStart:number; contractCurve:Curve; expandCurve:Curve};
  warmup:{enabled:boolean; start:number; release:number; strength:number; width:number; glow:number; sheen:number; coreGlow:number; stretch:number; stretchY:number; curve:Curve; releaseFade:number; previewDuration:number; coreEnvelope:Keyframe[]};
  surface?:Material;
}
export type SettingsOverride<T=GlassSettings> = {[K in keyof T]?:T[K] extends Array<unknown> ? T[K] : NonNullable<T[K]> extends object ? SettingsOverride<NonNullable<T[K]>> : T[K]};
export interface GlassController {
  /** Fresh outward ripple; quote calls never synthesize a windup. */
  play(origin?:Origin):void;
  reset():void;
  update(settings:SettingsOverride):void;
  /** Idempotent cleanup. Restores owned DOM and removes observers/listeners. */
  destroy():void;
}
export interface ButtonOptions {video?:HTMLVideoElement|string|null; lift?:boolean; settings?:SettingsOverride}
export interface QuoteOptions {content?:HTMLElement|string; headerOffset?:number; settings?:SettingsOverride; scroll?:boolean}
export function getGlassPreset():{button:GlassSettings & {surface:Material};quote:GlassSettings};
export function mountGlassButton(element:HTMLElement|string,options?:ButtonOptions):GlassController;
export function mountGlassQuote(element:HTMLElement|string,options?:QuoteOptions):GlassController;
export function mountGlass(root?:ParentNode):{destroy():void};
