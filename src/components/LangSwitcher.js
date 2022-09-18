const LangSwitcher = {
  template: `<div class="langSwitcher">
  <div
  v-for="lang in langs"
  class='["lang", {active: currentLang === lang}]'
  @click="swicthLang(lang)"
  >
  {{lang}}
  </div>
  `,
  props: {
    langs: Array,
    currentLang: String,
    switchLang: Function
  }
};

export default LangSwitcher;
