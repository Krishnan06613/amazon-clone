// navbar

// Currency box 

const navLanguageBtn = document.querySelector(".nav-language");
const currencyBox = document.querySelector(".nav-currency");
const saveButton = document.getElementById("save-currency");

navLanguageBtn?.addEventListener("click", function (e) {

  e.preventDefault();

  currencyBox.style.display =
    currencyBox.style.display === "block" ? "none" : "block";

});

saveButton?.addEventListener("click", function () {

  currencyBox.style.display = "none";

});



// ===========================
// Active Category
// ===========================

const categories = document.querySelectorAll(".category");

categories.forEach(category => {

  if (category.id !== "menu-btn") {

    category.addEventListener("click", () => {

      categories.forEach(item => {

        if (item.id !== "menu-btn") {
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

menuBtn.addEventListener("click", function (e) {

  e.preventDefault();

  sidebar.classList.add("active");
  overlay.classList.add("active");
  closeBtn.classList.add("active");

});

closeBtn.addEventListener("click", function () {

  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  closeBtn.classList.remove("active");

});

overlay.addEventListener("click", function () {

  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  closeBtn.classList.remove("active");

});

/* ==========================================================================
   AMAZON CLONE - HOME APPLIANCES PAGE (appliances.js)
   Vanilla JS (ES6) - No frameworks
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ------------------------------------------------------------------------
     0. CACHE DOM REFERENCES
  ------------------------------------------------------------------------ */

  // Products Grid
  const productsGrid = document.querySelector(".products-grid");

  // Product Sorting Dropdown
  const sortSelect = document.getElementById("sortProducts");

  // Search Input
  const searchInput = document.querySelector(".search-bar-s1");

  // Filter Sidebar Checkboxes
  const categoryButtons = document.querySelectorAll(
    '.filter-sidebar input[type="checkbox"]'
  );

  // Cart Count
  const cartCountEl = document.getElementById("maincart");

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

  // Extract clean product data
  const getProductData = (card) => {

    const title =
      card.querySelector("h3 a")?.textContent.trim() ||
      "Unknown Product";

    const image =
      card.querySelector("img")?.src || "";

    const price =
      Number(card.dataset.price) || 0;

    const category =
      card.dataset.category || "";

    return {
      title,
      image,
      price,
      category
    };

  };

  // Toast notification
  const showToast = (message) => {

    let toast = document.querySelector(".az-toast");

    if (!toast) {

      toast = document.createElement("div");

      toast.className = "az-toast";

      Object.assign(toast.style, {
        position: "fixed",
        bottom: "24px",
        left: "50%",
        transform: "translateX(-50%) translateY(20px)",
        background: "#232f3e",
        color: "#fff",
        padding: "12px 20px",
        borderRadius: "6px",
        fontSize: "14px",
        boxShadow: "0 4px 12px rgba(0,0,0,.25)",
        zIndex: "9999",
        opacity: "0",
        transition: "0.25s",
        pointerEvents: "none"
      });

      document.body.appendChild(toast);

    }

    toast.textContent = message;

    toast.style.opacity = "1";
    toast.style.transform = "translateX(-50%) translateY(0)";

    clearTimeout(toast._hideTimer);

    toast._hideTimer = setTimeout(() => {

      toast.style.opacity = "0";
      toast.style.transform = "translateX(-50%) translateY(20px)";

    }, 2200);

  };

  /* ------------------------------------------------------------------------
     2. PRODUCT SORTING SYSTEM
  ------------------------------------------------------------------------ */
  /* ==========================================
     PRODUCT FILTER
  ========================================== */

  const categoryFilters = document.querySelectorAll(".category-filter");
  const brandFilters = document.querySelectorAll(".brand-filter");
  const priceFilters = document.querySelectorAll('input[name="price"]');
  const ratingFilters = document.querySelectorAll(".rating-filter");
  const stockFilter = document.querySelector(".stock-filter");

  const productCards = document.querySelectorAll(".product-card");

  function filterProducts() {

    // Selected Categories
    const selectedCategories = [...categoryFilters]
      .filter(item => item.checked)
      .map(item => item.value);

    // Selected Brands
    const selectedBrands = [...brandFilters]
      .filter(item => item.checked)
      .map(item => item.value);

    // Selected Rating
    const selectedRatings = [...ratingFilters]
      .filter(item => item.checked)
      .map(item => Number(item.value));

    // Selected Price
    const selectedPrice = document.querySelector(
      'input[name="price"]:checked'
    )?.value;

    // Stock
    const onlyStock = stockFilter.checked;

    productCards.forEach(card => {

      const category = card.dataset.category;
      const brand = card.dataset.brand;
      const price = Number(card.dataset.price);
      const rating = Number(card.dataset.rating);
      const stock = card.dataset.stock;

      let show = true;

      /* CATEGORY */

      if (
        selectedCategories.length &&
        !selectedCategories.includes(category)
      ) {
        show = false;
      }

      /* BRAND */

      if (
        selectedBrands.length &&
        !selectedBrands.includes(brand)
      ) {
        show = false;
      }

      /* PRICE */

      if (selectedPrice) {

        switch (selectedPrice) {

          case "under10000":
            if (price >= 10000) show = false;
            break;

          case "10000-25000":
            if (price < 10000 || price > 25000)
              show = false;
            break;

          case "25000-50000":
            if (price < 25000 || price > 50000)
              show = false;
            break;

          case "50000above":
            if (price <= 50000)
              show = false;
            break;
        }

      }

      /* RATING */

      if (selectedRatings.length) {

        const match = selectedRatings.some(r => rating >= r);

        if (!match)
          show = false;

      }

      /* STOCK */

      if (onlyStock && stock !== "instock") {

        show = false;

      }

      card.style.display = show ? "" : "none";

    });

  }

  /* ==========================
     EVENTS
  ========================== */

  categoryFilters.forEach(item =>
    item.addEventListener("change", filterProducts)
  );

  brandFilters.forEach(item =>
    item.addEventListener("change", filterProducts)
  );

  priceFilters.forEach(item =>
    item.addEventListener("change", filterProducts)
  );

  ratingFilters.forEach(item =>
    item.addEventListener("change", filterProducts)
  );

  stockFilter.addEventListener("change", filterProducts);

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