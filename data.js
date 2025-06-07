window.siteData = {
    siteTitle: "WitShells",
    favicon: "images/favicon.png",
    about: {
        title: "WitShells",
        subtitle: "Game Development & Creative Software Studio",
        description: `
        WitShells is more than a name—it's a philosophy. "Wit" stands for intelligence, creativity, and sharp problem-solving. "Shells" represent the frameworks, platforms, and digital worlds we build to bring ideas to life. Together, WitShells means crafting smart, robust solutions that protect, empower, and showcase your vision.<br><br>
        From arcade and multiplayer games to UI/UX, 3D art, electronics integration, and full-stack development, we blend creativity with engineering to deliver experiences that are both fun and functional.
        `,
    },
    services: {
        title: "Services",
        _items: [
            {
                name: "Game Development",
                description: "Android, VR, WebGL platforms. High performance, optimized code, and engaging gameplay.",
                icon: "images/console.png",
                skill: 95 // percent
            },
            {
                name: "Backend Programming",
                description: "Custom REST APIs and microservices for any platform. We design and build optimized, scalable backend solutions for projects of all sizes, from small apps to large-scale user systems.",
                icon: "images/web-development.png",
                skill: 90
            },
            {
                name: "Mentorship & Teaching",
                description: "We teach basic programming languages, Unity game development, and blockchain fundamentals. Personalized guidance for all levels.",
                icon: "images/team.png",
                skill: 85
            },
            {
                name: "Blockchain Development",
                description: "Smart contracts, decentralized applications, and blockchain integration.",
                icon: "images/blockchain.png",
                skill: 80
            },
            {
                name: "AI Automation",
                description: "We build AI-powered tools to automate your workflow and boost productivity.",
                icon: "images/ai.png",
                skill: 80
            },
        ],
        get items() {
            return this._items;
        },
        set items(value) {
            this._items = value;
        },
    },
    portfolio: {
        title: "Portfolio Games",
        description: "To Showcase My Technical Skills and Projects",
        projects: [
            {
                name: "Endless Car Coin Picker",
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
                description: "A blockchain-related project developed by Naima. Visit the website for more details.",
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
            feedback: "I want to personally thank Mr. Syed for his exceptional expertise in Java and REST APIs. Having had the pleasure of working with him on one project and currently collaborating on another, I can attest to his remarkable dedication and hard work. I highly recommend him for any API solutions you may need",
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
    }
};