/*global Blog, Backbone*/

Blog.Collections = Blog.Collections || {};

(function () {
    'use strict';

    Blog.Collections.Comments = Backbone.Collection.extend({

        model: Blog.Models.Comment,

        initialize: function (models, options) {
            this.post = options.post;
        },

        url: function () {
            return this.post.url() + "/comments";
        }

    });

})();
