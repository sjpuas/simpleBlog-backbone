/*global Blog, Backbone, JST*/

Blog.Views = Blog.Views || {};

(function () {
    'use strict';

    Blog.Views.PostsListView = Backbone.View.extend({

        template: JST['app/scripts/templates/postsListView.ejs'],

        initialize: function () {
            this.listenTo(this.collection, 'sync', this.render);
        },

        events: {
            'click #addPost': 'addPost'
        },

        render: function () {
            this.$el.html(this.template());
            var ul = this.$el.find("ul");
            this.collection.forEach(function (post) {
                ul.append(new Blog.Views.PostListView({
                    model: post
                }).render().el);
            });
            return this;
        },

        addPost: function (e) {
            e.preventDefault();
            Blog.postRouter.navigate($(e.currentTarget).attr("href"), {trigger: true});
            return false;
        }
    });

})();
