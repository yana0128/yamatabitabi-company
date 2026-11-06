(function(){
var SYN=[
 [['アンダーウェア','アンダー','シタギ','下着','インナー','ボクサー','ブリーフ','ショーツ','トランクス'],['アンダーウェア','ボクサー','ブリーフ','ショーツ'],['7216731']],
 [['テブクロ','手袋','グローブ','ミトン'],['グローブ','ミトン','手袋'],['6267813']],
 [['ボウシ','帽子','キャップ','ハット','ニットボウ','ニット帽','ビーニー'],['キャップ','ハット','ニット帽','ビーニー','ヘッドバンド','サンシェード'],['6267814']],
 [['ネックウォーマー','ネックゲイター','ネック','腹巻','ハラマキ'],['ネックゲイター','腹巻'],['6267815']],
 [['フリース','ボウカン','防寒','アタタカイ','暖かい','温かい','アウター','ジャケット','ミドルレイヤー','インサレーション'],['フリース','パワーウール','アルファダイレクト','ジャケット','フーディ'],['7507875','6296770','6616045']],
 [['ベースレイヤー','肌着','ハダギ','Tシャツ','ティーシャツ','ロンT','ロングスリーブ','長袖','半袖'],['Tシャツ','ティー','ロングスリーブ','スリーブレス','フーディ'],['6027448']],
 [['タイツ','レギンス','ズボン','パンツ'],['タイツ'],['7216731']],
 [['リュック','バックパック','ザック','カバン','鞄','バッグ'],['ザック','Rab/','ULA','story','トートバッグ'],['6027417']],
 [['サコッシュ','ポーチ','ウエストポーチ','ショルダー'],['サコッシュ','ポーチ','ショルダーポケット'],['6027423']],
 [['サイフ','財布','ウォレット','カードケース','コインケース'],['財布','ウォレット','カードケース'],['6027418']],
 [['スタッフサック','スタッフバッグ','収納袋','巾着','キンチャク'],['スタッフサック','キューブポーチ'],['6027415']],
 [['ドライバッグ','防水','ボウスイ'],['ドライバッグ','防水'],['6027416']],
 [['スイトウ','水筒','ボトル','ペットボトル'],['ボトル','キャップ'],['6027426']],
 [['マクラ','枕','ピロー'],['ピロー'],['7216832']],
 [['マット','寝袋','シュラフ','ネブクロ','スリーピングパッド'],['マット'],['7216831']],
 [['テント','シェルター','ツェルト'],['テント','Air Float','シェルター'],['7343252']],
 [['ペグ','ガイライン','ロープ','コード','自在','ジザイ'],['ペグ','ガイライン','コード','ラインロック'],['6027419']],
 [['ストック','トレッキングポール','ポール','杖','ツエ'],['ポール'],['6530746']],
 [['クッカー','鍋','ナベ','食器','ショッキ','カトラリー','スプーン','フォーク','コップ','カップ','箸','ハシ'],['カトラリー','スプーン','カップ','ぐい呑み','うつわ','ディッシュ','クッカー'],['7216858']],
 [['コジー','保温','ホオン','保温ケース'],['コジー','保温'],['6027425']],
 [['テーブル','机'],['テーブル'],['7216890']],
 [['行動食','コウドウショク','食品','食べ物','タベモノ','おやつ','オヤツ','コーヒー','カレー'],['行動食','チョコ','うめラル','味噌','コーヒー','シロップ','カレー','飯'],['7216875']],
 [['洗剤','センザイ','洗濯','センタク','グレートウォッシュ'],['洗剤','Great Wash'],['6027687']],
 [['タオル','手ぬぐい','テヌグイ'],['タオル'],['6267810']],
 [['歯ブラシ','ハブラシ','バーム','リップ'],['歯ブラシ','バーム'],['7216860']],
 [['救急','キュウキュウ','ファーストエイド','エマージェンシー','笛','ホイッスル','ダニ'],['ファーストエイド','ホイッスル','マダニ'],['7216863']],
 [['キーホルダー','カラビナ','ステッカー'],['キーホルダー','カラビナ','ステッカー'],['7216861']],
 [['扇子','センス'],['扇子'],['7481185']],
 [['指輪','ユビワ','リング','アクセサリー'],['表銀座'],['7487521']],
 [['ダイニーマ','DYNEEMA'],['ダイニーマ'],['6027456']],
 [['エックスパック','XPAC','X-PAC'],['X-PAC'],['6027457']],
 [['ポーラテック','POLARTEC','アルファ'],['POLARTEC','ポーラテック'],['6267817']],
 [['メリノ','MERINO','ウール'],['メリノ','Merino'],['6027459']],
 [['リッジメリノ','RIDGEMERINO','RIDGE'],['Ridge Merino'],['6402900']],
 [['サンダル'],['Sandal','サンダル'],[]]
];
function N(s){s=String(s||'').normalize('NFKC').toUpperCase().replace(/[\s・･\/／\-－_（）()「」【】]/g,'');return s.replace(/[ぁ-ゖ]/g,function(c){return String.fromCharCode(c.charCodeAt(0)+96)})}
SYN.forEach(function(r){r[0]=r[0].map(N);r[1]=r[1].map(N)});
function catalog(){try{var c=JSON.parse(localStorage.getItem('yt_catalog_v1')||'null');return c&&c.items||null}catch(e){return null}}
function loadCat(){
  var b=window.base||{};var u=b.loadItemsPageURL||'/load_items/',p=b.loadItemsPageURLParams||'/my_theme_72416/0';var ps=[];for(var i=1;i<=15;i++)ps.push(fetch(u+i+p,{credentials:'same-origin'}).then(function(r){return r.ok?r.text():''}).catch(function(){return ''}));
  return Promise.all(ps).then(function(ts){var seen={},out=[];ts.forEach(function(t){if(!t)return;var d=new DOMParser().parseFromString(t,'text/html');d.querySelectorAll('.item-list-item').forEach(function(el){var a=el.querySelector('a[href*="/items/"]');if(!a)return;var m=a.getAttribute('href').match(/items\/(\d+)/);if(!m||seen[m[1]])return;seen[m[1]]=1;var img=el.querySelector('img');var pr=(el.querySelector('.price')||{}).textContent||'';out.push({id:m[1],name:((el.querySelector('.name')||{}).textContent||'').trim(),price:+(pr.replace(/[^0-9]/g,''))||0,img:img?(img.getAttribute('src')||img.getAttribute('data-src')||''):'',soldout:!!el.querySelector('.soldout')})})});
    if(out.length>=50){try{localStorage.setItem('yt_catalog_v1',JSON.stringify({t:Date.now(),items:out}))}catch(e){}}return out});
}
function catName(id){var B=window.__YTBC;var n=B&&B.N&&B.N[id];return n?String(n[0]).replace(/^[A-Za-z][A-Za-z\- ]*-/,''):''}
function find(q){
  var k=N(q);if(!k)return null;
  var terms=[k],cats=[];
  SYN.forEach(function(r){if(r[0].some(function(w){return w.indexOf(k)===0||k.indexOf(w)>=0})){terms=terms.concat(r[1]);r[2].forEach(function(c){if(cats.indexOf(c)<0)cats.push(c)})}});
  var items=catalog()||[];var M=(window.__YTBC&&window.__YTBC.M)||{};var inCat={};cats.forEach(function(c){(M[c]||[]).forEach(function(id){inCat[id]=1})});
  var res=[];items.forEach(function(it){if(it.soldout)return;var nm=N(it.name),s=0;terms.forEach(function(t,i){if(t&&nm.indexOf(t)>=0)s+=(i===0?3:1)});if(inCat[it.id])s+=1;if(s>0)res.push([s,it])});
  res.sort(function(a,b){return b[0]-a[0]});
  return {cats:cats.filter(function(c){return catName(c)}),items:res.map(function(r){return r[1]})};
}
window.ytFind=find;
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function yen(n){return '¥'+Number(n).toLocaleString('ja-JP')}
function short(n){return String(n).split(/[（(]/)[0].trim()}
var css='.yt-sg{ position:absolute;left:0;right:0;top:100%;margin-top:6px;background:#fff;border:1px solid #e6e1d8;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.12);z-index:9999;max-height:70vh;overflow:auto;text-align:left}'
+'.yt-sg a{ display:flex;align-items:center;gap:10px;padding:8px 12px;color:#1b1b19!important;text-decoration:none!important;font-size:13px;line-height:1.4}.yt-sg a:hover,.yt-sg a.on{ background:#F4F0E8}'
+'.yt-sg img{ width:44px;height:44px;object-fit:cover;border-radius:6px;flex:none;background:#f4f0e8}.yt-sg .p{ margin-left:auto;font-weight:700;white-space:nowrap}'
+'.yt-sg .c{ font-weight:700}.yt-sg .c:before{ content:"カテゴリ";font-size:10px;background:#1b1b19;color:#fff;border-radius:4px;padding:2px 6px;margin-right:4px}.yt-sg .all{ justify-content:center;font-weight:700;color:#E08A1E!important;border-top:1px solid #eee}'
+'.yt-sg .no{ padding:12px;font-size:13px;color:#6b665e}.yt-q{ position:relative}';
function attach(inp){
  if(inp.getAttribute('data-ytsg'))return;inp.setAttribute('data-ytsg','1');inp.setAttribute('autocomplete','off');
  var f=inp.form;var box=document.createElement('div');box.className='yt-sg';box.style.display='none';
  var wrap=f||inp.parentNode;if(getComputedStyle(wrap).position==='static')wrap.style.position='relative';wrap.appendChild(box);
  function render(){var q=inp.value.trim();if(!q){box.style.display='none';return}var r=find(q);if(!r){box.style.display='none';return}
    var h=r.cats.slice(0,3).map(function(c){return '<a class="c" href="/categories/'+c+'">'+esc(catName(c))+'</a>'}).join('');
    h+=r.items.slice(0,8).map(function(it){return '<a href="/items/'+it.id+'"><img src="'+esc(it.img)+'" alt="" loading="lazy"><span>'+esc(short(it.name))+'</span><span class="p">'+yen(it.price)+'</span></a>'}).join('');
    if(r.items.length)h+='<a class="all" href="/search?q='+encodeURIComponent(q)+'">「'+esc(q)+'」の商品をすべて見る（'+r.items.length+'件）</a>';
    if(!h)h='<div class="no">見つかりませんでした。別のことばで試してみてください。</div>';
    box.innerHTML=h;box.style.display='block'}
  inp.addEventListener('input',render);inp.addEventListener('focus',render);
  document.addEventListener('click',function(e){if(!wrap.contains(e.target))box.style.display='none'});
}
function serp(){
  if(!/^\/search/.test(location.pathname))return;var q=new URLSearchParams(location.search).get('q');if(!q)return;
  var r=find(q);if(!r)return;var list=document.querySelector('.item-list');
  var base=list?list.querySelectorAll('.item-list-item').length:0;
  if(r.items.length<=base&&r.cats.length===0)return;
  var wrap=document.querySelector('.item-list-wrap')||(list&&list.parentNode);
  if(!list&&r.items.length){var empty=[].slice.call(document.querySelectorAll('.item-list-area *')).filter(function(e){return !e.children.length&&/商品がありません/.test(e.textContent)})[0];var host=document.querySelector('.item-list-area')||document.querySelector('.main');if(!host)return;wrap=document.createElement('div');wrap.className='item-list-wrap';list=document.createElement('div');list.className='item-list';wrap.appendChild(list);if(empty){var bx=empty;while(bx.parentElement&&bx.parentElement!==host)bx=bx.parentElement;bx.style.display='none';host.insertBefore(wrap,bx)}else host.appendChild(wrap)}
  if(!wrap)return;
  var have={};if(list)list.querySelectorAll('.item-list-item a[href*="/items/"]').forEach(function(a){var m=a.getAttribute('href').match(/items\/(\d+)/);if(m)have[m[1]]=1});
  var extra=r.items.filter(function(it){return !have[it.id]});
  if(base===0&&list){list.innerHTML=''}
  if(r.cats.length){var cn=document.createElement('div');cn.className='yt-serp-cats';cn.style.cssText='display:flex;flex-wrap:wrap;gap:8px;margin:0 0 18px';cn.innerHTML=r.cats.map(function(c){return '<a href="/categories/'+c+'" style="display:block;background:#F4F0E8;border-radius:999px;padding:8px 14px;font-size:13px;font-weight:700;color:#1b1b19;text-decoration:none">'+esc(catName(c))+'を見る ›</a>'}).join('');wrap.parentNode.insertBefore(cn,wrap)}
  if(!extra.length||!list)return;
  list.insertAdjacentHTML('beforeend',extra.map(function(it){return '<div class="item-list-item"><div class="image"><a href="/items/'+it.id+'"><img src="'+esc(it.img)+'" alt="'+esc(short(it.name))+'" loading="lazy"></a></div><div class="text"><a href="/items/'+it.id+'"><div class="name">'+esc(it.name)+'</div><div class="price"><span class="default">'+yen(it.price)+'</span></div></a></div></div>'}).join(''));
  var none=document.querySelector('.item-list-area .noitem, .no-item, .item-list-empty');if(none)none.style.display='none';
}
function go(){
  var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
  var n=0;(function w(){if(catalog()){document.querySelectorAll('input[name="q"]').forEach(attach);serp()}else if(++n>8){loadCat().then(function(){document.querySelectorAll('input[name="q"]').forEach(attach);serp()})}else setTimeout(w,250)})();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
})();
