app.controller('MenuCtrl', ['$scope', function($scope) {
  $scope.today = new Date();
  $scope.footerOrderSlide = true;
  $scope.tacos = [
    {
      id: 0,
      name: 'Original Crispy Taco',
      description: 'The Original Way to Bueno',
      price: 1.95,
      image: 'assets/images/Taco_Crispy_Beef_990x725.jpg'
    },
    {
      id: 1,
      name: 'Soft Taco',
      description: 'A Flour Tortilla Packed with Flavor',
      price: 1.95,
      image: 'assets/images/Taco_Soft_Beef_990x725.jpg'
    },
    {
      id: 2,
      name: 'The Muchaco',
      description: 'Bueno’s Best Kept Secret',
      price: 2.95,
      image: 'assets/images/Taco_Muchaco_Beef_990x725.jpg'
    },
    {
      id: 3,
      name: 'Big Freak’n Taco',
      description: 'A Bigger Way to Bueno',
      price: 3.95,
      image: 'assets/images/Taco_BFT_Beef_990x725.jpg'
    }
  ];
  
  $scope.burritos = [
    {
      id: 4,
      name: 'Bueno Burrito',
      description: 'A Burrito the Bueno Way',
      price: 2.95,
      image: 'assets/images/Burrito_Bueno_Beef_NEW990x725.jpg'
    },
    {
      id: 5,
      name: 'The BOB - Big Ol’ Burrito',
      description: 'Meet BOB',
      price: 3.95,
      image: 'assets/images/Burrito_BOB_990x725.jpg'
    },
    {
      id: 6,
      name: 'Black Bean Burrito',
      description: 'A Better Way to Burrito',
      price: 2.95,
      image: 'assets/images/Burrito_Black_Bean_990x725.jpg'
    },
    {
      id: 7,
      name: 'Beef Burrito',
      description: 'Rolled to Perfection',
      price: 3.95,
      image: 'assets/images/Burrito_Beef_990x725.jpg'
    },
    {
      id: 8,
      name: 'Bean Burrito',
      description: 'Rolled to Perfection',
      price: 2.95,
      image: 'assets/images/Burrito_Bean_990x725.jpg'
    },
    {
      id: 9,
      name: 'Combo Burrito',
      description: 'Rolled to Perfection',
      price: 4.95,
      image: 'assets/images/Burrito_Combo2_990x725.jpg'
    },
    {
      id: 10,
      name: 'Potato Burrito',
      description: 'You Say Potato. We Say Burrito',
      price: 2.95,
      image: 'assets/images/Burrito_Chicken_Potato_990x725.jpg'
    },
  ];

  $scope.beverages = [
    {
      id: 11,
      name: 'Pepsi',
      description: 'Something Cool for All the Heat',
      price: 1.95,
      image: 'assets/images/Beverage_Pepsi_990x725.jpg'
    },
    {
      id: 12,
      name: 'Diet Pepsi',
      description: 'Something Cool for All the Heat',
      price: 1.95,
      image: 'assets/images/Beverage_DietPepsi_990x725.jpg'
    },
    {
      id: 13,
      name: 'Dr Pepper',
      description: 'Something Cool for All the Heat',
      price: 1.95,
      image: 'assets/images/Beverage_Dr_Pepper_990x725.jpg'
    },
    {
      id: 14,
      name: 'Diet Dr Pepper',
      description: 'Something Cool for All the Heat',
      price: 1.95,
      image: 'assets/images/Beverage__Diet_Dr_Pepper_990x725.jpg'
    },
    {
      id: 15,
      name: 'Mist Twst',
      description: 'Something Cool for All the Heat',
      price: 1.95,
      image: 'assets/images/Beverage_Mist_Twist_990x725.jpg'
    },
    {
      id: 16,
      name: 'Mountain Dew',
      description: 'Something Cool for All the Heat',
      price: 1.95,
      image: 'assets/images/Beverage_Mt_Dew_990x725.jpg'
    },
  ];

  $scope.order = [];
  $scope.totalOrders = 0;

  $scope.AddToOrder = function (item, qty) {
    if($scope.footerOrderSlide){
      $scope.footerOrderSlide=false;
    }
    var flag = 0;
    if ($scope.order.length > 0) {
        for (var i = 0; i < $scope.order.length; i++) {
            if (item.id === $scope.order[i].id) {
                item.qty += qty;
                flag = 1;
                break;
            }
        }
        if (flag === 0) {
            item.qty = 1;
        }
        if (item.qty < 2) {
            $scope.order.push(item);
        }
    } else {
        item.qty = qty;
        $scope.order.push(item);
    }
  };

  $scope.RemoveOneEntity = function (item) {
    for (var i = 0; i < $scope.order.length; i++) {
      if (item.id === $scope.order[i].id) {
        item.qty -= 1;
        if (item.qty === 0) {
            $scope.order.splice(i, 1);
        }
      }
    }
    if($scope.order.length <= 0){
      $scope.footerOrderSlide = true;
      $("#order-modal").modal("hide");
    }
  };

  $scope.RemoveItem = function (item) {
      for (var i = 0; i < $scope.order.length; i++) {
          if (item.id === $scope.order[i].id) {
              $scope.order.splice(i, 1);
          }
      }
      if($scope.order.length <= 0){
        $scope.footerOrderSlide = true;
        $("#order-modal").modal("hide");
      }
  };

  $scope.GetTotal = function () {
      var tot = 0;
      for (var i = 0; i < $scope.order.length; i++) {
          tot += ($scope.order[i].price * $scope.order[i].qty)
      }
      return tot;
  };

  $scope.ClearOrder = function () {
      $scope.order = [];
  };

  $scope.Checkout = function (index) {
      alert("Order Number: " + ($scope.totalOrders+1) + "\n\nOrder amount: $" + $scope.GetTotal().toFixed(2) + "\n\nPayment received. Thanks.");
      $scope.order = [];
      $scope.totalOrders += 1;
      $scope.ClearOrder();
      $scope.footerOrderSlide = true;
      $("#order-modal").modal("hide");
  };

  $scope.FooterOrderSlide = function() {
    $scope.ClearOrder();
    $scope.footerOrderSlide = true;
    $("#order-modal").modal("hide");
  };

}]);