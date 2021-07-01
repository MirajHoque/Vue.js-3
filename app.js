const app= Vue.createApp({
  data(){
    return {
      showBooks: true,
      books: [
        {title: 'author of the wind', author: 'patrik rothfuss'},
        {title: 'the way of kings', author: 'brandon sanderson'},
        {title: 'the final empire', author: 'brandon sanderson'}
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

    }

  }
});
app.mount('#app');