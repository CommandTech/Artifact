const ARTICLES = [
      { id: 'a1', title: 'Miracle Berry Cures All Ailments in 3 Days', excerpt: 'A sweeping claim with no clinical citations and stock imagery of laboratory glassware.', author: 'Staff', date: '2025-08-12', category: 'health', flags: ['sensational','no-sources','stock-photos'], hero: '', content: `<p><em>Replace this with your article content. Use headings, lists, images, pull quotes—whatever suits the story.</em></p>
          <h2>Subheading example</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices neque in mauris suscipit, at auctor arcu luctus. Integer a ornare justo. Cras at velit vitae nunc sodales pulvinar.</p>
          <blockquote>“A pull quote can highlight a claim that deserves scrutiny.”</blockquote>
          <p>Curabitur vitae finibus lacus. Quisque dignissim, sapien ut consequat fermentum, risus nibh gravida diam, eget lobortis sem turpis quis nunc.</p>` },
      { id: 'a2', title: 'Exclusive: Tech Giant Secretly Controls the Internet', excerpt: 'Anonymous “insider” quotes with no specifics and unverifiable screenshots.', author: 'Contributor', date: '2025-07-05', category: 'tech', flags: ['anonymous-source','sweeping-claim'], hero: '', content: '<p>…</p>' },
      { id: 'a3', title: 'New Study Proves Coffee Causes Everything', excerpt: 'Correlation presented as causation; lack of link to the actual study; cherry-picked subgroup.', author: 'Health Desk', date: '2025-06-03', category: 'science', flags: ['correlation-vs-causation','cherry-picked'], hero: '', content: '<p>…</p>' },
      { id: 'a4', title: 'This $7 Stock Will 100x by Friday', excerpt: 'Promotional tone, affiliate links buried, and graphics implying guarantees.', author: 'Finance Tips', date: '2025-04-22', category: 'finance', flags: ['promotional','guaranteed-returns','undisclosed-coi'], hero: '', content: '<p>…</p>' },
      { id: 'a5', title: 'BREAKING: Secret Ballots Found in River', excerpt: 'Ambiguous location, recycled old photos, and no official statements cited.', author: 'News Wire', date: '2024-11-04', category: 'politics', flags: ['old-photos','no-official-source'], hero: '', content: '<p>…</p>' },
      { id: 'a6', title: 'Scientists Baffled by Perpetual Motion Gadget', excerpt: 'Contradicts known physics without peer review or reproducible demo.', author: 'Science Now', date: '2025-01-08', category: 'science', flags: ['violates-physics','no-peer-review'], hero: '', content: '<p>…</p>' },
      { id: 'a7', title: 'Crypto Scheme Promises Risk-Free 30% Weekly', excerpt: 'Guaranteed returns, unnamed auditors, and a roadmap with no details.', author: 'Sponsored', date: '2025-03-14', category: 'finance', flags: ['guaranteed-returns','sponsored'], hero: '', content: '<p>…</p>' },
      { id: 'a8', title: 'Tech CEO Says AI Replaced Entire Company Overnight', excerpt: 'Lack of corroborating reports; photo from years ago; no names or filings.', author: 'Contributor', date: '2025-08-30', category: 'tech', flags: ['no-corroboration','old-photos'], hero: '', content: '<p>…</p>' },
      { id: 'a9', title: 'Ancient Herb Eliminates Debt and Stress', excerpt: 'Conflates financial advice and wellness; single testimonial as “proof.”', author: 'Staff', date: '2025-02-09', category: 'health', flags: ['testimonial-only','category-conflation'], hero: '', content: '<p>…</p>' },
      { id: 'a10', title: 'Leaked Memo: Scientists Admit Climate Hoax', excerpt: 'No document link, low-res screenshot, and outlets with history of retractions.', author: 'Wire', date: '2024-12-01', category: 'politics', flags: ['no-document','low-res'], hero: '', content: '<p>…</p>' },
    ];

    // Populates the "Trending Searches" list
    const TRENDING = [
      'miracle cure',
      'guaranteed returns',
      'anonymous source',
      'no peer review',
      'out-of-context quote',
      'old photo reused',
      'one-source story',
      'broken link',
      'sensational headline',
      'conflict of interest'
    ];

    let state = { q: '', filter: 'all' };

    const $ = sel => document.querySelector(sel);
    const $$ = sel => Array.from(document.querySelectorAll(sel));
    const fmtDate = d => new Date(d).toLocaleDateString(undefined, {year:'numeric', month:'short', day:'2-digit'});

    function matches(a){
      const inFilter = state.filter==='all' || a.category===state.filter;
      const q = state.q.trim().toLowerCase();
      const hay = [a.title, a.excerpt, a.category, (a.flags||[]).join(' ')].join(' ').toLowerCase();
      const inSearch = !q || hay.includes(q);
      return inFilter && inSearch;
    }

    function renderCards(){
      const list = ARTICLES.filter(matches);
      const cards = list.map(a=> cardTemplate(a)).join('');
      $('#cards').innerHTML = cards || `<div class="card" style="padding:20px">No results. Try clearing filters.</div>`;
    }

    function cardTemplate(a){
      const flagBadges = (a.flags||[]).slice(0,3).map(f=>`<span class="flag ${f.includes('guaranteed')||f.includes('violates')||f.includes('no-')?'danger':'warning'}" title="${f}">${f.replace(/-/g,' ')}</span>`).join('');
      return `
        <article class="card" data-id="${a.id}" data-category="${a.category}">
          <div class="thumb">
            <div class="flag-badge">${flagBadges}</div>
          </div>
          <div class="body">
            <div class="meta">${fmtDate(a.date)} • ${a.author} • <span class="pill">${a.category}</span></div>
            <a class="title" href="#${a.id}">${a.title}</a>
            <p class="excerpt">${a.excerpt}</p>
          </div>
        </article>`
    }

    function renderTrending(){
      $('#trendingList').innerHTML = TRENDING.map(t=>`<li><button class="chip" data-trend="${t}">${t}</button></li>`).join('');
    }

    function showFeed(){
      $('#feed').classList.remove('hidden');
      $('#article').classList.remove('active');
      renderCards();
      window.scrollTo({top:0, behavior:'smooth'});
    }

    function showArticle(id){
      const a = ARTICLES.find(x=>x.id===id);
      if(!a){ showFeed(); return; }
      $('#article-title').textContent = a.title;
      $('#article-author').textContent = a.author;
      $('#article-date').textContent = fmtDate(a.date);
      $('#article-category').textContent = a.category;
      $('#article-content').innerHTML = a.content;
      $('#feed').classList.add('hidden');
      $('#article').classList.add('active');
      window.scrollTo({top:0, behavior:'smooth'});
    }

    function routeFromHash(){
      const id = location.hash.replace('#','');
      if(id) showArticle(id); else showFeed();
    }

    document.addEventListener('click', (e)=>{
      const chip = e.target.closest('.chip');
      if(chip && chip.dataset.filter){
        $$('.chips .chip').forEach(c=>c.classList.toggle('active', c===chip));
        state.filter = chip.dataset.filter; renderCards();
      }
      if(chip && chip.dataset.trend){
        state.q = chip.dataset.trend; $('#search').value = state.q; renderCards();
      }
      if(e.target.id==='backToFeed'){ e.preventDefault(); history.replaceState(null,'',location.pathname); showFeed(); }
      if(e.target.id==='btn-guide'){
        $('#guideModal').classList.add('open'); 
        document.body.classList.add('modal-open');
      }
      if(e.target.id==='closeGuide'){
        $('#guideModal').classList.remove('open');
        document.body.classList.remove('modal-open');
      }
    });

    // Close modal on escape
    document.addEventListener('keydown', (e)=>{
      if(e.key==='Escape'){
        $('#guideModal').classList.remove('open');
        document.body.classList.remove('modal-open');
      }
    });

    document.addEventListener('input', (e)=>{
      if(e.target.id==='search'){ state.q = e.target.value; renderCards(); }
    });

    // Close modal on outside click
    $('#guideModal').addEventListener('click', (e)=>{
      if(e.target.id==='guideModal'){
        e.currentTarget.classList.remove('open');
        document.body.classList.remove('modal-open');
      }
    });

    (function init(){
      renderTrending();
      renderCards();
      window.addEventListener('hashchange', routeFromHash);
      routeFromHash();
    })();