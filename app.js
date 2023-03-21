const app = Vue.createApp({
  data() {
    return {
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45,
      showBooks: true,
      x: 0,
      y: 0
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
      // this.title = "The Hero of Ages";
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMouseMove(e) {
    this.x = e.offsetX
    this.y = e.offsetY
    }
  },
});

app.mount("#app");
