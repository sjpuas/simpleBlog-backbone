/*global Blog, Backbone*/

Blog.Models = Blog.Models || {};

(function () {
    'use strict';

    Blog.Models.Post = Backbone.Model.extend({
        initialize: function () {
            this.comments = new Blog.Collections.Comments([], { post: this });
        }
    });

})();
