const app= Vue.createApp({
  //data, methods
  //template: '<h2>i am the template</h2>'
  data(){
    return {
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45
    }
  }
});
app.mount('#app');