(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{K7ED:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("Bl7J"),c=n("vOnD");function d(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  width: 100%;\n  height: 10rem;\n  resize: none;\n  border: 1px solid #111111;\n  border-radius: 5px;\n  padding: 5px;\n  margin: 1rem 0;\n  font-family: 'Courier New', Courier, monospace;\n"]);return d=function(){return e},e}var s=function(e){return(new TextEncoder).encode(e)},p=function(e){return new TextDecoder("utf-8").decode(e)},l=function(){var e=new Worker("/worker-encrypt.js"),t={decryptedMessage:s(document.getElementById("decrypted").value),passwordAsBytes:s(prompt("Enter your password:"))};e.postMessage(t,[t.decryptedMessage.buffer]),e.onmessage=function(e){document.getElementById("encrypted").value=p(e.data.encryptedMessage),document.getElementById("decrypted").value=""}},u=function(){var e=new Worker("/worker-decrypt.js"),t={encryptedMessage:s(document.getElementById("encrypted").value),passwordAsBytes:s(prompt("Enter your password:"))};e.postMessage(t,[t.encryptedMessage.buffer]),e.onmessage=function(e){document.getElementById("decrypted").value=p(e.data.decryptedMessage),document.getElementById("encrypted").value=""}},i=c.a.textarea(d());t.default=function(){return a.a.createElement(o.a,null,a.a.createElement("h1",{style:{textAlign:"center"}},"Web Cryptography API Demo"),a.a.createElement("p",null,"Here you can try my implementation of client-side in-browser encryption using only the Web Cryptography API along with web workers for efficiency."),a.a.createElement("h3",null,"Usage"),a.a.createElement("p",null,"Type your text in the text area below and click the buttons to encrypt and decrypt."),a.a.createElement(i,{id:"decrypted",placeholder:"plain text"}),a.a.createElement("div",{style:{maxWidth:"20rem",margin:"auto",display:"flex",flexFlow:"row nowrap",justifyContent:"space-around"}},a.a.createElement("a",{style:{cursor:"pointer"},id:"buttonEncrypt",onClick:l},"Encrypt"),a.a.createElement("a",{style:{cursor:"pointer"},id:"buttonDecrypt",onClick:u},"Decrypt")),a.a.createElement(i,{id:"encrypted",placeholder:"encrypted text"}))}}}]);
//# sourceMappingURL=component---src-pages-crypto-js-f25e8076eb9fc2115104.js.map