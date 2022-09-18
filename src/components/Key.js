const getKeyLabels = (keyContent) => {
  const { main = "", shifted = "", label, code } = keyContent;
  const isUpperCaseLang = main.toUpperCase() === shifted;
  const mainOutput = isUpperCaseLang ? shifted : main;
  const shiftedOutput = isUpperCaseLang ? "" : shifted;
  return {
    main: label || mainOutput,
    shifted: shiftedOutput
  };
};
const Key = {
  template: `<div class="key">
  <div class="main">{{ main }}</div>
  <div class="shifted">{{ shifted }}</div>
  </div>`,
  props: {
    keyContent: Object
  },
  computed: {
    main() {
      const { main } = getKeyLabels(this.keyContent);
      return main;
    },
    shifted() {
      const { shifted } = getKeyLabels(this.keyContent);
      return shifted;
    }
  }
};

export default Key;
