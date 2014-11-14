/*global Blog, Backbone, JST*/

Blog.Views = Blog.Views || {};

(function () {
    'use strict';

    Blog.Views.PostFormView = Backbone.View.extend({

        template: JST['app/scripts/templates/postFormView.ejs'],

        tagName: 'form',

        className: 'form-horizontal',

        events: {
            'click button': 'createPost'
        },

        initialize: function (options) {
            this.posts = options.posts;
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },

        createPost: function (e) {
            var postAttrs = {
                content: $("#postText").val(),
                title: $("#postTitle").val(),
                pubDate: new Date()
            };
            this.posts.create(postAttrs);
            Blog.postRouter.navigate("/", { trigger: true });
            return false;
        }

    });

})();
