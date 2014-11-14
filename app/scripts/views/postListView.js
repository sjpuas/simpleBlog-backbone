/*global Blog, Backbone, JST*/

Blog.Views = Blog.Views || {};

(function () {
    'use strict';

    Blog.Views.PostListView = Backbone.View.extend({

        template: JST['app/scripts/templates/postListView.ejs'],

        events: {
            'click a': 'handleClick'
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        handleClick: function (e) {
            e.preventDefault();
            Blog.postRouter.navigate($(e.currentTarget).attr("href"), {trigger: true});
        }

    });

})();
