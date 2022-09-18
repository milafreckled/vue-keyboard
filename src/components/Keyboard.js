import Key from "./Key";

const Keyboard = {
  template: `<div class="keyboard">Keyboard
  <div v-for="(row, index) in keyboardData"
  :class="['row', 'row-'+(index+1)]"
  >
  <vue-key v-for="keyContent in row" :keyContent="keyContent" />
  </div>
  </div>`,
  components: {
    "vue-key": Key
  },
  mounted() {
    this.getKeyboardData(this.currentLang);
  },
  data() {
    return { keyboardData: [] };
  },
  props: {
    currentLang: String
  },
  watch: {
    currentLang: function (currentLang) {
      this.getKeyboardData(currentLang);
    }
  },
  methods: {
    async getKeyboardData(lang) {
      const { default: keyboardData } = await import(
        `../keyboardData/${lang}.js`
      );
      this.keyboardData = keyboardData;
    }
  }
};

export default Keyboard;
