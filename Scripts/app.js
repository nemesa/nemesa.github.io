var mainViewModel = function () {
    var self = this;
    self.title = 'Hello, world!';
};

$(function () {
    var t = $('#articlesView').load('articles.html');
    //$('head').prepend('<script type="text/html" id="articlesView2" src="articles.html"><h1><!--ko text: title--><!--/ko--></h1></script>')

    ko.applyBindings(new mainViewModel());
});