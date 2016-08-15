'use strict'
eshopApp.controller('shopitems', function ($scope, $uibModal, shopdata, $log) {
  shopdata.getShopData().then(function (data) {
    $scope.shopinfo = data.productsInCart;
  });

  // initialize
  $scope.shopinfo = [];
  // For dialog
  $scope.items = ['item1', 'item2', 'item3'];

  $scope.getTotal = function () {
    var total = 0;
    var numofprod = $scope.shopinfo.length;

    if (numofprod == 3) {
      $scope.doDiscount(5);
    } else if (numofprod > 3) {
      $scope.doDiscount(10);
    } else if (numofprod >= 10) {
      $scope.doDiscount(25);
    }

    for (var i = 0; i < numofprod; i++) {
      var product = $scope.shopinfo[i];
      total += (product.p_price * product.p_quantity);
    }

    $scope.toTal = total;
    return total;
  }

  $scope.doDiscount = function (percentD) {
    $scope.discash = $scope.toTal * (percentD / 100);
    $scope.estimate = $scope.toTal - $scope.discash;
  }

  $scope.open = function (size,plist) {
		console.log(plist);
    var modalInstance = $uibModal.open({
      animation: true, // can also be set to 'false'
      templateUrl: '/sapient/shopiee/templates/overlay.html',
      controller: 'editShoptData',
	  size: size,
      resolve: {
        plisting:plist,
		items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
	  
		});
  };
}).controller('editShoptData', function ($scope, $uibModalInstance, items, plisting) {
	
  $scope.plist = plisting;
  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

