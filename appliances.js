// navbar

// Currency box 

const navLanguageBtn = document.querySelector(".nav-language");
const currencyBox = document.querySelector(".nav-currency");
const saveButton = document.getElementById("save-currency");

navLanguageBtn?.addEventListener("click", function(e){

    e.preventDefault();

    currencyBox.style.display =
        currencyBox.style.display === "block" ? "none" : "block";

});

saveButton?.addEventListener("click", function(){

    currencyBox.style.display = "none";

});



// ===========================
// Active Category
// ===========================

const categories = document.querySelectorAll(".category");

categories.forEach(category => {

    if(category.id !== "menu-btn"){

        category.addEventListener("click", () => {

            categories.forEach(item => {

                if(item.id !== "menu-btn"){
                    item.classList.remove("active");
                }

            });

            category.classList.add("active");

        });

    }

});

// ===========================
// AMAZON SIDE NAVIGATION
// ===========================

const menuBtn = document.getElementById("menu-btn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", function(e){

    e.preventDefault();

    sidebar.classList.add("active");
    overlay.classList.add("active");
    closeBtn.classList.add("active");

});

closeBtn.addEventListener("click", function(){

    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    closeBtn.classList.remove("active");

});

overlay.addEventListener("click", function(){

    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    closeBtn.classList.remove("active");

});

/* ==========================================================================
   AMAZON CLONE - HOME APPLIANCES PAGE (appliances.js)
   Vanilla JS (ES6) - No frameworks
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
     0. CACHE DOM REFERENCES
  ------------------------------------------------------------------------ */
  const productsGrid = document.querySelector('.products-grid');
  const sortSelect = document.getElementById('sortProducts');
  const searchInput = document.querySelector('.navbar-search input, #searchInput, input[type="search"]');
  const categoryButtons = document.querySelectorAll('[data-filter-category]');
  const cartCountEl = document.querySelector('.cart-count');

  // Guard: if grid is missing, nothing else can run
  if (!productsGrid) return;

  // Keep original DOM order for "Featured" sort
  const originalOrder = Array.from(productsGrid.children);

  /* ------------------------------------------------------------------------
     1. UTILITIES
  ------------------------------------------------------------------------ */

  // Safe localStorage getter
  const getStorage = (key) => {
    try {
      return JSON.parse(localStorage.getItem(key)) || [];
    } catch {
      return [];
    }
  };

  // Safe localStorage setter
  const setStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  // Extract clean product data from a product-card element
  const getProductData = (card) => {
    const title = card.querySelector('h3 a')?.textContent.trim() || 'Unknown Product';
    const image = card.querySelector('img')?.getAttribute('src') || '';
    const price = Number(card.getAttribute('data-price')) || 0;
    const category = card.getAttribute('data-category') || '';
    return { title, image, price, category };
  };

  // Toast notification (Amazon style) instead of plain alert
  const showToast = (message) => {
    let toast = document.querySelector('.az-toast');

    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'az-toast';
      Object.assign(toast.style, {
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%) translateY(20px)',
        background: '#232f3e',
        color: '#fff',
        padding: '12px 20px',
        borderRadius: '6px',
        fontSize: '14px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
        zIndex: '9999',
        opacity: '0',
        transition: 'opacity 0.25s ease, transform 0.25s ease',
        pointerEvents: 'none'
      });
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';

    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(20px)';
    }, 2200);
  };

  /* ------------------------------------------------------------------------
     2. PRODUCT SORTING SYSTEM
  ------------------------------------------------------------------------ */
  const sortProducts = (criteria) => {
    const cards = Array.from(productsGrid.children);

    switch (criteria) {
      case 'low':
        cards.sort((a, b) => Number(a.dataset.price) - Number(b.dataset.price));
        break;

      case 'high':
        cards.sort((a, b) => Number(b.dataset.price) - Number(a.dataset.price));
        break;

      case 'new':
        // Newest first = reverse of current DOM order
        cards.reverse();
        break;

      case 'rating':
        cards.sort((a, b) => {
          const ratingA = Number(a.querySelector('.rating-count')?.textContent.replace(/,/g, '')) || 0;
          const ratingB = Number(b.querySelector('.rating-count')?.textContent.replace(/,/g, '')) || 0;
          return ratingB - ratingA;
        });
        break;

      case 'featured':
      default:
        // Restore original order
        originalOrder.forEach((card) => productsGrid.appendChild(card));
        return;
    }

    cards.forEach((card) => productsGrid.appendChild(card));
  };

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortProducts(e.target.value);
    });
  }

  /* ------------------------------------------------------------------------
     3. CART COUNTER UPDATE
  ------------------------------------------------------------------------ */
  const updateCartCount = () => {
    if (!cartCountEl) return;
    const cart = getStorage('cart');
    const totalQty = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    cartCountEl.textContent = totalQty;
  };

  /* ------------------------------------------------------------------------
     4. ADD TO CART FUNCTIONALITY
  ------------------------------------------------------------------------ */
  const addToCart = (card) => {
    const product = getProductData(card);
    const cart = getStorage('cart');

    // If item already exists, increase quantity
    const existing = cart.find((item) => item.title === product.title);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    setStorage('cart', cart);
    updateCartCount();
    showToast('Product added to cart');
  };

  /* ------------------------------------------------------------------------
     5. BUY NOW FUNCTIONALITY
  ------------------------------------------------------------------------ */
  const buyNow = (card) => {
    const product = getProductData(card);
    setStorage('buyNowItem', { ...product, quantity: 1 });

    // Attempt redirect; fall back to toast if checkout page is unavailable
    fetch('checkout.html', { method: 'HEAD' })
      .then((res) => {
        if (res.ok) {
          window.location.href = 'checkout.html';
        } else {
          showToast('Redirecting to checkout');
        }
      })
      .catch(() => {
        showToast('Redirecting to checkout');
      });
  };

  /* ------------------------------------------------------------------------
     6. WISHLIST FUNCTIONALITY
  ------------------------------------------------------------------------ */
  const getWishlistKey = (card) => {
    const title = card.querySelector('h3 a')?.textContent.trim() || '';
    return title;
  };

  const initWishlistStates = () => {
    const wishlist = getStorage('wishlist');
    productsGrid.querySelectorAll('.wishlist').forEach((heart) => {
      const card = heart.closest('.product-card');
      const key = getWishlistKey(card);
      if (wishlist.includes(key)) {
        heart.classList.add('active');
        const icon = heart.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-regular');
          icon.classList.add('fa-solid');
        }
      }
    });
  };

  const toggleWishlist = (heart) => {
    const card = heart.closest('.product-card');
    if (!card) return;

    const key = getWishlistKey(card);
    let wishlist = getStorage('wishlist');
    const icon = heart.querySelector('i');
    const isActive = heart.classList.toggle('active');

    if (isActive) {
      wishlist.push(key);
      if (icon) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
      }
      showToast('Added to wishlist');
    } else {
      wishlist = wishlist.filter((item) => item !== key);
      if (icon) {
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
      }
      showToast('Removed from wishlist');
    }

    setStorage('wishlist', wishlist);
  };

  /* ------------------------------------------------------------------------
     7. PRODUCT SEARCH (only runs if a search input exists)
  ------------------------------------------------------------------------ */
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();

      productsGrid.querySelectorAll('.product-card').forEach((card) => {
        const title = card.querySelector('h3 a')?.textContent.toLowerCase() || '';
        card.style.display = title.includes(query) ? '' : 'none';
      });
    });
  }

  /* ------------------------------------------------------------------------
     8. PRODUCT CATEGORY FILTERING (only runs if category buttons exist)
  ------------------------------------------------------------------------ */
  if (categoryButtons.length) {
    categoryButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-filter-category');

        categoryButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        productsGrid.querySelectorAll('.product-card').forEach((card) => {
          const matches = category === 'all' || card.dataset.category === category;
          card.style.display = matches ? '' : 'none';
        });
      });
    });
  }

  /* ------------------------------------------------------------------------
     9. EVENT DELEGATION - CART / BUY / WISHLIST CLICKS
  ------------------------------------------------------------------------ */
  productsGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    if (!card) return;

    if (e.target.closest('.cart-btn')) {
      e.preventDefault();
      addToCart(card);
    } else if (e.target.closest('.buy-btn')) {
      e.preventDefault();
      buyNow(card);
    } else if (e.target.closest('.wishlist')) {
      e.preventDefault();
      toggleWishlist(e.target.closest('.wishlist'));
    }
  });

  /* ------------------------------------------------------------------------
     10. INIT ON LOAD
  ------------------------------------------------------------------------ */
  updateCartCount();
  initWishlistStates();

});