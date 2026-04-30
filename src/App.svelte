<script>
  import About from "./components/About.svelte";
  import Research from "./components/Research.svelte";
  import Publications from "./components/Publications.svelte";
  import Teaching from "./components/Teaching.svelte";
  import Skills from "./components/Skills.svelte";
  import Interests from "./components/Interests.svelte";
  import Contact from "./components/Contact.svelte";
  import LXD from "./components/LXD.svelte";

  import {
    profile,
    stats,
    dissertation,
    research,
    publications,
    teaching,
    skills,
    interests,
    contact,
  } from "./lib/data.js";

  const tabs = [
    { id: "about", label: "About" },
    { id: "research", label: "Research" },
    // { id: "publications", label: "Publications" },
    { id: "teaching", label: "Teaching" },
    { id: "LXD", label: "LXD" },
    { id: "skills", label: "CV" },
    // { id: "interests", label: "Interests" },
    { id: "contact", label: "Contact" },
  ];

  let active = "about";

  function navigate(id) {
    active = id;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
</script>

<div class="wrapper">
  <!-- Topbar -->
  <header class="topbar">
    <div class="logo">Xintian Gao <em>Portfolio</em></div>
    <nav class="nav">
      {#each tabs as tab}
        <button
          class="nav-btn {active === tab.id ? 'active' : ''}"
          on:click={() => navigate(tab.id)}
          aria-current={active === tab.id ? "page" : undefined}
        >
          {tab.label}
        </button>
      {/each}
    </nav>
  </header>

  <!-- Sections -->
  {#key active}
    {#if active === "about"}
      <About {profile} {stats} {dissertation} />
    {:else if active === "research"}
      <Research {research} />
    {:else if active === "publications"}
      <Publications {publications} />
    {:else if active === "teaching"}
      <Teaching {teaching} />
    {:else if active === "LXD"}
      <LXD />
    {:else if active === "skills"}
      <Skills {skills} />
    {:else if active === "interests"}
      <Interests {interests} />
    {:else if active === "contact"}
      <Contact {contact} />
    {/if}
  {/key}
</div>
