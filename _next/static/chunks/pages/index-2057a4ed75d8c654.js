(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5703)}])},9276:function(n,e,t){"use strict";t.d(e,{Z:function(){return k}});var i=t(5893),r=t(8641),a=t(9008),l=t.n(a),s=(t(7294),t(9653)),o=t(8395),c=t(7741),u=t(5382),h=t(1664),d=t.n(h);function x(n){var e=n.label,t=n.path,r=(0,o.ff)("white","black"),a=(0,o.ff)("black","gray.100");return(0,i.jsx)(d(),{href:t,children:(0,i.jsx)(c.zx,{width:{base:"full",lg:"auto"},py:{base:5,lg:10},size:"lg",background:"transparent",fontSize:"xl",fontWeight:"medium",borderRadius:"none",_hover:{backgroundColor:a,color:r},children:e})})}var f=t(2144),p=t(1391),j=t(5703),m=t(1663),g=[{path:"/",label:"Home",component:(0,i.jsx)(j.default,{})},{path:"/about",label:"About",component:(0,i.jsx)(f.default,{})},{path:"/projects",label:"Projects",component:(0,i.jsx)(m.default,{})},{path:"/blog",label:"Blogs",component:(0,i.jsx)(p.default,{})}],b=t(5434),v=t(3750);function y(){var n=(0,s.qY)(),e=n.isOpen,t=n.onOpen,a=n.onClose,l=(0,o.If)().toggleColorMode;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.kC,{justifyContent:{base:"flex-end",lg:"center"},alignItems:"center",width:"100%",position:"relative",my:{base:5,lg:"auto"},children:[(0,i.jsx)(r.xu,{display:{base:"none",lg:"block"},children:g.map((function(n){return(0,i.jsx)(x,{path:n.path,label:n.label},n.path)}))}),(0,i.jsx)(c.hU,{variant:"unstyled",size:"lg",onClick:l,"aria-label":"Toggle Dark Mode",icon:(0,i.jsx)(v.mox,{size:"1.5rem"}),position:{base:"static",lg:"absolute"},right:0}),(0,i.jsx)(c.hU,{variant:"unstyled",size:"lg",onClick:t,display:{base:"flex",lg:"none"},"aria-label":"Menu",icon:(0,i.jsx)(b.xXU,{size:"2rem"})})]}),(0,i.jsxs)(u.dy,{isOpen:e,placement:"right",onClose:a,children:[(0,i.jsx)(u.P1,{}),(0,i.jsxs)(u.sc,{children:[(0,i.jsx)(u.OX,{my:5,children:(0,i.jsx)(u.cC,{})}),(0,i.jsx)(u.Ng,{p:0,children:g.map((function(n){return(0,i.jsx)(x,{path:n.path,label:n.label},n.path)}))})]})]})]})}function k(n){var e=n.children,t=(n.px,n.nonavbar,n.nofooter,n.title);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(l(),{children:[(0,i.jsx)("title",{children:t?"".concat(t," - alifiarahmah's homepage"):"alifiarahmah's homepage"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)(y,{}),(0,i.jsx)(r.W2,{maxW:"container.lg",w:{base:"90%",lg:"auto"},py:10,children:e})]})}},2144:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return h}});var i=t(5893),r=t(9276),a=t(8817),l=t(7294),s=t(7233),o=t(9669),c=t.n(o),u=t(7664);function h(){var n=(0,l.useState)(""),e=n[0],t=n[1];return(0,l.useEffect)((function(){c().get("https://raw.githubusercontent.com/alifiarahmah/alifiarahmah/main/README.md").then((function(n){return t(n.data)}))}),[]),(0,i.jsx)(r.Z,{title:"About Me",children:(0,i.jsx)(a.D,{components:(0,s.Z)(u.t),children:e,skipHtml:!0})})}},1391:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return o},default:function(){return c}});var i=t(5893),r=t(8641),a=t(1664),l=t.n(a),s=(t(7294),t(9276)),o=!0;function c(n){var e=n.allPosts;return(0,i.jsxs)(s.Z,{title:"Blogs",children:[(0,i.jsx)(r.X6,{as:"h1",mb:20,textAlign:"center",children:"Blogs"}),null===e||void 0===e?void 0:e.map((function(n){return(0,i.jsxs)(r.xu,{my:10,children:[(0,i.jsx)(l(),{href:"blog/post/".concat(n.slug),passHref:!0,children:(0,i.jsx)(r.rU,{children:(0,i.jsx)(r.X6,{as:"h3",children:n.title})})}),(0,i.jsx)(r.xv,{children:n.excerpt})]},n.slug)}))]})}},5703:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return h}});var i=t(5893),r=t(8641),a=t(3887),l=t(9276),s=t(8193),o=t(7741),c=(t(7294),function(n){var e=n.icon,t=(n.path,n.label),r=(n.onClick,n.display);return(0,i.jsx)(o.hU,{variant:"unstyled",size:"lg","aria-label":null!==t&&void 0!==t?t:"",icon:e,display:null!==r&&void 0!==r?r:"flex"})});function u(n){var e=n.icon,t=n.path,r=n.label,a=n.onClick,l=n.display;return t?(0,i.jsx)("a",{href:t,target:"_blank",children:(0,i.jsx)(c,{icon:e,label:r,display:l})}):(0,i.jsx)(c,{icon:e,label:r,display:l,onClick:a})}function h(){return(0,i.jsx)(l.Z,{children:(0,i.jsxs)(r.kC,{direction:"column",alignItems:"center",my:20,children:[(0,i.jsx)(a.Ee,{src:"https://avatars.githubusercontent.com/u/28982967",alt:"",borderRadius:"full",w:{base:"50%",lg:"70%"},maxW:"200px"}),(0,i.jsx)(r.X6,{textAlign:"center",mt:10,children:"Alifia Rahmah"}),(0,i.jsxs)(r.xv,{textAlign:"center",fontSize:{base:"lg",lg:"2xl"},children:["Undergraduate Informatics Student with interest in Software Engineering. ",(0,i.jsx)("br",{}),"Currently learning web development, UI/UX, and mobile development."]}),(0,i.jsxs)(r.Ug,{gap:5,my:5,children:[(0,i.jsx)(u,{icon:(0,i.jsx)(s.Dme,{size:"2.5rem"}),path:"mailto:alifiarahmah@outlook.com"}),(0,i.jsx)(u,{icon:(0,i.jsx)(s.Bpw,{size:"2.5rem"}),path:"https://instagram.com/hamharaifila"}),(0,i.jsx)(u,{icon:(0,i.jsx)(s.idJ,{size:"2.5rem"}),path:"https://github.com/alifiarahmah"}),(0,i.jsx)(u,{icon:(0,i.jsx)(s._iD,{size:"2.5rem"}),path:"https://linkedin.com/in/alifiarahmah"})]})]})})}},1663:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return l}});var i=t(5893),r=t(8641),a=(t(7294),t(9276));function l(){return(0,i.jsxs)(a.Z,{title:"Projects",children:[(0,i.jsx)(r.X6,{children:"Projects"}),(0,i.jsx)(r.xv,{children:"Coming Soon"})]})}},7664:function(n,e,t){"use strict";t.d(e,{t:function(){return l}});var i=t(1799),r=t(5893),a=t(8641),l=(t(7294),{code:function(n){var e=n.inline,t=n.children;return e?(0,r.jsx)(a.EK,{variant:"unstyled",fontSize:"auto",children:t}):(0,r.jsx)(a.EK,{display:"block",fontSize:"md",whiteSpace:"pre",my:3,p:5,overflowX:"scroll",sx:{tabSize:2,"&::-webkit-scrollbar":{display:"none"}},children:t})},h2:function(n){var e=n.children;return(0,r.jsx)(a.X6,{as:"h3",mt:10,mb:5,children:e})},img:function(n){return(0,r.jsx)(a.xu,{display:"inline-block",children:(0,r.jsx)("img",(0,i.Z)({},n))})}})}},function(n){n.O(0,[228,13,617,440,774,888,179],(function(){return e=8312,n(n.s=e);var e}));var e=n.O();_N_E=e}]);