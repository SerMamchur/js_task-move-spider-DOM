document.addEventListener("click",function(t){var e=document.querySelector(".spider"),i=document.querySelector(".wall"),n=t.clientX,l=t.clientY,o=i.getBoundingClientRect(),c=parseInt(getComputedStyle(i).borderTopWidth);if(t.target===i){var a=e.offsetWidth,d=e.offsetHeight,r=n-o.left,h=l-o.top,f=i.clientWidth-a,m=i.clientHeight-d,p=Math.min(Math.max(r-a/2-c,0),f),u=Math.min(Math.max(h-d/2-c,0),m);e.style.top=u+"px",e.style.left=p+"px"}});
//# sourceMappingURL=index.ba9733f7.js.map
