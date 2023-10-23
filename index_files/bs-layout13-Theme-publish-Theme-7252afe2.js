define("@widget/LAYOUT/bs-layout13-Theme-publish-Theme-7252afe2.js",["exports","~/c/bs-_rollupPluginBabelHelpers","~/c/bs-index3","~/c/bs-themeOverrides","~/c/bs-legacyOverrides","~/c/bs-humanisticFilled","~/c/bs-defaultSocialIconPack","~/c/bs-loaders","~/c/bs-index","~/c/bs-overlayTypes"],(function(e,t,r,o,a,n,i,s,l,g){"use strict";const{colorPackCategories:d,buttons:c}=(global.Core||guac["@wsb/guac-widget-core"]).constants,{LIGHT:u,LIGHT_ALT:m,LIGHT_COLORFUL:h,DARK:p,DARK_ALT:y,DARK_COLORFUL:f,COLORFUL:b,MVP:x}=(global.Core||guac["@wsb/guac-widget-core"]).constants.paintJobs,I={[g.F]:"category-overlay",[g.b]:"category-overlay",[g.I]:"category-solid",[g.B]:"category-overlay",[g.L]:"category-overlay"},S={defaultHeaderTreatment:g.F,imageTreatments:I,heroContentItems:["tagline","tagline2","cta"],nonHeroContentItems:["phone"]};var C={id:"layout13",name:"modern",packs:{color:"005",font:"league-spartan"},logo:{font:"primary"},packCategories:{color:d.ACCENT},headerProperties:{alignmentOption:"center"},headerTreatmentsConfig:S,showSlideshowTab:!0,hasNavWithBackground:!1,paintJobs:[u,m,h,b,f,y,p],defaultPaintJob:x,buttons:{primary:{fill:c.fills.SOLID,shape:c.shapes.ROUND,decoration:c.decorations.NONE,shadow:c.shadows.NONE,color:c.colors.PRIMARY},secondary:{fill:c.fills.SOLID,decoration:c.decorations.NONE,shadow:c.shadows.NONE,color:c.colors.PRIMARY},...l.C}};const{SMALL_UNDERLINE:H}=l.s;class w extends r.D{static get displayName(){return"Theme13"}static getMutatorDefaultProps(e,t){const r=super.getMutatorDefaultProps(e,t),o=l.W[t]||r.enableCircularImage;return"HEADER"===e?{...r,hasLogoAlign:!0,useSlideshow:!0,useMediaTypeSelector:!0,showOverlayOpacityControls:!0,hasNavBackgroundToggle:!0,headerTreatmentsConfig:{...r.headerTreatmentsConfig,imageTreatments:{[g.F]:"category-overlay",[g.b]:"category-overlay",[g.I]:"category-solid",[g.B]:"category-overlay",[g.L]:"category-overlay"},heroContentItems:["tagline","tagline2","cta"],nonHeroContentItems:["phone"]},enableVideoOverlaySlider:!0}:{...r,enableCircularImage:o}}constructor(){super(),t._(this,"sharedInputStyles",{style:{borderColor:"input",borderRadius:"medium",borderStyle:"solid",borderWidth:"xsmall"}}),this.mappedValues={...this.mappedValues,backgroundColorNavSolid(){return r.g(this,"background").setAlpha(25)},typographyOverrides:{LogoAlpha:{style:{font:"primary",color:"highContrast",fontSize:"large",fontWeight:"normal",letterSpacing:"normal",textTransform:"none"}},HeadingBeta:{style:{font:"primary",color:"highlight",fontSize:"xxlarge",fontWeight:"normal",letterSpacing:"normal",textTransform:"none"}},HeadingGamma:{style:{font:"alternate",color:"highlight",fontSize:"xlarge",fontWeight:"normal",letterSpacing:"normal",textTransform:"none"}},NavAlpha:{style:{font:"alternate",color:"highContrast",fontSize:"small",fontWeight:"normal",textTransform:"uppercase",letterSpacing:"0.071em",":hover":{color:"highContrast"},":active":{color:"highContrast"}},active:{style:{color:"highContrast",":hover":{color:"highContrast"}}}},SubNavAlpha:{style:{font:"alternate",color:"section",fontSize:"medium",fontWeight:"normal",letterSpacing:"normal",textTransform:"none",textDecoration:"none",":hover":{color:"section"},":active":{color:"section"}},active:{style:{fontWeight:"bold",color:"section",":hover":{color:"section"}}}},ButtonAlpha:e=>{const{size:t="default"}=e;return{style:{font:"alternate",fontWeight:"bold",textTransform:"uppercase",letterSpacing:"0.071em",...{small:{fontSize:"xsmall"},default:{fontSize:"small"},large:{fontSize:"medium"}}[t]}}},InputAlpha:e=>(global._||guac.lodash).merge(r.m.call(this,"BodyAlpha",e),{style:{color:"input","@xs-only":{fontSize:"medium"}}})}}}Heading(e){const{tag:t}=e,{widgetType:r,widgetPreset:o}=this.base;return super.Heading(this.merge({style:a.g(t,r,o)},e))}Intro(e){return super.Intro(this.merge({alignment:"center"},e))}Phone(e){return super.Phone(this.merge({style:{marginBottom:"xlarge",display:"inline-block",paddingTop:0,"@md":{marginBottom:"xxlarge",maxWidth:"50%"}}},e))}ContentCard(e){const t="about1"===this.base.widgetPreset?{style:{alignItems:"center"}}:{};return super.ContentCard(this.merge(t,e))}Hero(e){return super.Hero(this.merge({style:{position:"relative",marginVertical:0,paddingVertical:"medium",width:"100%",display:"flex",justifyContent:"center",flexDirection:"column","@md":{flexGrow:1,flexShrink:0,flexBasis:"auto",paddingVertical:"xlarge"}}},e))}Tagline(e){return super.Tagline(this.merge({style:{maxWidth:"100%",wordWrap:"break-word",overflowWrap:"break-word","@xs-only":{margin:"0 auto"}}},e))}HeroText(e){return super.SubTagline(this.merge({style:{lineHeight:"1.5",maxWidth:"100%"}},e))}Icon(e){return super.Icon(this.merge({iconPack:{...n.f,...i.s}},e))}Loader(e){return s.a.apply(this,[e])}SectionHeading(e){const t=this.base,r=this.merge({},o.s(t),o.b(t),o.c(t),o.a(t));return super.SectionHeading(this.merge({style:{textAlign:"center",marginLeft:"auto","@md":{textAlign:"center",marginLeft:"auto"}},sectionHeadingHR:H,featured:!1},r,e))}DividerHR(e){const{category:t}=e;return super.HR(this.merge({style:{borderColor:"neutral"===t?"rgba(0, 0, 0, 0.3)":"rgba(255, 255, 255, 0.3)"}},e))}Pipe(e){return super.Pipe(this.merge({style:{height:"1em"}},e))}HeaderMediaBackground(e){return super.Background(this.merge({style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}},e))}HeaderMediaFillBackground(e){return this.HeaderMediaBackground(this.merge({style:{minHeight:300,justifyContent:"space-between","@md":{minHeight:"85vh"}}},e))}HeaderMediaOrigBlurBackground(e){return super.Background(this.merge({style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}},e))}HeaderMediaImage(e){return super.Image(this.merge({style:{borderStyle:"solid",borderWidth:"large",borderColor:"white"}},{mobileGutterWidth:18},e))}PromoBanner(e){return super.PromoBanner(this.merge({style:{position:"relative",zIndex:1}},e))}Input(e){return super.Input(this.merge({...this.sharedInputStyles},{style:{paddingVertical:"small",paddingHorizontal:"small"}},e))}InputFloatLabelLabel(e){return super.InputFloatLabelLabel(this.merge({style:{left:"16px",top:"33%"}},e))}InputTextArea(e){return super.InputTextArea(this.merge({rows:6},e))}InputSelect(e){return super.InputSelect(this.merge({...this.sharedInputStyles},e))}InputSelectElement(e){return super.InputSelectElement(this.merge({style:{paddingVertical:"small",paddingHorizontal:"small"}},e))}MediaObjectBackground(e){return super.MediaObjectBackground(this.merge({style:{borderRadius:"medium"}},e))}HeadingMajor(e){return super.HeadingMajor(this.merge({featured:!0},e))}PriceMajor(e){return super.PriceMajor(this.merge({typography:"HeadingDelta"},e))}SlideshowArrows(e){return super.SlideshowArrows(this.merge({style:{"@sm":{paddingHorizontal:"medium",marginHorizontal:"medium"}}},e))}}t._(w,"config",C),e.default=w,Object.defineProperty(e,"__esModule",{value:!0})})),"undefined"!=typeof window&&(window.global=window);
//# sourceMappingURL=bs-layout13-Theme-publish-Theme-7252afe2.js.map
