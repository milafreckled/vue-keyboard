import LangSwitcher from "./components/LangSwitcher";
import Keyboard from "./components/Keyboard";
const App = {
  template: `App
  <vue-lang-switcher :langs="langs" :currentLang="currentLang" :switchLang="switchLang" />
  <vue-keyboard :currentLang="currentLang" />
  `,
  components: {
    "vue-lang-switcher": LangSwitcher,
    "vue-keyboard": Keyboard
  },
  data() {
    return {
      langs: ["en", "ru", "ar"],
      currentLang: "en"
    };
  },
  methods: {
    swicthLang(lang) {
      this.currentLang = lang;
    }
  }
};

export default App;
