const portfolioPayload = {
  profile: {
    name: "Kishan Maharana",
    role: "Software Engineer",
    experience: "6+ years",
    summary:
      "Backend-focused engineer with strong Laravel, API, Kafka, WebSocket, and database experience. I enjoy turning workflow-heavy products into scalable, reliable systems with clean interfaces and clear developer ergonomics.",
    coreStack: "Laravel, PHP, Kafka, MySQL, PostgreSQL, JS",
    location: "Vadodara, India",
    availability: "Open to remote and hybrid roles",
    strengths: [
      "API Design",
      "Scalable Architecture",
      "Performance Optimization",
      "Team Collaboration",
      "Client Communication"
    ]
  },
  stats: [
    { label: "Projects Shipped", value: "8+" },
    { label: "Years Experience", value: "6+" },
    { label: "Core Domains", value: "API / SaaS" }
  ],
  experience: [
    {
      title: "Rishabh Software Pvt Ltd",
      company: "Software Engineer",
      url: "https://www.rishabhsoft.com/",
      period: "2025 - Present",
      isCurrent: true,
      summary: "Leading backend architecture and delivery for platform-scale products.",
      highlights: [
        "Developed and enhanced scalable RESTful APIs while resolving critical server-side issues and performance bottlenecks.",
        "Extended and optimized [highlight]Kafka-based services[/highlight] to meet evolving business and data processing requirements.",
        "Built and maintained backend systems using Laravel and PostgreSQL for high-performance applications.",
        "Followed clean code architecture principles to ensure scalability, maintainability, and code reusability.",
        "Contributed to an AdTech platform focusing on data-driven performance and system efficiency.",
        "Collaborated within a cross-functional Agile team to deliver reliable and timely product features.",
        "Improved automated [highlight]test coverage from 20% to over 75%[/highlight], ensuring higher code quality and stability.",
        "Designed and enhanced test cases to validate features and reduce production issues.",
        "Optimized complex database queries and heavy system features to significantly improve performance.",
        "Identified and resolved performance bottlenecks to enhance overall system responsiveness.",
        "Actively participated in code reviews and contributed to maintaining high development standards.",
        "Worked closely with team members to analyze requirements and implement efficient backend solutions."
      ]
    },
    {
      title: "Codebuddy Pvt Ltd",
      company: "Software Developer",
      period: "2024 - 2025",
      url: "https://codebuddy.co/",
      isCurrent: false,
      summary: "Delivered internal tools and integration-heavy systems across multiple products.",
      highlights: [
        "Developed and optimized scalable RESTful APIs, UI components, and full-stack features across multiple applications.",
        "Implemented ElasticSearch to efficiently manage and query over 1M+ records with high performance.",
        "Integrated AI tools like [highlight]ChatGPT and Gemini[/highlight] to automate workflows and enhance user experiences.",
        "Built asynchronous processing systems using WebSockets, Laravel Event Listeners, and Job Queues.",
        "Collaborated closely with international clients to deliver scalable and customized software solutions.",
        "Developed secure and reliable payment systems using Stripe for seamless transactions.",
        "Utilized Docker for containerization and streamlined development and deployment workflows.",
        "Performed advanced server-level debugging and optimized application performance.",
        "Integrated Laravel packages such as Telescope, Scout, Nova, Pulse, Socialite, and Passport to extend functionality.",
        "Automated business workflows using tools like Zapier and Buildship.io.",
        "Integrated third-party APIs including [highlight]Rev API, ClickUp, EmbedRock, Google Drive, YouTube API, and Zoom API[/highlight].",
        "Optimized complex database queries to handle millions of records with reduced load times.",
        "Developed authentication and data-sharing integrations with platforms like Google, Facebook, GitHub, and YouTube.",
        "Implemented real-time features using WebSockets for dynamic and responsive applications.",
        "Worked with Vue.js and Node.js to enhance frontend and backend capabilities.",
        "Troubleshot and improved server-side processes for better reliability and scalability."
      ]
    },
    {
      title: "Valuecoders",
      company: "Software Developer",
      period: "2020 - 2023",
      url: "https://www.valuecoders.com/",
      isCurrent: false,
      summary: "Built API-first systems and data-rich web applications.",
      highlights: [
        "Engineered scalable RESTful APIs for a workforce management system, enhancing performance and maintainability.",
        "Redesigned and optimized existing APIs to improve system efficiency and overall product quality.",
        "Integrated Stripe payment gateway for secure, seamless, and reliable user transactions.",
        "Implemented AWS S3 services to offload storage and significantly reduce server load.",
        "Boosted application [highlight]performance by 25%[/highlight] through effective Redis caching strategies.",
        "Developed real-time data features using Socket.io for improved user experience.",
        "Built and maintained robust backend systems using Laravel with clean architecture principles.",
        "Designed and developed a comprehensive admin panel for user management, payments, and access control.",
        "Optimized database performance through indexing, query tuning, and stored procedures.",
        "Applied service-repository pattern to ensure scalable and maintainable business logic.",
        "Handled API versioning, structured error handling, and advanced server-side debugging.",
        "Developed responsive frontend interfaces using Vue.js, JavaScript, HTML, CSS, Bootstrap, AJAX, and jQuery.",
        "Implemented role-based access control (RBAC) for secure user permission management.",
        "Led and mentored junior developers, ensuring code quality and timely delivery of features.",
        "Collaborated across teams to deliver high-performance, user-centric product enhancements."
      ]
    }
  ],
  projects: [
    {
      title: "Workstatus",
      subtitle: "Time Tracking & Employee Monitoring Tool",
      features: ["Real-time analytics", "Automated reporting", "Performance optimization"],
      content: "Developed scalable APIs for real-time analytics and automated reporting, ensuring efficient workforce management. Focused on optimizing system performance and reliability to meet business needs.",
      tags: ["Laravel", "Docker", "Vue JS"],
      href: "https://www.workstatus.io/"
    },
    {
      title: "Membership.io",
      subtitle: "Automated Content Management Platform",
      content:"Designed and optimized backend APIs, improved existing services, and integrated third-party tools. Worked closely with client-side developers to implement scalable features for seamless content management.",
      features: ["API optimization", "Third-party integrations", "Scalable architecture"],
      tags: ["CMS", "REST", "Laravel", "Vue JS", 'Third-party APIs'],
      href: "https://membership.io/"
    },
    {
      title: "HiringDay",
      subtitle: "Resume & Cover Letter Assistance Platform",
      content:"Developed a full-stack solution in Laravel, allowing users to either upload their resume/CV or provide personal and professional details to generate expert-crafted resumes and cover letters. Designed and implemented both frontend and backend functionalities for seamless user experience.",
      features: ["Full-stack Laravel app", "Resume generation", "Template system"],
      tags: ["Laravel", "PDF", "PHP"],
      href: "https://hiring.day/"
    },
    {
      title: "XactiMatch",
      subtitle: "Insurance claim processing system",
      content:"Developed a Laravel-based system to compare insurance claim documents, identifying missing details, similarities, and discrepancies. Implemented data scraping, mapping, and automated report generation. Designed and built both frontend and backend solutions, along with a fully customized admin panel for seamless management.",
      features: ["Document comparison", "Data scraping", "Automated reports"],
      tags: ["Claims", "Automation", "Reporting"],
      href: "https://www.xactimatch.com/"
    },
    {
      title: "Mpact International",
      subtitle: "(LMS) for managing courses, learning content, and custom surveys",
      content:"Developed frontend with Vue.js and backend with Laravel, implemented features like Assessment, Surveys, Employee management, Subscription management, and fixed existing bugs.",
      features: ["Course management", "Custom surveys", "Subscription management"],
      tags: ["LMS", "Vue JS", "Laravel"],
      href: "https://mpact-int.com/"
    },
    {
      title: "JCDecaux",
      subtitle: "Adtech platform for managing digital billboard advertisements",
      content:"Developed and optimized Restful APIs for an AdTech platform, focusing on data-driven performance and system efficiency. Collaborated within a cross-functional Agile team to deliver reliable and timely product features.",
      features: ["Ad management", "Performance optimization", "Agile collaboration", "API development"],
      tags: ["AdTech", "Vue JS", "Laravel", "Kafka"],
      href: "https://www.jcdecaux.com/"
    }
  ],
  skills: [
    {
      name: "Backend Development",
      items: [
        { label: "Laravel / PHP", score: 95 },
        { label: "REST APIs", score: 92 },
        { label: "Kafka", score: 85 },
        { label: "WebSocket", score: 82 }
      ]
    },
    {
      name: "Database & DevOps",
      items: [
        { label: "MySQL", score: 90 },
        { label: "PostgreSQL", score: 86 },
        { label: "Docker", score: 76 },
        { label: "AWS S3", score: 72 }
      ]
    },
    {
      name: "Frontend & Product",
      items: [
        { label: "JavaScript", score: 84 },
        { label: "Bootstrap", score: 90 },
        { label: "Vue.js", score: 74 },
        { label: "AJAX", score: 86 }
      ]
    },
    {
      name: "Leadership",
      items: [
        { label: "Team Leadership", score: 85 },
        { label: "Problem Solving", score: 95 },
        { label: "Agile Delivery", score: 80 },
        { label: "Client Communication", score: 90 }
      ]
    }
  ],
  skillBadges: [
    { label: "APIs", icon: "fa-solid fa-network-wired" },
    { label: "Database", icon: "fa-solid fa-database" },
    { label: "Laravel", icon: "fa-solid fa-code" },
    { label: "Cloud", icon: "fa-solid fa-cloud" },
    { label: "Docker", icon: "fa-solid fa-cube" },
    { label: "Kafka", icon: "fa-solid fa-stream" },
    { label: "Performance", icon: "fa-solid fa-tachometer-alt" },
    { label: "Leadership", icon: "fa-solid fa-users" }
  ],
  blog: [
    {
      title: "How to do object detection using Hugging Face API - Laravel",
      summary: "Learn How to Do Object Detection Using Hugging Face API in Laravel.",
      href: "https://www.thedevnerd.com/2025/02/blog-post.html"
    },
    {
      title: "Discover Why Stripe Stands Out as Your Top Payment Gateway",
      summary: "Step-by-step guide to Why Stripe is one of the best Payment Gateway.",
      href: "https://www.thedevnerd.com/2023/04/is-stripe-the-best-payment-gateway.html"
    },
    {
      title: "Simple Steps: Turn Database Data into JSON in Laravel - PHP",
      summary: "Step by Step guide to Convert Database entries to JSON file in Laravel.",
      href: "https://www.thedevnerd.com/2022/07/how-to-convert-data-to-json-file-from.html"
    }
  ],
  contact: [
    {
      title: "GitHub",
      value: "github.com/kumarkishan070997",
      href: "https://github.com/kumarkishan070997"
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/kishanmaharana/",
      href: "https://www.linkedin.com/in/kishanmaharana/"
    }
  ],
  // Add this inside the portfolioPayload object in script.js
// Add/Update this inside the portfolioPayload object in script.js
certifications: [
  {
    title: "Kafka for beginners",
    provider: "Udemy",
    date: "2025",
    image: "./docs/kafka.jpg", 
    summary: "Comprehensive introduction to Kafka, covering core concepts, architecture, and hands-on exercises."
  },
  {
    title: "Docker",
    provider: "Udemy",
    date: "2026",
    image: "./docs/Docker.jpg",
    summary: "In-depth Docker course covering containerization, orchestration, and real-world applications for developers and DevOps professionals."
  },
  {
    title: "Gen AI",
    provider: "Udemy",
    date: "2026",
    image: "./docs/GENAI.jpg", 
    summary: "Comprehensive course on Generative AI, covering foundational concepts, model architectures, and practical applications across industries."
  },
  {
    title: "Kubernetes",
    provider: "Udemy",
    date: "2026",
    image: "./docs/kubernetes.jpg",
    summary: "Comprehensive course on Kubernetes, covering container orchestration, deployment strategies, and real-world applications for developers and DevOps professionals."
  },
  {
    title: "Node JS",
    provider: "Udemy",
    date: "2026",
    image: "./docs/nodejs.jpg",
    summary: "Comprehensive course on Node.js, covering asynchronous programming, middleware, and real-world applications for developers and DevOps professionals."
  }
],

achievements: [
  {
    title: "AI Hackathon Winner",
    subtitle: "Codebuddy • 2025",
    icon: "fa-solid fa-trophy",
    highlight: true
  },
  {
    title: "Google Kickstart Certified",
    subtitle: "Google Coding Competition",
    icon: "fa-brands fa-google"
  },
  {
    title: "Competitive Programmer",
    subtitle: "CodeChef • LeetCode • GeeksforGeeks",
    icon: "fa-solid fa-code"
  },
  {
    title: "Hacktoberfest Contributor",
    subtitle: "Open Source Contribution",
    icon: "fa-brands fa-github"
  },
  {
    title: "TCS iON Certification",
    subtitle: "Software Engineering Industrial Practice • 2018",
    icon: "fa-solid fa-certificate"
  },
  {
    title: "Tech Blogger",
    subtitle: "TheDevNerd",
    icon: "fa-solid fa-pen-nib"
  }
],
// Update this inside the portfolioPayload object in script.js
education: [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Institute of Management and Information Technology ( IMIT )",
    location: "Odisha, India",
    period: "2018 - 2020",
    score: "9.03 CGPA",
    details: "Specialized in Software Engineering and Database Management Systems."
  }
],
};

const routeMap = {
  portfolio: "https://portfolio.dev/api/v1/portfolio/kishan?view=full",
  projects: "https://portfolio.dev/api/v1/portfolio/kishan/projects",
  skills: "https://portfolio.dev/api/v1/portfolio/kishan/skills",
  contact: "https://portfolio.dev/api/v1/portfolio/kishan/contact"
};

const ui = {
  requestUrl: document.getElementById("requestUrl"),
  sendRequest: document.getElementById("sendRequest"),
  responseJson: document.getElementById("responseJson"),
  loadingState: document.getElementById("loadingState"),
  responsePreview: document.getElementById("responsePreview"),
  statusCode: document.getElementById("statusCode"),
  latencyValue: document.getElementById("latencyValue"),
  payloadSize: document.getElementById("payloadSize")
};

function setCollectionState(activeRoute) {
  document.querySelectorAll(".collection-item").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.route === activeRoute);
  });
}

// Update the buildPayload function to handle the new route
function buildPayload(url) {
  if (url.includes("/projects")) return { endpoint: "projects", data: portfolioPayload.projects };
  if (url.includes("/skills")) return { endpoint: "skills", data: portfolioPayload.skills };
  if (url.includes("/contact")) return { endpoint: "contact", data: portfolioPayload.contact };
  // Add this line:
  if (url.includes("/certifications")) return { endpoint: "certifications", data: portfolioPayload.certifications };

  return {
    endpoint: "portfolio",
    meta: { status: 200, version: "v1", generatedAt: new Date().toISOString() },
    data: portfolioPayload
  };
}
function buildPayload(url) {
  if (url.includes("/projects")) {
    return { endpoint: "projects", data: portfolioPayload.projects };
  }

  if (url.includes("/skills")) {
    return { endpoint: "skills", data: portfolioPayload.skills };
  }

  if (url.includes("/contact")) {
    return { endpoint: "contact", data: portfolioPayload.contact };
  }

  return {
    endpoint: "portfolio",
    meta: {
      status: 200,
      version: "v1",
      generatedAt: new Date().toISOString()
    },
    data: portfolioPayload
  };
}

function renderJSON(payload) {
  const formattedJson = JSON.stringify(payload, null, 2);
  ui.responseJson.innerHTML = Prism.highlight(formattedJson, Prism.languages.json, 'json');
  const sizeKb = (new Blob([formattedJson]).size / 1024).toFixed(1);
  ui.payloadSize.textContent = `${sizeKb} KB`;
}

function renderAchievements() {
  const container = document.getElementById("achievementsGrid");

  container.innerHTML = portfolioPayload.achievements
    .map((item) => `
      <div class="achievement-card reveal ${item.highlight ? "highlight" : ""}">
        <div class="achievement-icon">
          <i class="${item.icon}"></i>
        </div>
        <div class="achievement-content">
          <h4>${item.title}</h4>
          <p>${item.subtitle}</p>
        </div>
      </div>
    `)
    .join("");
}

function renderHero() {
  const { profile } = portfolioPayload;
  document.getElementById("heroName").textContent = profile.name;
  document.getElementById("heroRole").textContent = profile.role;
  document.getElementById("heroSummary").textContent = profile.summary;
  document.getElementById("expYears").textContent = profile.experience;
  document.getElementById("heroStack").textContent = profile.coreStack;
  document.getElementById("heroLocation").textContent = profile.location;
  document.getElementById("heroAvailability").textContent = profile.availability;
}

function renderStrengths() {
  const container = document.getElementById("strengthList");
  container.innerHTML = portfolioPayload.profile.strengths
    .map((item) => `<span class="data-pill reveal">${item}</span>`)
    .join("");
}

function renderStats() {
  const container = document.getElementById("statsGrid");
  container.innerHTML = portfolioPayload.stats
    .map(
      (stat) => `
        <div class="mini-stat reveal">
          <span class="mini-stat-value">${stat.value}</span>
          <span class="mini-stat-label">${stat.label}</span>
        </div>
      `
    )
    .join("");
}

function renderExperience() {
  const container = document.getElementById("experienceGrid");
  container.innerHTML = portfolioPayload.experience
    .map(
      (item) => `
        <div class="timeline-item reveal">
          <div class="timeline-top">
            <div>
              <h4 class="timeline-title">${item.title}</h4>
              <p class="timeline-company">
                <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="company-link">
                  ${item.company} <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.7rem; margin-left: 4px;"></i>
                </a>
              </p>
            </div>
            ${item.isCurrent ? `<span class="card-tag"><span class="blink_me"></span>   ${item.period}</span>` : `<span class="card-tag">${item.period}</span>`}
          </div>
          <p class="timeline-summary">${item.summary}</p>
          <ul class="timeline-points">
            ${item.highlights.map((point) => `<li>${highlightText(point)}</li>`).join("")}
          </ul>
        </div>
      `
    )
    .join("");
}

function renderProjects() {
  const container = document.getElementById("projectGrid");
  container.innerHTML = portfolioPayload.projects
    .map(
      (project) => `
        <article class="project-item reveal">
          <div class="project-top">
            <div>
              <h4 class="project-title">${project.title}</h4>
              <p class="project-subtitle">${project.subtitle}</p>
            </div>
            <div style="display: flex; gap: 0.5rem; align-items: center;">
              <span class="method-pill method-get">GET</span>
              <i class="fa-solid fa-external-link-alt" style="color: var(--orange); cursor: pointer;" onclick="window.open('${project.href}', '_blank')" title="View Project"></i>
            </div>
          </div>
          <ul class="project-features">
            <li>${project.content}</li>
          </ul>
          <div class="project-tags">
            ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderSkills() {
  const container = document.getElementById("skillsGrid");
  container.innerHTML = portfolioPayload.skills
    .map(
      (group) => `
        <div class="skill-panel reveal">
          <h4>${group.name}</h4>
          ${group.items
            .map(
              (skill) => `
                <div class="skill-row">
                  <div class="skill-labels">
                    <span>${skill.label}</span>
                    <span>${skill.score}%</span>
                  </div>
                  <div class="skill-track">
                    <div class="skill-fill" data-score="${skill.score}"></div>
                  </div>
                </div>
              `
            )
            .join("")}
        </div>
      `
    )
    .join("");
}

function renderSkillBadges() {
  const container = document.getElementById("skillBadgeGrid");
  container.innerHTML = portfolioPayload.skillBadges
    .map(
      (badge) => `
        <div class="skill-badge reveal">
          <div class="badge-icon"><i class="${badge.icon}"></i></div>
          <div class="badge-text">
            <span>${badge.label}</span>
            <small>Core capability</small>
          </div>
        </div>
      `
    )
    .join("");
}

function renderCompactList(targetId, items, linkText) {
  const container = document.getElementById(targetId);
  const itemClass = targetId === "contactGrid" ? "contact-item" : "blog-item";
  const tagLabel = targetId === "contactGrid" ? "link" : "post";

  container.innerHTML = items
    .map(
      (item) => `
        <div class="${itemClass} reveal">
          <div class="compact-top">
            <h4 class="compact-title">${item.title}</h4>
            <span class="card-tag">${tagLabel}</span>
          </div>
          <p class="compact-copy">${item.summary || item.value}</p>
          <a class="compact-link" href="${item.href}" ${item.href !== "#" ? 'target="_blank" rel="noreferrer"' : ""}>
            ${linkText}
          </a>
        </div>
      `
    )
    .join("");
}

function animateSkillBars() {
  document.querySelectorAll(".skill-fill").forEach((bar, index) => {
    setTimeout(() => {
      bar.style.width = `${bar.dataset.score}%`;
    }, 100 + index * 70);
  });
}

function revealItems() {
  document.querySelectorAll(".reveal").forEach((element, index) => {
    setTimeout(() => {
      element.classList.add("is-visible");
    }, 40 * index);
  });
}

function renderCertifications() {
  const container = document.getElementById("certificationsGrid");
  // Ensure the container uses the grid layout
  container.className = "card-grid"; 
  
  container.innerHTML = portfolioPayload.certifications
    .map((cert, index) => `
        <article class="cert-card reveal" onclick="openCertModal(${index})">
          <div class="cert-image-preview">
            <img src="${cert.image}" alt="${cert.title}">
            <div class="cert-overlay">
              <i class="fa-solid fa-expand"></i>
              <span>View Full Certificate</span>
            </div>
          </div>
          <div class="cert-content">
            <div class="compact-top">
              <h4 class="cert-title">${cert.title}</h4>
              <span class="card-tag">${cert.date}</span>
            </div>
            <p class="cert-provider">${cert.provider}</p>
          </div>
        </article>
      `).join("");
}

function renderEducation() {
  const container = document.getElementById("educationGrid");
  // Only take the first (latest) item
  const latestEdu = portfolioPayload.education[0];

  container.innerHTML = `
    <div class="education-featured-card reveal">
      <div class="edu-icon-wrap">
        <i class="fa-solid fa-graduation-cap"></i>
      </div>
      <div class="edu-body">
        <div class="edu-header">
          <div>
            <h4 class="edu-degree">${latestEdu.degree}</h4>
            <p class="edu-institution">${latestEdu.institution} • ${latestEdu.location}</p>
          </div>
          <div class="edu-meta">
            <span class="card-tag">${latestEdu.period}</span>
            <span class="method-pill method-get">${latestEdu.score}</span>
          </div>
        </div>
        <p class="edu-details">${latestEdu.details}</p>
      </div>
    </div>
  `;
}

// Ensure you call this in your renderPreview() function
// renderEducation();

// Global function to handle the "pop" effect
window.openCertModal = function(index) {
  const cert = portfolioPayload.certifications[index];
  const modalHtml = `
    <div class="modal fade" id="certModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content bg-dark border-secondary">
          <div class="modal-header border-0">
            <h5 class="modal-title text-white">${cert.title}</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-center">
            <img src="${cert.image}" class="img-fluid rounded" alt="${cert.title}">
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Remove old modal if exists
  const oldModal = document.getElementById('certModal');
  if (oldModal) oldModal.remove();
  
  document.body.insertAdjacentHTML('beforeend', modalHtml);
  const myModal = new bootstrap.Modal(document.getElementById('certModal'));
  myModal.show();
};

// Update your renderPreview function to include the call
function renderPreview() {
  renderHero();
  renderStrengths();
  renderStats();
  renderExperience();
  renderProjects();
  renderSkills();
  renderSkillBadges();
  renderCompactList("blogGrid", portfolioPayload.blog, "Open article");
  renderCompactList("contactGrid", portfolioPayload.contact, "Open");
  renderCertifications(); // Add this line
  renderAchievements();
  renderEducation();
  revealItems();
  animateSkillBars();
}


function initPortfolioApp() {
  // Initialize AOS on page load
  AOS.init({
    duration: 600,
    easing: "ease-in-out",
    once: false,
    offset: 100
  });

  initCollectionButtons();
  initSendActions();
  setTimeout(() => {
    mockRequest();
  }, 300);
}

document.addEventListener("DOMContentLoaded", initPortfolioApp);

function animateValue(elementId, start, end, duration) {
  const element = document.getElementById(elementId);
  if (!element) return;

  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    element.textContent = value + (elementId === "expYears" ? "+" : "");
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };
  requestAnimationFrame(step);
}

function mockRequest() {
  const url = ui.requestUrl.value.trim();
  const payload = buildPayload(url);
  const latency = Math.floor(320 + Math.random() * 420);

  ui.loadingState.classList.remove("hidden");
  ui.loadingState.innerHTML = `
    <div>
      <div class="loader-ring"></div>
      <p>Sending request to <strong>${url}</strong></p>
    </div>
  `;
  ui.responsePreview.classList.add("hidden");
  ui.statusCode.textContent = "Loading...";
  ui.latencyValue.textContent = "...";
  ui.payloadSize.textContent = "...";

  setTimeout(() => {
    renderJSON(payload);
    ui.statusCode.textContent = "200 OK";
    ui.latencyValue.textContent = `${latency} ms`;
    ui.loadingState.classList.add("hidden");
    ui.responsePreview.classList.remove("hidden");
    renderPreview();

    // Initialize animations AFTER rendering
    setTimeout(() => {
      AOS.refresh(); // Refresh AOS for newly rendered elements
      
      gsap.from(".hero-response-card", {
        y: 40,
        opacity: 0,
        duration: 0.6
      });
      
      animateValue("expYears", 0, 6, 800);
    }, 50);
  }, latency);
}

function initCollectionButtons() {
  document.querySelectorAll(".collection-item").forEach((button) => {
    button.addEventListener("click", () => {
      const route = button.dataset.route;
      ui.requestUrl.value = routeMap[route];
      setCollectionState(route);
    });
  });
}

function initSendActions() {
  ui.sendRequest.addEventListener("click", mockRequest);
  ui.requestUrl.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      mockRequest();
    }
  });
}

document.getElementById('toggleView').addEventListener('click', function() {
  const jsonCard = document.querySelector('.response-json-card');
  const previewCard = document.querySelector('.response-preview-card');
  if (jsonCard.style.display === 'none') {
    jsonCard.style.display = 'block';
    previewCard.style.display = 'none';
  } else {
    jsonCard.style.display = 'none';
    previewCard.style.display = 'block';
  }
});

document.getElementById('copyJson').addEventListener('click', function() {
  const jsonText = ui.responseJson.textContent;
  navigator.clipboard.writeText(jsonText).then(() => {
    // Optional: temporary feedback
    const icon = this.querySelector('i');
    const originalClass = icon.className;
    icon.className = 'fa-solid fa-check';
    setTimeout(() => {
      icon.className = originalClass;
    }, 1000);
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
});
function highlightText(text) {
  // Highlight custom tags [highlight]text[/highlight]
  return text.replace(/\[highlight\](.*?)\[\/highlight\]/g, '<strong style="color: var(--orange);">$1</strong>');
}

