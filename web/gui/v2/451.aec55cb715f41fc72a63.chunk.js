!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="1170fbb6-caaa-4032-af9c-62a55b4f99b9",e._sentryDebugIdIdentifier="sentry-dbid-1170fbb6-caaa-4032-af9c-62a55b4f99b9")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"1f9bd6d85714735ca8bbf884fbe65fc5566ec047"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[451],{51091:function(e,t,a){var n=a(87462),r=a(45987),l=(a(57327),a(41539),a(88449),a(2490),a(59849),a(21249),a(57640),a(9924),a(92222),a(60677)),i=a(10928),c=a.n(i),o=a(67294),s=a(57509),u=["items","isBig","showBackButton","testid"],d=(0,l.default)(s.Box).withConfig({displayName:"breadcrumbs__StyledItemContainer",componentId:"sc-3u39st-0"})([""]),m=(0,l.css)(["&:hover{color:",";}"],(function(e){var t=e.withHover,a=e.theme;return t&&(0,s.getColor)("success")({theme:a})})),g=(0,l.default)(s.Text).withConfig({displayName:"breadcrumbs__StyledText",componentId:"sc-3u39st-1"})(["",""],m),f=(0,l.default)(s.TextSmall).withConfig({displayName:"breadcrumbs__StyledTextSmall",componentId:"sc-3u39st-2"})(["",""],m);t.Z=function(e){var t=e.items,a=e.isBig,l=e.showBackButton,i=void 0===l||l,m=e.testid,v=void 0===m?"":m,b=(0,r.Z)(e,u),h=(0,o.useMemo)((function(){return null!==t&&void 0!==t&&t.length&&i?c()(t.filter((function(e){return!!e.onClick}))).onClick:null}),[t,i]);if(null===t||void 0===t||!t.length)return null;var p=a?g:f;return o.createElement(s.Flex,(0,n.Z)({gap:4},b),i&&o.createElement(s.Button,{onClick:h,icon:"chevron_left",label:"Back",neutral:!0,flavour:"hollow",small:!0,padding:[0,2,0,1],textTransform:"uppercase","data-testid":"".concat(v,"-breadcrumbs-backButton")}),o.createElement(s.Flex,{gap:2,alignItems:"center"},t.map((function(e,t){var a=e.isDisabled,r=e.name,l=e.onClick;return o.createElement(d,(0,n.Z)({key:t,alignItems:"center"},l&&{cursor:"pointer",onClick:l},{"data-testid":"".concat(v,"-breadcrumbs-level-").concat(t)}),o.createElement(p,{color:a&&"textLite","data-testid":"".concat(v,"-breadcrumbs-level-").concat(t),withHover:!!l},0!==t&&" / ",r))}))))}},25451:function(e,t,a){a.r(t),a.d(t,{default:function(){return he}});var n=a(67294),r=a(4480),l=a(99322),i=a(91268),c=a(84074),o=a(29439),s=a(46667),u=a(29814),d=a(72843),m=a(54316),g={filters:{iconName:"filterList",color:{active:"success",notActive:"textLite"},width:"19px",Content:a(97363).Z,dataTestId:"filterBar",label:"Filters"}},f=["filters"],v=function(){var e=(0,s.Z)(!0),t=(0,o.Z)(e,2),a=t[0],r=t[1],l=g.filters.Content;return n.createElement(m.ZP,{collapsedComponent:n.createElement(u.Z,{onClickTab:r,availableTabs:g,tabsToShow:f}),isOpen:a,header:n.createElement(d.Z,{isOpen:a,onToggle:r,title:"Alerts",icon:"alarm"})},n.createElement(l,{flavour:"alerts",padding:[0,3,30]}))},b=a(57509),h=a(96929),p=a(36560),y=a(12008),C=a(597),E=a(78266),w=(a(21249),a(57640),a(9924),a(87462)),S=a(45987),x=a(60677),I=a(20686),T=["type","value"],k=(0,x.default)(b.Text).attrs({whiteSpace:"normal",wordBreak:"break-word"}).withConfig({displayName:"tableSchema__TextCell",componentId:"sc-u3gyvm-0"})([""]),N=function(e){return function(t){var a=t.getValue;return n.createElement(k,e,a())}},Z=(0,x.default)(b.Icon).withConfig({displayName:"tableSchema__StyledIcon",componentId:"sc-u3gyvm-1"})(["vertical-align:middle;"]),A=function(e){var t=e.type,a=e.value,r=(0,S.Z)(e,T);return n.createElement(b.Flex,(0,w.Z)({padding:[0,2]},r,{justifyContent:"center"}),0===a?n.createElement(k,{textAlign:"center"},"-"):n.createElement(I.Z,{type:t,textSize:"normal","data-testid":"alertView-alertPill-".concat(t)},a))},V={id:"chevron",header:"",cell:function(){return n.createElement(Z,{rotate:2,name:"chevron_left",color:"textDescription"})}},_=[{id:"displayName",accessorKey:"displayName",header:"Alert Name",cell:function(e){var t=e.getValue;return n.createElement(k,{"data-testid":"alertName"},t())}},{id:"nodesRunningAlert",accessorKey:"nodeCount",header:"Nodes Running Alert",cell:function(e){var t=e.getValue;return n.createElement(k,{textAlign:"center","data-testid":"nodesRunningAlert"},t())}},{id:"alertInstances",accessorKey:"instanceCount",header:"Alert Instances",cell:function(e){var t=e.getValue;return n.createElement(k,{textAlign:"center","data-testid":"alertInstances"},t())}},{id:"criticalNodes",accessorKey:"criticalCount",header:"Critical",cell:function(e){var t=e.getValue;return n.createElement(A,{type:"critical",value:t(),"data-testid":"criticalNodes"})}},{id:"warningNodes",accessorKey:"warningCount",header:"Warning",cell:function(e){var t=e.getValue;return n.createElement(A,{type:"warning",value:t(),"data-testid":"warningNodes"})}},{id:"clearNodes",accessorKey:"clearCount",header:"Clear",cell:function(e){var t=e.getValue;return n.createElement(A,{type:"clear",value:t(),"data-testid":"clearNodes"})}},{id:"errorNodes",accessorKey:"errorCount",header:"Error",cell:function(e){var t=e.getValue;return n.createElement(A,{type:"neutral",value:t(),"data-testid":"errorNodes"})}},{id:"uniqueConfigs",accessorKey:"configCount",header:"Configs",cell:function(e){var t=e.getValue;return n.createElement(k,{textAlign:"center","data-testid":"uniqueConfigs"},t())}}],z=a(50358),K=a(63860),O=a(97945),L=a(62200),P=(0,x.default)(b.TextSmall).withConfig({displayName:"styled__StyledLinkText",componentId:"sc-1y769u1-0"})(["",""],"\n  cursor: pointer;\n  overflow-wrap: break-word;\n  max-width: 140px;\n  &:hover {\n    opacity: 0.7;\n  }\n"),F=(0,x.default)(b.TextSmall).withConfig({displayName:"styled__StyledText",componentId:"sc-1y769u1-1"})(["&:hover{color:",";text-decoration:underline;}"],(0,b.getColor)("accent")),R=a(38626),j=a(91008),B=function(e){var t=e.row,a=e.value,r=e.openModal,l=t.original,i=l.id,c=l.displayName,o=l.info,s=(0,n.useCallback)((function(){r({alertId:i})}),[i]);return n.createElement(j.Z,{Component:b.TextSmall,flavour:"tableLink",cursor:"pointer",showToolTip:!0,content:o,onClick:s,"data-testid":"alertsTableSchema-alertName-".concat(a),"data-ga":"alerts-table::click-alert::alerts-view::".concat(a)},c)},D=function(e){var t=e.row,a=e.nodeId,r=t.original.id,l=(0,O.bV)(a,"name"),i=(0,O.WR)(a,{alertId:r});return n.createElement(b.Flex,{width:35,"data-testid":"alertsTableSchema-nodeName-".concat(l),"data-ga":"alerts-table::click-node::alerts-view::".concat(l)},n.createElement(P,{onClick:i},n.createElement(R.Z,{maxLength:L.sf,text:l,TextComponent:F})))},M=function(e){var t=e.row,a=e.value,r=t.original,l=r.id,i=r.nodeId,c=r.instanceName,o=(0,O.WR)(i,{alertId:l});return n.createElement(b.Flex,{"data-testid":"alertsTableSchema-chart-id-".concat(a),"data-ga":"alerts-table::click-chartId::alerts-view::".concat(a)},n.createElement(P,{onClick:o},n.createElement(R.Z,{maxLength:25,TextComponent:F,text:c})))},U=function(e){var t=e.openModal;return[{id:"status",accessorKey:"status",header:"Status",cell:function(e){var t=e.getValue;return n.createElement(I.Z,{type:"".concat(t(),"AlertsTable"),"data-testid":"alertsTable-alertPill","data-ga":"alerts-table::click-status::alerts-view::".concat(t())},t())},size:80,maxSize:80,minSize:80},{id:"name",accessorKey:"displayName",header:"Alert",cell:function(e){var a=e.row,r=e.getValue;return n.createElement(B,{row:a,value:r(),openModal:t})}},{id:"instance",header:"Instance",accessorKey:"instance",cell:function(e){var t=e.row,a=e.getValue;return n.createElement(M,{row:t,value:a()})},minSize:200,maxSize:200,size:200},{id:"nodeName",header:"Node",accessorKey:"nodeId",cell:function(e){var t=e.row,a=e.getValue;return n.createElement(D,{row:t,nodeId:a()})},minSize:200,maxSize:200,size:200},{id:"value",header:"Latest value",accessorKey:"value",cell:function(e){var t=e.row,a=e.getValue,r=t.original,l=r.status,i=r.units;return n.createElement(z.Z,{loaded:!0,status:l,units:i,value:a(),"data-testid":"alertsTableSchema-alertValue","data-ga":"alerts-table::click-alert-value::alerts-view"})},size:120,maxSize:120,minSize:120},{id:"lastUpdated",header:"Updated at",accessorKey:"lastUpdated",cell:function(e){var t=e.getValue;return n.createElement(K.Z,{rawTime:t(),secs:!0,"data-testid":"alertsTableSchema-latestUpdated"})}},{id:"lastStatusChangeValue",header:"Triggered value",accessorKey:"lastStatusChangeValue",cell:function(e){var t=e.row,a=e.getValue,r=t.original,l=r.status,i=r.units;return n.createElement(z.Z,{loaded:!0,status:l,units:i,value:a(),"data-testid":"alertsTableSchema-triggeredValue","data-ga":"alerts-table::click-triggered-value::alerts-view"})},size:120,maxSize:120,minSize:120},{id:"lastStatusChange",header:"Triggered at",accessorKey:"lastStatusChange",cell:function(e){var t=e.getValue;return n.createElement(K.Z,{rawTime:t(),secs:!0,"data-testid":"alertsTableSchema-lastStatusChange"})}}]},G=[{id:"name",accessorKey:"displayName",header:"Alert",cell:N({"data-testid":"alertInstanceName"}),minSize:200,maxSize:200,size:200},{id:"instance",header:"Instance",accessorKey:"instance",cell:function(e){var t=e.row,a=e.getValue;return n.createElement(M,{row:t,value:a()})},minSize:200,maxSize:200,size:200},{id:"status",accessorKey:"status",header:"Status",cell:function(e){var t=e.getValue;return n.createElement(b.Flex,{padding:[0,2]},n.createElement(I.Z,{type:t(),textSize:"normal","data-testid":"alertView-alertPill-value",border:void 0},t()))},minSize:80,maxSize:80,size:80},{id:"lastStatusChangeValue",accessorKey:"lastStatusChangeValue",header:"Triggered value",cell:function(e){var t=e.getValue,a=e.row.original,r=a.status,l=a.units;return n.createElement(z.Z,{loaded:!0,status:r,units:l,value:t(),"data-testid":"alertsTableSchema-alertValue"})},minSize:120,maxSize:120,size:120},{id:"lastStatusChange",accessorKey:"lastStatusChange",header:"Triggered at",cell:function(e){var t=e.getValue;return n.createElement(K.Z,{rawTime:t(),secs:!0,nowrap:!0})},minSize:120,maxSize:120,size:120}],W=a(61294),H=function(){var e=(0,y.__)(),t=(0,o.Z)(e,1)[0],a=t.alertName,r=t.nodeId,l=(0,y.JU)(a,r),i=(0,W.Z)(),c=(0,o.Z)(i,4),s=c[0],u=c[1],d=c[3],m=(0,n.useCallback)((function(e){return u({alertId:e.data.id})}),[a,r]);return n.createElement(n.Fragment,null,n.createElement(b.NetdataTable,{data:l,dataColumns:G,onClickRow:m,enableSorting:!0,enableColumnVisibility:!0}),s&&d)},J=(a(26833),a(85827),a(41539),a(25387),a(2490),a(72608),a(66992),a(70189),a(78783),a(88921),a(96248),a(13599),a(11477),a(64362),a(15389),a(90401),a(45164),a(91238),a(54837),a(87485),a(56767),a(76651),a(61437),a(35285),a(39865),a(33948),[{id:"nodeName",accessorKey:"nodeId",header:"Node Name",cell:function(e){var t=e.getValue,a=(0,O.bV)(t(),"name");return n.createElement(b.Flex,{width:35,"data-testid":"alertsTableSchema-nodeName-".concat(a),"data-ga":"alerts-table::click-node::alerts-view::".concat(a)},n.createElement(R.Z,{maxLength:L.sf,text:a}))}},{id:"nodes",accessorKey:"nodeCount",header:"Node Instances",cell:N({"data-testid":"nodes",textAlign:"center"})},{id:"instances",accessorKey:"instanceCount",header:"Alert Instances",cell:N({"data-testid":"instances",textAlign:"center"})},{id:"critical",accessorKey:"criticalCount",header:"Critical",cell:function(e){var t=e.getValue;return n.createElement(A,{type:"critical",value:t()})}},{id:"warning",accessorKey:"warningCount",header:"Warning",cell:function(e){var t=e.getValue;return n.createElement(A,{type:"warning",value:t()})}},{id:"clear",accessorKey:"clearCount",header:"Clear",cell:function(e){var t=e.getValue;return n.createElement(A,{type:"clear",value:t()})}},{id:"error",accessorKey:"errorCount",header:"Error",cell:function(e){var t=e.getValue;return n.createElement(A,{type:"neutral",value:t(),"data-testid":"errors"})}},{id:"configs",accessorKey:"configCount",header:"Configs",cell:N({"data-testid":"configs",textAlign:"center"})},V]),q=function(){var e=(0,y.__)(),t=(0,o.Z)(e,2),a=t[0].alertName,r=t[1],l=(0,y.JU)(a),i=(0,n.useCallback)((function(e){r({alertName:a,nodeId:e.data.nodeId})}),[a,r]),c=(0,n.useMemo)((function(){return Object.values(l.reduce((function(e,t){switch(e[t.nodeId]||(e[t.nodeId]={nodeId:t.nodeId,nodeCount:1,instanceCount:0,criticalCount:0,warningCount:0,clearCount:0,errorCount:0,configCount:0,configs:new Set}),e[t.nodeId].instanceCount=e[t.nodeId].instanceCount+1,t.status){case"warning":e[t.nodeId].warningCount=e[t.nodeId].warningCount+1;break;case"critical":e[t.nodeId].criticalCount=e[t.nodeId].criticalCount+1;break;case"clear":e[t.nodeId].clearCount=e[t.nodeId].clearCount+1;break;default:t.value||(e[t.nodeId].errorCount=e[t.nodeId].errorCount+1)}return e[t.nodeId].configCount=e[t.nodeId].configs.add(t.aci).size,e}),{}))}),[l]);return n.createElement(b.NetdataTable,{data:c,dataColumns:J,onClickRow:i,enableSorting:!0,enableColumnVisibility:!0})},Q=a(51091),$=function(){var e,t=(0,y.__)(),a=(0,o.Z)(t,2),r=a[0],l=r.alertName,i=r.nodeId,c=a[1],s=(0,O.Ne)(i?[i]:[]),u=null===s||void 0===s||null===(e=s[0])||void 0===e?void 0:e.name,d=(0,n.useMemo)((function(){return u?[{name:"All Alert Configs",onClick:function(){c({alertName:null,nodeId:null})}},{name:l,onClick:function(){c({alertName:l,nodeId:null})}},{name:u}]:l?[{name:"All Alert Configs",onClick:function(){c({alertName:null,nodeId:null})}},{name:l}]:null}),[l,u,c]);return n.createElement(Q.Z,{padding:[2,0,0],items:d,testid:"alertConfigurations"})},Y=(a(47941),a(82526),a(57327),a(88449),a(59849),a(38880),a(15581),a(34514),a(54747),a(49337),a(33321),a(69070),a(4942)),X=a(74059),ee=a(37518),te=a(12899);function ae(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var ne=function(){var e=(0,ee.UL)(),t=(0,te.R3)(),a=(0,o.Z)(t,2)[1],r=(0,y.__)(),l=(0,o.Z)(r,2)[1],i=(0,X.Q6)(),c=(0,n.useMemo)((function(){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(a),!0).forEach((function(t){(0,Y.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ae(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({goto:{handleAction:function(e){var t=e.name;return l({alertName:t})},icon:"chevron_right",tooltipText:"Show configuration"}},!i&&{info:{handleAction:function(t){return a({roomId:e,alert:t})},tooltipText:"Get some help from Netdata Assistant",icon:"netdataAssistant",iconColor:"primary",dataGa:"alerts::click-assistant-icon::active-alerts-table"}})}),[i,a]);return{rowActions:c}},re=function(){return n.createElement(b.Text,null,"Loading...")},le=function(){var e=(0,y.w4)(),t=(0,y.__)(),a=(0,o.Z)(t,2),r=a[0],l=r.alertName,i=r.nodeId,c=a[1],s=(0,te.Nu)(),u=(0,o.Z)(s,2)[1],d=(0,n.useCallback)((function(e){c({alertName:e.data.name})}),[]),m=ne().rowActions;return(0,n.useEffect)((function(){var t=e.map((function(e){return{name:e.alert}}));u(t)}),[e]),n.createElement(b.Flex,{column:!0,gap:4,height:"100%",overflow:"hidden"},n.createElement($,null),i&&n.createElement(n.Suspense,{fallback:n.createElement(re,null)},n.createElement(H,null)),!i&&l&&n.createElement(n.Suspense,{fallback:n.createElement(re,null)},n.createElement(q,null)),!i&&!l&&n.createElement(b.NetdataTable,{data:e,dataColumns:_,enableSorting:!0,enableColumnVisibility:!0,columnPinning:{right:["actions"]},enableColumnPinning:!0,enablePinning:!0,rowActions:m,onClickRow:d}))},ie=a(89250),ce=[{id:"lastStatusChange",desc:!1}],oe=function(){var e=(0,C.K)({extraKey:"alerts"}),t=(0,te.Nu)(),a=(0,o.Z)(t,2)[1],r=(0,W.Z)(),l=(0,o.Z)(r,4),i=l[0],c=l[1],s=l[3],u=function(){var e=(0,ie.s0)(),t=(0,X.uk)(),a=(0,ee.UL)(),r=(0,te.R3)(),l=(0,o.Z)(r,2)[1],i=(0,X.Q6)();return{rowActions:(0,n.useMemo)((function(){return i?{}:{goto:{handleAction:function(){e("/spaces/".concat(t,"/settings/notifications#notificationsActiveTab=1"))},tooltipText:"Go to silencing manager",icon:"alarm_off",dataGa:"alerts-table::click-link-to-manager::active-alerts-table"},info:{handleAction:function(e){return l({roomId:a,alert:e})},tooltipText:"Get some help from Netdata Assistant",icon:"netdataAssistant",iconColor:"primary",dataGa:"alerts::click-assistant-icon::active-alerts-table"}}}),[i,l])}}().rowActions;return(0,n.useEffect)((function(){a(e)}),[e]),n.createElement(n.Fragment,null,n.createElement(b.NetdataTable,{enableSorting:!0,enableColumnVisibility:!0,data:e,dataColumns:U({openModal:c}),rowActions:u,sortBy:ce,columnPinning:{right:["actions"]},enableColumnPinning:!0,enablePinning:!0}),i&&s)},se=(a(92222),a(89405)),ue=function(){var e=function(){var e=(0,se.rA)(),t=e.localeTimeString,a=e.localeDateString,r=(0,l.uy)("updatedAt");return(0,n.useMemo)((function(){if(r){var e=new Date(r);return"".concat(a(e,{long:!0})," ").concat(t(e,{secs:!0}))}}),[r,t,a])}();return n.createElement(b.Flex,{column:!0,justifyContent:"center",alignItems:"center",gap:4},n.createElement(b.Icon,{name:"checkmark",width:"168px",height:"168px",margin:[13,0,0]}),n.createElement(b.H3,{margin:[10,0,0]},"This room has no active alerts, you are all good!"),n.createElement(b.Text,{margin:[2,0,0,0]},"Visit later or check your notifications"),n.createElement(b.TextSmall,{color:"textLite"},"Last updated at: ",e))},de=(0,n.memo)(ue),me=a(46189),ge=function(){return n.createElement(b.Flex,{column:!0,justifyContent:"center",alignItems:"center",margin:[12,0,0]},n.createElement("img",{src:"".concat(me.Z.assetsBaseURL,"/img/no-filter-results.png"),alt:"No Filter Results",title:"No Filter Results"}),n.createElement(b.H3,null,"There are no results for these filtering criteria"))},fe=(0,n.memo)(ge),ve=function(e){var t=e.count,a=(0,l.uy)("ids"),r=(0,l.uy)("loaded"),i=(0,y.ER)(a).length;return r?i?t?n.createElement(oe,null):n.createElement(fe,null):n.createElement(de,null):n.createElement(E.Z,{title:"Loading alerts..."})},be=function(){var e=(0,r.FV)(c.p$),t=(0,o.Z)(e,2),a=t[0],l=t[1],i=(0,y.v3)(),s=(0,n.useCallback)((function(e){e===a&&i(),l(e)}),[a,l]),u=(0,C.K)({extraKey:"alerts"}).length,d=(0,y.sb)();return(0,h.fD)()&&!d.length?n.createElement(p.Z,null):n.createElement(b.Tabs,{selected:a,onChange:s,height:"100%",padding:[4,4,0]},n.createElement(b.Tab,{label:n.createElement(b.Text,null,"Active (",u,")"),maxWidth:"100%","data-testid":"alertTabs-activeAlerts"},n.createElement(ve,{count:u})),n.createElement(b.Tab,{label:n.createElement(b.Text,null,"Alert Configurations"),maxWidth:"100%","data-testid":"alertTabs-configurations"},n.createElement(n.Suspense,{fallback:n.createElement(E.Z,{title:"Loading alert configurations..."})},n.createElement(le,null))))},he=function(){var e=(0,l.uy)("ids"),t=(0,r.sJ)(c.p$),a=!!e.length&&1!==t;return n.createElement(i.Z,{rightBar:a&&n.createElement(v,null),margin:[0,0,8,0]},n.createElement(be,null))}}}]);