<template>
  <section class="page">

    <div class="container">

      <!-- Hero-->
      <div class="row mt-5 gx-6">
        <div class="col-4">
          <MWIcon :size="50" type="white"/>
          <CodeTag class="mt-8 mb-3">{{ currentPortfolioItem['type'] }}</CodeTag>
          <h1 class="mb-3"> {{ currentPortfolioItem['title'] }} </h1>
        </div>
        <div class="col mt-5">
          <video class="mouse-md" loop="true" muted autoplay>
            <source
                :src="currentPortfolioItem['video']"
                type="video/mp4">
          </video>
        </div>
      </div>

      <div class="row mt-8 gx-6">
        <div class="col-4">

        </div>
        <div class="col">
          <h2 class="mb-5">{{ currentPortfolioItem['lead'] }}</h2>
          <section v-for="block in currentPortfolioItem['pageContent']">
            <!--            <p v-if="block['type'] === 'paragraph'" v-html="block['paragraph']['rich_text'][0]['text']['content']"/>-->
          </section>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur at, debitis dignissimos ducimus esse
            fugiat impedit, magnam minima modi natus neque nihil odio provident quae, qui tenetur vel voluptatem! Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Ab, adipisci aliquid atque cum, error harum illo ipsam
            libero maxime minus nostrum nulla perferendis quaerat quisquam ut? Aut expedita molestias voluptate? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Alias, dolorem fuga, impedit laboriosam modi nobis
            obcaecati placeat quia, recusandae repellat veniam voluptatem voluptates. Doloremque nemo optio quas sequi
            soluta voluptate.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus distinctio dolore, eligendi, facere
            itaque labore magni nostrum odit omnis rem repudiandae sint? Cupiditate distinctio eos illum, laboriosam
            molestiae rerum sit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores exercitationem
            ipsam neque quasi, quo voluptas! Asperiores aut, doloremque esse natus necessitatibus numquam odio
            perspiciatis praesentium quibusdam sequi. Animi, magnam, vero. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Atque cum deserunt, dicta dolorum enim in laborum modi optio repellat tempore, ullam velit
            vitae voluptate! Dolor ea est facere incidunt quaerat. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Accusamus aperiam, cum delectus deleniti dolore eligendi error molestias nam necessitatibus neque
            nihil nulla numquam quaerat sequi sit temporibus voluptas voluptate voluptatem. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Blanditiis, illo repudiandae. A ab aspernatur aut beatae, cumque dolores
            eveniet, facere fugit itaque nostrum odit officiis quam unde vel voluptate voluptatum.</p>
        </div>
      </div>

    </div>

  </section>
</template>

<script setup>

const route = useRoute();
const portfolioData = await usePortfolio();

const currentPortfolioItem = computed(() => {
  return portfolioData.value[portfolioData.value.findIndex(project => project["slug"] === route.params["slug"][0])];
});

</script>

<style lang="scss" scoped>

page {
  overflow-x: auto;
}

h1 {
  color: white;
}

video {
  width: 100%;
  aspect-ratio: 2;
  object-fit: cover;
  box-shadow: rgb(0 0 0 / 27%) 0 63px 15px -46px, rgb(0 0 0 / 4%) 0 10px 10px -5px;
  border-radius: 3px;
}

p {
  width: 700px;
  max-width: 100%;
}

</style>
