<script>
  export let skills;

  const cvLink =
    "https://docs.google.com/document/d/e/2PACX-1vTyRqe-oFujL8vvzX87YxqVD8pGFHH7ewTKPhJkpV5pK710ZWraqDXDmLTXcoSJRg/pub?embedded=true";
</script>

<section class="sec">
  <p class="sec-lbl">Curriculum Vitae</p>

  <div class="cv-embed-container">
    <div class="cv-iframe-wrapper">
      <iframe src={cvLink} title="Xintian Gao CV"> </iframe>
    </div>
    <div class="flex justify-between items-center mt-3 px-2 pb-1">
      <a
        href={cvLink.replace("pub?embedded=true", "pub")}
        target="_blank"
        class="btn btn-sm"
      >
        View it on Google Docs ↗
      </a>
    </div>
  </div>

  <div class="divider"></div>

  <p class="sec-lbl">Research methods</p>
  <div class="grid grid-sm gap-3 mb-6">
    {#each skills.methods as method}
      <div class="skill-card">
        <div class="sk-icon" style="background:{method.iconBg}">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle
              cx="5"
              cy="5"
              r="3"
              stroke={method.iconColor}
              stroke-width="1.2"
            />
            <circle
              cx="11"
              cy="11"
              r="3"
              stroke={method.iconColor}
              stroke-width="1.2"
            />
            <line
              x1="7.5"
              y1="7.5"
              x2="9"
              y2="9"
              stroke={method.iconColor}
              stroke-width="1.2"
            />
          </svg>
        </div>
        <div class="sk-t">{method.label}</div>
        {#each method.chips as chip}
          <span class="chip">{chip}</span>
        {/each}
      </div>
    {/each}
  </div>

  <p class="sec-lbl">Tools &amp; platforms</p>
  <div class="grid grid-sm gap-3 mb-6">
    {#each skills.tools as tool}
      <div class="skill-card">
        <div class="sk-t">{tool.label}</div>
        {#each tool.chips as chip}
          <span class="chip">{chip}</span>
        {/each}
      </div>
    {/each}
  </div>

  <p class="sec-lbl">Awards &amp; funding</p>
  {#each skills.awards as award}
    <div class="card mb-4">
      <div class="card-row">
        <div>
          <h3>{award.title}</h3>
          <p class="meta">{award.meta}</p>
        </div>
        {#if award.badge}
          <span class="bdg {award.badge.cls}">{award.badge.label}</span>
        {/if}
      </div>
      <p>{award.desc}</p>
    </div>
  {/each}
</section>

<style>
  .cv-iframe-wrapper {
    width: 100%;
    height: 600px; /* Adjust height as needed */
    border: 0.5px solid var(--clr-border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    background: white;
    box-shadow: var(--shadow-sm);
  }

  iframe {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 600px) {
    .cv-iframe-wrapper {
      height: 400px;
    }
  }
</style>
