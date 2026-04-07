const portfolioPayload = {
  profile: {
    name: "Kishan Maharana",
    role: "Software Engineer",
    experience: "5+ years",
    summary:
      "Backend-focused engineer with strong Laravel, API, Kafka, WebSocket, and database experience. I enjoy turning workflow-heavy products into scalable, reliable systems with clean interfaces and clear developer ergonomics.",
    coreStack: "Laravel, PHP, Kafka, MySQL",
    location: "Bengaluru, India",
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
    { label: "Projects Shipped", value: "12+" },
    { label: "Years Experience", value: "5+" },
    { label: "Core Domains", value: "API / SaaS / Ops" }
  ],
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Product Engineering",
      period: "2023 - Present",
      summary: "Leading backend architecture and delivery for platform-scale products.",
      highlights: [
        "Built modular Laravel services for high-complexity business workflows.",
        "Improved endpoint consistency with versioned API design and reusable service layers.",
        "Worked cross-functionally with frontend, QA, and stakeholders to keep releases stable."
      ]
    },
    {
      title: "Software Engineer",
      company: "Platform Development",
      period: "2021 - 2023",
      summary: "Delivered internal tools and integration-heavy systems across multiple products.",
      highlights: [
        "Implemented Kafka-backed processing and real-time update flows.",
        "Created reusable admin modules for analytics, reporting, and workflow management.",
        "Focused on maintainability, observability, and delivery speed."
      ]
    },
    {
      title: "Laravel Developer",
      company: "Web Solutions",
      period: "2019 - 2021",
      summary: "Built API-first systems and data-rich web applications.",
      highlights: [
        "Developed REST APIs for client products and internal tools.",
        "Worked with MySQL and PostgreSQL-backed systems and secure access patterns.",
        "Delivered AJAX-driven experiences for responsive product flows."
      ]
    }
  ],
  projects: [
    {
      title: "Workforce Management",
      subtitle: "Operations platform for analytics and automation",
      features: ["Real-time analytics", "Automated reporting", "Performance optimization"],
      tags: ["Laravel", "Dashboards", "Ops"]
    },
    {
      title: "Content Management",
      subtitle: "Enterprise CMS with extensible APIs",
      features: ["API optimization", "Third-party integrations", "Scalable architecture"],
      tags: ["CMS", "REST", "PHP"]
    },
    {
      title: "Resume Platform",
      subtitle: "Career product with generation workflows",
      features: ["Full-stack Laravel app", "Resume generation", "Template system"],
      tags: ["Laravel", "PDF", "UX"]
    },
    {
      title: "XactiMatch",
      subtitle: "Insurance claim processing system",
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
      title: "Turning business workflows into clean API contracts",
      summary: "How structured endpoints reduce frontend friction and make scaling easier.",
      href: "#"
    },
    {
      title: "What makes a backend feel reliable to product teams",
      summary: "A practical view on performance, consistency, and operational trust.",
      href: "#"
    },
    {
      title: "When to optimize queries and when to redesign data flow",
      summary: "A simple mental model for deciding between tuning and re-architecture.",
      href: "#"
    }
  ],
  contact: [
    {
      title: "Live Portfolio",
      value: "kumarkishan070997.github.io/kishan-dev",
      href: "https://kumarkishan070997.github.io/kishan-dev/"
    },
    {
      title: "GitHub",
      value: "github.com/kumarkishan070997",
      href: "https://github.com/kumarkishan070997"
    },
    {
      title: "LinkedIn",
      value: "Add your profile URL here",
      href: "#"
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
            <span class="card-tag">${item.period}</span>
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
            ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
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
