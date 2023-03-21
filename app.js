const app = Vue.createApp({
  data() {
    return {
      //   title: "The Final Empire",
      //   author: "Brandon Sanderson",
      //   age: 45,
      showBooks: true,
      x: 0,
      y: 0,
      books: [
        {
          title: "name of the wind",
          age: 45,
          author: "patrick rothfuss",
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "the way of kings",
          age: 45,
          author: "bradon sanderson",
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "the final empire",
          age: 21,
          author: "brandon sanderson",
          img: "assets/3.jpg",
          isFav: true,
        },
      ],
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
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
