const app= Vue.createApp({
  data(){
    return {
      showBooks: true,
      url: 'http://www.google.com',
      books: [
        {title: 'author of the wind', author: 'patrik rothfuss', img: 'asset/1.jpg', isFav: true},
        {title: 'the way of kings', author: 'brandon sanderson', img: 'asset/2.jpg', isFav: false},
        {title: 'the final empire', author: 'brandon sanderson', img: 'asset/3.jpg', isFav: true}
      ]
    }
  },
  methods:{
    toggleShowBooks(){
      this.showBooks=!this.showBooks;
    },
    handleEvent(e, data){ //e is an event obj
      //whenever we have event that happen in the browser we can automaticall get access of event object.
      console.log(e, e.type); //two parameter event, event type
      //whenever we pass argument with event object, event obj must be first argument.
      if(data){
        console.log(data);
      }
    },
    handleMouseMove(e){
      this.x= e.offsetX;
      this.y= e.offsetY;

    },
    toggleFav(element){
      element.isFav= !element.isFav;
    }

  },

  computed:{
    filteredBooks(){
      return this.books.filter((book)=> book.isFav);
    }
  }
});
app.mount('#app');