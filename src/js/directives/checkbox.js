//checkbox
angular.module('xeditable').directive('editableCheckbox', ['editableDirectiveFactory', 'safeApply',
  function(editableDirectiveFactory, safeApply) {
    return editableDirectiveFactory({
      directiveName: 'editableCheckbox',
      inputTpl: '<input type="checkbox">',
      render: function() {
        this.parent.render.call(this);
        if(this.attrs.eTitle) {
          this.inputEl.wrap('<label></label>');
          this.inputEl.after(angular.element('<span></span>').text(this.attrs.eTitle));
        }
      },
      autosubmit: function() {
        var self = this;
        self.inputEl.bind('change', function() {
          setTimeout(function() {
            safeApply(self.scope, function() {
              self.scope.$form.$submit();
            });
          }, 500);
        });
      }
    });
}]);