//textarea
angular.module('xeditable').directive('editableTextarea', ['editableDirectiveFactory', 'safeApply',
  function(editableDirectiveFactory, safeApply) {
    return editableDirectiveFactory({
      directiveName: 'editableTextarea',
      inputTpl: '<textarea></textarea>',
      addListeners: function() {
        var self = this;
        self.parent.addListeners.call(self);
        // submit textarea by ctrl+enter even with buttons
        if (self.single && self.buttons !== 'no') {
          self.autosubmit();
        }
      },
      autosubmit: function() {
        var self = this;
        self.inputEl.bind('keydown', function(e) {
          if ((e.ctrlKey || e.metaKey) && (e.keyCode === 13)) {
            safeApply(self.scope, function() {
              self.scope.$form.$submit();
            });
          }
        });
      }
    });
}]);
