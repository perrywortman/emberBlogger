Blogger.AboutController = Ember.Controller.extend({
  ifPictureShowing: false,
  actions: {
    showRealName: function(){
      alert('Dracula is fictional, but was inspired by the 15th-century Romanian general and Wallachian Prince Vlad III the Impaler.');
    },
    showPicture: function(){
      this.set('isPictureShowing', true);
    },
    hidePicture: function(){
      this.set('isPictureShowing', false);
    }
  }
});
