'use strict'
eshopApp.controller('shopitems', function ($modal,$uibModal,shopdata) {
   
   
	shopdata.getShopData().then(function( data ) {
           $scope.shopinfo =  data.productsInCart ; 
	});
	
	$scope.getTotal = function(){
		var total = 0;
		var numofprod  = $scope.shopinfo.length;
		
		if(numofprod == 3){
			$scope.doDiscount(5);
		} else if(numofprod >3 ){
			$scope.doDiscount(10);
		} else if(numofprod >=10 ){
			$scope.doDiscount(25);
		}
		
		for(var i = 0; i < numofprod; i++){
			var product = $scope.shopinfo[i];
			total += (product.p_price * product.p_quantity);
		}
		
		$scope.toTal = total;
		return total;
	}
	
	$scope.doDiscount = function(percentD){
		
		$scope.discash = $scope.toTal*(percentD/100);
		$scope.estimate = $scope.toTal-$scope.discash;
	}
	
	 
  
   
  
	 
	
});

