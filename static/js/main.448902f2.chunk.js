(this.webpackJsonpgameboy=this.webpackJsonpgameboy||[]).push([[0],[,,,,function(e,a,t){e.exports=t(14)},,,,,function(e,a,t){},function(e,a,t){},,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(2),r=t.n(c),l=(t(9),t(10),t(3)),o=t.n(l);function i(e){var a,t=5,n=5,s=e.createVector(0,0);e.setup=function(){a=e.createCanvas(325,325),e.frameRate(10),e.noStroke()},e.draw=function(){e.background("black"),function(){for(var a=5;5*a<325;a+=5)for(var s=5;5*s<325;s+=5)t===a&&n===s?(e.stroke("white"),e.strokeWeight(10)):(e.stroke("rgba(170, 170, 170,0.25)"),e.strokeWeight(5)),e.point(5*a,5*s)}(),t+=5*s.x,n+=5*s.y,t<5&&(t=60),t>60&&(t=5),n<5&&(n=60),n>60&&(n=5),t=e.constrain(t,5,60),n=e.constrain(n,5,60)},e.keyPressed=function(){e.keyCode!==e.UP_ARROW&&"w"!==e.key||(console.log("up"),s.set(0,-1)),e.keyCode!==e.DOWN_ARROW&&"s"!==e.key||(console.log("down"),s.set(0,1)),e.keyCode!==e.LEFT_ARROW&&"a"!==e.key||(console.log("left"),s.set(-1,0)),e.keyCode!==e.RIGHT_ARROW&&"d"!==e.key||(console.log("right"),s.set(1,0))},e.myCustomRedrawAccordingToNewPropsHandler=function(t){a&&e.fill(t.color)}}t(13);var m=function(){return s.a.createElement("div",{className:"Gameboy"},s.a.createElement("div",{className:"screen-container"},s.a.createElement("div",{className:"screen-power-indicator"},s.a.createElement("div",{className:"screen-power-light"}),s.a.createElement("div",{className:"power-title"},"Power")),s.a.createElement("div",{className:"screen"},s.a.createElement(o.a,{sketch:i})),s.a.createElement("div",{className:"screen-title"},s.a.createElement("span",{className:"screen-title-main"},"Sashtendo"),s.a.createElement("span",{className:"screen-title-sub"},"beta"))),s.a.createElement("div",{className:"etching"},"@sahishnu"),s.a.createElement("div",{className:"controls-row"},s.a.createElement("div",{className:"d-pad-container button"}),s.a.createElement("div",{className:"a-button-container"},s.a.createElement("div",{className:"a-button button"},"A"),s.a.createElement("div",{className:"button-letter"},"A")),s.a.createElement("div",{className:"b-button-container"},s.a.createElement("div",{className:"b-button button"},"B"),s.a.createElement("div",{className:"button-letter"},"B"))),s.a.createElement("div",{className:"settings-row"},s.a.createElement("div",{className:"setting-button-container",style:{marginRight:"16px"}},s.a.createElement("div",{className:"setting-button button"}),s.a.createElement("div",{className:"setting-button-lettering"},"Select")),s.a.createElement("div",{className:"setting-button-container"},s.a.createElement("div",{className:"setting-button button"}),s.a.createElement("div",{className:"setting-button-lettering"},"Start"))),s.a.createElement("div",{className:"speaker-container"},s.a.createElement("div",{className:"speaker"}),s.a.createElement("div",{className:"speaker"}),s.a.createElement("div",{className:"speaker"}),s.a.createElement("div",{className:"speaker"}),s.a.createElement("div",{className:"speaker"}),s.a.createElement("div",{className:"speaker"}),s.a.createElement("div",{className:"speaker"}),s.a.createElement("div",{className:"speaker"}),s.a.createElement("div",{className:"speaker"}),s.a.createElement("div",{className:"speaker"}),s.a.createElement("div",{className:"speaker"}),s.a.createElement("div",{className:"speaker"}),s.a.createElement("div",{className:"speaker"}),s.a.createElement("div",{className:"speaker"}),s.a.createElement("div",{className:"speaker"})))};var d=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.448902f2.chunk.js.map