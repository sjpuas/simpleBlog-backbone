/*global Blog, $*/


window.Blog = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    postRouter:{},
    init: function () {
        'use strict';

        var posts = new Blog.Collections.Posts();
        Blog.postRouter = new Blog.Routers.PostRouter({
            posts: posts,
            main: $("#main")
        });
        Backbone.history.start({pushState: true});
        posts.fetch();
    }
};

$(document).ready(function () {
    'use strict';
    Blog.init();
});
