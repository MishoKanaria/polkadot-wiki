(self.webpackChunk=self.webpackChunk||[]).push([[691],{47940:(t,e,a)=>{"use strict";a.d(e,{Z:()=>u});var n=a(74165),r=a(15861),l=a(67294),i=a(92519),o=a(89658),s=a(67425);function d(t,e,a){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)((0,n.Z)().mark((function t(e,a,r){var l,s,d,p,m;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l=void 0,s=void 0,t.t0=e,t.next="polkadot"===t.t0?5:"kusama"===t.t0?7:"statemine"===t.t0?9:"statemint"===t.t0?11:13;break;case 5:return l="wss://rpc.polkadot.io",t.abrupt("break",14);case 7:return l="wss://kusama-rpc.polkadot.io/",t.abrupt("break",14);case 9:return l="wss://statemine-rpc.polkadot.io/",t.abrupt("break",14);case 11:return l="wss://statemint-rpc.polkadot.io/",t.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==l){t.next=18;break}return t.abrupt("return");case 18:return d=new i.U(l),t.next=21,o.G.create({provider:d});case 21:p=t.sent,(m=a.split(".")).forEach((function(t){t in p&&(p=p[t])})),t.t1=m[0],t.next="consts"===t.t1?27:"query"===t.t1?29:34;break;case 27:return s=p.toString(),t.abrupt("break",35);case 29:return t.next=31,p();case 31:return s=(s=t.sent).toString(),t.abrupt("break",35);case 34:console.log("Unknown path prefix ("+m[0]+") in "+a);case 35:return t.abrupt("return",s);case 36:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t,e,a,n){switch(e){case"humanReadable":(0,s.HumanReadable)(t,a,n);break;case"precise":(0,s.Precise)(t,a,n);break;case"blocksToDays":(0,s.BlocksToDays)(t,n);break;case"percentage":(0,s.Percentage)(t,n);break;case"arrayLength":(0,s.ArrayLength)(t,n);break;default:return void console.log("Ignoring unknown filter type")}}const u=function(t){var e=t.network,a=t.path,i=t.defaultValue,o=t.filter,s=void 0===o?void 0:o,p=(0,l.useState)(""),u=p[0],k=p[1];return e=e.toLowerCase(),(0,l.useEffect)((function(){void 0!==s?m(i.toString(),s,e,k):k(i.toString());var t=void 0;switch(e){case"polkadot":t="wss://rpc.polkadot.io";break;case"kusama":t="wss://kusama-rpc.polkadot.io/";break;case"statemine":t="wss://statemine-rpc.polkadot.io/";break;case"statemint":t="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+e)}if(void 0===t)console.log("Failed to connect to a valid websocket, applying default");else{var l=function(){var t=(0,r.Z)((0,n.Z)().mark((function t(){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e,a,k);case 2:if(void 0!==(r=t.sent)){t.next=7;break}return t.abrupt("return");case 7:void 0!==s?m(r,s,e,k):k(r);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();try{l()}catch(o){console.log(o)}}}),[]),u}},67425:t=>{var e={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};t.exports={HumanReadable:function(t,a,n){var r=void 0;if("polkadot"===a||"statemint"===a)r=3;else{if("kusama"!==a&&"statemine"!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");r=6}t=parseFloat(t),n((t=Number.isInteger(t/e[a].precision)?t/e[a].precision+" "+e[a].symbol:(t/e[a].precision).toFixed(r)+" "+e[a].symbol).toString())},Precise:function(t,a,n){n(t=(t=parseFloat(t))/e[a].precision+" "+e[a].symbol)},BlocksToDays:function(t,e){e((t=6*t/86400).toString())},Percentage:function(t,e){e((t/=1e7).toString())},ArrayLength:function(t,e){e((t=t.split(",").length).toString())}}},1735:(t,e,a)=>{"use strict";a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>d,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(47940),o=["components"],s={id:"maintain-polkadot-parameters",title:"Polkadot Parameters",sidebar_label:"Parameters",description:"A description about fundamental Polkadot parameters.",keywords:["parameters","actions","attributes","behaviors"],slug:"../maintain-polkadot-parameters"},d=void 0,p={unversionedId:"maintain/maintain-polkadot-parameters",id:"maintain/maintain-polkadot-parameters",title:"Polkadot Parameters",description:"A description about fundamental Polkadot parameters.",source:"@site/../docs/maintain/maintain-polkadot-parameters.md",sourceDirName:"maintain",slug:"/maintain-polkadot-parameters",permalink:"/docs/maintain-polkadot-parameters",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-polkadot-parameters.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1679293124,formattedLastUpdatedAt:"Mar 20, 2023",frontMatter:{id:"maintain-polkadot-parameters",title:"Polkadot Parameters",sidebar_label:"Parameters",description:"A description about fundamental Polkadot parameters.",keywords:["parameters","actions","attributes","behaviors"],slug:"../maintain-polkadot-parameters"},sidebar:"docs",previous:{title:"Network Maintainers",permalink:"/docs/maintain-index"},next:{title:"Node Endpoints",permalink:"/docs/maintain-endpoints"}},m={},u=[{value:"Periods of common actions and attributes",id:"periods-of-common-actions-and-attributes",level:3},{value:"Accounts, Identity and Crowdloans",id:"accounts-identity-and-crowdloans",level:3},{value:"Governance",id:"governance",level:3},{value:"Staking, Validating, and Nominating",id:"staking-validating-and-nominating",level:3},{value:"Parachains",id:"parachains",level:3},{value:"Treasury",id:"treasury",level:3},{value:"Precision",id:"precision",level:3}],k={toc:u};function c(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Many of these parameter values can be updated via on-chain governance. If you require absolute\ncertainty of these parameter values, it is recommended you directly check the constants by looking\nat the ",(0,l.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate/constants"},"chain state")," and/or\n",(0,l.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},"storage"),"."),(0,l.kt)("h3",{id:"periods-of-common-actions-and-attributes"},"Periods of common actions and attributes"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"NOTE: Polkadot generally runs at ","\xbc","th the speed of Kusama, except in the time slot duration\nitself. See ",(0,l.kt)("a",{parentName:"em",href:"https://guide.kusama.network/docs/kusama-parameters/"},"Kusama Parameters")," for more\ndetails on how Polkadot's parameters differ from Kusama's.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Slot: 6 seconds ","*","(generally one block per slot, although see note below)"),(0,l.kt)("li",{parentName:"ul"},"Epoch: 4 hours (2_400 slots x 6 seconds)"),(0,l.kt)("li",{parentName:"ul"},"Session: 4 hours (Session and Epoch lengths are the same)"),(0,l.kt)("li",{parentName:"ul"},"Era: 24 hours (6 sessions per Era, 2_400 slots x 6 epochs x 6 seconds)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Polkadot"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots","*"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Slot"),(0,l.kt)("td",{parentName:"tr",align:null},"6 seconds"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Epoch"),(0,l.kt)("td",{parentName:"tr",align:null},"4 hours"),(0,l.kt)("td",{parentName:"tr",align:null},"2_400")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Session"),(0,l.kt)("td",{parentName:"tr",align:null},"4 hours"),(0,l.kt)("td",{parentName:"tr",align:null},"2_400")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Era"),(0,l.kt)("td",{parentName:"tr",align:null},"24 hours"),(0,l.kt)("td",{parentName:"tr",align:null},"14_400")))),(0,l.kt)("p",null,"*",(0,l.kt)("em",{parentName:"p"},"A maximum of one block per slot can be in a canonical chain. Occasionally, a slot will be without\na block in the chain. Thus, the times given are ",(0,l.kt)("em",{parentName:"em"},"estimates"),". See\n",(0,l.kt)("a",{parentName:"em",href:"/docs/learn-consensus"},"Consensus")," for more details.")),(0,l.kt)("h3",{id:"accounts-identity-and-crowdloans"},"Accounts, Identity and Crowdloans"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("a",{parentName:"li",href:"/docs/learn-accounts#existential-deposit-and-reaping"},"Existential Deposit")," is\n",(0,l.kt)(i.Z,{network:"polkadot",path:"consts.balances.existentialDeposit",defaultValue:1e10,filter:"humanReadable",mdxType:"RPC"}),""),(0,l.kt)("li",{parentName:"ul"},"The deposit required to set an Identity is\n",(0,l.kt)(i.Z,{network:"polkadot",path:"consts.identity.basicDeposit",defaultValue:20258e7,filter:"humanReadable",mdxType:"RPC"}),""),(0,l.kt)("li",{parentName:"ul"},"The minimum contribution required to participate in a crowdloan is\n",(0,l.kt)(i.Z,{network:"polkadot",path:"consts.crowdloan.minContribution",defaultValue:5e10,filter:"humanReadable",mdxType:"RPC"}),"")),(0,l.kt)("h3",{id:"governance"},"Governance"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Democracy"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Voting period"),(0,l.kt)("td",{parentName:"tr",align:null},"28 days"),(0,l.kt)("td",{parentName:"tr",align:null},"403_200"),(0,l.kt)("td",{parentName:"tr",align:null},"How long the public can vote on a referendum.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Launch period"),(0,l.kt)("td",{parentName:"tr",align:null},"28 days"),(0,l.kt)("td",{parentName:"tr",align:null},"403_200"),(0,l.kt)("td",{parentName:"tr",align:null},"How long the public can select which proposal to hold a referendum on, i.e., every week, the highest-weighted proposal will be selected to have a referendum.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enactment period"),(0,l.kt)("td",{parentName:"tr",align:null},"28 days"),(0,l.kt)("td",{parentName:"tr",align:null},"403_200"),(0,l.kt)("td",{parentName:"tr",align:null},"Time it takes for a successful referendum to be implemented on the network.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Council"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Term duration"),(0,l.kt)("td",{parentName:"tr",align:null},"7 days"),(0,l.kt)("td",{parentName:"tr",align:null},"100_800"),(0,l.kt)("td",{parentName:"tr",align:null},"The length of a council member's term until the next election round.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Voting period"),(0,l.kt)("td",{parentName:"tr",align:null},"7 days"),(0,l.kt)("td",{parentName:"tr",align:null},"100_800"),(0,l.kt)("td",{parentName:"tr",align:null},"The council's voting period for motions.")))),(0,l.kt)("p",null,"The Polkadot Council consists of up to 13 members and up to 20 runners up."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Technical committee"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cool-off period"),(0,l.kt)("td",{parentName:"tr",align:null},"7 days"),(0,l.kt)("td",{parentName:"tr",align:null},"100_800"),(0,l.kt)("td",{parentName:"tr",align:null},"The time a veto from the technical committee lasts before the proposal can be submitted again.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Emergency voting period"),(0,l.kt)("td",{parentName:"tr",align:null},"3 hours"),(0,l.kt)("td",{parentName:"tr",align:null},"1_800"),(0,l.kt)("td",{parentName:"tr",align:null},"The voting period after the technical committee expedites voting.")))),(0,l.kt)("h3",{id:"staking-validating-and-nominating"},"Staking, Validating, and Nominating"),(0,l.kt)("p",null,"The maximum number of validators that can be nominated by a nominator is\n",(0,l.kt)(i.Z,{network:"polkadot",path:"consts.staking.maxNominations",defaultValue:16,mdxType:"RPC"}),".\n",""),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Polkadot"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Term duration"),(0,l.kt)("td",{parentName:"tr",align:null},"1 Day"),(0,l.kt)("td",{parentName:"tr",align:null},"14_400"),(0,l.kt)("td",{parentName:"tr",align:null},"The time for which a validator is in the set after being elected. Note, this duration can be shortened in the case that a validator misbehaves.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Nomination period"),(0,l.kt)("td",{parentName:"tr",align:null},"1 Day"),(0,l.kt)("td",{parentName:"tr",align:null},"14_400"),(0,l.kt)("td",{parentName:"tr",align:null},"How often a new validator set is elected according to Phragm\xe9n's method.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bonding duration"),(0,l.kt)("td",{parentName:"tr",align:null},"28 days"),(0,l.kt)("td",{parentName:"tr",align:null},"403_200"),(0,l.kt)("td",{parentName:"tr",align:null},"How long until your funds will be transferrable after unbonding. Note that the bonding duration is defined in eras, not directly by slots.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Slash defer duration"),(0,l.kt)("td",{parentName:"tr",align:null},"28 days"),(0,l.kt)("td",{parentName:"tr",align:null},"403_200"),(0,l.kt)("td",{parentName:"tr",align:null},'Prevents overslashing and validators "escaping" and getting their nominators slashed with no repercussions to themselves. Note that the bonding duration is defined in eras, not directly by slots.')))),(0,l.kt)("h3",{id:"parachains"},"Parachains"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Crowdloans and Auctions"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Auction duration"),(0,l.kt)("td",{parentName:"tr",align:null},"7 days"),(0,l.kt)("td",{parentName:"tr",align:null},"100_800"),(0,l.kt)("td",{parentName:"tr",align:null},"The total duration of the slot auction, subject to the candle auction mechanism.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Opening period"),(0,l.kt)("td",{parentName:"tr",align:null},"2 days"),(0,l.kt)("td",{parentName:"tr",align:null},"28_800"),(0,l.kt)("td",{parentName:"tr",align:null},"The opening period of the slot auction.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ending period"),(0,l.kt)("td",{parentName:"tr",align:null},"5 days"),(0,l.kt)("td",{parentName:"tr",align:null},"72_000"),(0,l.kt)("td",{parentName:"tr",align:null},"The ending period of the slot auction.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parachain Slot"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Lease period"),(0,l.kt)("td",{parentName:"tr",align:null},"12 weeks"),(0,l.kt)("td",{parentName:"tr",align:null},"1_209_600"),(0,l.kt)("td",{parentName:"tr",align:null},"The length of one lease period in a parachain slot.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Total slot duration"),(0,l.kt)("td",{parentName:"tr",align:null},"2 years"),(0,l.kt)("td",{parentName:"tr",align:null},"10_512_000"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum duration a parachain can lease by winning a slot auction (8 lease periods).")))),(0,l.kt)("h3",{id:"treasury"},"Treasury"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Treasury"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Periods between spends"),(0,l.kt)("td",{parentName:"tr",align:null},"24 days"),(0,l.kt)("td",{parentName:"tr",align:null},"345_600"),(0,l.kt)("td",{parentName:"tr",align:null},"When the treasury can spend again after spending previously.")))),(0,l.kt)("p",null,"Burn percentage is currently ",(0,l.kt)("inlineCode",{parentName:"p"},"1.00%"),"."),(0,l.kt)("h3",{id:"precision"},"Precision"),(0,l.kt)("p",null,"DOT have 10 decimals of precision. In other words, 10 ","*","*"," 10 (10_000_000_000 or ten billion)\nPlancks make up a DOT."),(0,l.kt)("p",null,"The denomination of DOT was changed from 12 decimals of precision at block #1,248,328 in an event\nknown as ",(0,l.kt)("em",{parentName:"p"},"Denomination Day"),". See ",(0,l.kt)("a",{parentName:"p",href:"/docs/learn-redenomination"},"Redenomination")," for details."))}c.isMDXComponent=!0},95856:()=>{},46601:()=>{}}]);