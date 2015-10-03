Blogger.PostController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    edit: function () {
      this.set('isEditing', true);
    },
    save: function () {
      this.set('isEditing', false);
    },
    delete: function () {
      if (confirm('you sure bro?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('posts');
      }
    }
  }
});