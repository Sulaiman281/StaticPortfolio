function el(tag, attrs = {}, ...children) {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
        if (k === "class") e.className = v;
        else if (k === "style") e.style.cssText = v;
        else if (k.startsWith("on")) e.addEventListener(k.slice(2), v);
        else if (k === "html") e.innerHTML = v;
        else e.setAttribute(k, v);
    }
    for (const c of children) {
        if (c == null) continue;
        if (typeof c === "string") e.appendChild(document.createTextNode(c));
        else if (c instanceof Node) e.appendChild(c);
    }
    return e;
}

function renderHero(data) {
    return el("section", { class: "hero", id: "hero" },
        el("div", { class: "hero-img-wrap" },
            el("img", {
                src: "images/witshell-logo.png",
                alt: "WitShells Logo"
            })
        ),
        el("div", { class: "hero-content" },
            el("h1", {}, data.about.title),
            el("div", { class: "subtitle" }, data.about.subtitle),
            el("div", { class: "desc", html: data.about.description }),
            // el("a", { href: data.about.resumeUrl, class: "resume-btn", target: "_blank" }, "View Resume")
        )
    );
}

function renderServices(data) {
    return el("section", { id: "services" },
        el("h2", {}, data.services.title),
        el("div", { class: "services-list" },
            ...data.services.items.map(s =>
                el("div", { class: "service-card" },
                    el("img", { src: s.icon, alt: s.name }),
                    el("h3", {}, s.name),
                    el("div", {}, s.description),
                    el("div", { class: "skill-bar" },
                        el("div", {
                            class: "skill-bar-inner",
                            style: `width:${s.skill}%;`
                        })
                    )
                )
            )
        )
    );
}

function renderPortfolio(data) {
    return el("section", { id: "portfolio" },
        el("h2", {}, data.portfolio.title),
        el("div", { class: "portfolio-list" },
            ...data.portfolio.projects.map(project => {
                // Only show play button for WebGL games with embed
                let embedContainer = el("div", { class: "portfolio-embed" });
                let playBtn = null;
                if (project.hasEmbed && project.platform.toLowerCase().includes("webgl")) {
                    playBtn = el("button", {
                        class: "play-webgl-btn",
                        onclick: () => {
                            embedContainer.innerHTML = project.embedGame;
                            playBtn.style.display = "none";
                        }
                    }, "▶ Play");
                } else if (project.hasEmbed) {
                    // For non-WebGL, just show embed
                    embedContainer.innerHTML = project.embedGame;
                }

                return el("div", { class: "portfolio-card" },
                    el("div", { class: "portfolio-title" }, project.name),
                    el("div", { class: "platform" }, project.platform),
                    playBtn,
                    embedContainer,
                    project.link ? el("a", {
                        href: project.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: "portfolio-link"
                    }, "Open in new tab") : null
                );
            })
        )
    );
}

function renderFeatured(data) {
    let current = "husband"; // "husband" or "wife"

    const section = el("section", { id: "featured" });

    // Title (now above toggle)
    const title = el("h2", {}, data.featured.title);

    // Toggle buttons
    const toggleWrap = el("div", { class: "featured-toggle-wrap" });
    const heBtn = el("button", {
        class: "featured-toggle-btn active",
        onclick: () => setType("husband")
    }, "He");
    const divider = el("span", { class: "featured-toggle-divider" });
    const herBtn = el("button", {
        class: "featured-toggle-btn",
        onclick: () => setType("wife")
    }, "Her");
    toggleWrap.append(heBtn, divider, herBtn);

    // List container
    const list = el("div", { class: "featured-list" });

    // Render projects
    function renderList(type) {
        list.innerHTML = "";
        (data.featured[type] || []).forEach(p => {
            list.appendChild(
                el("div", { class: "featured-card" },
                    el("div", { html: p.embedData }),
                    el("a", {
                        href: p.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: "featured-title"
                    }, p.title),
                    el("div", { class: "desc" }, p.description)
                )
            );
        });
    }

    // Toggle handler
    function setType(type) {
        current = type;
        heBtn.classList.toggle("active", type === "husband");
        herBtn.classList.toggle("active", type === "wife");
        renderList(type);
    }

    // Initial render
    section.append(title, toggleWrap, list);
    renderList(current);

    return section;
}

function renderTeam(data) {
    return el("section", { id: "team" },
        el("h2", {}, "Partners in Life & Code"),
        el("div", { class: "team-list" },
            ...data.team.map(m =>
                el("div", { class: "team-card" },
                    el("img", { src: m.picture, alt: m.name }),
                    el("a", {
                        href: m.portfolio,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: "team-name-link"
                    }, m.name),
                    el("div", { class: "role" }, m.role),
                    m.note ? el("div", { class: "team-note" }, m.note) : null
                )
            )
        )
    );
}

function renderFeedbacks(data) {
    let current = 0;
    let intervalId = null;
    let animating = false;

    const feedbacks = data.feedbacks;
    const container = el("section", { id: "feedbacks" },
        el("h2", {}, "Testimonials"),
        el("div", { class: "testimonial-carousel" },
            el("button", {
                class: "testimonial-arrow left",
                onclick: () => show(current - 1, "left")
            }, "‹"),
            el("div", { class: "testimonial-slide" }),
            el("button", {
                class: "testimonial-arrow right",
                onclick: () => show(current + 1, "right")
            }, "›")
        )
    );

    const slide = container.querySelector(".testimonial-slide");

    function createCard(f) {
        return el("div", { class: "feedback-card" },
            el("img", {
                src: f.clientProfile,
                alt: f.clientName,
                class: "client-profile"
            }),
            el("div", { class: "feedback-meta" },
                el("div", { class: "client" }, f.clientName),
                el("div", { class: "stars" },
                    "★".repeat(Math.round(f.rating)) +
                    "☆".repeat(5 - Math.round(f.rating))
                ),
                el("div", { class: "feedback-text" }, f.feedback)
            )
        );
    }

    function show(idx, direction = "right") {
        if (animating) return;
        animating = true;
        const next = (idx + feedbacks.length) % feedbacks.length;

        // Prepare new card
        const newCard = createCard(feedbacks[next]);
        newCard.style.position = "absolute";
        newCard.style.top = 0;
        newCard.style.left = direction === "right" ? "100%" : "-100%";
        newCard.style.width = "100%";
        newCard.style.transition = "left 0.5s";

        // Current card
        const oldCard = slide.firstChild;
        if (oldCard) {
            oldCard.style.position = "absolute";
            oldCard.style.top = 0;
            oldCard.style.left = "0";
            oldCard.style.width = "100%";
            oldCard.style.transition = "left 0.5s";
        }

        slide.appendChild(newCard);

        // Trigger reflow for transition
        void newCard.offsetWidth;

        // Animate
        if (oldCard) oldCard.style.left = direction === "right" ? "-100%" : "100%";
        newCard.style.left = "0";

        setTimeout(() => {
            if (oldCard) slide.removeChild(oldCard);
            newCard.style.position = "";
            newCard.style.width = "";
            newCard.style.transition = "";
            newCard.style.left = "";
            animating = false;
        }, 500);

        current = next;
    }

    function startAuto() {
        if (intervalId) clearInterval(intervalId);
        intervalId = setInterval(() => show(current + 1, "right"), 10000);
    }

    // Initial render
    slide.style.position = "relative";
    slide.style.minHeight = "220px";
    slide.appendChild(createCard(feedbacks[current]));
    startAuto();

    // Pause auto-scroll on hover
    container.addEventListener("mouseenter", () => clearInterval(intervalId));
    container.addEventListener("mouseleave", startAuto);

    // Optional: swipe gesture for mobile
    let startX = null;
    slide.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
    });
    slide.addEventListener("touchend", e => {
        if (startX == null) return;
        const dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 40) {
            if (dx > 0) show(current - 1, "left");
            else show(current + 1, "right");
        }
        startX = null;
    });

    return container;
}

function renderFooter(data) {
    return el("footer", {},
        el("div", { class: "footer-contacts" },
            ...data.footer.contacts.map(c =>
                el("a", { href: c.url, target: "_blank" },
                    el("img", { src: c.icon, alt: c.type }),
                    c.label
                )
            )
        ),
        el("div", { class: "footer-ratings" },
            ...data.footer.ratings.map(r =>
                el("span", {},
                    el("a", { href: r.profileLink, target: "_blank" }, r.platform),
                    " – ", r.text
                )
            )
        ),
        el("div", { style: "color:#444;margin-top:1em;" }, "© " + new Date().getFullYear() + " WitShells. All rights reserved.")
    );
}

function renderPage(data) {
    const app = document.getElementById("app");
    app.append(
        renderHero(data),
        renderServices(data),
        renderTeam(data),
        renderPortfolio(data),
        renderFeatured(data),
        renderFeedbacks(data),
        renderFooter(data)
    );
}

document.addEventListener("DOMContentLoaded", () => {
    renderPage(window.siteData);

    // Rectangle cursor effect
    const rect = document.createElement("div");
    rect.className = "cursor-rect";
    document.body.appendChild(rect);

    document.addEventListener("mousemove", e => {
        rect.style.transform = `translate(${e.clientX - 30}px, ${e.clientY - 18}px)`;
    });

    // Responsive nav toggle button
    const nav = document.querySelector('.main-nav');
    if (nav) {
        // Create toggle button
        const btn = document.createElement('button');
        btn.className = 'nav-toggle-btn';
        btn.innerHTML = '<span></span>';
        document.body.appendChild(btn);

        btn.addEventListener('click', () => {
            nav.classList.toggle('open');
        });

        // Close nav when clicking outside or on a link
        document.addEventListener('click', (e) => {
            if (
                nav.classList.contains('open') &&
                !nav.contains(e.target) &&
                !btn.contains(e.target)
            ) {
                nav.classList.remove('open');
            }
            if (e.target.closest('.main-nav a')) {
                nav.classList.remove('open');
            }
        });
    }

    // Show wallet address in modal
    const wallet = window.siteData?.bankdetail?.metamask || "";
    document.getElementById("coffeeWallet").textContent = wallet;

    // Show modal
    document.getElementById("buyCoffeeBtn").onclick = function () {
        document.getElementById("coffeeModal").style.display = "flex";
        document.getElementById("coffeeStatus").textContent = "";
    };
    // Close modal
    document.getElementById("closeCoffeeModal").onclick = function () {
        document.getElementById("coffeeModal").style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target === document.getElementById("coffeeModal")) {
            document.getElementById("coffeeModal").style.display = "none";
        }
    };
    // Copy wallet address
    document.getElementById("copyWalletBtn").onclick = function () {
        navigator.clipboard.writeText(wallet);
        document.getElementById("coffeeStatus").textContent = "Wallet address copied!";
    };

    // MetaMask payment
    document.getElementById("payWithMetaMask").onclick = async function () {
        if (!window.ethereum) {
            document.getElementById("coffeeStatus").textContent =
                "No crypto wallet detected. Please install MetaMask, Coinbase Wallet, or another Ethereum wallet extension.";
            return;
        }
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            const from = accounts[0];
            // Get $5 in ETH (approximate, you may want to fetch real-time price for production)
            const ethValue = (5 / 3500).toFixed(6); // Example: $5 at $3500/ETH
            const tx = {
                from,
                to: wallet,
                value: (parseFloat(ethValue) * 1e18).toString(16), // in wei, hex
            };
            await window.ethereum.request({
                method: 'eth_sendTransaction',
                params: [tx],
            });
            document.getElementById("coffeeStatus").textContent = "Thank you! Payment sent.";
        } catch (err) {
            document.getElementById("coffeeStatus").textContent = "Payment cancelled or failed.";
        }
    };

    // Show Wise section if data is present
    const wise = window.siteData?.bankdetail?.wise;
    if (wise && wise.qr && wise.link) {
        document.getElementById("wiseSection").style.display = "block";
        document.getElementById("wiseQR").src = wise.qr;
        document.getElementById("wiseLink").href = wise.link;
    }
});

function shouldShowTour() {
    return !localStorage.getItem('witshells_tour_done');
}

function markTourDone() {
    localStorage.setItem('witshells_tour_done', '1');
}