Blogger.AboutController = Ember.Controller.extend({
  isPictureShowing: false,
  actions: {
    showRealName: function () {
      alert('YYesh some popup message tellyou asomething');
    },
    showPicture: function () {
      this.set('isPictureShowing', true);
    },
    hidePicture: function () {
      this.set('isPictureShowing', false);
    } 
  }
});