<template>
  <section ref="container" :class="elementClasses" :style="elementStyle">

    <!-- Title & Stack -->
    <div class="title-bar row justify-content-between align-items-end mb-4 flex-nowrap">
      <div class="col-8">
        <span class="portfolio-cover__type text-small mb-2 d-block">{{ portfolioItem["type"] }}</span>
        <h1 class="portfolio-cover__title">{{ portfolioItem["title"] }}</h1>
      </div>
      <div class="col-4">
        <ul class="tech-stack">
          <li v-for="stackItem in portfolioItem['stack']">{{ stackItem["name"] }}</li>
        </ul>
      </div>
    </div>

    <!-- Video -->
    <video class="portfolio-cover__video mouse-lg" loop="true" muted autoplay>
      <source
          :src="portfolioItem['video']"
          type="video/mp4">
    </video>

  </section>
</template>

<script setup>

import {useElementSize, useWindowSize} from "@vueuse/core";
import { SlowMo} from "gsap/EasePack";

const props = defineProps({
  portfolioItem: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  offset: {
    type: Number,
    required: true,
    default: 0
  }
});

const container = ref(null);
const {width, height} = useElementSize(container);
const screen = useWindowSize();

/**
 * How much of the total percentage does each item represent?
 * @type {number}
 */
const percentagePerItem = 1 / props.total;

/**
 * How much of the total percentage fit 3 items to the screen at once?
 * @type {number}
 */
const totalOffsetWidth = percentagePerItem * 1;

/**
 * What's the total width of all the portfolio elements?
 * @type {ComputedRef<unknown>}
 */
const totalWidth = computed(() => {
  return Math.round((screen.width.value / 1) * props.total);
});

/**
 * The percentage of the total width that this item represents
 * @type {ComputedRef<unknown>}
 */
const totalPercentage = computed(() => {
  return percentagePerItem * props.index;
});

/**
 * What percentage across the visible screen is this element?
 * @type {ComputedRef<unknown>}
 */
const localPercentage = computed(() => {
  const localEnd = props.offset + totalOffsetWidth;
  return (totalPercentage.value - (props.offset - totalOffsetWidth)) / (localEnd - props.offset);
});

/**
 * Determines the shape function to draw the cover, assuming we're within a portfolio slider.
 * @type {ComputedRef<{x, y: number}>}
 */
const position = computed(() => {

  //let rangedPercentage = Power4.easeInOut(localPercentage.value);
  let rangedPercentage = SlowMo(localPercentage.value);

  return {
    x: Math.round(rangedPercentage * screen.width.value),
    y: Math.round(screen.height.value - height.value - 60)
  };
});

/**
 * Determine the inline styles to apply to the element
 * @type {ComputedRef<{transform: string, top: number, left: number, position: string, transition: string}>}
 */
const elementStyle = computed(() => {
  return {
    position: 'absolute',
    top: 0,
    left: 0,
    'transform': "translate(" + (position.value.x - (width.value / 2)) + "px, " + position.value.y + "px)",
  }
});

/**
 * Determine the CSS classes to apply to the element
 * @type {ComputedRef<{"portfolio-cover": boolean, "portfolio-cover--active"}>}
 */
const elementClasses = computed(() => {
  return {
    'portfolio-cover': true,
    'portfolio-cover--active': (localPercentage.value >= 0 && localPercentage.value <= 1)
  }
});

</script>

<style lang="scss" scoped>

.portfolio-cover {
  position: absolute;
  width: 50vw;
  aspect-ratio: 16 / 9;
  transition: width 0.5s cubic-bezier(0.85, 0, 0.15, 1);

  .title-bar {
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .tech-stack {
    flex-wrap: nowrap;
  }

  &.portfolio-cover--active {
    width: 70vw;
    z-index: 2;

    .title-bar {
      opacity: 1;
    }
  }
}


.portfolio-cover__type {
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
