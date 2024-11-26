import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.css";

const container = document.getElementById("myCarousel");
const options = { infinite: true };

new Carousel(container, options);