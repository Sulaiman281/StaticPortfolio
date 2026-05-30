/* ============================================================
   gamification.js — WitShells Points & Progressive Unlock System
   Shared across index.html, products.html, portfolio.html
   ============================================================ */
(function () {
  'use strict';

  /* ── Storage ─────────────────────────────────────────────── */
  const KEY = 'ws_gam_v1';

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
    catch (e) { return {}; }
  }
  function save(s) {
    try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) { /* storage full */ }
  }

  var S = Object.assign({ pts: 0, done: {}, badges: [] }, load());

  /* ── Levels ──────────────────────────────────────────────── */
  var LEVELS = [
    { id: 1, name: 'Explorer',       min: 0,   max: 30  },
    { id: 2, name: 'Curious',        min: 31,  max: 70  },
    { id: 3, name: 'Insider',        min: 71,  max: 130, badge: 'WitShells Insider' },
    { id: 4, name: 'Early Believer', min: 131, max: 200, badge: 'Early Believer'    }
  ];

  function currentLevel(pts) {
    for (var i = LEVELS.length - 1; i >= 0; i--) {
      if (pts >= LEVELS[i].min) return LEVELS[i];
    }
    return LEVELS[0];
  }

  /* ── Earn Points ─────────────────────────────────────────── */
  function earn(pts, key) {
    /* key-gated: one-time actions only fire once */
    if (key && S.done[key]) return;
    if (key) S.done[key] = 1;
    var prev = currentLevel(S.pts);
    S.pts += pts;
    if (S.pts > 9999) S.pts = 9999; /* cap */
    save(S);
    toast('+' + pts + ' pts \u00B7 ' + currentLevel(S.pts).name);
    updateWidget();
    var cur = currentLevel(S.pts);
    if (cur.id > prev.id) onLevelUp(cur);
  }

  function onLevelUp(lv) {
    applyUnlocks();
    if (lv.badge && S.badges.indexOf(lv.badge) === -1) {
      S.badges.push(lv.badge);
      save(S);
      showBadge(lv.badge);
    }
    if (lv.id === 4) fireConfetti();
  }

  /* ── Unlocks ─────────────────────────────────────────────── */
  function applyUnlocks() {
    var lv = currentLevel(S.pts).id;
    if (lv >= 2) {
      document.querySelectorAll('.unlock-l2').forEach(function (el) {
        el.classList.remove('ws-locked');
      });
    }
    if (lv >= 3) {
      document.querySelectorAll('.unlock-l3').forEach(function (el) {
        el.classList.remove('ws-locked');
      });
    }
    if (lv >= 4) {
      document.querySelectorAll('.unlock-l4').forEach(function (el) {
        el.classList.remove('ws-locked');
      });
    }
  }

  /* ── Toast ───────────────────────────────────────────────── */
  var toastQueue = [];
  var toasting = false;

  function toast(msg) {
    toastQueue.push(msg);
    if (!toasting) nextToast();
  }

  function nextToast() {
    if (!toastQueue.length) { toasting = false; return; }
    toasting = true;
    var msg = toastQueue.shift();
    var el = document.createElement('div');
    el.className = 'ws-toast';
    el.textContent = msg;
    document.body.appendChild(el);
    requestAnimationFrame(function () { el.classList.add('ws-toast-in'); });
    setTimeout(function () {
      el.classList.remove('ws-toast-in');
      function done() { el.remove(); nextToast(); }
      el.addEventListener('transitionend', done, { once: true });
      /* fallback in case transitionend doesn't fire */
      setTimeout(done, 600);
    }, 2600);
  }

  /* ── Badge popup ─────────────────────────────────────────── */
  function showBadge(name) {
    var el = document.createElement('div');
    el.className = 'ws-badge-popup';
    el.innerHTML = '<span class="ws-bp-icon">\uD83C\uDF96\uFE0F</span><div><strong>Badge Unlocked</strong><br><span>' + name + '</span></div>';
    document.body.appendChild(el);
    requestAnimationFrame(function () { el.classList.add('ws-badge-popup-in'); });
    setTimeout(function () {
      el.classList.remove('ws-badge-popup-in');
      el.addEventListener('transitionend', function () { el.remove(); }, { once: true });
      setTimeout(function () { if (el.parentNode) el.remove(); }, 700);
    }, 3800);
  }

  /* ── Confetti ────────────────────────────────────────────── */
  function fireConfetti() {
    var colors = ['#2add89', '#00d4ff', '#f0f0f0', '#ffeb3b', '#ffffff'];
    for (var i = 0; i < 100; i++) {
      (function (idx) {
        var c = document.createElement('div');
        c.className = 'ws-confetti';
        c.style.cssText =
          'left:' + (Math.random() * 100) + 'vw;' +
          'background:' + colors[idx % 5] + ';' +
          'width:' + (6 + Math.random() * 8) + 'px;' +
          'height:' + (6 + Math.random() * 8) + 'px;' +
          'border-radius:' + (Math.random() > 0.5 ? '50%' : '2px') + ';' +
          'animation-delay:' + (Math.random() * 1.5) + 's;' +
          'animation-duration:' + (2 + Math.random() * 2) + 's;';
        document.body.appendChild(c);
        c.addEventListener('animationend', function () { c.remove(); }, { once: true });
        setTimeout(function () { if (c.parentNode) c.remove(); }, 5000);
      })(i);
    }
  }

  /* ── Widget ──────────────────────────────────────────────── */
  function buildWidget() {
    var w = document.createElement('div');
    w.id = 'ws-widget';
    w.innerHTML =
      '<button class="ws-wgt-btn" id="ws-wgt-toggle" aria-label="WitShells points tracker" title="Your WitShells Points">\u26A1</button>' +
      '<div class="ws-wgt-panel" id="ws-wgt-panel" role="status" aria-live="polite">' +
        '<div class="ws-wgt-pts" id="ws-pts">0 pts</div>' +
        '<div class="ws-wgt-lv" id="ws-lv">Explorer</div>' +
        '<div class="ws-wgt-bar-bg" role="progressbar" aria-valuemin="0" aria-valuemax="100"><div class="ws-wgt-bar" id="ws-bar"></div></div>' +
        '<div class="ws-wgt-next" id="ws-next"></div>' +
        '<div class="ws-wgt-bdgs" id="ws-bdgs"></div>' +
      '</div>';
    document.body.appendChild(w);
    document.getElementById('ws-wgt-toggle').addEventListener('click', function () {
      w.classList.toggle('ws-wgt-open');
    });
  }

  function updateWidget() {
    var pts = S.pts;
    var lv = currentLevel(pts);
    var nextLv = LEVELS[lv.id]; /* lv.id is 1-based, LEVELS is 0-indexed, so LEVELS[lv.id] is next */
    var ptsEl = document.getElementById('ws-pts');
    var lvEl  = document.getElementById('ws-lv');
    var barEl = document.getElementById('ws-bar');
    var nxtEl = document.getElementById('ws-next');
    var bdgEl = document.getElementById('ws-bdgs');
    if (!ptsEl) return;
    ptsEl.textContent = pts + ' pts';
    lvEl.textContent  = lv.name;
    if (nextLv) {
      var range = nextLv.min - lv.min;
      var done  = pts - lv.min;
      var pct   = Math.min(100, Math.round((done / range) * 100));
      barEl.style.width = pct + '%';
      barEl.parentElement.setAttribute('aria-valuenow', pct);
      nxtEl.textContent = (nextLv.min - pts) + ' pts to ' + nextLv.name;
    } else {
      barEl.style.width = '100%';
      nxtEl.textContent = 'Max level reached!';
    }
    bdgEl.innerHTML = S.badges.map(function (b) {
      return '<span class="ws-badge-chip">\uD83C\uDF96\uFE0F ' + b + '</span>';
    }).join('');
  }

  /* ── Page entry ──────────────────────────────────────────── */
  var pg = location.pathname.split('/').pop() || 'index.html';
  if (pg === '' || pg === 'index.html') earn(10, 'visit_home');
  else if (pg === 'products.html')      earn(20, 'visit_products');
  else if (pg === 'portfolio.html')     earn(15, 'visit_portfolio');

  /* ── DOM Ready ───────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    buildWidget();
    updateWidget();
    applyUnlocks();

    /* Scroll to bottom */
    var hitBottom = false;
    window.addEventListener('scroll', function () {
      if (hitBottom) return;
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80) {
        hitBottom = true;
        earn(5, 'scroll_bottom_' + pg);
      }
    }, { passive: true });

    /* Nav clicks */
    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href]');
      if (!a) return;
      var href = a.getAttribute('href') || '';
      if (href === '#services')  earn(10, 'click_services');
      if (href === '#about')     earn(10, 'click_about');
      if (href === '#contact')   earn(15, 'click_contact');
    });

    /* Hover on expertise block 3+ seconds */
    var expBlock = document.getElementById('ws-expertise');
    if (expBlock) {
      var hTimer = null;
      expBlock.addEventListener('mouseenter', function () {
        hTimer = setTimeout(function () { earn(5, 'hover_expertise'); }, 3000);
      });
      expBlock.addEventListener('mouseleave', function () {
        if (hTimer) { clearTimeout(hTimer); hTimer = null; }
      });
    }

    /* Share button */
    var shareBtn = document.getElementById('ws-share-btn');
    if (shareBtn) {
      shareBtn.addEventListener('click', function () {
        var url = location.origin || location.href;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url).then(function () {
            toast('Link copied!');
            earn(30, 'share_site');
          }).catch(function () { toast('Copy the URL from your browser to share!'); });
        } else {
          toast('Copy the URL from your browser to share!');
          earn(30, 'share_site');
        }
      });
    }

    /* Contact form */
    var contactForm = document.getElementById('ws-contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        earn(50, 'submit_contact');
        var ok = contactForm.querySelector('.ws-form-ok');
        if (ok) ok.style.display = 'block';
        setTimeout(function () { contactForm.reset(); }, 150);
      });
    }

    /* Product notification signup */
    var notifyForm = document.getElementById('ws-notify-form');
    if (notifyForm) {
      notifyForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var emailInput = notifyForm.querySelector('input[type="email"]');
        if (emailInput && emailInput.value) {
          try {
            var stored = JSON.parse(localStorage.getItem('ws_notify') || '[]');
            stored.push({ email: emailInput.value, ts: Date.now() });
            localStorage.setItem('ws_notify', JSON.stringify(stored));
          } catch (err) { /* ignore */ }
        }
        earn(100, 'notify_signup');
        var ok = notifyForm.querySelector('.ws-signup-ok');
        if (ok) ok.style.display = 'block';
        setTimeout(function () { notifyForm.reset(); }, 150);
      });
    }

    /* Scroll-triggered fade animations */
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (ent) {
          if (ent.isIntersecting) ent.target.classList.add('ws-in');
        });
      }, { threshold: 0.08 });
      document.querySelectorAll('.ws-fade').forEach(function (el) { io.observe(el); });
    } else {
      /* Fallback for no IntersectionObserver */
      document.querySelectorAll('.ws-fade').forEach(function (el) { el.classList.add('ws-in'); });
    }

    /* Cookie consent */
    if (!localStorage.getItem('ws_cookie_ok')) {
      var banner = document.getElementById('ws-cookie-banner');
      if (banner) {
        banner.style.display = 'flex';
        var okBtn = document.getElementById('ws-cookie-ok');
        if (okBtn) {
          okBtn.addEventListener('click', function () {
            localStorage.setItem('ws_cookie_ok', '1');
            banner.style.display = 'none';
          });
        }
      }
    }
  });

  /* Expose for optional inline use */
  window.wsEarn = earn;
})();
