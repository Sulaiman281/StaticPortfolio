window.siteData = {
    siteTitle: "WitShells",
    favicon: "images/favicon.png",
    about: {
        title: "Unity Game Development and 3D Simulations that Scale",
        subtitle: "Unity developer + backend engineer for multiplayer, microservices, REST APIs, Docker, AWS",
        description: `
          Build, optimize, and ship production-ready games and simulations.<br>
          • Unity 2D/3D, WebGL, VR • Multiplayer (Netcode/Mirror/Photon)<br>
          • Microservices & REST APIs • Docker • AWS • CI/CD
        `,
        long: `
          We build high-performance Unity games and realistic 3D simulations backed by scalable microservices.
          From WebGL and mobile to VR, we design gameplay, optimize performance, and ship reliable backends.<br><br>
          <strong>Tech stack:</strong> Unity (C#), Netcode/Mirror/Photon, ASP.NET Core/Spring Boot, REST APIs,
          PostgreSQL/MongoDB, Redis, RabbitMQ, Docker, AWS (ECS/Lambda/API Gateway), GitHub Actions CI/CD.<br>
          <strong>Results:</strong> Delivered 50+ projects with 4.3–5★ ratings. Let’s ship something great—on time and on budget.
        `
    },
    // New: WitCoin portfolio section content
    witcoin: {
        id: "witcoin",
        title: "WitCoin — Powering the Future of Witshells Ecosystem",
        tagline: "WitCoin — The Energy Behind the Witshells Universe.",
        logo: "images/Wit-Logo.png", // Note: file exists as 'Wit-Logo.png' (case-sensitive on GitHub Pages)
        overview: `
            <p><strong>WitCoin</strong> is the native token of the Witshells ecosystem — starting with a cloud mining app where users can mine WitCoins and join <em>prize pools</em> to compete for real-world rewards or additional WitCoins.</p>
            <p>WitCoin isn’t just another digital token — it’s the core economy that will power upcoming Witshells experiences, from city-scale simulations to metaverse-scale creativity.</p>
        `,
        features: [
            { icon: "☁️", title: "Cloud Mining", desc: "Earn WitCoins through efficient cloud-based mining simulation." },
            { icon: "🏆", title: "Prize Pools", desc: "Use mined coins to join reward pools with real or in‑game value." },
            { icon: "🔐", title: "Secure Wallet System", desc: "Manage all assets and transactions safely." },
            { icon: "⚙️", title: "Modern Tech", desc: "Unity 3D + ASP.NET Core + Dockerized microservices." },
            { icon: "🌍", title: "Cross‑Platform", desc: "Android & WebGL." }
        ],
        future: [
            {
                name: "Witshells‑City",
                description: "A massive open‑world simulation combining real‑life jobs, city economics, and role‑play (Cops vs. Robbers, professions, housing, and business systems). The entire game economy runs on WitCoin, creating a living, player‑driven marketplace."
            },
            {
                name: "Witshells Mega Project",
                description: "A platform where anyone can create and publish 3D simulations for VR/AR — like uploading YouTube videos — and monetize with WitCoin on Wit Cloud Chain, our scalable blockchain for creativity."
            }
        ],
        // illustration: "images/pic_bw.png", // Placeholder concept art; replace when ready
        cta: {
            label: "Explore Witshells Projects",
            link: "#featured"
        }
    },
    services: {
        title: "Services",
        _items: [
            {
                name: "Game Development",
                description: "Unity 2D/3D, WebGL, VR, multiplayer (Netcode/Mirror/Photon), performance profiling, Addressables, CI/CD.",
                icon: "images/console.png",
                skill: 99
            },
            {
                name: "3D Simulation & Digital Twins",
                description: "Real-time 3D simulation, physics systems, sensor modeling, visualization dashboards, stakeholder-ready WebGL demos.",
                icon: "images/ai.png",
                skill: 98
            },
            {
                name: "Backend Microservices & REST APIs",
                description: "ASP.NET Core/Spring Boot microservices, REST APIs, OAuth2/JWT, PostgreSQL/MongoDB, Redis, RabbitMQ, Docker, AWS.",
                icon: "images/web-development.png",
                skill: 99
            },
            {
                name: "Mentorship & Training",
                description: "Unity, C#, game architecture, code reviews, and best practices for teams and individuals.",
                icon: "images/team.png",
                skill: 99
            },
            {
                name: "Blockchain Development",
                description: "Smart contracts, NFT minting/trading, wallet integrations, and secure web3 flows.",
                icon: "images/blockchain.png",
                skill: 95
            },
            {
                name: "AI Automation",
                description: "ETL pipelines, content automation, background jobs, analytics integrations, and workflow tools.",
                icon: "images/ai.png",
                skill: 95
            }
        ],
        get items() { return this._items; },
        set items(v) { this._items = v; }
    },
    portfolio: {
        title: "Portfolio Games",
        description: "To Showcase My Technical Skills and Projects",
        projects: [
            {
                name: "Endless Car Coin Picker | 2Hour Challenge Game",
                platform: "WebGL",
                hasEmbed: true,
                embedGame: `<iframe src="https://sulaiman281.github.io/EndlessCarGame-WebGL/" width="720" height="1080" frameborder="0" allowfullscreen></iframe>`,
                link: "https://sulaiman281.github.io/EndlessCarGame-WebGL/"
            },
        ]
    },
    featured: {
        title: "Featured Projects",
        description: "Highlighting some of my best work.",
        husband: [
            {
                title: "WheelToWin",
                description: "Car Racing Game, where user can take part in different events and earn money. I worked on as indie game developer. I handled the game design, development, and backend programming. also I am the one who hosted the game on AWS and made it live.",
                embedSourceType: "mobile",
                link: "https://www.wheeltowin.ph/",
                embedData: `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YtBDpJvD68A?si=cslzh-z9rbwmrqlP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
            },
            {
                title: "My VR Development Projects",
                description: "Montage of my VR development projects.",
                embedSourceType: "youtube",
                link: "https://www.youtube.com/watch?v=EdOzFLrSztA",
                embedData: `<iframe width="500" height="281" src="https://www.youtube.com/embed/EdOzFLrSztA" title="December Till August My VR Development Projects [Mix Clips]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
            },
            {
                title: "VR Engager",
                description: "A VR presentation rehearsal tool for Oculus Quest.",
                embedSourceType: "youtube",
                link: "https://www.youtube.com/watch?v=b5EpoeN5gRg",
                embedData: `<iframe width="500" height="281" src="https://www.youtube.com/embed/b5EpoeN5gRg" title="[VR Engager] VR Presentation Rehearsal in Quest 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
            },
            {
                title: "One of My Recorded Live Sessions",
                description: "I Conduct Live Classes, and Build Projects Live in front of them to Teach them the concepts in every new way possible which they can understand this is one of the example, you can find more related videos on my youtube channel",
                embedSourceType: "youtube",
                link: "https://www.youtube.com/watch?v=aoEB63E-m1c",
                embedData: `<iframe width="500" height="281" src="https://www.youtube.com/embed/aoEB63E-m1c" title="Unity 3D Basics RigidBody and Collider Task." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
            },
            {
                title: "Aldrago Mini Mission Samp Server",
                description: "In My Early Age, 16-18 I spent My Time Learning About Developing GTA San Andreas Server, it was fun, and I develop a Mini-Mission Server",
                embedSourceType: "youtube",
                link: "https://www.youtube.com/watch?v=GWuH44ZF3K4",
                embedData: `<iframe width="500" height="281" src="https://www.youtube.com/embed/GWuH44ZF3K4" title="Aldrago&#39;s M-Mission GamePlay Server made by me samp server" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
            },

        ],
        wife: [
            {
                title: "Mingo",
                description: "Mingo is a next-generation blockchain platform focused on simplifying crypto adoption for everyone. It offers secure digital wallets, seamless token management, and user-friendly tools for both beginners and advanced users. Mingo empowers users to manage, send, and receive digital assets with ease, making blockchain technology accessible and practical for daily use.",
                embedSourceType: "website",
                link: "https://mingo.com",
                embedData: ""
            },
            {
                title: "AISense",
                description: "Combines cutting-edge blockchain technology with NFT staking, showcasing expertise in fintech and crypto solutions. Technologies: Blockchain, NFT integration, MERN stack.",
                embedSourceType: "website",
                link: "https://aisense.vercel.app/",
                embedData: ""
            },
            {
                title: "Samudra Yacht Club",
                description: "Demonstrates the ability to create membership platforms with NFTs, relevant for luxury or exclusive services. Technologies: NFT integration, Web3.",
                embedSourceType: "website",
                link: "https://samudra-yacht-club.vercel.app/",
                embedData: ""
            },
            {
                title: "DegenDraw",
                description: "Highlights blockchain and gamification expertise with a lottery system. Perfect for showcasing your wife’s skills in smart contract development and user engagement. Technologies: Blockchain (Base network), MERN stack, gamification.",
                embedSourceType: "website",
                link: "https://degendraw.vercel.app/",
                embedData: ""
            },
            {
                title: "Alpha Octopus",
                description: "Features community engagement and a strong NFT foundation, appealing to clients in the crypto/NFT space. Technologies: NFT platform, roadmap development, community tools.",
                embedSourceType: "website",
                link: "https://alphaoctopus.netlify.app/",
                embedData: ""
            },
            {
                title: "NFT Market (Mechademy)",
                description: "Showcases e-commerce capabilities for NFTs, targeting marketplaces and digital asset platforms. Technologies: Blockchain, NFT integration, MERN stack.",
                embedSourceType: "website",
                link: "https://nft-market-seven.vercel.app/",
                embedData: ""
            },
            {
                title: "Admin Dashboard (React Material UI)",
                description: "Highlights skills in enterprise-level application development and user-friendly dashboards, appealing to corporate clients. Technologies: React, Material UI, MERN stack.",
                embedSourceType: "website",
                link: "https://admin-dashboard-reactmaterial-ui.netlify.app/",
                embedData: ""
            },
        ]
    },
    team: [
        {
            name: "Syed Suleman Shah",
            picture: "images/pic11.png",
            role: "Unity Game Developer, Founder, and Husband",
            portfolio: "https://sulaiman281.github.io/Resume/",
            note: "Building dreams together with my wife."
        },
        {
            name: "Naima Ghulam Muhammad",
            picture: "images/naima-pic.jpg",
            role: "Blockchain & MERN Stack Developer, Co-Founder, and Wife",
            portfolio: "https://github.com/NaimaGhulamMuhammad",
            note: "My partner in life and code."
        },
    ],
    feedbacks: [
        {
            clientName: "donpablo2022",
            clientProfile: "images/no-profile.png", // Add this line (use actual image path)
            feedback: "perfect! will definitely recommend",
            rating: 5
        },
        {
            clientName: "noemialvarez174",
            clientProfile: "images/no-profile.png", // Add this line (use actual image path)
            feedback: "Nice working with this Unitiy expert!",
            rating: 4.2
        },
        {
            clientName: "adnan1160",
            clientProfile: "images/no-profile.png", // Add this line (use actual image path)
            feedback: "Amazing seller. If you need help I promise you this is the man to ask, Accommodated a shifting timeline and delivered with a level of professionalism that is rarely found on fiverr. Would repeat without hesitation.",
            rating: 5
        },
        {
            clientName: "asad orabic",
            clientProfile: "images/no-profile.png", // Add this line (use actual image path)
            feedback: "I want to personally thank Mr. Syed for his exceptional expertise in REST APIs. Having had the pleasure of working with him on one project and currently collaborating on another, I can attest to his remarkable dedication and hard work. I highly recommend him for any API solutions you may need",
            rating: 5
        },
        {
            clientName: "khalid",
            clientProfile: "images/no-profile.png", // Add this line (use actual image path)
            feedback: "Exceptional work! Delivered ahead of schedule with outstanding quality. Communication was clear and professional throughout. Highly recommend for anyone seeking top-notch results. Will definitely hire again!",
            rating: 5
        }
    ],

    footer: {
        contacts: [
            {
                type: "WhatsApp",
                url: "https://wa.me/9203093023289",
                icon: "images/icon-phone.png",
                label: "+92 0309 3023289"
            },
            {
                type: "Email",
                url: "mailto:sayedsulaiman607@gmail.com",
                icon: "images/icon-email.png",
                label: "sayedsulaiman607@gmail.com"
            },
            {
                type: "Calendly",
                url: "https://calendly.com/witshells/30min",
                icon: "images/icon-email.png",
                label: "Book a 15‑min Call"
            },
            {
                type: "LinkedIn",
                url: "https://www.linkedin.com/in/syed-suleman-shah/",
                icon: "images/linkedin logo.png",
                label: "LinkedIn"
            },
            {
                type: "Facebook",
                url: "https://web.facebook.com/arif.sayad.39",
                icon: "images/facebook logo.png",
                label: "Facebook"
            },
            {
                type: "Instagram",
                url: "https://www.instagram.com/witshells/",
                icon: "images/instagram logo.png",
                label: "Instagram"
            }
        ],
        ratings: [
            {
                platform: "Fiverr",
                profileLink: "https://www.fiverr.com/s/Q7zyqqP",
                text: "50 jobs with 4.3★ positive rating"
            },
            {
                platform: "Upwork",
                profileLink: "https://www.upwork.com/freelancers/~01c772b1ea5a88ed4f?mp_source=share",
                text: "3 jobs with 5★ positive rating"
            }
        ]
    },
    bankdetail: {
        metamask: "0xd9332911cFEc524c0891b9037d5F7CCecB1FB642", // your wallet address
        wise: {
            qr: "images/wise-qr.jpg", // path to your Wise QR code image
            link: "https://wise.com/pay/me/syeds3242" // your Wise payment link
        }
    },
    // Add CTA config for hero buttons
    cta: {
        primary: "Book a 15‑min Call",
        primaryLink: "https://calendly.com/witshells/30min",
        secondary: "Get a Project Quote",
        secondaryLink: "mailto:sayedsulaiman607@gmail.com?subject=Project%20Quote%20Request"
    }
};