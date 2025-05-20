document.addEventListener('DOMContentLoaded', () => {
    // Profile image hover
    const img = document.getElementById('profile-img');
    img.addEventListener('mouseenter', () => img.src = 'images/pic.png');
    img.addEventListener('mouseleave', () => img.src = 'images/pic_bw.png');

    // Navigation switching
    const navItems = document.querySelectorAll('.nav-item');
    const mainContent = document.getElementById('main-content');

    function renderAbout(data) {
        return `
      <section class="about-section">
      
        <h1>${data.title}</h1>
        <h2>${data.subtitle}</h2>
        <p>${data.description}</p>
        
        <div class="contact-links">
          ${data.contacts.map(c => `
            <a href="${c.url}" target="_blank" title="${c.type}">
              <img src="${c.icon}" alt="${c.type}"> ${c.label}
            </a>
          `).join('')}
        </div>
        <div class="ratings">
          <span>
            <a href="https://www.fiverr.com/syedsulaimans7?public_mode=true" target="_blank" style="color: #7ecfff; text-decoration: none;">
              Fiverr
            </a>:
          </span> 50 jobs with 4.3★ positive rating
          <span>
            <a href="https://www.upwork.com/freelancers/~01c772b1ea5a88ed4f?mp_source=share" target="_blank" style="color: #7ecfff; text-decoration: none;">
              Upwork
            </a>:
          </span> 3 jobs with 5★ positive rating
        </div>
        <a class="download-resume-btn" href="${data.resumeUrl}" target="_blank" rel="noopener">
          Download Resume
        </a>
      </section>
    `;
    }

    function renderServices(data) {
        return `
      <section class="services-section">
        <h2>${data.title}</h2>
        <div class="service-list">
          ${data.items.map(item => `
            <div class="service-card">
              <img class="service-icon" src="${item.icon}" alt="${item.name}">
              <div class="service-details">
                <div class="service-title">${item.name}</div>
                <div class="service-desc">${item.description}</div>
                <div class="skill-bar-bg">
                  <div class="skill-bar-fill" style="width:${item.skill}%"></div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
    }

    function renderPortfolio(data) {
        return `
      <section class="portfolio-section">
        <h2>${data.title}</h2>
        <p>${data.description}</p>
        <div class="portfolio-projects">
          ${data.projects.map(project => `
            <div class="project-card">
              <h3>${project.name}</h3>
              <span class="platform">${project.platform}</span>
              ${project.hasEmbed && project.embedGame ? project.embedGame : `
                <a href="${project.link}" target="_blank">View Project</a>
              `}
            </div>
          `).join('')}
        </div>
      </section>
    `;
    }

    function renderFeatured(data) {
        return `
      <section class="featured-section">
        <h2>${data.title}</h2>
        <p>${data.description}</p>
        <div class="featured-projects">
          ${data.projects.map(project => `
            <div class="featured-card">
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              ${project.embedData ? project.embedData : `<a href="${project.link}" target="_blank">View Project</a>`}
            </div>
          `).join('')}
        </div>
      </section>
    `;
    }

    function showSection(section) {
        navItems.forEach(item => item.classList.remove('active'));
        document.querySelector(`.nav-item[data-section="${section}"]`).classList.add('active');
        let html = '';
        switch (section) {
            case 'about':
                html = renderAbout(window.siteData.about);
                break;
            case 'services':
                html = renderServices(window.siteData.services);
                break;
            case 'portfolio':
                html = renderPortfolio(window.siteData.portfolio);
                break;
            case 'featured':
                html = renderFeatured(window.siteData.featured);
                break;
            default:
                html = '';
        }
        mainContent.innerHTML = html;
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            showSection(item.getAttribute('data-section'));
        });
    });

    // Show about by default
    showSection('about');

    // Rocket cursor (your existing code)
    const rocket = document.getElementById('rocket-cursor');
    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
    let rocketX = mouseX, rocketY = mouseY;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateRocket() {
        rocketX += (mouseX - rocketX) * 0.18;
        rocketY += (mouseY - rocketY) * 0.18;
        rocket.style.transform = `translate(-50%, -50%) translate(${rocketX}px, ${rocketY}px)`;
        requestAnimationFrame(animateRocket);
    }
    animateRocket();
});