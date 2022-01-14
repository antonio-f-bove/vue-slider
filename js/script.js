new Vue ({
  el: "#app",
  data: {
    pictures: [
      'https://picsum.photos/id/1/1200/400',
      'https://picsum.photos/id/2/1200/400',
      'https://picsum.photos/id/3/1200/400',
      'https://picsum.photos/id/4/1200/400',
      'https://picsum.photos/id/5/1200/400',
      'https://picsum.photos/id/6/1200/400',
      'https://picsum.photos/id/7/1200/400',
    ],
    currentIndex: 0,
    isAutoScrolling: null,
  },
  methods: {
    prevPic: function() {
      this.currentIndex = (this.currentIndex - 1) % this.pictures.length;
      if(this.currentIndex < 0) {
        this.currentIndex = this.pictures.length - 1;
      }
      console.log(this.currentIndex)
    },
    nextPic: function() {
      this.currentIndex = (this.currentIndex + 1) % this.pictures.length;
      console.log(this.currentIndex)
    },
    setDotIndex: function(index) {
      // console.log(e)
      this.currentIndex = index;
      console.log(this.currentIndex)
    },
    debug: function(e) {
      // console.log(index)
    },
  },
  mounted() {
    this.isAutoScrolling = setInterval(() => {
      this.nextPic();
    }, 3000)
  }
})