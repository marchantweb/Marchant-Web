<template>
  <section class="portfolio-cover">

    <!-- Title & Stack -->
    <div class="row justify-content-between align-items-end mb-4">
      <div class="col">
        <span class="portfolio-cover__type text-small mb-2 d-block">What type of project</span>
        <h1 class="portfolio-cover__title">Project Title</h1>
      </div>
      <div class="col-4">
        <ul class="tech-stack">
          <li>Stack 1</li>
          <li>Stack 2</li>
          <li>Stack 3</li>
          <li>Stack 4</li>
        </ul>
      </div>
    </div>

    <!-- Video -->
    <video class="portfolio-cover__video" loop="true" autoplay="autoplay" muted>
      <source
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fa1d9bd4-de22-46ea-82a8-e2d8f5643bc1/RedArcade_Screencapture.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230110T034851Z&X-Amz-Expires=3600&X-Amz-Signature=2caa41a8f79008ce7fa79dd41b23e2c0ac45add8c30d8b8924b99ae680d0b9ea&X-Amz-SignedHeaders=host&x-id=GetObject"
          type="video/mp4">
    </video>

  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.portfolio-cover {
  position: relative;
  width: 100%;
}

.portfolio-cover__type{
  color: #AFBFD6;
}

.portfolio-cover__title {
  color: white;
  font-size: 30px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.2px;
}

.portfolio-cover__video {
  width: 100%;
  aspect-ratio: 2;
  object-fit: cover;
  box-shadow: #2c205b 0 20px 20px -10px;
  border-radius: 5px;
  object-position: top center;
  transition: transform 1s ease;
}

.page-enter-from,
.page-leave-to {
  .portfolio-cover__video {
    transform: scale(0.7);
  }
}

</style>
