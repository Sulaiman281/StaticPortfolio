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
                src: "images/pic_bw.png",
                alt: data.about.title,
                onmouseenter: e => e.currentTarget.src = "images/pic.png",
                onmouseleave: e => e.currentTarget.src = "images/pic_bw.png"
            })
        ),
        el("div", { class: "hero-content" },
            el("h1", {}, data.about.title),
            el("div", { class: "subtitle" }, data.about.subtitle),
            el("div", { class: "desc", html: data.about.description }),
            el("a", { href: data.about.resumeUrl, class: "resume-btn", target: "_blank" }, "View Resume")
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
            ...data.portfolio.projects.map(p =>
                el("div", { class: "portfolio-card" },
                    p.hasEmbed ? el("div", { html: p.embedGame }) : null,
                    el("h3", {}, p.name),
                    el("div", { class: "platform" }, p.platform),
                    el("a", { href: p.link, target: "_blank" }, "Play / View")
                )
            )
        )
    );
}

function renderFeatured(data) {
    return el("section", { id: "featured" },
        el("h2", {}, data.featured.title),
        el("div", { class: "featured-list" },
            ...data.featured.projects.map(p =>
                el("div", { class: "featured-card" },
                    el("div", { html: p.embedData }),
                    el("h3", {}, p.title),
                    el("div", {}, p.description),
                    el("a", { href: p.link, target: "_blank" }, "View Project")
                )
            )
        )
    );
}

function renderTeam(data) {
    return el("section", { id: "team" },
        el("h2", {}, "Team"),
        el("div", { class: "team-list" },
            ...data.team.map(m =>
                el("div", { class: "team-card" },
                    el("img", { src: m.picture, alt: m.name }),
                    el("div", { class: "name" }, m.name),
                    el("div", { class: "role" }, m.role)
                )
            )
        )
    );
}

function renderFeedbacks(data) {
    return el("section", { id: "feedbacks" },
        el("h2", {}, "Feedbacks"),
        el("div", { class: "feedbacks-list" },
            ...data.feedbacks.map(f =>
                el("div", { class: "feedback-card" },
                    f.clientProfile
                        ? el("img", { src: f.clientProfile, alt: f.clientName, class: "client-profile" })
                        : null,
                    el("div", { class: "client" }, f.clientName),
                    el("div", { class: "stars" }, "★".repeat(f.rating) + "☆".repeat(5 - f.rating)),
                    el("div", {}, f.feedback)
                )
            )
        )
    );
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
        renderPortfolio(data),
        renderFeatured(data),
        renderTeam(data),
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
});