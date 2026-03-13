/* ============================================
   MN-TEXTILES — script.js
   Catalogue, Panier, Wave, WhatsApp
   ============================================ */

/* ══ CATALOGUE PRODUITS ══ */
const PRODUITS = [
  // ── VOILE FLEURETTE ──
  { id: 1, nom: "Voile Fleurette Rose", cat: "Voile Fleurette", prix: 4500, old: 6000, badge: "Promo", bc: "b-promo", e: 5, av: 84, img: "imagesboutique/voile-01.jpg", desc: "Voile fleurette délicat aux motifs floraux roses. Tissu léger et aérien, idéal pour robes et tenues estivales.", tags: ["Léger", "Floral", "Été", "Féminin"] },
  { id: 2, nom: "Voile Fleurette Multicolore", cat: "Voile Fleurette", prix: 4200, old: null, badge: "Populaire", bc: "b-pop", e: 4, av: 62, img: "imagesboutique/voile-02.jpg", desc: "Voile fleurette aux teintes douces et colorées. Parfait pour les tenues de journée et les robes légères.", tags: ["Coloré", "Léger", "Journée", "Doux"] },
  { id: 3, nom: "Voile Fleurette Pastel", cat: "Voile Fleurette", prix: 4800, old: 5500, badge: "Promo", bc: "b-promo", e: 5, av: 51, img: "imagesboutique/voile-03.jpg", desc: "Voile fleurette aux teintes pastel délicates. Tissu fin et élégant pour des créations raffinées.", tags: ["Pastel", "Délicat", "Élégant", "Fin"] },
  { id: 4, nom: "Voile Fleurette Blanc", cat: "Voile Fleurette", prix: 4000, old: null, badge: "Nouveau", bc: "b-new", e: 4, av: 38, img: "imagesboutique/voile-04.jpg", desc: "Voile fleurette blanc pur, idéal pour les tenues de cérémonie et les robes traditionnelles.", tags: ["Blanc", "Cérémonie", "Mariage", "Pur"] },
  { id: 5, nom: "Voile Fleurette Printemps", cat: "Voile Fleurette", prix: 4300, old: 5000, badge: "Promo", bc: "b-promo", e: 4, av: 29, img: "imagesboutique/voile-05.jpg", desc: "Belle collection voile fleurette à motifs fins. Convient pour robes, jupes et tenues légères.", tags: ["Fin", "Motifs", "Robes", "Légèreté"] },
  { id: 6, nom: "Voile Fleurette Élégance", cat: "Voile Fleurette", prix: 4600, old: null, badge: "Nouveau", bc: "b-new", e: 5, av: 44, img: "imagesboutique/voile-06.jpg", desc: "Voile fleurette de haute qualité avec des motifs floraux élégants. Idéal pour les créations de couture raffinées.", tags: ["Qualité", "Floral", "Couture", "Élégance"] },
  { id: 7, nom: "Voile Fleurette Tendance", cat: "Voile Fleurette", prix: 4100, old: 4800, badge: "Promo", bc: "b-promo", e: 4, av: 33, img: "imagesboutique/voile-07.jpg", desc: "Voile fleurette aux couleurs tendance. Parfait pour vos créations de mode contemporaine.", tags: ["Tendance", "Mode", "Créatif", "Léger"] },
  { id: 8, nom: "Voile Fleurette Douceur", cat: "Voile Fleurette", prix: 4700, old: null, badge: "Populaire", bc: "b-pop", e: 5, av: 57, img: "imagesboutique/voile-08.jpg", desc: "Collection voile fleurette très prisée. Tissu doux au toucher, motifs délicats.", tags: ["Doux", "Délicat", "Prisé", "Féminin"] },
  { id: 9, nom: "Voile Fleurette Premium", cat: "Voile Fleurette", prix: 5500, old: 7000, badge: "Promo", bc: "b-promo", e: 5, av: 76, img: "imagesboutique/voile-09.jpg", desc: "Voile fleurette premium, notre meilleure qualité. Motifs floraux fins sur tissu soyeux et léger.", tags: ["Premium", "Soyeux", "Fin", "Exclusif"] },

  // ── BRODERIE ──
  { id: 10, nom: "Tissu Brodé Élégance", cat: "Broderie", prix: 12000, old: 15000, badge: "Promo", bc: "b-promo", e: 5, av: 93, img: "imagesboutique/broder-01.jpg", desc: "Tissu brodé d'une élégance rare, avec des broderies fines et précises. Idéal pour les tenues de cérémonie.", tags: ["Brodé", "Élégant", "Cérémonie", "Luxe"] },
  { id: 11, nom: "Tissu Brodé Floral", cat: "Broderie", prix: 13500, old: null, badge: "Populaire", bc: "b-pop", e: 5, av: 78, img: "imagesboutique/broder-02.jpg", desc: "Magnifique tissu brodé aux motifs floraux travaillés. Chaque broderie est unique, une véritable œuvre d'art textile.", tags: ["Floral", "Fait main", "Unique", "Art"] },
  { id: 12, nom: "Tissu Brodé Doré", cat: "Broderie", prix: 16000, old: 19000, badge: "Luxe", bc: "b-pop", e: 5, av: 65, img: "imagesboutique/broder-03.jpg", desc: "Tissu brodé avec des fils dorés luxueux. La référence pour les tenues de mariage et les grandes fêtes.", tags: ["Doré", "Mariage", "Somptueux", "Prestige"] },
  { id: 13, nom: "Tissu Brodé Moderne", cat: "Broderie", prix: 11500, old: 13000, badge: "Nouveau", bc: "b-new", e: 4, av: 42, img: "imagesboutique/broder-04.jpg", desc: "Tissu brodé aux motifs contemporains, mêlant tradition et modernité. Pour une femme élégante et tendance.", tags: ["Moderne", "Contemporain", "Tendance", "Élégant"] },

  // ── WAX ──
  { id: 14, nom: "Wax Africain Premium", cat: "Wax", prix: 8500, old: 11000, badge: "Promo", bc: "b-promo", e: 5, av: 128, img: "imagesboutique/wax-01.jpg", desc: "Tissu wax africain authentique avec des motifs géométriques colorés. Couleurs vives et résistantes. 100% coton.", tags: ["100% coton", "Authentique", "Coloré", "Résistant"] },
  { id: 15, nom: "Wax Imprimé Multicolore", cat: "Wax", prix: 9000, old: null, badge: "Populaire", bc: "b-pop", e: 5, av: 114, img: "imagesboutique/wax-02.jpg", desc: "Wax multicolore aux motifs africains traditionnels. Un classique pour les boubous, robes et tenues traditionnelles.", tags: ["Multicolore", "Traditionnel", "Boubou", "Classique"] },
  { id: 16, nom: "Wax Collection Exclusive", cat: "Wax", prix: 10500, old: 13000, badge: "Exclusif", bc: "b-pop", e: 5, av: 96, img: "imagesboutique/wax-03.jpg", desc: "Collection wax exclusive en quantité limitée. Motifs originaux créés spécialement pour MN-Textiles.", tags: ["Exclusif", "Limité", "Original", "MN-Textiles"] },
  { id: 17, nom: "Wax Hollandais Original", cat: "Wax", prix: 13500, old: 16000, badge: "Promo", bc: "b-promo", e: 5, av: 88, img: "imagesboutique/wax-04.jpg", desc: "Le wax hollandais, le plus prisé d'Afrique. Impression haute qualité, couleurs brillantes et durables.", tags: ["Hollandais", "Premium", "Brillant", "Référence"] },

  // ── COTON HOMME ──
  { id: 18, nom: "Coton Homme Bazin", cat: "Coton Homme", prix: 7500, old: 9000, badge: "Promo", bc: "b-promo", e: 5, av: 72, img: "imagesboutique/coton-01.jpg", desc: "Tissu coton pour homme, style bazin léger. Parfait pour les boubous masculins et tenues traditionnelles.", tags: ["Homme", "Bazin", "Cérémonie", "Traditionnel"] },
  { id: 19, nom: "Coton Homme Élégance", cat: "Coton Homme", prix: 8000, old: null, badge: "Nouveau", bc: "b-new", e: 4, av: 45, img: "imagesboutique/coton-02.jpg", desc: "Tissu coton élégant pour homme, idéal pour les djellabas et tenues formelles. Respirant et confortable.", tags: ["Respirant", "Djellaba", "Formel", "Confort"] },
  { id: 20, nom: "Coton Homme Premium", cat: "Coton Homme", prix: 9500, old: 12000, badge: "Promo", bc: "b-promo", e: 5, av: 58, img: "imagesboutique/coton-03.jpg", desc: "Notre meilleure qualité de coton pour homme. Tissu noble et résistant pour des créations masculines haut de gamme.", tags: ["Premium", "Noble", "Haut de gamme", "Résistant"] },
];

/* ══ UTILITAIRES ══ */
const fmt = n => n.toLocaleString('fr-FR') + ' FCFA';
const stars = (n, av) => '★'.repeat(n) + '☆'.repeat(5 - n) + `<span>(${av} avis)</span>`;

function showToast(msg, ic = '✅') {
  const t = document.getElementById('toast');
  if (!t) return;
  t.innerHTML = `<span style="font-size:1.1rem">${ic}</span><span>${msg}</span>`;
  t.classList.add('show');
  clearTimeout(t._tid);
  t._tid = setTimeout(() => t.classList.remove('show'), 3200);
}

/* ══ PANIER — localStorage ══ */
function getPanier() {
  try { return JSON.parse(localStorage.getItem('mn_cart') || '[]'); }
  catch (e) { return []; }
}
function savePanier(cart) {
  localStorage.setItem('mn_cart', JSON.stringify(cart));
  updateAllBadges();
}
function updateAllBadges() {
  const n = getPanier().reduce((s, i) => s + i.q, 0);
  document.querySelectorAll('.cart-badge').forEach(b => {
    b.textContent = n;
    b.classList.toggle('show', n > 0);
  });
}

function ajouterAuPanier(id, btn) {
  const p = PRODUITS.find(x => x.id === id);
  if (!p) return;
  let cart = getPanier();
  const idx = cart.findIndex(i => i.id === id);
  if (idx >= 0) cart[idx].q++;
  else cart.push({ id: p.id, nom: p.nom, cat: p.cat, prix: p.prix, img: p.img, q: 1 });
  savePanier(cart);
  showToast(`${p.nom} ajouté !`, '🛍️');
  if (btn) {
    const orig = btn.innerHTML;
    btn.classList.add('added');
    btn.innerHTML = '<i class="fas fa-check"></i> Ajouté !';
    setTimeout(() => { btn.classList.remove('added'); btn.innerHTML = orig; }, 1400);
  }
}

function supprimerProduit(id) {
  savePanier(getPanier().filter(i => i.id !== id));
  afficherPanier();
  showToast('Produit retiré', '🗑️');
}

function modifierQte(id, d) {
  let cart = getPanier();
  const idx = cart.findIndex(i => i.id === id);
  if (idx < 0) return;
  cart[idx].q += d;
  if (cart[idx].q <= 0) { cart.splice(idx, 1); showToast('Produit retiré', '🗑️'); }
  savePanier(cart);
  afficherPanier();
}

function viderPanier() {
  if (!confirm('Vider tout le panier ?')) return;
  savePanier([]);
  afficherPanier();
  showToast('Panier vidé', '🗑️');
}

function calcTotal() {
  const cart = getPanier();
  const sousTotal = cart.reduce((s, i) => s + i.prix * i.q, 0);
  const livraison = sousTotal > 0 ? 1500 : 0;
  return { sousTotal, livraison, total: sousTotal + livraison, nb: cart.reduce((s, i) => s + i.q, 0) };
}

/* ══ AFFICHER PANIER ══ */
function afficherPanier() {
  const elItems = document.getElementById('cart-items-container');
  const elSum = document.getElementById('order-summary-content');
  if (!elItems) return;

  const cart = getPanier();
  if (!cart.length) {
    elItems.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-shopping-bag"></i>
        <h3>Votre panier est vide</h3>
        <p>Découvrez nos tissus et ajoutez vos favoris.</p>
        <a href="boutique.html" class="btn-gold"><i class="fas fa-store"></i> Voir la boutique</a>
      </div>`;
    if (elSum) elSum.innerHTML = '';
    return;
  }

  elItems.innerHTML = cart.map(i => `
    <div class="cart-item">
      <img class="cart-item-img" src="${i.img}" alt="${i.nom}" onerror="this.src='imagesboutique/voile-01.jpg'">
      <div>
        <div class="cart-item-cat">${i.cat}</div>
        <h4>${i.nom}</h4>
        <div class="cart-item-price">${fmt(i.prix * i.q)}</div>
      </div>
      <div class="cart-item-actions">
        <div class="qty-controls">
          <button class="qty-btn" onclick="modifierQte(${i.id}, -1)">−</button>
          <div class="qty-value">${i.q}</div>
          <button class="qty-btn" onclick="modifierQte(${i.id}, 1)">+</button>
        </div>
        <button class="delete-btn" onclick="supprimerProduit(${i.id})"><i class="fas fa-trash"></i></button>
      </div>
    </div>`).join('');

  const { sousTotal, livraison, total, nb } = calcTotal();
  if (elSum) elSum.innerHTML = `
    <div class="summary-line"><span>Articles (${nb})</span><span>${fmt(sousTotal)}</span></div>
    <div class="summary-line"><span>Livraison</span><span>${livraison > 0 ? fmt(livraison) : 'Gratuite'}</span></div>
    <div class="summary-line total"><span>Total</span><span class="amount">${fmt(total)}</span></div>`;
}

/* ══ WAVE ══ */
function initWave() {
  const btn = document.getElementById('wave-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    if (!getPanier().length) { showToast('Panier vide !', '⚠️'); return; }
    const { total } = calcTotal();
    const wi = document.getElementById('wave-info');
    if (wi) {
      wi.innerHTML = `
        <strong><i class="fas fa-mobile-alt"></i> Paiement Wave</strong>
        Envoyez <strong>${fmt(total)}</strong> au numéro :
        <span class="wave-number">78 460 92 42</span>
        Indiquez votre nom en référence.`;
      wi.classList.add('show');
    }
    document.getElementById('payment-done-btn')?.classList.add('show');
  });
  document.getElementById('payment-done-btn')?.addEventListener('click', () => {
    showToast('Paiement confirmé ! Finalisez sur WhatsApp 🎉', '✅');
    document.querySelector('.whatsapp-btn')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

/* ══ WHATSAPP ══ */
function envoyerWhatsApp() {
  const nom = document.getElementById('client-nom')?.value.trim();
  const tel = document.getElementById('client-tel')?.value.trim();
  const adr = document.getElementById('client-adresse')?.value.trim();
  if (!nom || !tel) {
    showToast('Renseignez votre nom et téléphone', '⚠️');
    document.getElementById('client-nom')?.focus();
    return;
  }
  const cart = getPanier();
  if (!cart.length) { showToast('Panier vide !', '⚠️'); return; }
  const { sousTotal, livraison, total } = calcTotal();
  const lines = cart.map(i => `  • ${i.nom} x${i.q} — ${fmt(i.prix * i.q)}`).join('\n');
  const msg = `🧵 *COMMANDE MN-TEXTILES*\n━━━━━━━━━━━━━━━━\n\n👤 *Nom :* ${nom}\n📞 *Téléphone :* ${tel}${adr ? `\n📍 *Adresse :* ${adr}` : ''}\n\n🛍️ *Produits :*\n${lines}\n\n━━━━━━━━━━━━━━━━\n💰 Sous-total : ${fmt(sousTotal)}\n🚚 Livraison : ${livraison > 0 ? fmt(livraison) : 'Gratuite'}\n✅ *TOTAL : ${fmt(total)}*\n\n_"Découvrez des tissus uniques pour toutes vos créations"_\nMerci pour votre confiance ! 🙏`;
  window.open(`https://wa.me/221784609242?text=${encodeURIComponent(msg)}`, '_blank');
  showToast('Redirection vers WhatsApp…', '💬');
}

/* ══ RENDU PRODUITS ══ */
function renderProduits(prods, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  if (!prods.length) {
    el.innerHTML = `<div class="empty-state"><i class="fas fa-search"></i><p>Aucun produit trouvé.</p></div>`;
    return;
  }
  el.innerHTML = prods.map(p => `
    <div class="product-card">
      <div class="product-img">
        <img src="${p.img}" alt="${p.nom}" loading="lazy" onerror="this.src='imagesboutique/voile-01.jpg'">
        ${p.badge ? `<span class="product-badge ${p.bc}">${p.badge}</span>` : ''}
        <button class="product-wishlist" onclick="toggleWish(this)"><i class="far fa-heart"></i></button>
        <div class="product-overlay">
          <button class="product-overlay-btn" onclick="ouvrirModal(${p.id})"><i class="fas fa-eye"></i> Voir les détails</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">${p.cat}</div>
        <div class="product-name">${p.nom}</div>
        <div class="product-stars">${stars(p.e, p.av)}</div>
        <div class="product-footer">
          <div>
            <div class="price-current">${fmt(p.prix)}</div>
            ${p.old ? `<div class="price-old">${fmt(p.old)}</div>` : ''}
          </div>
          <button class="btn-add-cart" onclick="ajouterAuPanier(${p.id}, this)">
            <i class="fas fa-shopping-bag"></i> Ajouter
          </button>
        </div>
      </div>
    </div>`).join('');
}

function toggleWish(btn) {
  const isActive = btn.querySelector('i').classList.contains('fas');
  btn.innerHTML = isActive ? '<i class="far fa-heart"></i>' : '<i class="fas fa-heart" style="color:#c0392b"></i>';
  if (!isActive) showToast('Ajouté aux favoris', '❤️');
}

/* ══ MODAL ══ */
function ouvrirModal(id) {
  const p = PRODUITS.find(x => x.id === id);
  if (!p) return;
  document.getElementById('modal-img').src = p.img;
  document.getElementById('modal-cat').textContent = p.cat;
  document.getElementById('modal-name').textContent = p.nom;
  document.getElementById('modal-stars').innerHTML = stars(p.e, p.av);
  document.getElementById('modal-desc').textContent = p.desc;
  document.getElementById('modal-price').textContent = fmt(p.prix);
  document.getElementById('modal-tags').innerHTML = p.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
  const btn = document.getElementById('modal-add-btn');
  btn.onclick = () => ajouterAuPanier(p.id, btn);
  document.getElementById('product-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function fermerModal(e) {
  if (!e || e.target === document.getElementById('product-modal') || e.currentTarget?.id === 'modal-close-btn') {
    document.getElementById('product-modal').classList.remove('open');
    document.body.style.overflow = '';
  }
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') fermerModal({ target: document.getElementById('product-modal') }); });

/* ══ NAVBAR ══ */
function initNavbar() {
  window.addEventListener('scroll', () =>
    document.querySelector('.navbar')?.classList.toggle('scrolled', window.scrollY > 30));

  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('nav-links');
  burger?.addEventListener('click', () => {
    burger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks?.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      burger.classList.remove('open');
      navLinks.classList.remove('open');
    })
  );

  // Marquer le lien actif
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[href]').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
}

/* ══ GALERIE SLIDER (accueil) ══ */
let galIdx = 0;
function initGallery() {
  const track = document.getElementById('gallery-track');
  const dotsEl = document.getElementById('gallery-dots');
  if (!track || !dotsEl) return;

  const slides = track.querySelectorAll('.gallery-slide');
  const total = slides.length;
  const visible = window.innerWidth > 768 ? 3 : window.innerWidth > 480 ? 2 : 1;
  const maxIdx = total - visible;

  dotsEl.innerHTML = Array.from({ length: maxIdx + 1 }, (_, i) =>
    `<div class="gallery-dot${i === 0 ? ' active' : ''}" onclick="goGallery(${i})"></div>`
  ).join('');

  function update() {
    const pct = (100 / visible) * galIdx;
    track.style.transform = `translateX(-${pct / total * 100}%)`;
    dotsEl.querySelectorAll('.gallery-dot').forEach((d, i) => d.classList.toggle('active', i === galIdx));
  }

  window.goGallery = idx => { galIdx = Math.max(0, Math.min(idx, maxIdx)); update(); };
  window.galleryNext = () => { galIdx = galIdx >= maxIdx ? 0 : galIdx + 1; update(); };
  window.galleryPrev = () => { galIdx = galIdx <= 0 ? maxIdx : galIdx - 1; update(); };
  setInterval(window.galleryNext, 3500);
}

/* ══ FILTRES BOUTIQUE ══ */
let activeCat = 'Tous';
function initBoutique() {
  if (!document.getElementById('products-container')) return;
  renderProduits(PRODUITS, 'products-container');

  document.querySelectorAll('.filter-btn').forEach(btn =>
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCat = btn.dataset.cat || 'Tous';
      filtrerProduits();
    })
  );
  document.getElementById('search-input')?.addEventListener('input', filtrerProduits);
}
function filtrerProduits() {
  let res = PRODUITS;
  if (activeCat !== 'Tous') res = res.filter(p => p.cat === activeCat);
  const q = document.getElementById('search-input')?.value.trim().toLowerCase();
  if (q) res = res.filter(p =>
    p.nom.toLowerCase().includes(q) ||
    p.cat.toLowerCase().includes(q) ||
    p.desc.toLowerCase().includes(q) ||
    p.tags.some(t => t.toLowerCase().includes(q))
  );
  renderProduits(res, 'products-container');
}

/* ══ INIT GLOBAL ══ */
document.addEventListener('DOMContentLoaded', () => {
  // Toast container
  if (!document.getElementById('toast')) {
    const t = document.createElement('div'); t.id = 'toast'; t.className = 'toast';
    document.body.appendChild(t);
  }

  initNavbar();
  updateAllBadges();

  // Accueil
  if (document.getElementById('featured-products')) renderProduits(PRODUITS.slice(0, 6), 'featured-products');
  initGallery();

  // Boutique
  initBoutique();

  // Panier
  if (document.getElementById('cart-items-container')) {
    afficherPanier();
    initWave();
    document.getElementById('cart-clear-btn')?.addEventListener('click', viderPanier);
    document.getElementById('whatsapp-order-btn')?.addEventListener('click', envoyerWhatsApp);
  }
});

/* ── Exposer globalement ── */
window.ajouterAuPanier = ajouterAuPanier;
window.supprimerProduit = supprimerProduit;
window.modifierQte = modifierQte;
window.viderPanier = viderPanier;
window.ouvrirModal = ouvrirModal;
window.fermerModal = fermerModal;
window.toggleWish = toggleWish;
window.envoyerWhatsApp = envoyerWhatsApp;

/* ── Chatbot simple ── */
function initChatbot() {
  // floating toggle button
  const toggle = document.createElement('div');
  toggle.id = 'chat-toggle';
  toggle.className = 'chatbot-toggle';
  toggle.innerHTML = '<i class="fas fa-comments"></i>';
  document.body.appendChild(toggle);

  // chat container
  const bot = document.createElement('div');
  bot.id = 'chatbot';
  bot.className = 'chatbot-wrapper';
  bot.innerHTML = `
    <div class="chatbot-header">
      <span>Chat MN-Textiles</span>
      <span class="chat-close">&times;</span>
    </div>
    <div class="chatbot-messages"></div>
    <div class="chatbot-input">
      <input id="chat-msg" type="text" placeholder="Écrire un message…" />
      <button onclick="sendChat()">Envoyer</button>
    </div>`;
  document.body.appendChild(bot);

  toggle.addEventListener('click', () => {
    bot.style.display = 'flex';
    toggle.style.display = 'none';
  });
  bot.querySelector('.chat-close').addEventListener('click', () => {
    bot.style.display = 'none';
    toggle.style.display = 'flex';
  });
}

function appendMessage(text, sender = 'user') {
  const container = document.querySelector('#chatbot .chatbot-messages');
  if (!container) return;
  const div = document.createElement('div');
  div.className = 'chat-msg ' + sender;
  div.textContent = text;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function sendChat() {
  const input = document.getElementById('chat-msg');
  if (!input) return;
  const msg = input.value.trim();
  if (!msg) return;
  appendMessage(msg, 'user');
  input.value = '';

  // réponses simples prédéfinies
  let reply = 'Désolé, je ne comprends pas. Pouvez-vous reformuler ?';
  const m = msg.toLowerCase();
  if (m.includes('bonjour') || m.includes('salut'))
    reply = 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?';
  else if (m.includes('prix'))
    reply = 'Les prix sont indiqués sur chaque fiche produit. Cliquez sur un article pour voir les détails.';
  else if (m.includes('whatsapp') || m.includes('commande'))
    reply = 'Pour commander, utilisez le bouton WhatsApp vert en bas à gauche ou dans le menu.';
  else if (m.includes('wave'))
    reply = 'Le paiement Wave est disponible : envoyez le montant au 78 460 92 42 après validation du panier.';

  setTimeout(() => appendMessage(reply, 'bot'), 500 + Math.random() * 500);
}

document.addEventListener('DOMContentLoaded', initChatbot);
