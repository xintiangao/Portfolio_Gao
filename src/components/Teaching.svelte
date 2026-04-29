<script>
  export let teaching;
</script>

<section class="sec">
  <p class="sec-lbl">Instructional Timeline</p>

  {#each teaching.courses as group}
    <div class="semester-group mb-10">
      <h3 class="semester-title">
        {group.semester}
      </h3>

      {#each group.items as course}
        <div class="card mb-4">
          <div class="card-row">
            <div>
              <h3>{course.title}</h3>
              <p class="meta">{course.meta}</p>
            </div>
            <div class="flex gap-1">
              {#if course.badges}
                {#each course.badges as badge}
                  <span class="bdg {badge.cls}">{badge.label}</span>
                {/each}
              {/if}
            </div>
          </div>
          <p>{course.desc}</p>
        </div>
      {/each}
    </div>
  {/each}

  {#if teaching.workshops && teaching.workshops.length > 0}
    <div class="divider"></div>
    <p class="sec-lbl">LXD & Professional Roles</p>
    {#each teaching.workshops as ws}
      <div class="card mb-4">
        <h3>{ws.title}</h3>
        <p class="meta">{ws.meta}</p>
        <p>{ws.desc}</p>
      </div>
    {/each}
  {/if}
</section>

<style>
  .semester-title {
    font-size: var(--fs-sm);
    font-weight: var(--fw-semibold);
    color: var(--clr-accent);
    text-transform: uppercase;
    letter-spacing: var(--ls-label);
    margin-bottom: var(--sp-4);
    border-bottom: 1px solid var(--clr-border);
    padding-bottom: var(--sp-1);
  }

  .semester-group {
    border-left: 2px solid var(--clr-paper-3);
    padding-left: var(--sp-4);
    margin-left: var(--sp-1);
  }
</style>
