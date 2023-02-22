import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.AOS = new AOS.init({
        //disable: window.innerWidth < 640,
        offset: -100,
        duration: 800,
        easing: 'ease-in-out-cubic',
        once: true
    });
});
