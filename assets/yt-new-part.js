/* 新商品セクション（トップページ） — カテゴリ「新商品」(7827735) の商品を表示 */
!function(){"use strict";
var CAT="7827735",MAX=6;
function run(){
 if(location.pathname!=="/"&&location.pathname!=="")return;
 var nav=document.querySelector("section.yt-nav");if(!nav||document.querySelector(".yt-newarr"))return;
 var sec=document.createElement("section");sec.className="yt-sec yt-in yt-newarr";sec.style.minHeight="0";
 sec.innerHTML='<div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:16px"><div><p class="yt-kicker">NEW</p><h2 class="yt-h2" style="margin:0">新商品</h2></div><a href="/categories/'+CAT+'" style="font-size:12px;color:#1f1d1a;text-decoration:underline;white-space:nowrap">すべて見る →</a></div><div class="yt-grid"></div>';
 fetch("/categories/"+CAT,{credentials:"same-origin"}).then(function(r){return r.text()}).then(function(h){
  var d=new DOMParser().parseFromString(h,"text/html"),its=d.querySelectorAll(".item-list-item"),g=sec.querySelector(".yt-grid"),n=0;
  for(var i=0;i<its.length&&n<MAX;i++){
   var it=its[i],a=it.querySelector('a[href*="/items/"]'),im=it.querySelector("img:not(.label_image)"),nm=it.querySelector(".name"),pr=it.querySelector(".price");
   if(!a||!im)continue;
   var so=/SOLD\s*OUT|売り切れ/i.test(it.textContent);
   var c=document.createElement("a");c.className="yt-card";c.href=a.getAttribute("href");
   c.innerHTML='<div class="ph" style="position:relative"><img loading="lazy" alt=""><span style="position:absolute;left:8px;top:8px;background:#1f1d1a;color:#fff;font:700 10px/1 sans-serif;letter-spacing:.08em;padding:5px 7px;border-radius:2px">NEW</span>'+(so?'<span style="position:absolute;right:8px;top:8px;background:#e8912d;color:#fff;font:700 10px/1 sans-serif;padding:5px 7px;border-radius:2px">入荷待ち</span>':'')+'</div><span class="yt-name"></span><span class="yt-price"></span>';
   c.querySelector("img").src=im.getAttribute("src");
   c.querySelector(".yt-name").textContent=nm?nm.textContent.trim():(im.getAttribute("alt")||"");
   c.querySelector(".yt-price").textContent=pr?pr.textContent.trim().split(/\s+/)[0]:"";
   g.appendChild(c);n++;
  }
  if(n){nav.parentNode.insertBefore(sec,nav.nextSibling);}
 }).catch(function(){});
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",run);else run();
}();
