import Slide from "./modules/slide.js";
const slideCarrosel = new Slide(".slide", ".wrapper");
slideCarrosel.init();
slideCarrosel.changeSlide(0);
// slideCarrosel.onResize();
