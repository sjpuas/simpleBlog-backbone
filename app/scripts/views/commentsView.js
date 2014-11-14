/*global Blog, Backbone, JST*/

Blog.Views = Blog.Views || {};

(function () {
    'use strict';

    Blog.Views.CommentsView = Backbone.View.extend({

        initialize: function (options) {
            this.post = options.post;
            this.post.comments.on('add', this.addComment, this);
        },

        render: function () {
            this.$el.append("<h2> Comments </h2>");
            this.$el.append(new Blog.Views.CommentFormView({
                post: this.post
            }).render().el);
            this.post.comments.fetch();
            return this;
        },

        addComment: function (comment) {
            this.$el.append(new Blog.Views.CommentView({
                model: comment
            }).render().el);
        }

    });

})();
