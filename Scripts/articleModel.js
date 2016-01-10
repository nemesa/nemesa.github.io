var articleModel = function (data) {
    var self = this;
    self.htmlSrc = data.html;
    self.url = data.url;
    
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

    

};