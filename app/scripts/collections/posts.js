/*global Blog, Backbone*/

Blog.Collections = Blog.Collections || {};

(function () {
    'use strict';

    Blog.Collections.Posts = Backbone.Collection.extend({

        model: Blog.Models.Post,

        url: "http://localhost:3000/posts"

    });

})();
