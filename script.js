const portfolioPayload = {
  profile: {
    name: "Kishan Maharana",
    role: "Software Engineer",
    experience: "6+ years",
    summary:
      "Backend-focused engineer with strong Laravel, API, Kafka, WebSocket, and database experience. I enjoy turning workflow-heavy products into scalable, reliable systems with clean interfaces and clear developer ergonomics.",
    coreStack: "Laravel, PHP, Kafka, MySQL",
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
    { label: "Core Domains", value: "API / SaaS / Ops" }
  ],
  experience: [
    {
      title: "Rishabh Software Pvt Ltd",
      company: "Software Engineer",
      period: "2025 - Present",
      isCurrent: true,
      summary: "Leading backend architecture and delivery for platform-scale products.",
      highlights: [
        "Developed and enhanced RESTful APIs; resolved critical server-side issues and performance bottlenecks.",
        "Worked on extending and modifying existing Kafka-based services as per evolving business requirements.",
        "Involved in backend development using Laravel and PostgreSQL.",
        "Followed clean code architecture principles to ensure scalable and maintainable codebase.",
        "Contributed to an AdTech project with a focus on data-driven performance and efficiency.",
        "Collaborated within a cross-functional Agile team to deliver robust and timely solutions."
      ]
    },
    {
      title: "Codebuddy Pvt Ltd",
      company: "Software Developer",
      period: "2024 - 2025",
      isCurrent: false,
      summary: "Delivered internal tools and integration-heavy systems across multiple products.",
      highlights: [
        "Developed and integrated both APIs and UI components for seamless user experiences.",
        "Directly collaborated with clients to understand requirements and deliver tailored solutions.",
        "Integrated authentication and data-sharing features with platforms like Google,Facebook, GitHub, YouTube, and Google Drive.",
        "Implemented Stripe payment gateway for secure and efficient transactions.",
        "Worked with APIs like Rev API and Embedrocks for enhanced functionality.",
        "AI tools such as ChatGPT and Gemini, tailoring solutions to project requirements.",
        "Implemented Laravel event listeners and job queues to enhance system performance.",
        "Optimized database queries and integrated WebSockets for real-time data updates.",
        "Proficient in troubleshooting and optimizing server-side processes.",
        "Hands-on experience in working with Docker across multiple projects.",
        "Basic experience with Vue.js and Node.js for expanding project capabilities."
      ]
    },
    {
      title: "Valuecoders",
      company: "Software Developer",
      period: "2020 - 2023",
      isCurrent: false,
      summary: "Built API-first systems and data-rich web applications.",
      highlights: [
        "Developing new API's along with redesigning existing API's.",
        "Amazon AWS S3 integration for required services to decrease server load.",
        "worked on query optimization and socket integration to show real-time data.",
        "Experience with API development, versioning, error handling, and server level debugging.",
        "Used JavaScript, HTML, CSS, Bootstrap, jQuery, AJAX and Vue JS for frontend development along with Laravel.",
        "Handling Roles & Permissions for different users.",
        "API development, versioning, error handling, and server level debugging.",
        "Integrated Stripe payment gateway to manage smooth payment processing for users.",
        "Working on service-repository patterns for smooth business logic implementation.",
        "Working on Vue.js for Frontend Integration.",
        "Managing a team of junior employees.",
      ]
    }
  ],
  projects: [
    {
      title: "Workstatus",
      subtitle: "Time Tracking & Employee Monitoring Tool",
      features: ["Real-time analytics", "Automated reporting", "Performance optimization"],
      content: "Developed scalable APIs for real-time analytics and automated reporting, ensuring efficient workforce management. Focused on optimizing system performance and reliability to meet business needs.",
      tags: ["Laravel", "Docker", "Vue JS"]
    },
    {
      title: "Membership.io",
      subtitle: "Automated Content Management Platform",
      content:"Designed and optimized backend APIs, improved existing services, and integrated third-party tools. Worked closely with client-side developers to implement scalable features for seamless content management.",
      features: ["API optimization", "Third-party integrations", "Scalable architecture"],
      tags: ["CMS", "REST", "Laravel", "Vue JS", 'Third-party APIs']
    },
    {
      title: "HiringDay",
      subtitle: "Resume & Cover Letter Assistance Platform",
      content:"Developed a full-stack solution in Laravel, allowing users to either upload their resume/CV or provide personal and professional details to generate expert-crafted resumes and cover letters. Designed and implemented both frontend and backend functionalities for seamless user experience.",
      features: ["Full-stack Laravel app", "Resume generation", "Template system"],
      tags: ["Laravel", "PDF", "PHP"]
    },
    {
      title: "XactiMatch",
      subtitle: "Insurance claim processing system",
      content:"Developed a Laravel-based system to compare insurance claim documents, identifying missing details, similarities, and discrepancies. Implemented data scraping, mapping, and automated report generation. Designed and built both frontend and backend solutions, along with a fully customized admin panel for seamless management.",
      features: ["Document comparison", "Data scraping", "Automated reports"],
      tags: ["Claims", "Automation", "Reporting"]
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
      value: "Add your profile URL here",
      href: "https://www.linkedin.com/in/kishanmaharana/"
    }
  ]
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
  ui.responseJson.textContent = JSON.stringify(payload, null, 2);
  const sizeKb = (new Blob([ui.responseJson.textContent]).size / 1024).toFixed(1);
  ui.payloadSize.textContent = `${sizeKb} KB`;
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
              <p class="timeline-company">${item.company}</p>
            </div>
            ${item.isCurrent ? `<span class="card-tag"><span class="blink_me"></span>   ${item.period}</span>` : `<span class="card-tag">${item.period}</span>`}
          </div>
          <p class="timeline-summary">${item.summary}</p>
          <ul class="timeline-points">
            ${item.highlights.map((point) => `<li>${point}</li>`).join("")}
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
            <span class="method-pill method-get">GET</span>
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
  revealItems();
  animateSkillBars();
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

function initPortfolioApp() {
  initCollectionButtons();
  initSendActions();
}

document.addEventListener("DOMContentLoaded", initPortfolioApp);

AOS.init({
  duration: 700,
  once: true
});

gsap.from(".hero-response-card", {
  y: 40,
  opacity: 0,
  duration: 0.6
});

function animateValue(id, start, end, duration) {
  let range = end - start;
  let stepTime = Math.abs(Math.floor(duration / range));
  let current = start;
  let obj = document.getElementById(id);

  let timer = setInterval(() => {
    current += 1;
    obj.textContent = current + "+";
    if (current == end) clearInterval(timer);
  }, stepTime);
}

// Use
animateValue("expYears", 0, 5, 800);

