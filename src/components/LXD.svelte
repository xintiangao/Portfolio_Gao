<script>
  import {
    lxdIntro,
    lxdCategories,
    lxdArtifacts,
    lxdTagColor,
    courseraCourses,
    courseraStats,
  } from "../lib/data.js";

  let activeFilter = "*";
  let expandedArtId = null;
  let expandedCourse = null;
  let activeTab = "courses";

  $: filtered =
    activeFilter === "*"
      ? lxdArtifacts
      : lxdArtifacts.filter((a) => a.tags.includes(activeFilter));

  function toggleArtifact(id) {
    expandedArtId = expandedArtId === id ? null : id;
  }

  function toggleCourse(id) {
    expandedCourse = expandedCourse === id ? null : id;
  }

  const statusCls = {
    Published: "bdg-teal",
    "In development": "bdg-amber",
    Archived: "bdg-purple",
  };
</script>

<section class="sec">
  <!-- ── Hero ── -->
  <div class="lxd-hero">
    <div class="lxd-hero-accent"></div>
    <div class="lxd-hero-inner">
      <div>
        <h2 class="lxd-title">{lxdIntro.title}</h2>
        <p class="lxd-sub">{lxdIntro.subtitle}</p>
        <p class="lxd-body">{lxdIntro.description}</p>
        <a
          class="btn mt-4"
          href={lxdIntro.competenciesUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View LXD competencies →
        </a>
      </div>
    </div>
  </div>

  <!-- ── Sub-nav tabs ── -->
  <div class="lxd-tabs mt-8">
    <button
      class="lxd-tab {activeTab === 'courses' ? 'lxd-tab-active' : ''}"
      on:click={() => (activeTab = "courses")}
    >
      Courses
    </button>
    <button
      class="lxd-tab {activeTab === 'artifacts' ? 'lxd-tab-active' : ''}"
      on:click={() => (activeTab = "artifacts")}
    >
      Portfolio artifacts
    </button>
  </div>

  <!-- ════════════════════════════════════════
  TAB 1 — Coursera courses
  ════════════════════════════════════════ -->
  {#if activeTab === "courses"}
    <!-- Stats strip -->
    <div class="grid grid-stat gap-3 mt-4 mb-8">
      {#each courseraStats as s}
        <div class="stat-card">
          <div class="stat-n">{s.n}</div>
          <div class="stat-l">{s.label}</div>
        </div>
      {/each}
    </div>
    <div class="lxd-sub">
      <p>Selected Courses</p>
    </div>

    <!-- Course cards -->
    {#each courseraCourses as course (course.id)}
      <div class="lxd-course-card mb-4">
        <!-- Course header (always visible) -->
        <button
          class="lxd-course-header"
          on:click={() => toggleCourse(course.id)}
          aria-expanded={expandedCourse === course.id}
        >
          <div class="lxd-course-header-left">
            {#if course.thumbnail && course.thumbnail && !course.thumbnail.startsWith("[")}
              <img
                class="lxd-course-thumb"
                src={course.thumbnail}
                alt={course.title}
              />
            {:else}
              <div class="lxd-course-thumb lxd-course-thumb-placeholder">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="3"
                    stroke="var(--clr-accent)"
                    stroke-width="1.5"
                  />
                  <path
                    d="M9 12l2 2 4-4"
                    stroke="var(--clr-accent)"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            {/if}
            <div class="lxd-course-meta">
              <h3 class="lxd-course-title">{course.title}</h3>
              <!-- <p class="lxd-course-sub">
                {course.institution} · {course.period}
              </p> -->
              <div class="flex gap-2 flex-wrap mt-2">
                <span class="bdg {statusCls[course.status] || 'bdg-accent'}"
                  >{course.status}</span
                >
                <span class="bdg bdg-purple">★ {course.platform}</span>
                {#if course.type && !course.type.startsWith("[")}
                  <span class="bdg bdg-rose">★ {course.type}</span>
                {/if}
                {#if course.rating && !course.rating.startsWith("[")}
                  <span class="bdg bdg-amber">★ {course.rating}</span>
                {/if}
              </div>
            </div>
          </div>
          <span
            class="lxd-chevron {expandedCourse === course.id ? 'open' : ''}"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 5l4 4 4-4"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>

        <!-- Expanded course detail -->
        {#if expandedCourse === course.id}
          <div class="lxd-course-detail">
            <p class="sec-lbl">About this course</p>
            <p class="prose mb-6">{course.summary}</p>

            <div class="lxd-course-cols">
              <!-- Left: responsibilities -->
              <div>
                <p class="sec-lbl">My responsibilities</p>
                <ul class="lxd-resp-list">
                  {#each course.responsibilities as resp}
                    <li class="lxd-resp-item">
                      <span class="lxd-resp-dot"></span>
                      <span class="lxd-resp-text">{resp}</span>
                    </li>
                  {/each}
                </ul>
              </div>

              <!-- Right: tools + link -->
              <div>
                <p class="sec-lbl">Tools used</p>
                <div class="lxd-tag-row">
                  {#each course.tools as tool}
                    {#if !tool.startsWith("[")}
                      <span class="chip">{tool}</span>
                    {/if}
                  {/each}
                </div>

                {#if course.url && !course.url.includes("[course-slug]")}
                  <a
                    class="btn mt-4"
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View the course ↗
                  </a>
                {/if}
              </div>
            </div>
          </div>
        {/if}
      </div>
    {/each}

    <!-- ════════════════════════════════════════
     TAB 2 — Portfolio artifacts
════════════════════════════════════════ -->
  {:else if activeTab === "artifacts"}
    <div class="lxd-filters mt-4">
      {#each lxdCategories as cat}
        <button
          class="lxd-filter-btn {activeFilter === cat.id ? 'active' : ''}"
          on:click={() => (activeFilter = cat.id)}
        >
          {cat.label}
        </button>
      {/each}
    </div>

    <div class="lxd-grid">
      {#each filtered as artifact (artifact.id)}
        <div class="lxd-artifact">
          <div class="lxd-media">
            {#if artifact.embed}
              <iframe
                src={artifact.embed}
                title={artifact.title}
                frameborder="0"
                allowfullscreen
              ></iframe>
            {:else}
              <img src={artifact.image} alt={artifact.title} loading="lazy" />
            {/if}
            <a
              class="lxd-link-badge"
              href={artifact.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${artifact.title}`}>↗</a
            >
          </div>

          <div class="lxd-artifact-body">
            <button
              class="lxd-expand-btn"
              on:click={() => toggleArtifact(artifact.id)}
              aria-expanded={expandedArtId === artifact.id}
            >
              <span class="lxd-artifact-title">{artifact.title}</span>
              <span
                class="lxd-chevron {expandedArtId === artifact.id
                  ? 'open'
                  : ''}"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 5l4 4 4-4"
                    stroke="currentColor"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </button>

            <div class="lxd-tag-row">
              {#each artifact.tags as tag}
                <span class="bdg {lxdTagColor[tag] || 'bdg-accent'}">{tag}</span
                >
              {/each}
            </div>

            {#if expandedArtId === artifact.id}
              <div class="lxd-detail">
                <p class="sec-lbl mt-4">Description</p>
                <p class="prose">{artifact.description}</p>
                <p class="sec-lbl mt-4">My role</p>
                <p class="prose">{artifact.role}</p>
                <p class="sec-lbl mt-4">LXD competencies addressed</p>
                {#each artifact.competencies as comp}
                  <div class="lxd-comp">
                    <div class="lxd-comp-label">{comp.label}</div>
                    <p class="lxd-comp-text">{comp.detail}</p>
                  </div>
                {/each}
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </div>

    {#if filtered.length === 0}
      <p class="prose" style="text-align:center;padding:2rem 0">
        No artifacts found for this category.
      </p>
    {/if}
  {/if}
</section>
