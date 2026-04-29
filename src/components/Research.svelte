<script>
  export let research;
</script>

<section class="sec">
  <p class="sec-lbl">Selected current &amp; past projects (more in CV)</p>

  {#each research as item}
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
</section>
