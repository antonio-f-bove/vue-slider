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
    numberOfSlides: 13,
    currentIndex: 0,
    timingTag: null,
    isScrolling: false,
  },
  methods: {
    prevPic: function() {
      this.currentIndex = (this.currentIndex - 1) % this.pictures.length;
      if(this.currentIndex < 0) {
        this.currentIndex = this.pictures.length - 1;
      }
    },
    nextPic: function() {
      this.currentIndex = (this.currentIndex + 1) % this.pictures.length;
    },
    autoScrollOff: function() {
      clearInterval(this.timingTag);
      this.isScrolling = false;
      console.log('stop')
    },
    autoScrollOn: function() {
      this.timingTag = setInterval(() => {
        this.nextPic();
      }, 3000);
      this.isScrolling = true;
    },
    generatePicUrl: function() {
      const randNum = Math.floor(Math.random() * 100 + 1);
      return `https://picsum.photos/id/${randNum}/1200/400`;
    },
    populatePicArray: function() {
      // reset dell'array
      this.pictures = [];
      
      for(let i = 0; i < this.numberOfSlides; i++) {
        this.pictures[i] = this.generatePicUrl();
      }
      console.log(this.pictures);
    }
  },
  created() {
    this.populatePicArray()
  },
  mounted() {
    this.autoScrollOn()
  }
})