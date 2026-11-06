(function(){
if(window.__ytSearch)return;window.__ytSearch=1;
var L=(window.Shopify&&Shopify.locale)||document.documentElement.lang||'ja';if(/^en/i.test(L))return;
var R=(window.Shopify&&Shopify.routes&&Shopify.routes.root)||'/';
var C={'7216731':'アンダーウェア・タイツ','6267813':'手袋・グローブ','6267814':'帽子','6267815':'腹巻・ネックカバー','middle-outer':'ミドルレイヤー・アウター','6296770':'アクティブインサレーション','6616045':'寒さ対策・保温','6027448':'ベースレイヤー（メリノ）','6027417':'ザック・バッグ','6027423':'サコッシュ・ポーチ','6027418':'財布・ケース','6027415':'スタッフサック','6027416':'ドライバッグ','6027426':'水筒・ボトル','7216829':'マット・パッド','tent':'テント','6027419':'ガイライン・ペグ','6530746':'トレッキングポール','7216858':'クックウェア・食器','6027425':'保温アイテム','7216890':'テーブル','7216875':'行動食・食品','6027687':'ウェアのお手入れ（洗剤）','6267810':'タオル','7216860':'歯ブラシ・バーム','7216863':'エマージェンシーキット','7216861':'キーホルダー・ステッカー','7481185':'扇子','7487521':'指輪','6027456':'ダイニーマ','6027457':'X-Pac','6267817':'ポーラテック','6027459':'メリノウール','6402900':'Ridge Merino','7234547':'Rab'};
var SYN=[
 [['アンダーウェア','アンダー','シタギ','下着','インナー','ボクサー','ブリーフ','ショーツ','トランクス','パンツ'],['アンダーウェア','ボクサー','ブリーフ','ショーツ'],['7216731']],
 [['テブクロ','手袋','グローブ','ミトン'],['グローブ','ミトン'],['6267813']],
 [['ボウシ','帽子','キャップ','ハット','ニットボウ','ニット帽','ビーニー'],['キャップ','ハット','ニット帽','ビーニー','ヘッドバンド','サンシェード'],['6267814']],
 [['ネックウォーマー','ネックゲイター','ネック','腹巻','ハラマキ'],['ネックゲイター','腹巻'],['6267815']],
 [['フリース','ボウカン','防寒','アタタカイ','暖かい','温かい','アウター','ジャケット','ミドルレイヤー','インサレーション'],['フリース','パワーウール','アルファダイレクト','ジャケット','フーディ'],['middle-outer','6296770','6616045']],
 [['ベースレイヤー','肌着','ハダギ','Tシャツ','ティーシャツ','ロンT','ロングスリーブ','長袖','半袖'],['Tシャツ','ティー','ロングスリーブ','スリーブレス','フーディ'],['6027448']],
 [['タイツ','レギンス','ズボン'],['タイツ'],['7216731']],
 [['リュック','バックパック','ザック','カバン','鞄','バッグ'],['ザック','バックパック','トートバッグ'],['6027417']],
 [['サコッシュ','ポーチ','ウエストポーチ','ショルダー'],['サコッシュ','ポーチ','ショルダーポケット'],['6027423']],
 [['サイフ','財布','ウォレット','カードケース','コインケース'],['財布','ウォレット','カードケース'],['6027418']],
 [['スタッフサック','スタッフバッグ','収納袋','巾着','キンチャク'],['スタッフサック','キューブポーチ'],['6027415']],
 [['ドライバッグ','防水','ボウスイ'],['ドライバッグ','防水'],['6027416']],
 [['スイトウ','水筒','ボトル','ペットボトル'],['ボトル'],['6027426']],
 [['マクラ','枕','ピロー'],['ピロー'],['7216829']],
 [['マット','寝袋','シュラフ','ネブクロ','スリーピングパッド'],['マット'],['7216829']],
 [['テント','シェルター','ツェルト'],['テント','シェルター'],['tent']],
 [['ペグ','ガイライン','ロープ','コード','自在','ジザイ'],['ペグ','ガイライン','コード','ラインロック'],['6027419']],
 [['ストック','トレッキングポール','ポール','杖','ツエ'],['ポール'],['6530746']],
 [['クッカー','鍋','ナベ','食器','ショッキ','カトラリー','スプーン','フォーク','コップ','カップ','箸','ハシ'],['カトラリー','スプーン','カップ','ぐい呑み','うつわ','ディッシュ','クッカー'],['7216858']],
 [['コジー','保温','ホオン','保温ケース'],['コジー','保温'],['6027425']],
 [['テーブル','机'],['テーブル'],['7216890']],
 [['行動食','コウドウショク','食品','食べ物','タベモノ','おやつ','オヤツ','コーヒー','カレー'],['行動食','チョコ','味噌','コーヒー','シロップ','カレー'],['7216875']],
 [['洗剤','センザイ','洗濯','センタク','グレートウォッシュ'],['洗剤','Great Wash'],['6027687']],
 [['タオル','手ぬぐい','テヌグイ'],['タオル'],['6267810']],
 [['歯ブラシ','ハブラシ','バーム','リップ'],['歯ブラシ','バーム'],['7216860']],
 [['救急','キュウキュウ','ファーストエイド','エマージェンシー','笛','ホイッスル','ダニ'],['ファーストエイド','ホイッスル','マダニ'],['7216863']],
 [['キーホルダー','カラビナ','ステッカー'],['キーホルダー','カラビナ','ステッカー'],['7216861']],
 [['扇子','センス'],['扇子'],['7481185']],
 [['指輪','ユビワ','リング','アクセサリー'],['リング'],['7487521']],
 [['ダイニーマ','DYNEEMA'],['ダイニーマ'],['6027456']],
 [['エックスパック','XPAC','X-PAC'],['X-PAC'],['6027457']],
 [['ポーラテック','POLARTEC','アルファ'],['POLARTEC','ポーラテック'],['6267817']],
 [['メリノ','MERINO','ウール'],['メリノ','Merino'],['6027459']],
 [['リッジメリノ','RIDGEMERINO','RIDGE'],['Ridge Merino'],['6402900']],
 [['ラブ','RAB'],['Rab'],['7234547']],
 [['サンダル'],['サンダル','Sandal'],[]]
];
function N(s){s=String(s||'').normalize('NFKC').toUpperCase().replace(/[\s・･\/／\-－_（）()「」【】]/g,'');return s.replace(/[ぁ-ゖ]/g,function(c){return String.fromCharCode(c.charCodeAt(0)+96)})}
function kata(s){return String(s).replace(/[ぁ-ゖ]/g,function(c){return String.fromCharCode(c.charCodeAt(0)+96)})}
SYN.forEach(function(r){r[3]=r[0].map(N)});
function expand(q){
  q=String(q||'').trim();var k=N(q);if(!k)return null;var terms=[],cats=[];
  SYN.forEach(function(r){if(r[3].some(function(w){return (k.length>=2&&w.indexOf(k)===0)||k.indexOf(w)>=0})){r[1].forEach(function(t){if(terms.indexOf(t)<0)terms.push(t)});r[2].forEach(function(c){if(cats.indexOf(c)<0)cats.push(c)})}});
  var base=[q];var kq=kata(q);if(kq!==q)base.push(kq);
  if(!terms.length)terms=base;
  var uniq=[];terms.forEach(function(t){if(uniq.indexOf(t)<0)uniq.push(t)});
  return {q:q,query:uniq.length>1?uniq.join(' OR '):uniq[0],cats:cats,changed:uniq.length>1||uniq[0]!==q};
}
window.ytExpand=expand;
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function yen(c){return '¥'+Math.round(c/100).toLocaleString('ja-JP')}
function short(n){return String(n).split(/[（(]/)[0].trim()}
function url(x){var u=R+'search?q='+encodeURIComponent(x.query)+'&type=product&options%5Bprefix%5D=last&options%5Bfields%5D=title%2Cproduct_type%2Cvariants.title%2Cvendor%2Ctag';if(x.changed)u+='&yq='+encodeURIComponent(x.q);return u}
var cache={};
function fetchP(x){var key=x.query;if(cache[key])return cache[key];return cache[key]=fetch(R+'search?q='+encodeURIComponent(x.query)+'&type=product&options%5Bprefix%5D=last&options%5Bfields%5D=title%2Cproduct_type%2Cvariants.title%2Cvendor%2Ctag&view=yt',{credentials:'same-origin'}).then(function(r){return r.text()}).then(function(t){return JSON.parse(t.slice(t.indexOf('{')))}).catch(function(){delete cache[key];return {n:0,p:[]}})}
var st=document.createElement('style');st.textContent='.yt-sg{position:absolute;left:0;right:0;top:100%;margin-top:6px;background:#fff;border:1px solid #e6e1d8;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.12);z-index:1000;max-height:70vh;overflow:auto;text-align:left}.yt-sg a{display:flex;align-items:center;gap:10px;padding:8px 12px;color:#1b1b19;text-decoration:none;font-size:1.3rem;line-height:1.4}.yt-sg a:hover,.yt-sg a.on{background:#F4F0E8}.yt-sg img,.yt-sg i{width:44px;height:44px;object-fit:cover;border-radius:6px;flex:none;background:#f4f0e8}.yt-sg .p{margin-left:auto;font-weight:700;white-space:nowrap}.yt-sg .so{color:#999;font-size:1.1rem;margin-left:6px}.yt-sg .c{font-weight:700}.yt-sg .c:before{content:"カテゴリ";font-size:1rem;background:#1b1b19;color:#fff;border-radius:4px;padding:2px 6px;margin-right:4px;font-weight:700}.yt-sg .all{justify-content:center;font-weight:700;color:#E08A1E;border-top:1px solid #eee}.yt-sg .no{padding:12px;font-size:1.3rem;color:#6b665e}predictive-search .predictive-search{display:none!important}';document.head.appendChild(st);
function attach(inp){
  if(inp.getAttribute('data-ytsg'))return;inp.setAttribute('data-ytsg','1');inp.setAttribute('autocomplete','off');
  var f=inp.form;if(!f)return;var box=document.createElement('div');box.className='yt-sg';box.style.display='none';
  var wrap=inp.closest('.field')||f;if(getComputedStyle(wrap).position==='static')wrap.style.position='relative';wrap.appendChild(box);
  var tm,seq=0;
  function render(){var x=expand(inp.value);if(!x){box.style.display='none';return}var my=++seq;
    fetchP(x).then(function(j){if(my!==seq)return;var h=x.cats.slice(0,3).map(function(c){return '<a class="c" href="'+R+'collections/'+c+'">'+esc(C[c]||c)+'</a>'}).join('');
      var ps=(j.p||[]).slice().sort(function(a,b){return (b.a?1:0)-(a.a?1:0)});
      h+=ps.slice(0,6).map(function(p){return '<a href="'+esc(p.u)+'">'+(p.i?'<img src="'+esc(p.i)+'" alt="" loading="lazy">':'<i></i>')+'<span>'+esc(short(p.t))+(p.a?'':'<span class="so">売り切れ</span>')+'</span><span class="p">'+yen(p.p)+'</span></a>'}).join('');
      if(j.n)h+='<a class="all" href="'+url(x)+'">「'+esc(x.q)+'」の商品をすべて見る（'+j.n+'件）</a>';
      if(!h)h='<div class="no">見つかりませんでした。別のことばで試してみてください。</div>';
      box.innerHTML=h;box.style.display='block'})}
  inp.addEventListener('input',function(){clearTimeout(tm);if(!inp.value.trim()){box.style.display='none';return}tm=setTimeout(render,180)});
  inp.addEventListener('focus',function(){if(inp.value.trim())render()});
  document.addEventListener('click',function(e){if(!wrap.contains(e.target))box.style.display='none'});
  f.addEventListener('submit',function(e){var x=expand(inp.value);if(!x||!x.changed)return;e.preventDefault();e.stopImmediatePropagation();location.href=url(x)},true);
}
function scan(){document.querySelectorAll('form[action*="/search"] input[name="q"]').forEach(attach)}
function serp(){
  if(!/\/search\/?$/.test(location.pathname))return;var sp=new URLSearchParams(location.search),yq=sp.get('yq'),q=sp.get('q');if(!yq||!q)return;
  document.querySelectorAll('input[name="q"]').forEach(function(i){i.value=yq});
  var w=document.createTreeWalker(document.querySelector('main')||document.body,NodeFilter.SHOW_TEXT);var n;while(n=w.nextNode()){if(n.nodeValue.indexOf(q)>=0)n.nodeValue=n.nodeValue.split(q).join(yq)}
  document.title=document.title.split(q).join(yq);
}
function init(){scan();serp();var mt;new MutationObserver(function(){clearTimeout(mt);mt=setTimeout(scan,300)}).observe(document.body,{childList:true,subtree:true})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
