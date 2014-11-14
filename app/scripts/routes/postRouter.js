/*global Blog, Backbone*/

Blog.Routers = Blog.Routers || {};

(function () {
    'use strict';

    Blog.Routers.PostRouter = Backbone.Router.extend({
        initialize: function (options) {
            this.posts = options.posts;
            this.main = options.main;
        },
        routes: {
            '': 'index',
            'posts/new': 'newPost',
            'posts/:id': 'singlePost'
        },
        index: function () {
            var pv = new Blog.Views.PostsListView({ collection: this.posts });
            this.main.html(pv.render().el);
            this.posts.fetch();
        },
        singlePost: function (id) {
            var post = this.posts.get(id);
            var pv = new Blog.Views.PostView({ model: post });
            this.main.html(pv.render().el);
            var cv = new Blog.Views.CommentsView({ post: post });
            this.main.append(cv.render().el);
        },
        newPost: function () {
            var pfv = new Blog.Views.PostFormView({ posts: this.posts });
            this.main.html(pfv.render().el);
        }
    });

})();
