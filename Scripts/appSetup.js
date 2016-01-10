var templateEngine = function () {
    var self = this;

    self.templateData = ko.observable({});

    self.getTemplateDataDone = ko.observable(false);
    $.ajax({
        method: "GET",
        url: "./Data/templates.json",
        success: function (data) {
            self.templateData(data);
            self.getTemplateDataDone(true);
        },
        error: function (jqxhr, textStatus, error) {
            console.log(textStatus + "|" + error);
        },
    });

    self.setupDone = ko.pureComputed(function () {
        return self.getTemplateDataDone();
    }, self);

    self.getSystemTempalteSrc = function (templateName) {
        for (var i = 0; i < self.templateData().systemTemplates.length; i++) {
            if (self.templateData().systemTemplates[i].name === templateName) {
                return self.templateData().systemTemplates[i].templateSrc;
            }
        }
        return undefined;
    };

    var date = new Date();
    self.getSystemTemplateContentResult = '';
    self.getSystemTemplateContent = function (templateName) {
        var src = self.getSystemTempalteSrc(templateName) + "?time=" + date.getFullYear() + date.getMonth() + date.getDate() + date.getHours() + date.getMinutes() + date.getSeconds();
        var a = 'a';
        if (src) {
            $.ajax({
                method: "GET",
                url: src,
                success: function(data,a) {
                    self.getSystemTemplateContentResult = data;
                },
                error: function (jqxhr, textStatus, error) {
                    self.getSystemTemplateContentResult = undefined;
                    console.log(textStatus + "|" + error);
                },
                async: false,
            });
        }
        return self.getSystemTemplateContentResult;
    };

    //self.getTemplateDataDone.subscribe(function(newValue) {
    //    if (newValue) {
    //        var con = self.getSystemTemplateContent("articlesView");
    //        console.log(con);
    //    }
    //});
};