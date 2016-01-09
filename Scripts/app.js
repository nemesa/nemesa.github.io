var mainViewModel = function () {
    var self = this;
    self.title = 'Hello, world!';
    self.templateEngine = new templateEngine();
    self.initDone = self.templateEngine.setupDone;
    self.articlesViewModel = new articlesViewModel();
    self.initDone.subscribe(function(newValue) {
        if (newValue) {
            $('head').append('<script type="text/html" id="articlesView">' + self.templateEngine.getSystemTemplateContent("articlesView") + '</script>');
        }
    });

    self.onTilteClick = function () {
        if (window.location.href.indexOf('#') !== -1) {
            window.location.href = window.location.href.substring(0, window.location.href.indexOf('#') + 1);
        }
        location.reload();
    };
};

$(function () {
    ko.applyBindings(new mainViewModel());
});