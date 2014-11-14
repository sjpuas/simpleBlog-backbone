/*global Blog, Backbone, JST*/

Blog.Views = Blog.Views || {};

(function () {
    'use strict';

    Blog.Views.CommentFormView = Backbone.View.extend({

        template: JST['app/scripts/templates/commentFormView.ejs'],

        tagName: "form",

        id: '',

        className: '',

        events: {
            'click button': 'submitComment'
        },

        initialize: function (options) {
            this.post = options.post;
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },

        submitComment: function (e) {
            e.preventDefault();
            var name = this.$("#cmtName").val();
            var text = this.$("#cmtText").val();
            var commentAttrs = {
                postId: this.post.get("id"),
                name: name,
                text: text,
                date: new Date()
            };
            this.post.comments.create(commentAttrs);
            this.el.reset();
        }

    });

})();
