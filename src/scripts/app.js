import { restaurant, i18n, defaultLang, whatsappBaseLink, smsBaseLink } from '../data/site.js';
import { MENU, STORIES } from '../data/menu.js';

// ---------------------------------------------------------------------------
// Language state (Spanish is the default / primary language)
// ---------------------------------------------------------------------------
let lang = defaultLang;

function applyLangClass() {
  document.documentElement.classList.toggle('lang-en', lang === 'en');
  document.documentElement.setAttribute('lang', lang);
}

function t(path) {
  // path like "menu.tabs.starters"
  return path.split('.').reduce((obj, key) => (obj ? obj[key] : undefined), i18n[lang]);
}

const langToggleBtn = document.getElementById('lang-toggle');
langToggleBtn?.addEventListener('click', () => {
  lang = lang === 'es' ? 'en' : 'es';
  applyLangClass();
  setMenuSearchPlaceholder();
  renderMenu();
  renderStories();
});

applyLangClass();

// ---------------------------------------------------------------------------
// Scroll reveal (fade-in + slide-up)
// ---------------------------------------------------------------------------
const revealSelector = [
  '#top .order-1',
  '#top .order-2',
  '#top .hero-phone-tag',
  'section .feature-card, section .feature-card-dark',
  'section .tab-btn',
  'section .cat-block',
  'section .duke-menu-item',
  '#gallery h2',
  '#gallery p',
  'section .duke-gallery-card',
  '#find .relative.z-10 > div',
  'footer .mx-auto > *',
].join(',');

let revealObserver;

function ensureRevealObserver() {
  if (revealObserver || !('IntersectionObserver' in window)) return;
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -6% 0px',
    }
  );
}

function refreshScrollReveal(root = document) {
  const targets = root.querySelectorAll(revealSelector);
  ensureRevealObserver();

  targets.forEach((el) => {
    if (el.dataset.revealReady === '1') return;

    const parent = el.parentElement;
    const siblings = parent ? Array.from(parent.children) : [];
    const index = Math.max(0, siblings.indexOf(el));
    const delay = Math.min(index, 7) * 72;

    el.style.setProperty('--reveal-delay', `${delay}ms`);
    el.classList.add('reveal-up');
    el.dataset.revealReady = '1';

    if (!revealObserver) {
      el.classList.add('is-visible');
      return;
    }

    revealObserver.observe(el);
  });
}

// ---------------------------------------------------------------------------
// Mobile hamburger nav
// ---------------------------------------------------------------------------
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileNav = document.getElementById('mobile-nav');
const menuIconPath = document.getElementById('menu-icon-path');
let mobileNavOpen = false;

function setMobileNav(open) {
  mobileNavOpen = open;
  mobileNav?.classList.toggle('open', open);
  mobileMenuBtn?.setAttribute('aria-expanded', String(open));
  menuIconPath?.setAttribute('d', open ? 'M6 6l12 12M18 6L6 18' : 'M4 6h16M4 12h16M4 18h16');
}

mobileMenuBtn?.addEventListener('click', () => setMobileNav(!mobileNavOpen));
mobileNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMobileNav(false));
});

// ---------------------------------------------------------------------------
// Menu rendering (bilingual + cart-aware) — tabs are static markup in
// MenuSection.astro; this fills #menu-panels based on the current language.
// ---------------------------------------------------------------------------
const panelsRoot = document.getElementById('menu-panels');
const menuSearchInput = document.getElementById('menu-search');
const FLAT = {}; // itemId -> item data (for cart calculations)
const DOUBLE_CAT_ID = 'burgers';
let menuSearchQuery = '';

function normalizeText(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function setMenuSearchPlaceholder() {
  if (!menuSearchInput) return;
  const nextPlaceholder =
    lang === 'en'
      ? menuSearchInput.dataset.placeholderEn || 'Search the menu...'
      : menuSearchInput.dataset.placeholderEs || 'Buscar en la carta...';
  menuSearchInput.placeholder = nextPlaceholder;
}

function matchesMenuSearch(item) {
  if (!menuSearchQuery) return true;
  const needle = normalizeText(menuSearchQuery);
  const haystack = [item.name?.es, item.name?.en, item.desc?.es, item.desc?.en]
    .map((entry) => normalizeText(entry))
    .join(' ');
  return haystack.includes(needle);
}

Object.entries(MENU).forEach(([catId, cat]) => {
  cat.items.forEach((item, idx) => {
    const itemId = `${catId}-${idx}`;
    const hasDouble = typeof item.doublePrice === 'number' && item.doublePrice > item.price;
    const hasVariants = Array.isArray(item.variants) && item.variants.length > 0;

    if (!hasVariants) {
      FLAT[itemId] = {
        ...item,
        price: item.price,
        isDouble: false,
      };
    }

    if (hasVariants) {
      item.variants.forEach((variant) => {
        FLAT[`${itemId}--${variant.key}`] = {
          ...item,
          price: variant.price,
          isDouble: false,
          variantLabel: variant.label,
        };
      });
    }

    if (hasDouble) {
      FLAT[`${itemId}--double`] = {
        ...item,
        price: item.doublePrice,
        isDouble: true,
      };
    }
  });
});

function renderMenu() {
  if (!panelsRoot) return;
  const activeTab = document.querySelector('.tab-btn.tab-active')?.dataset.tab || 'all';
  let visibleItems = 0;

  panelsRoot.innerHTML = '';
  Object.entries(MENU).forEach(([catId, cat]) => {
    if (activeTab !== 'all' && activeTab !== catId) return;

    const matchingItems = cat.items.filter((item) => matchesMenuSearch(item));
    if (!matchingItems.length) return;

    const block = document.createElement('div');
    block.className = 'cat-block';
    block.dataset.cat = catId;

    let html = `<h3 class="cat-heading">${t(`menu.tabs.${catId}`) || catId}</h3>`;
    if (cat.noteEs || cat.noteEn) {
      html += `<p class="mb-6 font-body text-sm italic text-stone">${lang === 'en' ? (cat.noteEn || cat.noteEs || '') : (cat.noteEs || cat.noteEn || '')}</p>`;
    } else if (cat.noteKey) {
      html += `<p class="mb-6 font-body text-sm italic text-stone">${t(`menu.${cat.noteKey}`)}</p>`;
    }
    if (catId === DOUBLE_CAT_ID) {
      html += `
        <div class="menu-upgrade-note" role="note" aria-label="Burger upgrade note">
          <p>${t('menu.friesIncluded')}</p>
          <p>${t('menu.makeItDouble')}: <strong>${t('menu.doubleLabel')}</strong></p>
        </div>`;
    }

    matchingItems.forEach((item) => {
      const idx = cat.items.indexOf(item);
      const itemId = `${catId}-${idx}`;
      const isBurger = typeof item.doublePrice === 'number' && item.doublePrice > item.price;
      const hasVariants = Array.isArray(item.variants) && item.variants.length > 0;
      const isSingleBurgerInBurgerCat = catId === DOUBLE_CAT_ID && !hasVariants && !isBurger;
      const hasChoiceButtons = hasVariants || isBurger || isSingleBurgerInBurgerCat;
      const doubleId = `${itemId}--double`;
      const baseQty = hasVariants ? 0 : cart[itemId] || 0;
      const doubleQty = isBurger ? cart[doubleId] || 0 : 0;
      const variantQty = hasVariants
        ? item.variants.reduce((sum, variant) => sum + (cart[`${itemId}--${variant.key}`] || 0), 0)
        : 0;
      const qty = baseQty + doubleQty + variantQty;
      html += `
        <div class="duke-menu-item ${qty > 0 ? 'in-cart' : ''}" data-row="${itemId}">
          <div class="flex-1">
            <h3>${item.name[lang]}</h3>
            ${item.desc ? `<p class="desc">${item.desc[lang]}</p>` : ''}
          </div>
          <div class="add-controls">
            ${hasChoiceButtons ? '' : `<span class="duke-price">€${item.price.toFixed(2).replace('.00', '')}</span>`}
            ${
              hasVariants
                ? item.variants
                    .map(
                      (variant) => `<button class="double-btn focus-ring" data-add="${itemId}--${variant.key}" aria-label="${variant.label[lang]} ${item.name[lang]}" type="button"><span class="double-btn-title">${variant.label[lang]}</span><span class="double-btn-price">€${variant.price.toFixed(2).replace('.00', '')}</span></button>`
                    )
                    .join('')
                : ''
            }
            ${
              isBurger
                ? `<button class="double-btn focus-ring" data-add="${itemId}" aria-label="${lang === 'es' ? 'Normal' : 'Single'} ${item.name[lang]}" type="button"><span class="double-btn-title">${lang === 'es' ? 'NORMAL' : 'SINGLE'}</span><span class="double-btn-price">€${item.price.toFixed(2).replace('.00', '')}</span></button><button class="double-btn focus-ring" data-add="${doubleId}" aria-label="${t('menu.makeItDouble')} ${item.name[lang]}" type="button"><span class="double-btn-title">${t('menu.doubleCta')}</span><span class="double-btn-price">€${item.doublePrice.toFixed(2).replace('.00', '')}</span></button>`
                : ''
            }
            ${
              isSingleBurgerInBurgerCat
                ? `<button class="double-btn focus-ring" data-add="${itemId}" aria-label="${lang === 'es' ? 'Normal' : 'Single'} ${item.name[lang]}" type="button"><span class="double-btn-title">${lang === 'es' ? 'NORMAL' : 'SINGLE'}</span><span class="double-btn-price">€${item.price.toFixed(2).replace('.00', '')}</span></button>`
                : ''
            }
            <span class="duke-qty-pill ${qty > 0 ? 'show' : ''}" data-qty-pill="${itemId}">x${qty}</span>
            ${hasChoiceButtons ? '' : `<button class="duke-add-btn focus-ring" data-add="${itemId}" aria-label="Add ${item.name[lang]}" type="button">+</button>`}
          </div>
        </div>`;
      visibleItems += 1;
    });

    block.innerHTML = html;
    panelsRoot.appendChild(block);
  });

  if (!visibleItems) {
    panelsRoot.innerHTML = `<p class="duke-empty-state">${
      lang === 'en' ? 'No dishes found for that search.' : 'No hay platos para esa busqueda.'
    }</p>`;
  }

  refreshScrollReveal(panelsRoot);
}

const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((el) => el.classList.toggle('tab-active', el === tab));
    renderMenu();
  });
});

menuSearchInput?.addEventListener('input', (event) => {
  menuSearchQuery = event.target.value.trim();
  renderMenu();
});

setMenuSearchPlaceholder();

// ---------------------------------------------------------------------------
// Instagram stories strip
// ---------------------------------------------------------------------------
const storiesRoot = document.getElementById('stories-track');

function renderStories() {
  if (!storiesRoot) return;
  storiesRoot.innerHTML = STORIES.map(
    (story) => `
      <a href="${restaurant.instagram}" target="_blank" rel="noopener noreferrer" class="story-card focus-ring">
        <img src="${story.img}" alt="${story.caption[lang]}" loading="lazy" />
        ${
          story.video
            ? `<svg class="story-play" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`
            : ''
        }
        <svg class="story-ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
        <span class="story-caption">${story.caption[lang]}</span>
      </a>`
  ).join('');

  refreshScrollReveal(storiesRoot);
}

function initInstagramSlider() {
  const track = document.getElementById('ig-track');
  const dotsRoot = document.getElementById('ig-dots');
  if (!track || !dotsRoot) return;

  const cards = Array.from(track.querySelectorAll('.ig-story-card'));
  const dots = Array.from(dotsRoot.querySelectorAll('[data-ig-dot]'));
  if (!cards.length || !dots.length) return;

  const setActiveDot = (index) => {
    dots.forEach((dot, idx) => {
      dot.classList.toggle('is-active', idx === index);
      dot.setAttribute('aria-current', idx === index ? 'true' : 'false');
    });
  };

  const scrollToCard = (index, smooth = false) => {
    const target = cards[index];
    if (!target) return;
    target.scrollIntoView({
      behavior: smooth ? 'smooth' : 'auto',
      inline: 'center',
      block: 'nearest',
    });
  };

  if (track.dataset.igInit !== '1') {
    dotsRoot.addEventListener('click', (event) => {
      const dot = event.target.closest('[data-ig-dot]');
      if (!dot) return;
      const index = Number(dot.dataset.igDot);
      if (Number.isNaN(index)) return;
      setActiveDot(index);
      scrollToCard(index, true);
    });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const index = cards.indexOf(entry.target);
            if (index >= 0) setActiveDot(index);
          });
        },
        {
          root: track,
          threshold: 0.7,
        }
      );

      cards.forEach((card) => observer.observe(card));
    }

    track.dataset.igInit = '1';
  }

  if (window.matchMedia('(max-width: 767px)').matches) {
    const middleIndex = Math.floor(cards.length / 2);
    setActiveDot(middleIndex);
    scrollToCard(middleIndex, false);
  } else {
    setActiveDot(0);
  }
}

// ---------------------------------------------------------------------------
// Cart state + drawer
// ---------------------------------------------------------------------------
let cart = {}; // itemId -> quantity
let orderType = 'pickup';

const cartFab = document.getElementById('cart-fab');
const cartCount = document.getElementById('cart-count');
const cartOverlay = document.getElementById('cart-overlay');
const cartDrawer = document.getElementById('cart-drawer');
const cartClose = document.getElementById('cart-close');
const cartItemsRoot = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');
const sendWhatsAppBtn = document.getElementById('send-order-whatsapp');
const sendSmsBtn = document.getElementById('send-order-sms');
const cartHint = document.getElementById('cart-hint');
const addressField = document.getElementById('address-field');
const nameInput = document.getElementById('customer-name');
const addressInput = document.getElementById('customer-address');

function openCart() {
  cartOverlay?.classList.add('open');
  cartDrawer?.classList.add('open');
}
function closeCart() {
  cartOverlay?.classList.remove('open');
  cartDrawer?.classList.remove('open');
}

cartFab?.addEventListener('click', openCart);
cartClose?.addEventListener('click', closeCart);
cartOverlay?.addEventListener('click', closeCart);

// Adding an item gives quick feedback on the cart button but does NOT
// auto-open the drawer, so browsing the menu isn't interrupted.
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-add]');
  if (!btn) return;
  const id = btn.dataset.add;
  cart[id] = (cart[id] || 0) + 1;
  btn.classList.add('added');
  setTimeout(() => btn.classList.remove('added'), 250);
  renderCart();
  renderMenu();
  cartFab?.classList.remove('cart-pulse');
  void cartFab?.offsetWidth;
  cartFab?.classList.add('cart-pulse');
});

function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id] += delta;
  if (cart[id] <= 0) delete cart[id];
  renderCart();
  renderMenu();
}

function cartItemName(item) {
  if (item.variantLabel) return `${item.name[lang]} (${item.variantLabel[lang]})`;
  if (!item.isDouble) return item.name[lang];
  return `${item.name[lang]} (${t('cart.doubleTag')})`;
}

function renderCart() {
  const ids = Object.keys(cart);
  const totalItems = ids.reduce((sum, id) => sum + cart[id], 0);
  const totalPrice = ids.reduce((sum, id) => sum + cart[id] * FLAT[id].price, 0);

  if (cartCount) cartCount.textContent = String(totalItems);
  cartFab?.classList.toggle('has-items', totalItems > 0);
  if (cartTotalEl) cartTotalEl.textContent = '€' + totalPrice.toFixed(2).replace('.00', '');

  if (!cartItemsRoot) return;

  if (ids.length === 0) {
    cartItemsRoot.innerHTML = `<p class="font-body text-sm text-stone">${t('cart.empty')}</p>`;
  } else {
    cartItemsRoot.innerHTML = ids
      .map((id) => {
        const item = FLAT[id];
        const lineTotal = (item.price * cart[id]).toFixed(2).replace('.00', '');
        return `
          <div class="flex items-center justify-between gap-3 border-b border-ink/10 py-3">
            <div class="flex-1">
              <p class="font-body text-sm font-semibold text-ink">${cartItemName(item)}</p>
              <p class="font-mark text-sm text-rust">€${lineTotal}</p>
            </div>
            <div class="flex items-center gap-2">
              <button class="qty-btn focus-ring" data-qty-minus="${id}" aria-label="Decrease" type="button">−</button>
              <span class="w-5 text-center font-body text-sm font-semibold">${cart[id]}</span>
              <button class="qty-btn focus-ring" data-qty-plus="${id}" aria-label="Increase" type="button">+</button>
              <button class="focus-ring ml-1 text-stone hover:text-rust" data-remove="${id}" aria-label="Remove" type="button">
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>`;
      })
      .join('');
  }

  if (sendWhatsAppBtn) sendWhatsAppBtn.disabled = totalItems === 0;
  if (sendSmsBtn) sendSmsBtn.disabled = totalItems === 0;
  if (cartHint) cartHint.style.display = totalItems === 0 ? 'block' : 'none';
}

cartItemsRoot?.addEventListener('click', (e) => {
  const plus = e.target.closest('[data-qty-plus]');
  const minus = e.target.closest('[data-qty-minus]');
  const remove = e.target.closest('[data-remove]');
  if (plus) changeQty(plus.dataset.qtyPlus, 1);
  if (minus) changeQty(minus.dataset.qtyMinus, -1);
  if (remove) {
    delete cart[remove.dataset.remove];
    renderCart();
    renderMenu();
  }
});

const orderTypeBtns = document.querySelectorAll('.order-type-btn');
orderTypeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    orderType = btn.dataset.orderType;
    orderTypeBtns.forEach((b) => b.classList.toggle('type-active', b === btn));
    if (addressField) addressField.style.display = orderType === 'delivery' ? 'block' : 'none';
  });
});

function buildOrderMessage() {
  const ids = Object.keys(cart);
  if (ids.length === 0) return null;

  const name = nameInput?.value.trim() || '';
  const address = addressInput?.value.trim() || '';

  if (!name) {
    nameInput?.focus();
    return null;
  }
  if (orderType === 'delivery' && !address) {
    addressInput?.focus();
    return null;
  }

  const w = i18n[lang].whatsapp;
  const lines = [];
  lines.push(w.greeting);
  lines.push('');
  lines.push(w.orderLabel);
  ids.forEach((id) => {
    const item = FLAT[id];
    const qty = cart[id];
    const lineTotal = (item.price * qty).toFixed(2).replace('.00', '');
    lines.push(`- ${qty}x ${cartItemName(item)} (€${lineTotal})`);
  });
  const total = ids.reduce((sum, id) => sum + cart[id] * FLAT[id].price, 0).toFixed(2).replace('.00', '');
  lines.push('');
  lines.push(`${w.total}: €${total}`);
  lines.push('');
  lines.push(`${w.name}: ${name}`);
  lines.push(`${w.orderTypeLabel}: ${orderType === 'delivery' ? i18n[lang].cart.delivery : i18n[lang].cart.pickup}`);
  if (orderType === 'delivery') lines.push(`${w.addressLabel}: ${address}`);

  return lines.join('\n');
}

sendWhatsAppBtn?.addEventListener('click', () => {
  const message = buildOrderMessage();
  if (!message) return;

  window.open(whatsappBaseLink(message), '_blank');
});

sendSmsBtn?.addEventListener('click', () => {
  const message = buildOrderMessage();
  if (!message) return;

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  window.location.href = smsBaseLink(message, isIOS);
});

// ---------------------------------------------------------------------------
// Initial render
// ---------------------------------------------------------------------------
renderMenu();
renderStories();
renderCart();
initInstagramSlider();
refreshScrollReveal();
