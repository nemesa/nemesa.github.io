var mainViewModel = function () {
    var self = this;
    self.title = 'Hello, world!';
};

$(function () {
    ko.applyBindings(new mainViewModel());
});