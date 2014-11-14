/*global Blog, Backbone, JST*/

Blog.Views = Blog.Views || {};

(function () {
    'use strict';

    Blog.Views.CommentView = Backbone.View.extend({

        template: JST['app/scripts/templates/commentView.ejs'],

        render: function () {
            var model = this.model.toJSON();
            model.date = new Date(Date.parse(model.date)).toDateString();
            this.$el.html(this.template(model));
            return this;
        }

    });

})();
