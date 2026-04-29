<script>
  export let publications;
</script>

<section class="sec">

  <p class="sec-lbl">Peer-reviewed articles</p>
  {#each publications.articles as item}
    <div class="card mb-4">
      <h3>{item.title}</h3>
      <p class="meta">{@html item.meta}</p>
      <p>{item.desc}</p>
    </div>
  {/each}

  <div class="divider"></div>

  <p class="sec-lbl">Conference papers</p>
  {#each publications.conference as item}
    <div class="card mb-4">
      <div class="card-row">
        <div>
          <h3>{item.title}</h3>
          <p class="meta">{item.meta}</p>
        </div>
        {#if item.badge}
          <span class="bdg {item.badge.cls}">{item.badge.label}</span>
        {/if}
      </div>
      <p>{item.desc}</p>
    </div>
  {/each}

  <div class="divider"></div>

  <p class="sec-lbl">Working papers &amp; preprints</p>
  {#each publications.working as item}
    <div class="card mb-4">
      <h3>{item.title}</h3>
      <p class="meta">{item.meta}</p>
      <p>{item.desc}</p>
    </div>
  {/each}

</section>
