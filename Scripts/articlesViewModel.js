
var articlesViewModel = function() {
    var self = this;
    self.articlesData = ko.observableArray([]);
    self.actualArticle = ko.observable('');

    $.ajax({
        method: "GET",
        url: "./Data/articles.json",
        success: function (data) {
            self.articlesData(data);
        },
        error: function (jqxhr, textStatus, error) {
            console.log(textStatus + "|" + error);
        },
    });
    /*self.articleListVisible = ko.observable(true);
    self.articleReadVisible = ko.observable(false);


    self.onReadArticle = function(article) {
        console.log(article.title);
        self.articleListVisible(false);
        self.articleReadVisible(true);

        if (window.location.href.indexOf('#') === -1) {
            window.location.href = window.location.href + '#' + article.url;
        } else {
            window.location.href = window.location.href.substring(0, window.location.href.indexOf('#') + 1) + article.url;
        }
        self.actualArticle(article.html());
    };


    self.onArticleReadBack = function () {
        if (window.location.href.indexOf('#') !== -1) {
            window.location.href = window.location.href.substring(0, window.location.href.indexOf('#')+1);
        }
        self.articleListVisible(true);
        self.articleReadVisible(false);
        self.actualArticle('');
    };*/

    self.articlesToShow = ko.pureComputed(function () {
        var articles = [];

        for (var i = 0; i < self.articlesData().length; i++) {
            articles.push(new articleModel(self.articlesData()[i]));
        }
        return articles;
    }, self);


} ;