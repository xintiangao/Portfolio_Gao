<script>
  export let contact;
</script>

<section class="sec">
  <p class="sec-lbl">Find me</p>

  <div class="grid grid-md gap-3">
    {#each contact as link}
      <a
        class="clink"
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
      >
      <div class="cicon">
        {#if link.label.toLowerCase().includes('email')}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline></svg>
        
        {:else if link.label.toLowerCase().includes('linkedin')}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        
        {:else if link.label.toLowerCase().includes('twitter') || link.label.toLowerCase().includes('x')}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4l11.733 16h4.267l-11.733 -16zM4 20l6.768 -6.768M13.232 10.768l6.768 -6.768"></path></svg>
        
        {:else}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
        {/if}
      </div>
        <div>
          <div class="cl-t">{link.label}</div>
        </div>
      </a>
    {/each}
  </div>
</section>
