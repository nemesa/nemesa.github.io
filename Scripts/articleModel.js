var articleModel = function (data) {
    var self = this;
    self.htmlSrc = data.html;
    self.url = data.url;
    self.articleDate = data.date;
    
    self.html = ko.observable('');
    var date = new Date();

    $.ajax({
        method: "GET",
        url: self.htmlSrc + "?time=" + date.getFullYear() + date.getMonth() + date.getDate()+date.getHours()+date.getMinutes()+date.getSeconds(),
        success: function(data) {
                self.html(data);
        },
        error: function (jqxhr, textStatus, error) {
            console.log(textStatus + "|" + error);
        },
    });

    

};