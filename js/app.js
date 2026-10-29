import { GAMES_DATA, GENRES_LIST, PLATFORMS_LIST } from './games-data.js';

/* ==========================================================================
   State Management - BenjaGames
   ========================================================================== */
const state = {
  games: [...GAMES_DATA],
  filteredGames: [...GAMES_DATA],
  filters: {
    query: '',
    genre: 'Todos',
    platform: 'Todas',
    minScore: 60,
    priceCategory: 'all',
    esrb: 'Todas',
    modes: [],
    tab: 'all'
  },
  sortBy: 'rating-desc',
  viewMode: 'grid', // 'grid' | 'list'
  wishlist: JSON.parse(localStorage.getItem('benjagames_wishlist') || '[]'),
  compareList: JSON.parse(localStorage.getItem('benjagames_compare') || '[]'),
  activeModalGame: null,
  activeModalTab: 'tab-general'
};

/* ==========================================================================
   DOM Elements
   ========================================================================== */
let el = {};

function cacheElements() {
  el = {
    // Search
    searchInput: document.getElementById('global-search-input'),
    clearSearchBtn: document.getElementById('clear-search-btn'),
    autocompleteList: document.getElementById('search-autocomplete-list'),

    // Filters
    filterGenre: document.getElementById('filter-genre'),
    filterPlatform: document.getElementById('filter-platform'),
    filterScoreSlider: document.getElementById('filter-score-slider'),
    scoreSliderValue: document.getElementById('score-slider-value'),
    filterPrice: document.getElementById('filter-price'),
    filterEsrb: document.getElementById('filter-esrb'),
    filterModeCheckboxes: document.querySelectorAll('.filter-mode-cb'),
    btnResetFilters: document.getElementById('btn-reset-filters'),
    quickFilterTabs: document.getElementById('quick-filter-tabs'),
    activeFiltersBar: document.getElementById('active-filters-bar'),

    // Results Controls
    resultsCount: document.getElementById('results-count'),
    sortSelect: document.getElementById('sort-games-select'),
    viewGridBtn: document.getElementById('view-grid-btn'),
    viewListBtn: document.getElementById('view-list-btn'),
    gamesGrid: document.getElementById('games-grid'),
    emptyState: document.getElementById('empty-state'),
    btnEmptyReset: document.getElementById('btn-empty-reset'),

    // Hero & Highlights
    heroSpotlight: document.getElementById('hero-spotlight-container'),
    curatedHighlights: document.getElementById('curated-mini-highlights'),

    // Detail Modal
    detailModal: document.getElementById('game-detail-modal'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    modalHero: document.getElementById('modal-hero'),
    modalHeroContent: document.getElementById('modal-hero-content'),
    modalTabs: document.querySelectorAll('.modal-tab'),
    modalTabPanes: document.querySelectorAll('.tab-pane'),

    // Comparison Modal
    compareBtn: document.getElementById('btn-compare-open'),
    compareCounter: document.getElementById('compare-counter'),
    compareModal: document.getElementById('compare-modal'),
    compareModalClose: document.getElementById('compare-modal-close'),
    comparisonWrapper: document.getElementById('comparison-content-wrapper'),
    compareAddSelect: document.getElementById('compare-add-select'),
    btnAddToCompare: document.getElementById('btn-add-to-compare'),

    // Roulette Modal
    rouletteBtn: document.getElementById('btn-roulette-open'),
    rouletteModal: document.getElementById('roulette-modal'),
    rouletteModalClose: document.getElementById('roulette-modal-close'),
    btnSpinRoulette: document.getElementById('btn-spin-roulette'),
    rouletteDisplayBox: document.getElementById('roulette-display-box'),

    // Wishlist Drawer
    wishlistBtn: document.getElementById('btn-wishlist-open'),
    wishlistCounter: document.getElementById('wishlist-counter'),
    wishlistDrawerOverlay: document.getElementById('wishlist-drawer-overlay'),
    wishlistDrawerPanel: document.getElementById('wishlist-drawer-panel'),
    drawerCloseBtn: document.getElementById('drawer-close-btn'),
    wishlistItemsList: document.getElementById('wishlist-items-list'),
    btnClearWishlist: document.getElementById('btn-clear-wishlist'),

    // Toast Container
    toastContainer: document.getElementById('toast-container')
  };
}

/* ==========================================================================
   Initialization
   ========================================================================== */
function init() {
  cacheElements();
  populateDropdowns();
  renderHeroSpotlight();
  renderCuratedHighlights();
  updateWishlistBadge();
  updateCompareBadge();
  applyFiltersAndRender();
  setupEventListeners();
}

/* ==========================================================================
   Populate Dynamic Dropdowns
   ========================================================================== */
function populateDropdowns() {
  // Genres
  if (el.filterGenre) {
    el.filterGenre.innerHTML = '<option value="Todos">Todos los Géneros</option>';
    GENRES_LIST.filter(g => g !== 'Todos').forEach(genre => {
      const opt = document.createElement('option');
      opt.value = genre;
      opt.textContent = genre;
      el.filterGenre.appendChild(opt);
    });
  }

  // Platforms
  if (el.filterPlatform) {
    el.filterPlatform.innerHTML = '<option value="Todas">Todas las Plataformas</option>';
    PLATFORMS_LIST.filter(p => p !== 'Todas').forEach(platform => {
      const opt = document.createElement('option');
      opt.value = platform;
      opt.textContent = platform;
      el.filterPlatform.appendChild(opt);
    });
  }

  // Comparison In-Modal Selector
  if (el.compareAddSelect) {
    el.compareAddSelect.innerHTML = '<option value="">Seleccionar juego del catálogo...</option>';
    state.games.forEach(g => {
      const opt = document.createElement('option');
      opt.value = g.id;
      opt.textContent = `${g.title} (${g.year}) - Metascore ${g.rating}`;
      el.compareAddSelect.appendChild(opt);
    });
  }
}

/* ==========================================================================
   Hero Spotlight Rendering (Game of the Week)
   ========================================================================== */
function renderHeroSpotlight() {
  const featured = state.games.find(g => g.isGameOfWeek) || state.games[0];
  if (!featured || !el.heroSpotlight) return;

  const scoreClass = featured.rating >= 90 ? 'score-great' : 'score-good';

  el.heroSpotlight.innerHTML = `
    <div class="hero-card">
      <div class="hero-card-bg" style="background-image: url('${featured.banner || featured.cover}')"></div>
      <div class="hero-gradient-overlay"></div>
      
      <div class="hero-content">
        <div class="hero-badge-row">
          <span class="spotlight-pill">⭐ Destacado en BenjaGames</span>
          <span class="metascore-badge ${scoreClass}">Metascore: ${featured.rating}</span>
          <span style="font-size:0.85rem; color:#d1d5db; background:rgba(255,255,255,0.1); padding:0.2rem 0.5rem; border-radius:4px;">
            ESRB: <strong>${featured.esrb.rating}</strong>
          </span>
          <span style="font-size:0.85rem; color:#a78bfa; font-weight:700;">Año: ${featured.year}</span>
        </div>

        <h1 class="hero-title">${featured.title}</h1>
        <p class="hero-tagline">${featured.tagline}</p>

        <div class="hero-meta-strip">
          <span>🛠️ <strong>${featured.developer}</strong></span>
          <span>🎮 <strong>${featured.genre.slice(0, 3).join(', ')}</strong></span>
          <span>⏱️ Historia: <strong>${featured.playtime.mainStory}</strong></span>
          <span>🖥️ <strong>${featured.platforms.slice(0, 4).join(' • ')}</strong></span>
        </div>

        <div class="hero-cta-group">
          <button class="btn-hero-primary" onclick="window.nexusApp.openGameDetail('${featured.id}')">
            <span>🔍</span> Ver Ficha Técnica Completa
          </button>
          <button class="btn-hero-secondary" onclick="window.nexusApp.toggleWishlist('${featured.id}')">
            ${isWishlisted(featured.id) ? '❤️ En Guardados' : '🤍 Guardar en Favoritos'}
          </button>
        </div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   Curated Highlights (Mini Cards)
   ========================================================================== */
function renderCuratedHighlights() {
  if (!el.curatedHighlights) return;

  const trending = state.games.find(g => g.id === 'black-myth-wukong') || state.games.find(g => g.id === 'cyberpunk-2077');
  const masterpiece = state.games.find(g => g.id === 'baldurs-gate-3') || state.games.find(g => g.id === 'the-witcher-3');
  const indie = state.games.find(g => g.id === 'balatro') || state.games.find(g => g.id === 'hollow-knight');

  const highlights = [
    { label: '🔥 En Gran Tendencia', game: trending },
    { label: '👑 Obra Maestra Aclamada', game: masterpiece },
    { label: '💎 Joya Esencial Indie', game: indie }
  ].filter(h => h.game);

  el.curatedHighlights.innerHTML = highlights.map(item => `
    <div class="mini-highlight-card" onclick="window.nexusApp.openGameDetail('${item.game.id}')">
      <img src="${item.game.cover}" alt="${item.game.title}" class="mini-thumb" loading="lazy">
      <div class="mini-content">
        <span class="mini-pill">${item.label}</span>
        <h4 class="mini-title">${item.game.title}</h4>
        <div class="mini-meta">
          <span>★ ${item.game.rating}/100</span> • <span>${item.game.genre[0]}</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   Filter & Sorting Engine
   ========================================================================== */
function applyFiltersAndRender() {
  let list = [...state.games];

  // 1. Text Search Query
  if (state.filters.query.trim()) {
    const q = state.filters.query.toLowerCase().trim();
    list = list.filter(g => 
      g.title.toLowerCase().includes(q) ||
      (g.shortTitle && g.shortTitle.toLowerCase().includes(q)) ||
      g.developer.toLowerCase().includes(q) ||
      g.genre.some(gen => gen.toLowerCase().includes(q)) ||
      g.tags.some(tag => tag.toLowerCase().includes(q)) ||
      g.platforms.some(plat => plat.toLowerCase().includes(q))
    );
  }

  // 2. Genre Filter
  if (state.filters.genre !== 'Todos') {
    list = list.filter(g => g.genre.includes(state.filters.genre));
  }

  // 3. Platform Filter
  if (state.filters.platform !== 'Todas') {
    list = list.filter(g => g.platforms.includes(state.filters.platform));
  }

  // 4. Metacritic Score
  list = list.filter(g => g.rating >= state.filters.minScore);

  // 5. Price Category
  if (state.filters.priceCategory === 'free') {
    list = list.filter(g => g.price === 0);
  } else if (state.filters.priceCategory === 'discounted') {
    list = list.filter(g => g.discount > 0);
  } else if (state.filters.priceCategory === 'under-20') {
    list = list.filter(g => (g.discountedPrice || g.price) < 20 && g.price > 0);
  } else if (state.filters.priceCategory === 'under-40') {
    list = list.filter(g => (g.discountedPrice || g.price) < 40);
  }

  // 6. ESRB Age Rating
  if (state.filters.esrb !== 'Todas') {
    list = list.filter(g => g.esrb.rating.startsWith(state.filters.esrb.split(' ')[0]));
  }

  // 7. Modes (Checkboxes) - Match any checked mode
  if (state.filters.modes.length > 0) {
    list = list.filter(g => 
      state.filters.modes.some(mode => 
        g.modes.some(m => m.toLowerCase().includes(mode.toLowerCase()))
      )
    );
  }

  // 8. Quick Filter Tabs
  if (state.filters.tab === 'trending') {
    list = list.filter(g => g.isTrending);
  } else if (state.filters.tab === 'masterpieces') {
    list = list.filter(g => g.rating >= 90);
  } else if (state.filters.tab === 'deals') {
    list = list.filter(g => g.discount > 0);
  } else if (state.filters.tab === 'coop') {
    list = list.filter(g => g.modes.some(m => m.toLowerCase().includes('cooperativo')));
  } else if (state.filters.tab === 'indie') {
    list = list.filter(g => g.genre.includes('Indie') || g.tags.includes('Indie') || g.tags.includes('Indie Clásico') || g.tags.includes('Indie Revolucionario'));
  }

  // 9. Sort
  list.sort((a, b) => {
    switch (state.sortBy) {
      case 'rating-desc':
        return b.rating - a.rating;
      case 'release-newest':
        return new Date(b.releaseDate) - new Date(a.releaseDate);
      case 'release-oldest':
        return new Date(a.releaseDate) - new Date(b.releaseDate);
      case 'price-asc': {
        const pA = a.discountedPrice !== undefined ? a.discountedPrice : a.price;
        const pB = b.discountedPrice !== undefined ? b.discountedPrice : b.price;
        return pA - pB;
      }
      case 'price-desc': {
        const pA = a.discountedPrice !== undefined ? a.discountedPrice : a.price;
        const pB = b.discountedPrice !== undefined ? b.discountedPrice : b.price;
        return pB - pA;
      }
      case 'title-asc':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  state.filteredGames = list;
  renderActiveFilterBadges();
  renderGamesGrid();
}

/* ==========================================================================
   Render Active Filter Badges
   ========================================================================== */
function renderActiveFilterBadges() {
  if (!el.activeFiltersBar) return;
  const badges = [];

  if (state.filters.query.trim()) {
    badges.push({ key: 'query', label: `Texto: "${state.filters.query}"` });
  }
  if (state.filters.genre !== 'Todos') {
    badges.push({ key: 'genre', label: `Género: ${state.filters.genre}` });
  }
  if (state.filters.platform !== 'Todas') {
    badges.push({ key: 'platform', label: `Plataforma: ${state.filters.platform}` });
  }
  if (state.filters.minScore > 60) {
    badges.push({ key: 'minScore', label: `Score: ${state.filters.minScore}+` });
  }
  if (state.filters.priceCategory !== 'all') {
    const labels = {
      free: 'Gratis',
      discounted: 'En Oferta',
      'under-20': '< $20',
      'under-40': '< $40'
    };
    badges.push({ key: 'priceCategory', label: `Precio: ${labels[state.filters.priceCategory] || state.filters.priceCategory}` });
  }
  if (state.filters.esrb !== 'Todas') {
    badges.push({ key: 'esrb', label: `ESRB: ${state.filters.esrb.split(' ')[0]}` });
  }
  state.filters.modes.forEach(mode => {
    badges.push({ key: `mode-${mode}`, label: `Modo: ${mode}` });
  });

  if (badges.length > 0) {
    el.activeFiltersBar.style.display = 'flex';
    el.activeFiltersBar.innerHTML = `
      <span style="font-size:0.78rem; color:var(--text-muted); font-weight:700;">Filtros activos:</span>
      ${badges.map(b => `
        <span class="filter-badge">
          ${b.label}
          <span class="remove-btn" onclick="window.nexusApp.removeFilter('${b.key}')">✕</span>
        </span>
      `).join('')}
    `;
  } else {
    el.activeFiltersBar.style.display = 'none';
    el.activeFiltersBar.innerHTML = '';
  }
}

/* ==========================================================================
   Render Games Grid
   ========================================================================== */
function renderGamesGrid() {
  if (!el.gamesGrid) return;

  el.resultsCount.textContent = state.filteredGames.length;

  if (state.filteredGames.length === 0) {
    el.gamesGrid.innerHTML = '';
    el.emptyState.style.display = 'block';
    return;
  }

  el.emptyState.style.display = 'none';

  if (state.viewMode === 'list') {
    el.gamesGrid.classList.add('list-view');
  } else {
    el.gamesGrid.classList.remove('list-view');
  }

  el.gamesGrid.innerHTML = state.filteredGames.map(game => {
    const scoreClass = game.rating >= 90 ? 'score-great' : 'score-good';
    const isWished = isWishlisted(game.id);
    const isCompared = isComparedGame(game.id);

    // Price presentation
    let priceHtml = '';
    if (game.price === 0) {
      priceHtml = `<span class="current-price free">Gratis / F2P</span>`;
    } else if (game.discount > 0) {
      priceHtml = `
        <span class="original-price">$${game.originalPrice.toFixed(2)}</span>
        <span class="current-price" style="color:var(--accent-emerald);">$${game.discountedPrice.toFixed(2)}</span>
      `;
    } else {
      priceHtml = `<span class="current-price">$${game.price.toFixed(2)}</span>`;
    }

    return `
      <article class="game-card" onclick="window.nexusApp.openGameDetail('${game.id}')">
        <div class="game-card-media">
          <img src="${game.cover}" alt="${game.title}" class="game-cover-img" loading="lazy">
          
          <div class="card-top-badges">
            <span class="metascore-badge ${scoreClass}">${game.rating}</span>
            ${game.discount > 0 ? `<span class="discount-tag">-${game.discount}%</span>` : ''}
          </div>

          <div class="card-actions-float" onclick="event.stopPropagation()">
            <button 
              class="btn-card-icon ${isCompared ? 'active' : ''}" 
              title="${isCompared ? 'Quitar de comparar' : 'Añadir a comparar'}"
              onclick="window.nexusApp.toggleCompare('${game.id}')"
            >
              ⚖️
            </button>
            <button 
              class="btn-card-icon ${isWished ? 'active' : ''}" 
              title="${isWished ? 'Quitar de guardados' : 'Guardar en favoritos'}"
              onclick="window.nexusApp.toggleWishlist('${game.id}')"
            >
              ${isWished ? '❤️' : '🤍'}
            </button>
          </div>
        </div>

        <div class="game-card-body">
          <div class="card-info-col">
            <div class="card-genre-tags">
              ${game.genre.slice(0, 2).map(g => `<span class="card-tag">${g}</span>`).join('')}
            </div>

            <h3 class="card-title">${game.title}</h3>

            <div class="card-meta-row">
              <span>${game.developer}</span>
              <span>${game.year}</span>
            </div>

            <div class="card-platforms">
              ${game.platforms.slice(0, 3).map(p => `<span class="platform-pill">${p}</span>`).join('')}
              ${game.platforms.length > 3 ? `<span class="platform-pill">+${game.platforms.length - 3}</span>` : ''}
            </div>
          </div>

          <div class="card-footer" onclick="event.stopPropagation()">
            <div class="price-wrapper">
              ${priceHtml}
            </div>
            <button class="btn-details-card" onclick="window.nexusApp.openGameDetail('${game.id}')">
              Ver Ficha Técnica
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* ==========================================================================
   Autocomplete Instant Search
   ========================================================================== */
function handleAutocompleteSearch(val) {
  if (!val || val.trim().length < 2) {
    el.autocompleteList.classList.remove('active');
    el.autocompleteList.innerHTML = '';
    return;
  }

  const query = val.toLowerCase().trim();
  const matches = state.games.filter(g => 
    g.title.toLowerCase().includes(query) ||
    (g.shortTitle && g.shortTitle.toLowerCase().includes(query)) ||
    g.developer.toLowerCase().includes(query) ||
    g.genre.some(gen => gen.toLowerCase().includes(query))
  ).slice(0, 5);

  if (matches.length === 0) {
    el.autocompleteList.classList.remove('active');
    el.autocompleteList.innerHTML = '';
    return;
  }

  el.autocompleteList.innerHTML = matches.map(m => `
    <div class="autocomplete-item" onclick="window.nexusApp.openGameDetail('${m.id}'); el.autocompleteList.classList.remove('active');">
      <img src="${m.cover}" alt="${m.title}" class="autocomplete-thumb">
      <div>
        <div class="autocomplete-title">${m.title}</div>
        <div class="autocomplete-meta">${m.genre.slice(0, 2).join(', ')} • Metascore: <strong>${m.rating}</strong></div>
      </div>
    </div>
  `).join('');

  el.autocompleteList.classList.add('active');
}

/* ==========================================================================
   Modal Tab Switching (Bulletproof)
   ========================================================================== */
function switchModalTab(tabId) {
  state.activeModalTab = tabId;
  
  // Highlight tab button
  document.querySelectorAll('.modal-tab').forEach(t => {
    t.classList.toggle('active', t.getAttribute('data-modaltab') === tabId);
  });

  // Show active tab pane
  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.toggle('active', pane.id === tabId);
  });
}

/* ==========================================================================
   Deep Game Detail Modal (Ficha Técnica Completa)
   ========================================================================== */
function openGameDetail(gameId) {
  const game = state.games.find(g => g.id === gameId);
  if (!game) return;

  state.activeModalGame = game;
  const isWished = isWishlisted(game.id);
  const scoreClass = game.rating >= 90 ? 'score-great' : 'score-good';

  // Modal Hero Header
  el.modalHero.style.backgroundImage = `url('${game.banner || game.cover}')`;
  el.modalHeroContent.innerHTML = `
    <img src="${game.cover}" alt="${game.title}" class="modal-cover-thumb">
    <div class="modal-header-info">
      <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.4rem; flex-wrap:wrap;">
        <span class="metascore-badge ${scoreClass}">${game.rating} Metascore</span>
        <span style="font-size:0.85rem; color:#d1d5db; background:rgba(255,255,255,0.1); padding:0.2rem 0.5rem; border-radius:4px;">
          ${game.esrb.rating}
        </span>
        <span style="font-size:0.85rem; color:#a78bfa; font-weight:700;">${game.year}</span>
      </div>

      <h2 class="modal-title">${game.title}</h2>
      <p class="modal-subtitle">${game.tagline}</p>

      <div class="modal-quick-stats">
        <span>🏢 <strong>${game.developer}</strong></span>
        <span>🏷️ <strong>${game.genre.join(', ')}</strong></span>
        <span>⏱️ Historia: <strong>${game.playtime.mainStory}</strong></span>
      </div>
    </div>
    <div style="align-self:flex-start; margin-left:auto;">
      <button class="action-btn ${isWished ? 'primary' : ''}" onclick="window.nexusApp.toggleWishlist('${game.id}')">
        ${isWished ? '❤️ Guardado' : '🤍 Guardar'}
      </button>
    </div>
  `;

  // Populate Tab 1: General & Lore
  const tabGeneral = document.getElementById('tab-general');
  if (tabGeneral) {
    tabGeneral.innerHTML = `
      <div class="spec-grid">
        <div class="spec-box">
          <div class="spec-title">Desarrollador</div>
          <div class="spec-value">${game.developer}</div>
        </div>
        <div class="spec-box">
          <div class="spec-title">Distribuidor / Publisher</div>
          <div class="spec-value">${game.publisher}</div>
        </div>
        <div class="spec-box">
          <div class="spec-title">Fecha de Estreno</div>
          <div class="spec-value">${game.releaseDate}</div>
        </div>
        <div class="spec-box">
          <div class="spec-title">Motor Gráfico (Engine)</div>
          <div class="spec-value">${game.engine}</div>
        </div>
      </div>

      <div style="margin-bottom: 2rem;">
        <h3 style="font-family:var(--font-display); font-size:1.4rem; color:var(--text-bright); margin-bottom:0.6rem;">
          📖 Sinopsis & Trasfondo
        </h3>
        <p style="font-size: 1.02rem; line-height: 1.7; color: #d1d5db;">
          ${game.synopsis}
        </p>
      </div>

      <div style="margin-bottom: 2rem;">
        <h3 style="font-family:var(--font-display); font-size:1.4rem; color:var(--text-bright); margin-bottom:0.6rem;">
          ⚡ Mecánicas & Características Destacadas
        </h3>
        <ul class="feature-list">
          ${game.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>

      <div class="spec-grid" style="margin-top: 1.5rem;">
        <div class="spec-box">
          <div class="spec-title">Modos de Juego Soportados</div>
          <div class="spec-value">${game.modes.join(' • ')}</div>
        </div>
        <div class="spec-box">
          <div class="spec-title">Compatibilidad con Mandos</div>
          <div class="spec-value">${game.controllerSupport}</div>
        </div>
        <div class="spec-box">
          <div class="spec-title">Idiomas de Doblaje / Audio</div>
          <div class="spec-value">${game.languages.audio.join(', ')}</div>
        </div>
        <div class="spec-box">
          <div class="spec-title">Idiomas de Texto / Subtítulos</div>
          <div class="spec-value">${game.languages.subtitles.slice(0, 4).join(', ')}...</div>
        </div>
      </div>
    `;
  }

  // Populate Tab 2: System Requirements
  const tabSpecs = document.getElementById('tab-specs');
  if (tabSpecs) {
    tabSpecs.innerHTML = `
      <h3 style="font-family:var(--font-display); font-size:1.4rem; color:var(--text-bright); margin-bottom:0.4rem;">
        💻 Especificaciones y Requisitos de Hardware para PC
      </h3>
      <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:1rem;">
        Compara tu configuración con los requerimientos oficiales de <strong>${game.title}</strong> para una experiencia óptima.
      </p>

      <div class="req-table-wrapper">
        <div class="req-col">
          <h4 class="req-col-title">Requisitos Mínimos (30 FPS / 1080p Bajo)</h4>
          <div class="req-item">
            <span class="req-item-label">Sistema Operativo</span>
            <span class="req-item-val">${game.requirements.minimum.os}</span>
          </div>
          <div class="req-item">
            <span class="req-item-label">Procesador (CPU)</span>
            <span class="req-item-val">${game.requirements.minimum.cpu}</span>
          </div>
          <div class="req-item">
            <span class="req-item-label">Tarjeta Gráfica (GPU)</span>
            <span class="req-item-val">${game.requirements.minimum.gpu}</span>
          </div>
          <div class="req-item">
            <span class="req-item-label">Memoria RAM</span>
            <span class="req-item-val">${game.requirements.minimum.ram}</span>
          </div>
          <div class="req-item">
            <span class="req-item-label">Almacenamiento Libre</span>
            <span class="req-item-val">${game.requirements.minimum.storage}</span>
          </div>
          <div class="req-item">
            <span class="req-item-label">DirectX</span>
            <span class="req-item-val">${game.requirements.minimum.directx}</span>
          </div>
        </div>

        <div class="req-col">
          <h4 class="req-col-title" style="color:var(--accent-emerald);">Requisitos Recomendados (60 FPS / 1080p-1440p Alto)</h4>
          <div class="req-item">
            <span class="req-item-label">Sistema Operativo</span>
            <span class="req-item-val">${game.requirements.recommended.os}</span>
          </div>
          <div class="req-item">
            <span class="req-item-label">Procesador (CPU)</span>
            <span class="req-item-val">${game.requirements.recommended.cpu}</span>
          </div>
          <div class="req-item">
            <span class="req-item-label">Tarjeta Gráfica (GPU)</span>
            <span class="req-item-val">${game.requirements.recommended.gpu}</span>
          </div>
          <div class="req-item">
            <span class="req-item-label">Memoria RAM</span>
            <span class="req-item-val">${game.requirements.recommended.ram}</span>
          </div>
          <div class="req-item">
            <span class="req-item-label">Almacenamiento Recomendado</span>
            <span class="req-item-val">${game.requirements.recommended.storage}</span>
          </div>
          <div class="req-item">
            <span class="req-item-label">DirectX</span>
            <span class="req-item-val">${game.requirements.recommended.directx}</span>
          </div>
        </div>
      </div>
    `;
  }

  // Populate Tab 3: Screenshot Gallery
  const tabGallery = document.getElementById('tab-gallery');
  if (tabGallery) {
    tabGallery.innerHTML = `
      <h3 style="font-family:var(--font-display); font-size:1.4rem; color:var(--text-bright); margin-bottom:1rem;">
        🖼️ Galería de Capturas en Alta Definición
      </h3>
      <div class="gallery-grid">
        ${game.screenshots.map((shot, idx) => `
          <div class="gallery-item" onclick="window.open('${shot}', '_blank')">
            <img src="${shot}" alt="${game.title} Screenshot ${idx+1}" loading="lazy">
          </div>
        `).join('')}
      </div>
    `;
  }

  // Populate Tab 4: Playtime & Reviews
  const tabReviews = document.getElementById('tab-reviews');
  if (tabReviews) {
    tabReviews.innerHTML = `
      <h3 style="font-family:var(--font-display); font-size:1.4rem; color:var(--text-bright); margin-bottom:0.4rem;">
        ⏱️ Duración Estimada de Partida (HowLongToBeat)
      </h3>
      <div class="playtime-row">
        <div class="playtime-card">
          <div class="spec-title">Historia Principal</div>
          <div class="playtime-hours">${game.playtime.mainStory}</div>
        </div>
        <div class="playtime-card">
          <div class="spec-title">Historia + Misiones Secundarias</div>
          <div class="playtime-hours">${game.playtime.extra}</div>
        </div>
        <div class="playtime-card">
          <div class="spec-title">100% Completista / Trofeos</div>
          <div class="playtime-hours">${game.playtime.completionist}</div>
        </div>
      </div>

      <div style="margin-top: 2rem;">
        <h3 style="font-family:var(--font-display); font-size:1.4rem; color:var(--text-bright); margin-bottom:0.8rem;">
          📊 Calificaciones de la Crítica Especializada
        </h3>
        <div class="spec-grid">
          <div class="spec-box">
            <div class="spec-title">Metacritic Score</div>
            <div class="spec-value" style="color:var(--accent-emerald); font-size:1.5rem;">${game.rating} / 100</div>
          </div>
          <div class="spec-box">
            <div class="spec-title">Calificación de Usuarios</div>
            <div class="spec-value" style="color:var(--accent-cyan); font-size:1.5rem;">${game.userScore} / 10</div>
          </div>
          <div class="spec-box">
            <div class="spec-title">Reseñas de la Comunidad</div>
            <div class="spec-value">${game.steamReviews}</div>
          </div>
        </div>
      </div>
    `;
  }

  // Populate Tab 5: Stores & Platforms
  const tabStores = document.getElementById('tab-stores');
  if (tabStores) {
    tabStores.innerHTML = `
      <h3 style="font-family:var(--font-display); font-size:1.4rem; color:var(--text-bright); margin-bottom:0.6rem;">
        🛒 Plataformas Disponibles & Tiendas Oficiales
      </h3>
      <p style="color:var(--text-muted); font-size:0.92rem; margin-bottom:1rem;">
        Accede a las páginas directas del videojuego en tiendas digitales autorizadas:
      </p>
      <div class="stores-grid">
        ${game.storeUrls.steam ? `<a href="${game.storeUrls.steam}" target="_blank" rel="noopener noreferrer" class="store-link-btn">🎮 Steam Store</a>` : ''}
        ${game.storeUrls.epic ? `<a href="${game.storeUrls.epic}" target="_blank" rel="noopener noreferrer" class="store-link-btn">⚡ Epic Games Store</a>` : ''}
        ${game.storeUrls.playstation ? `<a href="${game.storeUrls.playstation}" target="_blank" rel="noopener noreferrer" class="store-link-btn">🟦 PlayStation Store</a>` : ''}
        ${game.storeUrls.xbox ? `<a href="${game.storeUrls.xbox}" target="_blank" rel="noopener noreferrer" class="store-link-btn">🟩 Xbox Store / Game Pass</a>` : ''}
        ${game.storeUrls.switch || game.storeUrls.nintendo ? `<a href="${game.storeUrls.switch || game.storeUrls.nintendo}" target="_blank" rel="noopener noreferrer" class="store-link-btn">🔴 Nintendo eShop</a>` : ''}
        ${game.storeUrls.gog ? `<a href="${game.storeUrls.gog}" target="_blank" rel="noopener noreferrer" class="store-link-btn">🪐 GOG.com (DRM-Free)</a>` : ''}
      </div>
    `;
  }

  // Reset tab to first
  switchModalTab('tab-general');
  el.detailModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (el.detailModal) el.detailModal.classList.remove('active');
  document.body.style.overflow = '';
}

/* ==========================================================================
   Wishlist / Favorites System
   ========================================================================== */
function isWishlisted(gameId) {
  return state.wishlist.includes(gameId);
}

function toggleWishlist(gameId) {
  const idx = state.wishlist.indexOf(gameId);
  const game = state.games.find(g => g.id === gameId);

  if (idx > -1) {
    state.wishlist.splice(idx, 1);
    showToast(`"${game.shortTitle || game.title}" eliminado de guardados`);
  } else {
    state.wishlist.push(gameId);
    showToast(`"${game.shortTitle || game.title}" añadido a guardados ⭐`);
  }

  localStorage.setItem('benjagames_wishlist', JSON.stringify(state.wishlist));
  updateWishlistBadge();
  renderGamesGrid();
  renderHeroSpotlight();
  renderWishlistDrawerItems();
}

function updateWishlistBadge() {
  if (el.wishlistCounter) el.wishlistCounter.textContent = state.wishlist.length;
}

function renderWishlistDrawerItems() {
  if (!el.wishlistItemsList) return;

  if (state.wishlist.length === 0) {
    el.wishlistItemsList.innerHTML = `
      <div style="text-align:center; padding:3rem 1rem; color:var(--text-muted);">
        <span style="font-size:2.5rem; display:block; margin-bottom:0.5rem;">🤍</span>
        <p>No tienes juegos guardados todavía.</p>
        <p style="font-size:0.8rem; margin-top:0.3rem;">Haz clic en el corazón de cualquier tarjeta para agregarlo aquí.</p>
      </div>
    `;
    return;
  }

  const wishedGames = state.games.filter(g => state.wishlist.includes(g.id));
  el.wishlistItemsList.innerHTML = wishedGames.map(game => `
    <div class="wishlist-item">
      <img src="${game.cover}" alt="${game.title}" class="wishlist-thumb">
      <div class="wishlist-info">
        <h4 class="wishlist-title">${game.title}</h4>
        <div class="wishlist-price">
          ${game.price === 0 ? 'Gratis' : `$${(game.discountedPrice || game.price).toFixed(2)}`}
        </div>
      </div>
      <button 
        style="color:var(--accent-cyan); font-size:0.82rem; font-weight:700;"
        onclick="window.nexusApp.openGameDetail('${game.id}'); window.nexusApp.closeWishlist();"
      >
        Ver
      </button>
      <button 
        style="color:var(--text-dim); font-size:1.1rem; padding:0.2rem;" 
        title="Eliminar"
        onclick="window.nexusApp.toggleWishlist('${game.id}')"
      >
        ✕
      </button>
    </div>
  `).join('');
}

function openWishlist() {
  renderWishlistDrawerItems();
  if (el.wishlistDrawerOverlay) el.wishlistDrawerOverlay.classList.add('active');
  if (el.wishlistDrawerPanel) el.wishlistDrawerPanel.classList.add('active');
}

function closeWishlist() {
  if (el.wishlistDrawerOverlay) el.wishlistDrawerOverlay.classList.remove('active');
  if (el.wishlistDrawerPanel) el.wishlistDrawerPanel.classList.remove('active');
}

/* ==========================================================================
   Comparison System (Frente a Frente)
   ========================================================================== */
function isComparedGame(gameId) {
  return state.compareList.includes(gameId);
}

function toggleCompare(gameId) {
  const idx = state.compareList.indexOf(gameId);
  const game = state.games.find(g => g.id === gameId);

  if (idx > -1) {
    state.compareList.splice(idx, 1);
    showToast(`Eliminado del comparador`);
  } else {
    if (state.compareList.length >= 3) {
      showToast(`Puedes comparar un máximo de 3 juegos a la vez`);
      return;
    }
    state.compareList.push(gameId);
    showToast(`Añadido al comparador ⚖️ (${state.compareList.length}/3)`);
  }

  localStorage.setItem('benjagames_compare', JSON.stringify(state.compareList));
  updateCompareBadge();
  renderGamesGrid();
  renderComparisonTable();
}

function updateCompareBadge() {
  if (!el.compareCounter) return;
  el.compareCounter.textContent = state.compareList.length;
  el.compareCounter.style.display = state.compareList.length > 0 ? 'inline-block' : 'none';
}

function renderComparisonTable() {
  if (!el.comparisonWrapper) return;

  if (state.compareList.length === 0) {
    el.comparisonWrapper.innerHTML = `
      <div style="text-align:center; padding:3rem 1rem; color:var(--text-muted);">
        <span style="font-size:3rem; display:block; margin-bottom:0.6rem;">⚖️</span>
        <h3 style="color:var(--text-bright); font-size:1.2rem; margin-bottom:0.4rem;">No hay juegos seleccionados para comparar</h3>
        <p>Selecciona un juego en el desplegable de arriba o haz clic en ⚖️ en cualquier tarjeta del catálogo.</p>
      </div>
    `;
    return;
  }

  const games = state.games.filter(g => state.compareList.includes(g.id));
  el.comparisonWrapper.innerHTML = `
    <div class="comparison-table-wrapper">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width:200px;">Característica</th>
            ${games.map(g => `
              <th>
                <div style="display:flex; align-items:center; gap:0.6rem;">
                  <img src="${g.cover}" style="width:40px; height:40px; object-fit:cover; border-radius:4px;">
                  <div>
                    <div style="font-size:0.95rem; font-weight:700;">${g.title}</div>
                    <button style="font-size:0.75rem; color:var(--accent-crimson);" onclick="window.nexusApp.toggleCompare('${g.id}')">Quitar ✕</button>
                  </div>
                </div>
              </th>
            `).join('')}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Puntuación Metascore</strong></td>
            ${games.map(g => `<td><strong style="color:var(--accent-emerald); font-size:1.2rem;">${g.rating}</strong> / 100</td>`).join('')}
          </tr>
          <tr>
            <td><strong>Precio Habitual</strong></td>
            ${games.map(g => `<td>${g.price === 0 ? 'Gratis' : `$${g.price.toFixed(2)}`}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>Géneros</strong></td>
            ${games.map(g => `<td>${g.genre.join(', ')}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>Duración Historia</strong></td>
            ${games.map(g => `<td><strong style="color:var(--accent-cyan);">${g.playtime.mainStory}</strong> (100%: ${g.playtime.completionist})</td>`).join('')}
          </tr>
          <tr>
            <td><strong>Motor Gráfico</strong></td>
            ${games.map(g => `<td>${g.engine}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>Plataformas</strong></td>
            ${games.map(g => `<td>${g.platforms.join(', ')}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>Modos</strong></td>
            ${games.map(g => `<td>${g.modes.join(', ')}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>GPU Recomendada</strong></td>
            ${games.map(g => `<td>${g.requirements.recommended.gpu}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>RAM Recomendada</strong></td>
            ${games.map(g => `<td>${g.requirements.recommended.ram}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>Almacenamiento</strong></td>
            ${games.map(g => `<td>${g.requirements.minimum.storage}</td>`).join('')}
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

function openComparisonModal() {
  renderComparisonTable();
  if (el.compareModal) {
    el.compareModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeComparisonModal() {
  if (el.compareModal) el.compareModal.classList.remove('active');
  document.body.style.overflow = '';
}

/* ==========================================================================
   Random Game Roulette
   ========================================================================== */
function openRouletteModal() {
  if (el.rouletteModal) {
    el.rouletteModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeRouletteModal() {
  if (el.rouletteModal) el.rouletteModal.classList.remove('active');
  document.body.style.overflow = '';
}

function spinRoulette() {
  const pool = state.filteredGames.length > 0 ? state.filteredGames : state.games;
  if (pool.length === 0) return;

  el.rouletteDisplayBox.classList.add('spinning');
  el.btnSpinRoulette.disabled = true;

  let iterations = 0;
  const maxIterations = 16;
  const interval = setInterval(() => {
    const randomGame = pool[Math.floor(Math.random() * pool.length)];
    el.rouletteDisplayBox.innerHTML = `
      <img src="${randomGame.cover}" style="width:110px; height:150px; object-fit:cover; border-radius:8px; margin-bottom:0.7rem; box-shadow:0 8px 20px rgba(0,0,0,0.7);">
      <h3 style="font-family:var(--font-display); font-size:1.3rem; color:var(--text-bright);">${randomGame.title}</h3>
      <span style="font-size:0.85rem; color:var(--accent-cyan);">${randomGame.genre.slice(0, 2).join(' • ')}</span>
    `;

    iterations++;
    if (iterations >= maxIterations) {
      clearInterval(interval);
      el.rouletteDisplayBox.classList.remove('spinning');
      el.btnSpinRoulette.disabled = false;

      // Final winner
      const finalWinner = pool[Math.floor(Math.random() * pool.length)];
      el.rouletteDisplayBox.innerHTML = `
        <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:1px; color:var(--accent-emerald); font-weight:800; margin-bottom:0.4rem;">
          ✨ ¡Tu Juego Seleccionado en BenjaGames! ✨
        </div>
        <img src="${finalWinner.cover}" style="width:130px; height:170px; object-fit:cover; border-radius:8px; margin-bottom:0.8rem; border:2px solid var(--accent-cyan); box-shadow:0 0 25px rgba(0,240,255,0.4);">
        <h3 style="font-family:var(--font-display); font-size:1.5rem; color:var(--text-bright); margin-bottom:0.2rem;">${finalWinner.title}</h3>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.8rem;">${finalWinner.tagline}</p>
        <button class="btn-hero-primary" onclick="window.nexusApp.closeRouletteModal(); window.nexusApp.openGameDetail('${finalWinner.id}');">
          Ver Ficha Técnica Detallada
        </button>
      `;
    }
  }, 90);
}

/* ==========================================================================
   Toast Notifications
   ========================================================================== */
function showToast(message) {
  if (!el.toastContainer) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>⚡</span> <span>${message}</span>`;
  el.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

/* ==========================================================================
   Remove Filter Badge Helper
   ========================================================================== */
function removeFilter(key) {
  if (key === 'query') {
    state.filters.query = '';
    el.searchInput.value = '';
    el.clearSearchBtn.style.display = 'none';
  } else if (key === 'genre') {
    state.filters.genre = 'Todos';
    el.filterGenre.value = 'Todos';
  } else if (key === 'platform') {
    state.filters.platform = 'Todas';
    el.filterPlatform.value = 'Todas';
  } else if (key === 'minScore') {
    state.filters.minScore = 60;
    el.filterScoreSlider.value = 60;
    el.scoreSliderValue.textContent = '60+';
  } else if (key === 'priceCategory') {
    state.filters.priceCategory = 'all';
    el.filterPrice.value = 'all';
  } else if (key === 'esrb') {
    state.filters.esrb = 'Todas';
    el.filterEsrb.value = 'Todas';
  } else if (key.startsWith('mode-')) {
    const mode = key.replace('mode-', '');
    state.filters.modes = state.filters.modes.filter(m => m !== mode);
    el.filterModeCheckboxes.forEach(cb => {
      if (cb.value === mode) cb.checked = false;
    });
  }
  applyFiltersAndRender();
}

function resetAllFilters() {
  state.filters.query = '';
  state.filters.genre = 'Todos';
  state.filters.platform = 'Todas';
  state.filters.minScore = 60;
  state.filters.priceCategory = 'all';
  state.filters.esrb = 'Todas';
  state.filters.modes = [];
  state.filters.tab = 'all';

  if (el.searchInput) {
    el.searchInput.value = '';
    el.clearSearchBtn.style.display = 'none';
  }
  if (el.filterGenre) el.filterGenre.value = 'Todos';
  if (el.filterPlatform) el.filterPlatform.value = 'Todas';
  if (el.filterScoreSlider) {
    el.filterScoreSlider.value = 60;
    el.scoreSliderValue.textContent = '60+';
  }
  if (el.filterPrice) el.filterPrice.value = 'all';
  if (el.filterEsrb) el.filterEsrb.value = 'Todas';
  if (el.filterModeCheckboxes) el.filterModeCheckboxes.forEach(cb => cb.checked = false);

  if (el.quickFilterTabs) {
    const tabButtons = el.quickFilterTabs.querySelectorAll('.tab-btn');
    tabButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-tab') === 'all'));
  }

  applyFiltersAndRender();
  showToast('Filtros restablecidos en BenjaGames');
}

/* ==========================================================================
   Event Listeners
   ========================================================================== */
function setupEventListeners() {
  // Search
  if (el.searchInput) {
    el.searchInput.addEventListener('input', (e) => {
      state.filters.query = e.target.value;
      el.clearSearchBtn.style.display = e.target.value ? 'block' : 'none';
      handleAutocompleteSearch(e.target.value);
      applyFiltersAndRender();
    });
  }

  if (el.clearSearchBtn) {
    el.clearSearchBtn.addEventListener('click', () => {
      state.filters.query = '';
      el.searchInput.value = '';
      el.clearSearchBtn.style.display = 'none';
      el.autocompleteList.classList.remove('active');
      applyFiltersAndRender();
    });
  }

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header-search') && el.autocompleteList) {
      el.autocompleteList.classList.remove('active');
    }
  });

  // Filter Dropdowns
  if (el.filterGenre) {
    el.filterGenre.addEventListener('change', (e) => {
      state.filters.genre = e.target.value;
      applyFiltersAndRender();
    });
  }

  if (el.filterPlatform) {
    el.filterPlatform.addEventListener('change', (e) => {
      state.filters.platform = e.target.value;
      applyFiltersAndRender();
    });
  }

  if (el.filterScoreSlider) {
    el.filterScoreSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      state.filters.minScore = val;
      el.scoreSliderValue.textContent = `${val}+`;
      applyFiltersAndRender();
    });
  }

  if (el.filterPrice) {
    el.filterPrice.addEventListener('change', (e) => {
      state.filters.priceCategory = e.target.value;
      applyFiltersAndRender();
    });
  }

  if (el.filterEsrb) {
    el.filterEsrb.addEventListener('change', (e) => {
      state.filters.esrb = e.target.value;
      applyFiltersAndRender();
    });
  }

  if (el.filterModeCheckboxes) {
    el.filterModeCheckboxes.forEach(cb => {
      cb.addEventListener('change', () => {
        const selected = Array.from(el.filterModeCheckboxes)
          .filter(c => c.checked)
          .map(c => c.value);
        state.filters.modes = selected;
        applyFiltersAndRender();
      });
    });
  }

  if (el.btnResetFilters) el.btnResetFilters.addEventListener('click', resetAllFilters);
  if (el.btnEmptyReset) el.btnEmptyReset.addEventListener('click', resetAllFilters);

  // Quick Filter Tabs
  if (el.quickFilterTabs) {
    el.quickFilterTabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.tab-btn');
      if (!btn) return;
      el.quickFilterTabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.filters.tab = btn.getAttribute('data-tab');
      applyFiltersAndRender();
    });
  }

  // Sorting
  if (el.sortSelect) {
    el.sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      applyFiltersAndRender();
    });
  }

  // View Switcher
  if (el.viewGridBtn) {
    el.viewGridBtn.addEventListener('click', () => {
      state.viewMode = 'grid';
      el.viewGridBtn.classList.add('active');
      el.viewListBtn.classList.remove('active');
      renderGamesGrid();
    });
  }

  if (el.viewListBtn) {
    el.viewListBtn.addEventListener('click', () => {
      state.viewMode = 'list';
      el.viewListBtn.classList.add('active');
      el.viewGridBtn.classList.remove('active');
      renderGamesGrid();
    });
  }

  // Detail Modal Events
  if (el.modalCloseBtn) el.modalCloseBtn.addEventListener('click', closeModal);
  if (el.detailModal) {
    el.detailModal.addEventListener('click', (e) => {
      if (e.target === el.detailModal) closeModal();
    });
  }

  // Comparison in-modal adder
  if (el.btnAddToCompare && el.compareAddSelect) {
    el.btnAddToCompare.addEventListener('click', () => {
      const val = el.compareAddSelect.value;
      if (!val) {
        showToast('Selecciona un juego del menú desplegable');
        return;
      }
      toggleCompare(val);
    });
  }

  // Wishlist Drawer Events
  if (el.wishlistBtn) el.wishlistBtn.addEventListener('click', openWishlist);
  if (el.drawerCloseBtn) el.drawerCloseBtn.addEventListener('click', closeWishlist);
  if (el.wishlistDrawerOverlay) el.wishlistDrawerOverlay.addEventListener('click', closeWishlist);
  if (el.btnClearWishlist) {
    el.btnClearWishlist.addEventListener('click', () => {
      state.wishlist = [];
      localStorage.removeItem('benjagames_wishlist');
      updateWishlistBadge();
      renderWishlistDrawerItems();
      renderGamesGrid();
      renderHeroSpotlight();
      showToast('Lista de guardados vaciada');
    });
  }

  // Comparison Modal Events
  if (el.compareBtn) el.compareBtn.addEventListener('click', openComparisonModal);
  if (el.compareModalClose) el.compareModalClose.addEventListener('click', closeComparisonModal);
  if (el.compareModal) {
    el.compareModal.addEventListener('click', (e) => {
      if (e.target === el.compareModal) closeComparisonModal();
    });
  }

  // Roulette Events
  if (el.rouletteBtn) el.rouletteBtn.addEventListener('click', openRouletteModal);
  if (el.rouletteModalClose) el.rouletteModalClose.addEventListener('click', closeRouletteModal);
  if (el.btnSpinRoulette) el.btnSpinRoulette.addEventListener('click', spinRoulette);
  if (el.rouletteModal) {
    el.rouletteModal.addEventListener('click', (e) => {
      if (e.target === el.rouletteModal) closeRouletteModal();
    });
  }

  // Keyboard accessibility
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeComparisonModal();
      closeWishlist();
      closeRouletteModal();
      if (el.autocompleteList) el.autocompleteList.classList.remove('active');
    }
  });
}

/* ==========================================================================
   Expose Public API on window for HTML onclick handlers
   ========================================================================== */
window.nexusApp = {
  openGameDetail,
  closeModal,
  switchModalTab,
  toggleWishlist,
  toggleCompare,
  openComparisonModal,
  closeComparisonModal,
  openWishlist,
  closeWishlist,
  openRouletteModal,
  closeRouletteModal,
  removeFilter,
  resetAllFilters
};

// Initialize when DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
