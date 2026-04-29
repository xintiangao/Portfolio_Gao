<script>
  export let profile;
  export let stats;
  export let dissertation;
</script>

<section class="sec">

  <!-- Hero band -->
  <div class="hero-band">
    <div class="flex items-start gap-6">
      <div class="av">
        <img src="static/headshot.JPG" alt="Headshot of Xintian Gao" class="av-img" />
      </div>
      <div>
        <h1 class="hname">{profile.name}</h1>
        <p class="hsub">{profile.role} · {profile.department} · {profile.university}</p>
        <div class="htags">
          {#each profile.tags as tag}
            <span class="htag">{tag}</span>
          {/each}
        </div>
        <div class="flex gap-2 flex-wrap mt-4">
          <a class="btn" href="mailto:gaoxintian@ufl.edu">Get in touch →</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Stats -->
  <div class="grid grid-stat gap-3 mb-8">
    {#each stats as s}
      <div class="stat-card">
        <div class="stat-n">{s.n}</div>
        <div class="stat-l">{s.label}</div>
      </div>
    {/each}
  </div>

  <!-- Dissertation focus -->      
  <!-- <div class="focus-banner">
    <h3>Dissertation: {dissertation.title}</h3>
    <p>{dissertation.body}</p>
  </div> -->

  <!-- Bio -->
  <p class="sec-lbl">About me</p>
  <p class="prose">{profile.bio}</p>

</section>
