var app = angular.module("app", ["xeditable"]);

app.run(function(editableOptions) {
  /**
   * Theme. Possible values `bs3`, `bs2`, `default`.
   *
   * @var {string} theme
   * @memberOf editable-options
   */
  editableOptions.theme = 'bs3';
  /**
   * Whether to show buttons for single editalbe element.
   * Possible values `right` (default), `no`.
   *
   * @var {string} buttons
   * @memberOf editable-options
   */
    editableOptions.buttons = 'no';
  /**
   * Default value for `blur` attribute of single editable element.
   * Can be `cancel|submit|ignore`.
   *
   * @var {string} blurElem
   * @memberOf editable-options
   */
    editableOptions.blurElem = 'submit';
  /**
   * Default value for `blur` attribute of editable form.
   * Can be `cancel|submit|ignore`.
   *
   * @var {string} blurForm
   * @memberOf editable-options
   */
    editableOptions.blurForm = 'ignore';
  /**
   * How input elements get activated. Possible values: `focus|select|none`.
   *
   * @var {string} activate
   * @memberOf editable-options
   */
    editableOptions.activate = 'focus'
});

app.controller('Ctrl', function($scope) {
  $scope.user = {
    name: 'awesome user',
    title: 'test title',
    vehicle: 'mercedes'
  };  
});