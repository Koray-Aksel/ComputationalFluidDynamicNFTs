(this.webpackJsonpcfd_nft_minting_dapp=this.webpackJsonpcfd_nft_minting_dapp||[]).push([[0],{362:function(t,n){},366:function(t,n){},368:function(t,n){},372:function(t,n){},396:function(t,n){},398:function(t,n){},412:function(t,n){},414:function(t,n){},443:function(t,n){},445:function(t,n){},534:function(t,n){},535:function(t,n){},560:function(t,n){},567:function(t,n){},621:function(t,n){},646:function(t,n){},708:function(t,n,e){},709:function(t,n,e){"use strict";e.r(n);var o,c,r,a,i,s,l,u,d,p,j,g,x,h,b,O,f=e(5),C=e(164),S=e.n(C),T=e(83),E=e(77),m=e(32),A=e(15),_=e.n(A),w=e(126),v=e(84),y=e.n(v),N=e(335),D=e.n(N),I=e(141),L=e(336),M=e(30),W={loading:!1,account:null,smartContract:null,smartContractWeth:null,web3:null,errorMsg:""},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CONNECTION_REQUEST":return Object(M.a)(Object(M.a)({},W),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(M.a)(Object(M.a)({},t),{},{loading:!1,account:n.payload.account,smartContract:n.payload.smartContract,smartContractWeth:n.payload.smartContractWeth,web3:n.payload.web3});case"CONNECTION_FAILED":return Object(M.a)(Object(M.a)({},W),{},{loading:!1,errorMsg:n.payload});case"UPDATE_ACCOUNT":return Object(M.a)(Object(M.a)({},t),{},{account:n.payload.account});default:return t}},k={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},U=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHECK_DATA_REQUEST":return Object(M.a)(Object(M.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(M.a)(Object(M.a)({},t),{},{loading:!1,totalSupply:n.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(M.a)(Object(M.a)({},k),{},{loading:!1,error:!0,errorMsg:n.payload});default:return t}},H=Object(I.b)({blockchain:R,data:U}),P=[L.a],B=Object(I.c)(I.a.apply(void 0,P)),F=Object(I.d)(H,B),Y=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},K=function(){return function(){var t=Object(T.a)(_.a.mark((function t(n){var e;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"CHECK_DATA_REQUEST"}),t.prev=1,t.next=4,F.getState().blockchain.smartContract.methods.totalSupply().call();case 4:e=t.sent,n({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:e}}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),n(Y("Could not load data from contract."));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(n){return t.apply(this,arguments)}}()},G=e(337),V=e.n(G),z=function(t){return{type:"CONNECTION_SUCCESS",payload:t}},q=function(t){return{type:"CONNECTION_FAILED",payload:t}},Q=function(t){return function(){var n=Object(T.a)(_.a.mark((function n(e){return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e({type:"UPDATE_ACCOUNT",payload:{account:t}}),e(K());case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},X=e(33),J=X.a.div(o||(o=Object(m.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(t){var n=t.image;return n?"url(".concat(n,")"):"none"})),Z=X.a.div(c||(c=Object(m.a)(["\n  height: 8px;\n  width: 8px;\n"]))),$=X.a.div(r||(r=Object(m.a)(["\n  height: 16px;\n  width: 16px;\n"]))),tt=X.a.div(a||(a=Object(m.a)(["\n  height: 24px;\n  width: 24px;\n"]))),nt=X.a.div(i||(i=Object(m.a)(["\n  height: 32px;\n  width: 32px;\n"]))),et=X.a.div(s||(s=Object(m.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(t){var n=t.flex;return n||0}),(function(t){var n=t.fd;return n||"column"}),(function(t){var n=t.jc;return n||"flex-start"}),(function(t){var n=t.ai;return n||"flex-start"}),(function(t){return t.test?"pink":"none"}),(function(t){var n=t.image;return n?"url(".concat(n,")"):"none"})),ot=X.a.p(l||(l=Object(m.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),ct=(X.a.p(u||(u=Object(m.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),X.a.p(d||(d=Object(m.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),rt=(X.a.div(p||(p=Object(m.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),e(6)),at=X.a.button(j||(j=Object(m.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),it=X.a.button(g||(g=Object(m.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),st=X.a.div(x||(x=Object(m.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),lt=X.a.img(h||(h=Object(m.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),ut=X.a.img(b||(b=Object(m.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),dt=X.a.a(O||(O=Object(m.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var pt=function(){var t=Object(w.b)(),n=Object(w.c)((function(t){return t.blockchain})),e=Object(w.c)((function(t){return t.data})),o=Object(f.useState)(!1),c=Object(E.a)(o,2),r=c[0],a=c[1],i=Object(f.useState)(!1),s=Object(E.a)(i,2),l=s[0],u=s[1],d=Object(f.useState)(!1),p=Object(E.a)(d,2),j=p[0],g=p[1],x=Object(f.useState)(!1),h=Object(E.a)(x,2),b=h[0],O=h[1],C=Object(f.useState)(!1),S=Object(E.a)(C,2),m=S[0],A=S[1],v=Object(f.useState)("Click buy to mint your NFT."),N=Object(E.a)(v,2),I=N[0],L=N[1],M=Object(f.useState)(1),W=Object(E.a)(M,2),R=W[0],k=W[1],U=Object(f.useState)({CONTRACT_ADDRESS:"",CONTRACT_ADDRESS_WETH:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST_V2HOLDER:0,WEI_COST_V2HOLDER_WETH:0,WEI_COST_PUBLIC:0,WEI_COST_PUBLIC_WETH:0,WEI_COST_WETH_ALLOWANCE:0,DISPLAY_COST_V2HOLDER:0,DISPLAY_COST_V2HOLDER_WETH:0,DISPLAY_COST_PUBLIC:0,DISPLAY_COST_PUBLIC_WETH:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),H=Object(E.a)(U,2),P=H[0],B=H[1],F=function(){""!==n.account&&null!==n.smartContract&&t(K(n.account))},Y=function(){var t=Object(T.a)(_.a.mark((function t(){var n,e;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("./config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:e=t.sent,B(e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(f.useEffect)((function(){Y()}),[]),Object(f.useEffect)((function(){F()}),[n.account]),Object(rt.jsx)(J,{children:Object(rt.jsxs)(et,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:P.SHOW_BACKGROUND?"./config/images/bg.png":null,children:[Object(rt.jsx)(lt,{alt:"logo",src:"./config/images/logo.png"}),Object(rt.jsx)($,{}),Object(rt.jsxs)(st,{flex:1,style:{padding:24},test:!0,children:[Object(rt.jsx)(et,{flex:1,jc:"center",ai:"center",children:Object(rt.jsx)(ut,{alt:"example",src:"./config/images/example.gif"})}),Object(rt.jsx)(nt,{}),Object(rt.jsxs)(et,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(rt.jsxs)(ot,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[e.totalSupply," / ",P.MAX_SUPPLY]}),Object(rt.jsx)(ct,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(rt.jsxs)(dt,{target:"_blank",href:P.SCAN_LINK,children:[P.NFT_NAME," Smart Contract Address ",P.CONTRACT_ADDRESS]})}),Object(rt.jsx)($,{}),Number(e.totalSupply)>=P.MAX_SUPPLY?Object(rt.jsxs)(rt.Fragment,{children:[Object(rt.jsx)(ot,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(rt.jsxs)(ct,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",P.NFT_NAME," on"]}),Object(rt.jsx)($,{}),Object(rt.jsx)(dt,{target:"_blank",href:P.MARKETPLACE_LINK,children:P.MARKETPLACE})]}):Object(rt.jsxs)(rt.Fragment,{children:[Object(rt.jsx)(et,{ai:"center",jc:"center",fd:"row",children:Object(rt.jsx)(at,{disabled:m?1:0,onClick:function(e){e.preventDefault(),function(){var e=P.GAS_LIMIT,o=String(0),c=String(e);console.log("FM Cost: ",o),console.log("FM Gas limit: ",c),L("Minting your free ".concat(P.NFT_NAME,"...")),A(!0),n.smartContract.methods.freeMint().send({gasLimit:String(c),to:P.CONTRACT_ADDRESS,from:n.account,value:o}).once("error",(function(t){console.log(t),L("Sorry3, something went wrong please try again later."),A(!1)})).then((function(e){console.log(e),L("Wohoo! You free minted a ".concat(P.NFT_NAME,"! Go visit Opensea.io to view it.")),A(!1),t(K(n.account))}))}(),F()},children:m?"BUSY":"V1 OWNER FREE MINT"})}),Object(rt.jsx)($,{}),Object(rt.jsx)(Z,{}),Object(rt.jsx)(et,{ai:"center",jc:"center",fd:"row",children:Object(rt.jsx)(at,{disabled:j?1:0,onClick:function(e){e.preventDefault(),function(){var e=P.WEI_COST_V2HOLDER,o=P.GAS_LIMIT,c=String(e),r=String(o);console.log("Cost: ",c),console.log("Gas limit: ",r),L("Discount minting your ".concat(P.NFT_NAME,"...")),g(!0),n.smartContract.methods.discountMint().send({gasLimit:String(r),to:P.CONTRACT_ADDRESS,from:n.account,value:c}).once("error",(function(t){console.log(t),L("Sorry2, something went wrong please try again later."),g(!1)})).then((function(e){console.log(e),L("AWESOME, the ".concat(P.NFT_NAME," is yours! go visit Opensea.io to view it.")),g(!1),t(K(n.account))}))}(),F()},children:m?"BUSY":"V2 OWNER DISCOUNT MINT"})}),Object(rt.jsx)($,{}),Object(rt.jsx)(Z,{}),Object(rt.jsx)(et,{ai:"center",jc:"center",fd:"row",children:Object(rt.jsx)(at,{disabled:b?1:0,onClick:function(e){e.preventDefault(),function(){P.WEI_COST_V2HOLDER_WETH;var e=P.GAS_LIMIT,o=String(0),c=String(e);console.log("Cost: ",o),console.log("Gas limit: ",c),L("Minting your ".concat(P.NFT_NAME,"...")),O(!0),n.smartContractWeth.methods.increaseAllowance(P.CONTRACT_ADDRESS,String(P.WEI_COST_WETH_ALLOWANCE)).send({gasLimit:String(c),to:P.CONTRACT_ADDRESS_WETH,from:n.account,value:String(0)}).once("error",(function(t){console.log(t),L("Sorry2c, something went wrong."),u(!1)})).then((function(e){console.log(e),L("Increased wETH allowance and going to try minting now. You may want to revoke token approvals later just to be safe ;)"),t(K(n.account))})),n.smartContract.methods.discountMintWeth().send({gasLimit:String(c),to:P.CONTRACT_ADDRESS,from:n.account,value:o}).once("error",(function(t){console.log(t),L("Sorry2b, something went wrong please try again later."),u(!1)})).then((function(e){console.log(e),L("WAZAM, the ".concat(P.NFT_NAME," is yours! go visit Opensea.io to view it.")),u(!1),t(K(n.account))}))}(),F()},children:m?"BUSY":"V2 OWNER DISCOUNT MINT (wETH)"})}),Object(rt.jsx)($,{}),Object(rt.jsx)(Z,{}),Object(rt.jsxs)(ot,{style:{textAlign:"center",color:"var(--accent-text)"},children:["V2 Owner Discount Mint: 1 ",P.SYMBOL," costs ",P.DISPLAY_COST_V2HOLDER," ",P.NETWORK.SYMBOL," or ",P.DISPLAY_COST_V2HOLDER_WETH," weth"]}),Object(rt.jsxs)(ot,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Public Sale Below: 1 ",P.SYMBOL," costs ",P.DISPLAY_COST_PUBLIC," ",P.NETWORK.SYMBOL," or ",P.DISPLAY_COST_PUBLIC_WETH," weth"]}),Object(rt.jsx)(ct,{style:{textAlign:"center",color:"var(--accent-text)"},children:"(excluding gas fees)."}),Object(rt.jsx)($,{}),""===n.account||null===n.smartContract?Object(rt.jsxs)(et,{ai:"center",jc:"center",children:[Object(rt.jsxs)(ct,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",P.NETWORK.NAME," network"]}),Object(rt.jsx)($,{}),Object(rt.jsx)(at,{onClick:function(n){n.preventDefault(),t(function(){var t=Object(T.a)(_.a.mark((function t(n){var e,o,c,r,a,i,s,l,u,d,p,j;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"CONNECTION_REQUEST"}),t.next=3,fetch("config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return e=t.sent,t.next=6,e.json();case 6:return o=t.sent,t.next=9,fetch("config/abiWeth.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return c=t.sent,t.next=12,c.json();case 12:return r=t.sent,t.next=15,fetch("config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 15:return a=t.sent,t.next=18,a.json();case 18:if(i=t.sent,s=window,!(l=s.ethereum)||!l.isMetaMask){t.next=39;break}return y.a.setProvider(l),u=new D.a(l),t.prev=24,t.next=27,l.request({method:"eth_requestAccounts"});case 27:return d=t.sent,t.next=30,l.request({method:"net_version"});case 30:t.sent==i.NETWORK.ID?(p=new y.a(o,i.CONTRACT_ADDRESS),j=new y.a(r,i.CONTRACT_ADDRESS_WETH),n(z({account:d[0],smartContract:p,smartContractWeth:j,web3:u})),l.on("accountsChanged",(function(t){n(Q(t[0]))})),l.on("chainChanged",(function(){window.location.reload()}))):n(q("Change network to ".concat(i.NETWORK.NAME,"."))),t.next=37;break;case 34:t.prev=34,t.t0=t.catch(24),n(q("Something went wrong."));case 37:t.next=40;break;case 39:n(q("Install Metamask, or click the Connect Coinbase Wallet Button."));case 40:case"end":return t.stop()}}),t,null,[[24,34]])})));return function(n){return t.apply(this,arguments)}}()),F()},children:"CONNECT (METAMASK)"}),Object(rt.jsx)(at,{onClick:function(n){n.preventDefault(),t(function(){var t=Object(T.a)(_.a.mark((function t(n){var e,o,c,r,a,i,s,l,u,d,p,j,g,x;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"CONNECTION_REQUEST"}),t.next=3,fetch("config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return e=t.sent,t.next=6,e.json();case 6:return o=t.sent,t.next=9,fetch("config/abiWeth.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return c=t.sent,t.next=12,c.json();case 12:return r=t.sent,t.next=15,fetch("config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 15:return a=t.sent,t.next=18,a.json();case 18:return i=t.sent,s=window,l=s.ethereum,t.prev=20,u=new V.a({appName:"demo-app",darkMode:!0}),console.log("Instantiated WalletLink object"),d=u.makeWeb3Provider("https://rinkeby.infura.io/v3/55d040fb60064deaa7acc8e320d99bd4",4),t.next=26,d.request({method:"eth_requestAccounts"});case 26:return p=t.sent,t.next=29,l.request({method:"net_version"});case 29:j=t.sent,console.log("requested accounts"),j==i.NETWORK.ID?(console.log("connected to correct network (good)"),g=new y.a(o,i.CONTRACT_ADDRESS),x=new y.a(r,i.CONTRACT_ADDRESS_WETH),console.log("Instantiated Web3EthContract object"),n(z({account:p[0],smartContract:g,smartContractWeth:x,web3:web3})),l.on("accountsChanged",(function(t){console.log("changing accounts"),n(Q(t[0]))})),l.on("chainChanged",(function(){console.log("changed chain so reloading"),window.location.reload()}))):n(q("Change network to ".concat(i.NETWORK.NAME,"."))),t.next=38;break;case 34:t.prev=34,t.t0=t.catch(20),console.log(t.t0),n(q("Something went wrong."));case 38:case"end":return t.stop()}}),t,null,[[20,34]])})));return function(n){return t.apply(this,arguments)}}()),F()},children:"CONNECT (COINBASE WALLET)"}),""!==n.errorMsg?Object(rt.jsxs)(rt.Fragment,{children:[Object(rt.jsx)($,{}),Object(rt.jsx)(ct,{style:{textAlign:"center",color:"var(--accent-text)"},children:n.errorMsg})]}):null]}):Object(rt.jsxs)(rt.Fragment,{children:[Object(rt.jsx)(ct,{style:{textAlign:"center",color:"var(--accent-text)"},children:I}),Object(rt.jsx)(tt,{}),Object(rt.jsxs)(et,{ai:"center",jc:"center",fd:"row",children:[Object(rt.jsx)(it,{style:{lineHeight:.4},disabled:r?1:0,onClick:function(t){t.preventDefault(),function(){var t=R-1;t<1&&(t=1),k(t)}()},children:"-"}),Object(rt.jsx)(tt,{}),Object(rt.jsx)(ct,{style:{textAlign:"center",color:"var(--accent-text)"},children:R}),Object(rt.jsx)(tt,{}),Object(rt.jsx)(it,{disabled:r?1:0,onClick:function(t){t.preventDefault(),function(){var t=R+1;t>8&&(t=8),k(t)}()},children:"+"})]}),Object(rt.jsx)($,{}),Object(rt.jsx)(et,{ai:"center",jc:"center",fd:"row",children:Object(rt.jsx)(at,{disabled:r?1:0,onClick:function(e){e.preventDefault(),function(){var e=P.WEI_COST_PUBLIC,o=P.GAS_LIMIT,c=String(e*R),r=String(o*R);console.log("Cost: ",c),console.log("Gas limit: ",r),L("Minting your ".concat(P.NFT_NAME,"...")),a(!0),n.smartContract.methods.mint(R).send({gasLimit:String(r),to:P.CONTRACT_ADDRESS,from:n.account,value:c}).once("error",(function(t){console.log(t),L("Sorry1, something went wrong please try again later."),a(!1)})).then((function(e){console.log(e),L("WOW, the ".concat(P.NFT_NAME," is yours! go visit Opensea.io to view it.")),a(!1),t(K(n.account))}))}(),F()},children:r?"BUSY":"BUY (PUBLIC SALE)"})}),Object(rt.jsx)($,{}),Object(rt.jsx)(et,{ai:"center",jc:"center",fd:"row",children:Object(rt.jsx)(at,{disabled:l?1:0,onClick:function(e){e.preventDefault(),function(){P.WEI_COST_PUBLIC_WETH;var e=P.GAS_LIMIT,o=String(0),c=String(e*R);console.log("Cost: ",o),console.log("Gas limit: ",c),L("Minting your ".concat(P.NFT_NAME,"...")),u(!0),n.smartContractWeth.methods.increaseAllowance(P.CONTRACT_ADDRESS,String(P.WEI_COST_WETH_ALLOWANCE)).send({gasLimit:String(c),to:P.CONTRACT_ADDRESS_WETH,from:n.account,value:String(0)}).once("error",(function(t){console.log(t),L("Sorry1c, something went wrong."),u(!1)})).then((function(e){console.log(e),L("Increased wETH allowance and going to try minting now. You may want to revoke token approvals later just to be safe ;)"),t(K(n.account))})),n.smartContract.methods.mintWeth(R).send({gasLimit:String(c),to:P.CONTRACT_ADDRESS,from:n.account,value:o}).once("error",(function(t){console.log(t),L("Sorry1b, something went wrong please try again later."),u(!1)})).then((function(e){console.log(e),L("TREMENDOUS, the ".concat(P.NFT_NAME," is yours! go visit Opensea.io to view it.")),u(!1),t(K(n.account))}))}(),F()},children:l?"BUSY":"BUY (PUBLIC SALE, wETH)"})})]})]}),Object(rt.jsx)(tt,{})]}),Object(rt.jsx)(nt,{}),Object(rt.jsx)(et,{flex:1,jc:"center",ai:"center",children:Object(rt.jsx)(ut,{alt:"example",src:"./config/images/example.gif",style:{transform:"scaleX(-1)"}})})]}),Object(rt.jsx)(tt,{}),Object(rt.jsxs)(et,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(rt.jsxs)(ct,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",P.NETWORK.NAME,") and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(rt.jsx)($,{}),Object(rt.jsxs)(ct,{style:{textAlign:"center",color:"var(--primary-text)"},children:["We have set the gas limit to ",P.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]})]})]})})},jt=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,716)).then((function(n){var e=n.getCLS,o=n.getFID,c=n.getFCP,r=n.getLCP,a=n.getTTFB;e(t),o(t),c(t),r(t),a(t)}))};e(708);S.a.render(Object(rt.jsx)(w.a,{store:F,children:Object(rt.jsx)(pt,{})}),document.getElementById("root")),jt()}},[[709,1,2]]]);
//# sourceMappingURL=main.f80778f0.chunk.js.map