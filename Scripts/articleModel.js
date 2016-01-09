var articleModel = function (data, onReadArticleCallback) {
    var self = this;
    self.onReadArticleCallback = onReadArticleCallback;
    self.title = data.smallTitle;
    self.htmlSrc = data.html;
    self.smallHtmlSrc = data.smallhtml;
    self.url = data.url;

    self.onTitleClick = function() {
        self.onReadArticleCallback(self);
    };

    self.html = ko.observable('');
    $.ajax({
        method: "GET",
        url: self.htmlSrc,
        success: function(data) {
                self.html(data);
        },
        error: function (jqxhr, textStatus, error) {
            console.log(textStatus + "|" + error);
        },
    });

    self.smallhtml = ko.observable('');
    $.ajax({
        method: "GET",
        url: self.smallHtmlSrc,
        success: function (data) {
            self.smallhtml(data);
        },
        error: function (jqxhr, textStatus, error) {
            console.log(textStatus + "|" + error);
        },
    });

};