ko.components.register('articles', {
    viewModel: function (params) {
        this.title = ko.observable('articlesViewModel');
    },
    template: $('#articlesView').html()
});