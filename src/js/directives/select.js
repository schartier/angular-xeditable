//select
angular.module('xeditable').directive('editableSelect', ['editableDirectiveFactory', 'safeApply',
  function(editableDirectiveFactory, safeApply) {
    return editableDirectiveFactory({
      directiveName: 'editableSelect',
      inputTpl: '<select></select>',
      autosubmit: function() {
        var self = this;
        self.inputEl.bind('change', function() {
          safeApply(self.scope, function() {
            self.scope.$form.$submit();
          });
        });
      }
    });
}]);