"use strict";(self.webpackChunkpikachu_volleyball_p2p_online=self.webpackChunkpikachu_volleyball_p2p_online||[]).push([[179],{5718:(e,t,i)=>{var r=i(9319),s=i(1680),n=i(6710),a=i(4858),o=i(1585),h=i(550),y=i(2126),l=i(6679),u=i(3093),d=i(5196),p=i(9619),c=(i(2971),i(3227)),m=i(1622),b=i(1645),I=i(1203),P=i(5253),g=i(1605),C=i(7392),w=i(390);class O extends c.c{constructor(e,t){super(e,t),this.physics.player1.isComputer=!1,this.physics.player2.isComputer=!1,this.keyboardArray[0].unsubscribe(),this.keyboardArray[1].unsubscribe(),this.myKeyboard=m.zw,this.myOnlineKeyboard=new m.cx(this.myKeyboard.inputQueue),this.peerOnlineKeyboard=new m.cx(b.CE.peerInputQueue),this._amIPlayer2=!1,this.keyboardArray=[this.myOnlineKeyboard,this.peerOnlineKeyboard],this._syncCounter=0,this.noInputFrameTotal.menu=1/0,this.isFirstGame=!0,this.willSaveReplay=!0}get amIPlayer2(){return this._amIPlayer2}set amIPlayer2(e){this._amIPlayer2=e,b.CE.amIPlayer2=e,!0===this._amIPlayer2?this.keyboardArray=[this.peerOnlineKeyboard,this.myOnlineKeyboard]:this.keyboardArray=[this.myOnlineKeyboard,this.peerOnlineKeyboard]}get syncCounter(){return this._syncCounter}set syncCounter(e){this._syncCounter=(0,I.w)(e,b.ay)}intro(){0===this.frameCounter&&(this.selectedWithWho=0,this.isFirstGame?(this.isFirstGame=!1,this.amIPlayer2=!b.CE.amICreatedRoom):b.CE.isQuickMatch&&(0,P.Ei)()),super.intro()}menu(){const e=this.selectedWithWho;super.menu(),this.selectedWithWho!==e&&(this.amIPlayer2=!this.amIPlayer2,(0,g.S)(b.CE.myNickname,this.amIPlayer2),(0,g.S)(b.CE.peerNickname,!this.amIPlayer2),(0,g.e)(b.CE.myPartialPublicIP,this.amIPlayer2),(0,g.e)(b.CE.peerPartialPublicIP,!this.amIPlayer2))}gameLoop(){b.CE.gameStartAllowed&&b.CE.isOpen&&(this.myKeyboard.getInputIfNeededAndSendToPeer(this.syncCounter),this.gameLoopFromGettingPeerInput())}gameLoopFromGettingPeerInput(){if(this.peerOnlineKeyboard.isInputOnQueue(this.syncCounter)){if(this.myOnlineKeyboard.isInputOnQueue(this.syncCounter)){if(this.peerOnlineKeyboard.getInput(this.syncCounter),this.myOnlineKeyboard.getInput(this.syncCounter),this.syncCounter++,this.willSaveReplay){const e=new w.P3;e.xDirection=this.keyboardArray[0].xDirection,e.yDirection=this.keyboardArray[0].yDirection,e.powerHit=this.keyboardArray[0].powerHit;const t=new w.P3;t.xDirection=this.keyboardArray[1].xDirection,t.yDirection=this.keyboardArray[1].yDirection,t.powerHit=this.keyboardArray[1].powerHit,C.Q.recordInputs(e,t)}if(this.slowMotionFramesLeft>0){if(this.slowMotionNumOfSkippedFrames++,this.slowMotionNumOfSkippedFrames%Math.round(this.normalFPS/this.slowMotionFPS)!=0)return;this.slowMotionFramesLeft--,this.slowMotionNumOfSkippedFrames=0}this.physics.player1.isComputer=!1,this.physics.player2.isComputer=!1,this.state(),this.peerOnlineKeyboard.inputQueue.length>m.ID&&(this.myOnlineKeyboard.inputQueue.length>m.ID?window.setTimeout(this.gameLoopFromGettingPeerInput.bind(this),0):window.setTimeout(this.gameLoop.bind(this),0))}}else b.CE.callbackAfterPeerInputQueueReceived=this.gameLoopFromGettingPeerInput.bind(this)}}var E=i(5093),k=i(6511),S=i(7495);const f=E.d.TEXTURES;f.WITH_COMPUTER=f.WITH_FRIEND,n.Th.registerPlugin("prepare",a.B9),n.Th.registerPlugin("batch",n.Bv),u.uK.registerPlugin("prepare",p.T),u.uK.registerPlugin("sprite",d.O),h.aN.registerPlugin(y.o),r.X.RESOLUTION=window.devicePixelRatio,r.X.SCALE_MODE=s.aH.NEAREST,r.X.ROUND_PIXELS=!0;const A=(0,n.e6)({width:432,height:304,antialias:!1,backgroundColor:0,backgroundAlpha:1,forceCanvas:!0}),K=new o.W2,F=new l.vB,_=new h.aN;document.querySelector("#game-canvas-container").appendChild(A.view),A.render(K),_.add(E.d.SPRITE_SHEET);for(const e in E.d.SOUNDS)_.add(E.d.SOUNDS[e]);function D(){const e=new O(K,_.resources);(0,P.IW)(e,F),(0,S.IJ)(e),function(e){F.maxFPS=e.normalFPS,F.add((()=>{A.render(K),e.gameLoop()})),F.start()}(e)}!function(){const e=document.getElementById("loading-box"),t=document.getElementById("progress-bar");_.onProgress.add((()=>{t.style.width=`${_.progress}%`})),_.onComplete.add((()=>{e.classList.contains("hidden")||e.classList.add("hidden")}))}(),b.CE.callbackAfterDataChannelOpened=()=>{_.load(D)},(0,P.yA)(),(0,k.g)()}},e=>{e.O(0,[246,341,692],(()=>(5718,e(e.s=5718)))),e.O()}]);
//# sourceMappingURL=main.adaf00aad448e8d2b15c.js.map