// --- Knowlet Unit Navigation + Top Bar (Icon Only + Auto Hide) ---
(function () {
  const currentUrl = window.location.href.split('?')[0]; // Remove query parameters for cleaner history
  const match = currentUrl.match(/(.*_unit_)(\d+)(\.html)?$/);
  const container = document.querySelector(".container");

  // Create top bar container
  const topBar = document.createElement("div");
  topBar.className = "unit-top-bar";

  // --- 1. Back Button ---
  const backBtn = document.createElement("button");
  backBtn.id = "back-btn";
  backBtn.title = "Go Back";
  backBtn.onclick = () => {
    const currentUrl = window.location.href;
    const backUrl = currentUrl.replace(
      /\/notes\/([a-z0-9_]+)_unit_\d+(\.html)?$/i,
      "/$1.html"
    );
    window.location.href = backUrl;
  };
  topBar.appendChild(backBtn);
  
  // --- 2. Previous / Next Unit Buttons (Always Visible, Disabled When Unavailable) ---
  const prev = document.createElement("a");
  prev.className = "unit-prev";
  const next = document.createElement("a");
  next.className = "unit-next";

  if (match) {
    const base = match[1];
    const currentNum = parseInt(match[2]);
    const ext = match[3] || ".html";

    // Previous
    if (currentNum > 1) {
      prev.href = `${base}${currentNum - 1}${ext}`;
      prev.title = `Previous Unit (${currentNum - 1})`;
    } else {
      prev.classList.add("disabled");
      prev.title = "No Previous Unit";
    }

    // Next
    if (currentNum < 5) {
      next.href = `${base}${currentNum + 1}${ext}`;
      next.title = `Next Unit (${currentNum + 1})`;
    } else {
      next.classList.add("disabled");
      next.title = "No Next Unit";
    }
  }

  topBar.appendChild(prev);
  topBar.appendChild(next);

  // --- 3. Favourite Button ---
  const FAV_KEY = "unit_page_favourites";
  const favBtn = document.createElement("button");
  favBtn.id = "fav-btn";
  favBtn.title = "Add to Favourites";

  function getFavourites() {
    return JSON.parse(localStorage.getItem(FAV_KEY) || "[]");
  }

  function isFavourite(url) {
    return getFavourites().some(item => item.url === url);
  }

  function toggleFavourite() {
    let favs = getFavourites();
    const index = favs.findIndex(item => item.url === currentUrl);

    if (index >= 0) {
      favs.splice(index, 1);
    } else {
      favs.push({ url: currentUrl, title: document.title });
    }

    localStorage.setItem(FAV_KEY, JSON.stringify(favs));
    renderFavouriteState();
  }

  function renderFavouriteState() {
    const favActive = isFavourite(currentUrl);
    favBtn.classList.toggle("favourited", favActive);
    favBtn.title = favActive ? "Remove from Favourites" : "Add to Favourites";
  }

  favBtn.onclick = toggleFavourite;
  renderFavouriteState();
  topBar.appendChild(favBtn);
  
  const pageTitle = document.title;
  
  // =================================================================
  // 1. Page History Tracker
  // =================================================================
  
  const HISTORY_KEY = 'unit_page_history';
  
  /**
   * Updates the history in localStorage, limiting the list size.
   */
   
  function updateHistory() {
      // Load existing history or initialize a new array
      let history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
      
      // The new entry to add
      const newEntry = { url: currentUrl, title: pageTitle, timestamp: new Date().toISOString() };
      
      // Filter out the current page if it's already in the history
      history = history.filter(item => item.url !== newEntry.url); // <-- CORRECTED LINE
      
      // Add the current page to the top of the list
      history.unshift(newEntry);
          
      
      // Limit the history to, say, the last 15 pages
      const maxHistorySize = 15;
      if (history.length > maxHistorySize) {
          history.length = maxHistorySize;
      }
      
      // Save the updated history back to localStorage
      localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
      
      console.log(`History updated. Current history size: ${history.length}`);
  }
          
  // Run the history update function immediately upon page load
  updateHistory();


  // --- 4. Keep Screen On Button ---
  const screenBtn = document.createElement("button");
  screenBtn.id = "keep-screen-on-btn";
  screenBtn.title = "Keep Screen On";
  topBar.appendChild(screenBtn);

  let wakeLock = null;

  async function toggleWakeLock() {
    if (!("wakeLock" in navigator)) {
      alert("Wake Lock API not supported.");
      return;
    }

    if (!wakeLock) {
      try {
        wakeLock = await navigator.wakeLock.request("screen");
        screenBtn.classList.add("active");
        screenBtn.title = "Allow Screen Sleep";

        wakeLock.addEventListener("release", () => {
          screenBtn.classList.remove("active");
          screenBtn.title = "Keep Screen On";
          wakeLock = null;
        });
      } catch (err) {
        console.error(err);
      }
    } else {
      await wakeLock.release();
      wakeLock = null;
      screenBtn.classList.remove("active");
      screenBtn.title = "Keep Screen On";
    }
  }

  screenBtn.onclick = toggleWakeLock;

  // --- Add top bar to DOM ---
  document.body.insertBefore(topBar, document.body.firstChild);
  // --- 5. Auto Hide / Show on Activity ---
  let hideTimeout;

  function showTopBar() {
    topBar.classList.add("visible");
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      topBar.classList.remove("visible");
    }, 3000); // Hide after 3s of inactivity
  }

  // Show immediately on load
  showTopBar();

  // Detect user activity
  ["mousemove", "scroll", "touchstart", "keydown"].forEach(event => {
    document.addEventListener(event, showTopBar, { passive: true });
  });
})();