!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r=(new Error).stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="4ec41cbe-43c4-47bb-9b6c-791c00e538ef",e._sentryDebugIdIdentifier="sentry-dbid-4ec41cbe-43c4-47bb-9b6c-791c00e538ef")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"08864407160b3973b9b88c5ae92687282b21e2f4"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[4034],{24034:(e,r,t)=>{t.r(r),t.d(r,{default:()=>d,dropInFlavour:()=>i});t(74648),t(17333),t(98992),t(23215),t(54520);var n=t(96540),a=t(43375);const o={activationConstraint:{delay:50,tolerance:10}},i={dropArea:"dropArea",dashboard:"dashboard",self:"self"},d=e=>{let{children:r}=e;const t=(0,n.useCallback)((e=>{const{active:r}=e,{isResizer:t,itemId:n,itemContainerId:o,rootId:i,navigationTab:d}=r.data.current;if(d)return(0,a.fp)({...e,droppableContainers:e.droppableContainers.filter((e=>e.data.current.sortable&&e.data.current.navigationTab))});if(t){const t=e.droppableRects.get(n)||e.droppableRects.get("".concat(i,"-").concat(n));return(0,a.Qo)({...e,collisionRect:{...t,...r.rect.current.translated&&{width:t.width+(r.rect.current.translated.right-r.rect.current.initial.right),height:t.height+(r.rect.current.translated.bottom-r.rect.current.initial.bottom)}},droppableContainers:e.droppableContainers.filter((e=>{var r;return!(null!==(r=e.data.current)&&void 0!==r&&r.isContainer)&&e.data.current.itemContainerId===o}))})}let l,c=e.droppableContainers.filter((e=>e.data.current.droppable));if(c.length){if(l=(0,a.TT)({...e,droppableContainers:c}),l.length>0||c.every((e=>e.data.current.onlyPointerWithin)))return l;if(l=(0,a.Qo)({...e,droppableContainers:c.filter((e=>!e.data.current.onlyPointerWithin))}),l.length>0)return l}if(c=e.droppableContainers.filter((e=>e.data.current.dropArea)),l=(0,a.TT)({...e,droppableContainers:c}),l.length>0)return l;const s=(0,a.TT)({...e,droppableContainers:e.droppableContainers.filter((e=>{var r;return!(null!==(r=e.data.current)&&void 0!==r&&r.isResizer||e.id===n)}))});return s.length>0?s:(0,a.fp)({...e,droppableContainers:e.droppableContainers.filter((e=>{var r;return!(null!==(r=e.data.current)&&void 0!==r&&r.isResizer||e.id===n)}))})}),[]),i=(0,a.FR)((0,a.MS)(a.cA,o),(0,a.MS)(a.IG,o));return n.createElement(a.Mp,{sensors:i,collisionDetection:t,measuring:{droppable:{strategy:a.Pf.Always},draggable:{measure:a.Sj}},autoScroll:!1},r)}}}]);