(function () {
  'use strict';

  angular
    .module('ml.menu', [])

    .constant('menuConfig', {
      closeOthers: true
    })

    .controller('MenuController', ['$scope', '$attrs', '$location', '$rootScope', 'menuConfig', MenuController])

    // The ml-menu directive sets up the directive controller
    .directive('mlMenu', Menu)

    .directive('mlMenuItem', MenuItem)

    // The ml-menu-group directive indicates a block of html that will expand and collapse in a menu
    .directive('mlMenuGroup', MenuGroup)

    // Use ml-menu-heading below an menu-group to provide a heading containing HTML
    // <ml-menu-group>
    //   <ml-menu-heading>Heading containing HTML - <img src="..."></ml-menu-heading>
    // </ml-menu-group>
    .directive('mlMenuGroupHeading', MenuGroupHeading)

    // Use in the menu-group template to indicate where you want the heading to be transcluded
    // You must provide the property on the ml-menu-group controller that will hold the transcluded element
    // <li>
    //   <a class="mdl-navigation__link" ><span ... ml-menu-transclude="heading">...</span></a>
    //   ...
    // </li>
    .directive('mlMenuTransclude', MenuTransclude)

    .directive('collapse', ['$animate', collapse]);

  function MenuController($scope, $attrs, $location, $rootScope, menuConfig ) {
    /* jshint validthis: true */
    var vm = this;

    // This array keeps track of the menu groups
    vm.groups = [];

    // This array keeps track of the menu items
    vm.items = [];

    // Ensure that all the groups in this menu are closed
    vm.closeOthers = function(openGroup) {
      var closeOthers = angular.isDefined($attrs.closeOthers) ? $scope.$eval($attrs.closeOthers) : menuConfig.closeOthers;
      if ( closeOthers ) {
        angular.forEach(vm.groups, function (group) {
          if ( group !== openGroup ) {
            group.isOpen = false;
          }
        });
      }
    };

    // Ensure that all other items are inactive
    vm.inactivateOthers = function(activeItem) {
      angular.forEach(vm.items, function (item) {
        if ( item !== activeItem ) {
          item.isActive = false;
        }
      });
    };

    // This is called from the ml-menu-group directive to add itself to the menu
    vm.addGroup = function(groupScope) {
      groupScope.isOpen = true;
      vm.groups.push(groupScope);
    };

    // This is called from the ml-menu-group directive to add itself to the menu
    vm.addItem = function(itemScope) {
      vm.items.push(itemScope);
    };

    vm.isOpen = function(path) {
      var folder = $location.path().split('/')[1];
      return folder == path;
    };

    vm.isActive = function(href) {
      return $location.path() == href.slice(1, href.length);
    };

    vm.setBreadcrumb = function(name) {
      $rootScope.pageTitle = name;
    };

  }

  function Menu() {
    return {
      restrict:'EA',
      controller:'MenuController'
    };
  }

  function MenuItem() {
    return {
      require: '^mlMenu',   // We need this directive to be inside a menu
      restrict:'EA',
      transclude: true,     // It transcludes the contents of the directive into the template
      replace: true,        // The element containing the directive will be replaced with the template
      templateUrl: 'tpl/partials/menu-item.html',
      scope: {
        isActive: '=?'
      },
      link: link
    };

    function link(scope, element, attrs, menuCtrl) {
      menuCtrl.addItem(scope);

      scope.$watch('isActive', function(value) {
        if ( value ) {
          menuCtrl.inactivateOthers(scope);
        }
      });

      var href = angular.element(element.children()[0]).attr('href');

      scope.isActive = menuCtrl.isActive(href);

      scope.toggleActive = function() {
        if ( !scope.isActive ) {
          scope.isActive = !scope.isActive;
        }


        var a = element.find('a').clone();
        a.find('i').remove();
        var title = a.text().trim();

        menuCtrl.setBreadcrumb( title == 'Dashboard' ? '' : title );

      };

    }
  }

  function MenuGroup() {
    return {
      require: '^mlMenu',   // We need this directive to be inside a menu
      restrict: 'EA',
      transclude: true,     // It transcludes the contents of the directive into the template
      replace: true,        // The element containing the directive will be replaced with the template
      templateUrl: 'tpl/partials/menu-group.html',
      scope: {
        heading: '@',       // Interpolate the heading attribute onto this scope
        path: '@',
        isOpen: '=?'
      },
      controller: function(){
        this.setHeading = function(element) {
          this.heading = element;
        };
      },
      link: link
    };

    function link(scope, element, attrs, menuCtrl) {
      menuCtrl.addGroup(scope);

      scope.$watch('isOpen', function(value) {
        if ( value ) {
          menuCtrl.closeOthers(scope);
        }
      });

      scope.isOpen = menuCtrl.isOpen(attrs.path);

      scope.toggleOpen = function() {
        scope.isOpen = !scope.isOpen;
      };
    }
  }

  function MenuGroupHeading() {
    return {
      restrict: 'EA',
      transclude: true,   // Grab the contents to be used as the heading
      template: '',       // In effect remove this element!
      replace: true,
      require: '^mlMenuGroup',
      link: link
    };

    function link(scope, element, attr, menuGroupCtrl, transclude) {
      // Pass the heading to the ml-menu-group controller
      // so that it can be transcluded into the right place in the template
      // [The second parameter to transclude causes the elements to be cloned so that they work in ng-repeat]
      menuGroupCtrl.setHeading(transclude(scope, angular.noop));
    }
  }

  function MenuTransclude() {
    return {
      require: '^mlMenuGroup',
      link: link
    };

    function link(scope, element, attr, controller) {
      scope.$watch(function() { return controller[attr.mlMenuTransclude]; }, function(heading) {
        if ( heading ) {
          element.html('');
          element.replaceWith(heading);
        }
      });
    }
  }

  function collapse($animate) {
    return {
      link: link
    };

    function link(scope, element, attrs) {
      function expand() {
        element.removeClass('collapse').addClass('collapsing');
        $animate.addClass(element, 'in', {
          to: { height: element[0].scrollHeight + 'px' }
        }).then(expandDone);
      }

      function expandDone() {
        element.removeClass('collapsing');
        element.css({height: 'auto'});
      }

      function collapse() {
        element
          // IMPORTANT: The height must be set before adding "collapsing" class.
          // Otherwise, the browser attempts to animate from height 0 (in
          // collapsing class) to the given height here.
          .css({height: element[0].scrollHeight + 'px'})
          // initially all panel collapse have the collapse class, this removal
          // prevents the animation from jumping to collapsed state
          .removeClass('collapse')
          .addClass('collapsing');

        $animate.removeClass(element, 'in', {
          to: {height: '0'}
        }).then(collapseDone);
      }

      function collapseDone() {
        element.css({height: '0'}); // Required so that collapse works when animation is disabled
        element.removeClass('collapsing');
        element.addClass('collapse');
      }

      scope.$watch(attrs.collapse, function(shouldCollapse) {
        if (shouldCollapse) {
          collapse();
        } else {
          expand();
        }
      });
    }
  }

}());
