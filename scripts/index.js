let app = new Vue({
  el: "#app", // links to the div
  // the data option
  data: {
    sitename: "sdptemp",
  },
  methods: {
    scrollTo(id) {
      var element = document.querySelector(id);
      if (element) {
        element.classList.toggle("show");
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
});
