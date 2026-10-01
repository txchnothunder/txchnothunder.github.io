function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function anchor(label, href) {
  const a = el("a", "", label);
  a.href = href;
  if (href.startsWith("http")) {
    a.target = "_blank";
    a.rel = "noopener";
  }
  return a;
}

function buildViewer(item) {
  const box = el("div", "viewer");
  if (item.type === "image") {
    const img = el("img");
    img.src = item.file;
    img.alt = item.label;
    box.appendChild(img);
  } else {
    const frame = el("iframe");
    frame.src = item.file;
    frame.title = item.label;
    frame.loading = "lazy";
    box.appendChild(frame);
  }
  box.appendChild(anchor("Open in a new tab", item.file));
  return box;
}

function buildMaterials(project) {
  const wrap = el("div", "materials");
  const viewerSlot = el("div", "viewer-slot");
  let openButton = null;

  project.items.forEach(function (item) {
    if (item.type === "link") {
      wrap.appendChild(anchor(item.label, item.file));
      return;
    }
    const button = el("button", "", item.label);
    button.type = "button";
    button.setAttribute("aria-expanded", "false");
    button.addEventListener("click", function () {
      const wasOpen = openButton === button;
      viewerSlot.replaceChildren();
      if (openButton) openButton.setAttribute("aria-expanded", "false");
      openButton = null;
      if (!wasOpen) {
        viewerSlot.appendChild(buildViewer(item));
        button.setAttribute("aria-expanded", "true");
        openButton = button;
      }
    });
    wrap.appendChild(button);
  });

  const fragment = document.createDocumentFragment();
  fragment.appendChild(wrap);
  fragment.appendChild(viewerSlot);
  return fragment;
}

function renderProjects() {
  const list = document.getElementById("project-list");
  PROJECTS.forEach(function (project) {
    const article = el("article", "project");
    article.appendChild(el("h3", "", project.title));
    article.appendChild(el("p", "meta", project.dates + (project.status ? " | " + project.status : "")));
    article.appendChild(el("p", "", project.summary));
    if (project.tags) article.appendChild(el("p", "tags", project.tags.join(", ")));
    article.appendChild(buildMaterials(project));
    list.appendChild(article);
  });
}

function renderExperience() {
  const list = document.getElementById("experience-list");
  RESUME.experience.forEach(function (job) {
    const row = el("article", "entry");
    row.appendChild(el("p", "meta", job.dates));
    const body = el("div");
    body.appendChild(el("h3", "", job.title));
    body.appendChild(el("p", "org", job.org));
    const ul = el("ul");
    job.bullets.forEach(function (text) {
      ul.appendChild(el("li", "", text));
    });
    body.appendChild(ul);
    row.appendChild(body);
    list.appendChild(row);
  });
}

function renderEducation() {
  const list = document.getElementById("education-list");
  RESUME.education.forEach(function (entry) {
    const row = el("article", "entry");
    row.appendChild(el("p", "meta", entry.dates));
    const body = el("div");
    body.appendChild(el("h3", "", entry.degree));
    body.appendChild(el("p", "org", entry.school));
    if (entry.note) body.appendChild(el("p", "", entry.note));
    row.appendChild(body);
    list.appendChild(row);
  });
}

function renderSkills() {
  const list = document.getElementById("skills-list");
  RESUME.skills.forEach(function (group) {
    list.appendChild(el("dt", "", group.label));
    list.appendChild(el("dd", "", group.items));
  });
}

function renderHeader() {
  document.getElementById("name").textContent = RESUME.name;
  document.getElementById("tagline").textContent = RESUME.tagline;
  const about = document.getElementById("about");
  RESUME.about.forEach(function (text) {
    about.appendChild(el("p", "", text));
  });
  if (RESUME.photo) {
    const photo = document.getElementById("photo");
    photo.src = RESUME.photo;
    photo.hidden = false;
  }
  const nav = document.getElementById("links");
  RESUME.links.forEach(function (item) {
    nav.appendChild(anchor(item.label, item.href));
  });
}

renderHeader();
renderProjects();
renderExperience();
renderEducation();
renderSkills();
