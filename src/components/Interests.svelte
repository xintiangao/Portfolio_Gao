<script>
  export let interests;
</script>

<section class="sec">

  <!-- Quote -->
  <div class="quote-block">
    <blockquote>{interests.quote.text}</blockquote>
    <cite>{interests.quote.source}</cite>
  </div>

  <p class="sec-lbl">What I do outside research</p>

  <!-- Interest cards -->
  <div class="grid grid-md gap-3 mb-6">
    {#each interests.cards as card}
      <div class="int-card">
        <div class="int-icon" style="background:{card.iconBg}">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {@html card.iconPath}
          </svg>
        </div>
        <div class="int-title">{card.title}</div>
        <div class="int-desc">{card.desc}</div>
      </div>
    {/each}
  </div>

  <div class="divider"></div>

  <!-- Currently -->
  <p class="sec-lbl">Currently</p>
  <div class="currently-band">
    <div class="flex gap-6 flex-wrap">
      {#each interests.currently as cur}
        <div class="cur-item">
          <span class="cur-label">{cur.label}</span>
          <span class="cur-val">{cur.val}</span>
          <span class="cur-sub">{cur.sub}</span>
        </div>
      {/each}
    </div>
  </div>

</section>
