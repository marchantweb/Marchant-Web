<template>
  <ol class="portfolio-links" :style="{ '--selector-offset': (5 + (selected * 40)) + 'px' }">
    <li v-for="(portfolioItem, index) in portfolioData"
        :class="{ 'portfolio-links--active': index === selected }"><a href="#" @click.prevent="updateSelected(index)"
                                                                      class="mouse-sm">{{ index }}</a></li>
  </ol>
</template>

<script setup>

const props = defineProps({
  portfolioData: {
    required: true
  },
  selected: {
    default: 0,
    required: true
  }
});

const emit= defineEmits(["updateSelected"]);

const updateSelected = (index) => {
  emit('updateSelected', index);
}

</script>

<style lang="scss" scoped>

ol.portfolio-links {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-bottom: 0;
  gap: 20px;
  position: relative;
  padding: 0;
  margin-top: 6px;

  &.portfolio-links--mobile{
    position: fixed;
    bottom: 40px;
    left: 30px;
  }

  li {
    font-family: "JetBrains Mono", monospace;
    width: 20px;
    font-size: 14px;
    text-align: center;

    a {
      font-weight: 400;
      color: rgba(255, 255, 255, 0.6);
      text-decoration: none;
      border-bottom: none;

      &:before {
        content: "0";
      }
    }

    &:nth-child(n+11) {
      a:before {
        content: "";
      }
    }

    &.portfolio-links--active {
      a {
        color: white;
        font-weight: 700;
      }
    }

  }

  &:after {
    content: '\f0d8';
    display: block;
    color: white;
    font-weight: 700;
    font-family: "Font Awesome 6 Sharp", sans-serif;
    position: absolute;
    font-size: 16px;
    left: 0;
    transform: translateX(var(--selector-offset, 5px));
    transition: transform 0.3s ease;
    top: 20px;
  }
}

</style>
