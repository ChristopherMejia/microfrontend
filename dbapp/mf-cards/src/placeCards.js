import { createApp } from "vue";
import Cards from "./components/Cards.vue"

const placeCards = ( element ) => {
    createApp(Cards).mount(element);
}

export default placeCards

