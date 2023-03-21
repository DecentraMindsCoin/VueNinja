const app = Vue.createApp({
  data() {
    return {
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45,
      showBooks: true,
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
  },
});

app.mount("#app");
