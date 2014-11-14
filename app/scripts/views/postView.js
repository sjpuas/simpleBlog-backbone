/*global Blog, Backbone, JST*/

Blog.Views = Blog.Views || {};

(function () {
    'use strict';

    Blog.Views.PostView = Backbone.View.extend({

        template: JST['app/scripts/templates/postView.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'click a': 'handleClick'
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            var model = this.model.toJSON();
            model.pubDate = new Date(Date.parse(model.pubDate)).toDateString();
            this.$el.html(this.template(model));
            return this;
        },

        handleClick: function (e) {
            e.preventDefault();
            Blog.postRouter.navigate($(e.currentTarget).attr("href"), {trigger: true});
            return false;
        }

    });

})();
