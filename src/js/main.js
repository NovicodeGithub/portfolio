new Vue({
  el: '#app',
  data() {
    return {
      x: 0
    }
  },
  methods: {
   xCoordinate(e) {
     this.x = e.clientX;
   }
  }
});
