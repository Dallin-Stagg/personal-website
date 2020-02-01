<script>
export default {
  name: "Home",
  data() {
    return {
      titles: ["A student", "A developer", "A musician", "Dallin Stagg"],
      displayedTitleLength: 0,
      typing: true,
      titleIndex: 0,
      //
      displayIntro: true
    };
  },
  computed: {
    displayText() {
      if (this.displayedTitleLength) {
        return this.titles[this.titleIndex].substring(
          0,
          this.displayedTitleLength
        );
      }
      return "";
    }
  },
  mounted() {
    setTimeout(this.terminatePrelude, 3900);
  },
  methods: {
    updateTitle() {
      if (
        this.typing &&
        this.displayedTitleLength < this.titles[this.titleIndex].length
      ) {
        this.displayedTitleLength += 1;
        if (this.titles[this.titleIndex][this.displayedTitleLength] === " ") {
          this.displayedTitleLength += 1;
        }
        setTimeout(this.updateTitle, 125);
      } else if (
        this.typing &&
        this.displayedTitleLength === this.titles[this.titleIndex].length
      ) {
        this.typing = false;
        setTimeout(this.updateTitle, 800);
      } else if (
        !this.typing &&
        this.displayedTitleLength > 0 &&
        this.titleIndex !== this.titles.length - 1
      ) {
        this.displayedTitleLength -= 1;
        if (this.titles[this.titleIndex][this.displayedTitleLength] === " ") {
          this.displayedTitleLength -= 1;
        }
        setTimeout(this.updateTitle, 170);
      } else if (!this.typing && !this.displayedTitleLength) {
        this.titleIndex += 1;
        this.typing = true;
        setTimeout(this.updateTitle, 800);
      }
    },
    terminatePrelude() {
      this.displayIntro = false;
      setTimeout(this.updateTitle, 200);
      /* box-shadow: 0 2px 5px 0 rgba($gray-dk, 0.25),
      0 -18px 0px -8px rgba($white, 0.3), 0 -34px 0px -16px rgba($white, 0.2),
      0 -50px 0px -24px rgba($white, 0.1);
      */
    }
  }
};
</script>
