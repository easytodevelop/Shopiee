'use strict'
eshopApp.controller('shopitems', function ($scope, $uibModal, shopdata, $log) {
  shopdata.getShopData().then(function (data) {
    $scope.shopinfo = data.productsInCart;
  });

  // initialize
  $scope.shopinfo = [];

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

  $scope.open = function (plist) {
    console.log(plist);
    $scope.selectedItem = plist;
    var modalInstance = $uibModal.open({
      animation: true, // can also be set to 'false'
      templateUrl: '/shopiee/templates/overlay.html',
      controller: 'editShoptData',
      resolve: {
        plisting: function () {
          return plist;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());

    });
  };
}).controller('editShoptData', function ($scope, $uibModalInstance, plisting) {

  $scope.plist = plisting;

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

