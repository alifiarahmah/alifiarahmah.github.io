(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{9212:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t(2144)}])},8770:function(n,e,t){"use strict";t.d(e,{Z:function(){return k}});var i=t(5893),a=t(8641),r=t(9008),l=t.n(r),s=(t(7294),t(9653)),o=t(8395),c=t(7741),u=t(5382),h=t(1664),d=t.n(h);function x(n){var e=n.label,t=n.path,a=(0,o.ff)("white","black"),r=(0,o.ff)("black","gray.100");return(0,i.jsx)(d(),{href:t,children:(0,i.jsx)(c.zx,{width:{base:"full",lg:"auto"},py:{base:5,lg:10},size:"lg",background:"transparent",fontSize:"xl",fontWeight:"medium",borderRadius:"none",_hover:{backgroundColor:r,color:a},children:e})})}var f=t(2144);function p(n){var e=n.allPosts;return(0,i.jsxs)(k,{title:"Blogs",children:[(0,i.jsx)(a.X6,{as:"h1",mb:20,textAlign:"center",children:"Blogs"}),null===e||void 0===e?void 0:e.map((function(n){return(0,i.jsxs)(a.xu,{my:10,children:[(0,i.jsx)(d(),{href:"blogs/post/".concat(n.slug),passHref:!0,children:(0,i.jsx)(a.rU,{children:(0,i.jsx)(a.X6,{as:"h3",children:n.title})})}),(0,i.jsx)(a.xv,{children:n.excerpt})]},n.slug)}))]})}var j=t(5703),m=t(1663),g=[{path:"/",label:"Home",component:(0,i.jsx)(j.default,{})},{path:"/about",label:"About",component:(0,i.jsx)(f.default,{})},{path:"/projects",label:"Projects",component:(0,i.jsx)(m.default,{})},{path:"/blogs",label:"Blogs",component:(0,i.jsx)(p,{})}],b=t(5434),v=t(3750);function y(){var n=(0,s.qY)(),e=n.isOpen,t=n.onOpen,r=n.onClose,l=(0,o.If)().toggleColorMode;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.kC,{justifyContent:{base:"flex-end",lg:"center"},alignItems:"center",width:"100%",position:"relative",my:{base:5,lg:"auto"},children:[(0,i.jsx)(a.xu,{display:{base:"none",lg:"block"},children:g.map((function(n){return(0,i.jsx)(x,{path:n.path,label:n.label},n.path)}))}),(0,i.jsx)(c.hU,{variant:"unstyled",size:"lg",onClick:l,"aria-label":"Toggle Dark Mode",icon:(0,i.jsx)(v.mox,{size:"1.5rem"}),position:{base:"static",lg:"absolute"},right:0}),(0,i.jsx)(c.hU,{variant:"unstyled",size:"lg",onClick:t,display:{base:"flex",lg:"none"},"aria-label":"Menu",icon:(0,i.jsx)(b.xXU,{size:"2rem"})})]}),(0,i.jsxs)(u.dy,{isOpen:e,placement:"right",onClose:r,children:[(0,i.jsx)(u.P1,{}),(0,i.jsxs)(u.sc,{children:[(0,i.jsx)(u.OX,{my:5,children:(0,i.jsx)(u.cC,{})}),(0,i.jsx)(u.Ng,{p:0,children:g.map((function(n){return(0,i.jsx)(x,{path:n.path,label:n.label},n.path)}))})]})]})]})}function k(n){var e=n.children,t=(n.px,n.nonavbar,n.nofooter,n.title);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(l(),{children:[(0,i.jsx)("title",{children:t?"".concat(t," - alifiarahmah's homepage"):"alifiarahmah's homepage"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)(y,{}),(0,i.jsx)(a.W2,{maxW:"container.lg",py:10,children:e})]})}},2144:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return h}});var i=t(5893),a=t(8770),r=t(8817),l=t(7294),s=t(7233),o=t(9669),c=t.n(o),u=t(7664);function h(){var n=(0,l.useState)(""),e=n[0],t=n[1];return(0,l.useEffect)((function(){c().get("https://raw.githubusercontent.com/alifiarahmah/alifiarahmah/main/README.md").then((function(n){return t(n.data)}))}),[]),(0,i.jsx)(a.Z,{title:"About Me",children:(0,i.jsx)(r.D,{components:(0,s.Z)(u.t),children:e,skipHtml:!0})})}},5703:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return h}});var i=t(5893),a=t(8641),r=t(3887),l=t(8770),s=t(8193),o=t(7741),c=(t(7294),function(n){var e=n.icon,t=(n.path,n.label),a=(n.onClick,n.display);return(0,i.jsx)(o.hU,{variant:"unstyled",size:"lg","aria-label":null!==t&&void 0!==t?t:"",icon:e,display:null!==a&&void 0!==a?a:"flex"})});function u(n){var e=n.icon,t=n.path,a=n.label,r=n.onClick,l=n.display;return t?(0,i.jsx)("a",{href:t,target:"_blank",children:(0,i.jsx)(c,{icon:e,label:a,display:l})}):(0,i.jsx)(c,{icon:e,label:a,display:l,onClick:r})}function h(){return(0,i.jsx)(l.Z,{children:(0,i.jsxs)(a.kC,{direction:"column",alignItems:"center",my:20,children:[(0,i.jsx)(r.Ee,{src:"https://avatars.githubusercontent.com/u/28982967",alt:"",borderRadius:"full",w:{base:"50%",lg:"70%"},maxW:"200px"}),(0,i.jsx)(a.X6,{textAlign:"center",mt:10,children:"Alifia Rahmah"}),(0,i.jsxs)(a.xv,{textAlign:"center",fontSize:{base:"lg",lg:"2xl"},children:["Undergraduate Informatics Student with interest in Software Engineering. ",(0,i.jsx)("br",{}),"Currently learning web development, UI/UX, and mobile development."]}),(0,i.jsxs)(a.Ug,{gap:5,my:5,children:[(0,i.jsx)(u,{icon:(0,i.jsx)(s.Dme,{size:"2.5rem"}),path:"mailto:alifiarahmah@outlook.com"}),(0,i.jsx)(u,{icon:(0,i.jsx)(s.Bpw,{size:"2.5rem"}),path:"https://instagram.com/hamharaifila"}),(0,i.jsx)(u,{icon:(0,i.jsx)(s.idJ,{size:"2.5rem"}),path:"https://github.com/alifiarahmah"}),(0,i.jsx)(u,{icon:(0,i.jsx)(s._iD,{size:"2.5rem"}),path:"https://linkedin.com/in/alifiarahmah"})]})]})})}},1663:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return l}});var i=t(5893),a=t(8641),r=(t(7294),t(8770));function l(){return(0,i.jsxs)(r.Z,{title:"Projects",children:[(0,i.jsx)(a.X6,{children:"Projects"}),(0,i.jsx)(a.xv,{children:"Coming Soon"})]})}},7664:function(n,e,t){"use strict";t.d(e,{t:function(){return l}});var i=t(1799),a=t(5893),r=t(8641),l=(t(7294),{code:function(n){var e=n.inline,t=n.children;return e?(0,a.jsx)(r.EK,{variant:"unstyled",fontSize:"auto",children:t}):(0,a.jsx)(r.EK,{display:"block",fontSize:"md",whiteSpace:"pre",my:3,p:5,sx:{tabSize:2},children:t})},h2:function(n){var e=n.children;return(0,a.jsx)(r.X6,{as:"h3",mt:10,mb:5,children:e})},img:function(n){return(0,a.jsx)(r.xu,{display:"inline-block",children:(0,a.jsx)("img",(0,i.Z)({},n))})}})}},function(n){n.O(0,[228,13,617,440,774,888,179],(function(){return e=9212,n(n.s=e);var e}));var e=n.O();_N_E=e}]);