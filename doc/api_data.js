define({ "api": [
  {
    "type": "get",
    "url": "/dishes",
    "title": "Get all dishes",
    "name": "Get_all_dishes",
    "group": "Dish",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Success\",\n  \"Dishes\" : [\n    {\n      \"Id\": 1,\n      \"RestaurantId\": 2,\n      \"Name\": \"Noodles\",\n      \"Description\": \"Very good noodles!!!\"\n    },\n    .....\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : true,\n  \"Message\" : Error executing MySQL query\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/dish.js",
    "groupTitle": "Dish"
  },
  {
    "type": "get",
    "url": "/dishes/:id",
    "title": "Get one dish",
    "name": "Get_one_dish",
    "group": "Dish",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Success\",\n  \"Dish\" : [\n    {\n      \"Id\": 1,\n      \"RestaurantId\": 2,\n      \"Name\": \"Noodles\",\n      \"Description\": \"Very good noodles!!!\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : true,\n  \"Message\" : Error executing MySQL query\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/dish.js",
    "groupTitle": "Dish"
  },
  {
    "type": "put",
    "url": "/dishes/:id",
    "title": "Post a dish",
    "name": "Post_a_dish",
    "group": "Dish",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Dish added\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : true,\n  \"Message\" : Error executing MySQL query\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/dish.js",
    "groupTitle": "Dish"
  },
  {
    "type": "post",
    "url": "/dishes",
    "title": "Post a dish",
    "name": "Post_a_dish",
    "group": "Dish",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Dish added\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : true,\n  \"Message\" : Error executing MySQL query\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/dish.js",
    "groupTitle": "Dish"
  },
  {
    "type": "post",
    "url": "/foodies/:id/comment_restaurants",
    "title": "Comment restaurant",
    "name": "Comment_restaurant",
    "group": "Foodie",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Commentaire added.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/comment_restaurant.js",
    "groupTitle": "Foodie"
  },
  {
    "type": "delete",
    "url": "/foodies/:id/comment_restaurants/:commentId",
    "title": "Delete a comment",
    "name": "Delete_a_comment",
    "group": "Foodie",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Deleted comment with id \"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/comment_restaurant.js",
    "groupTitle": "Foodie"
  },
  {
    "type": "get",
    "url": "/foodies",
    "title": "Get all foodies",
    "name": "Get_all_foodies",
    "group": "Foodie",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Success\",\n  \"Foodies\" : [\n    {\n      \"Id\": 7,\n      \"BaseUserId\": 17,\n      \"FirstName\": \"quentin\",\n      \"LastName\": \"journet\",\n      \"Email\": \"qjournet2@gmail.com\",\n      \"Password\": \"5fee5ae1c5da17ee54b56abaa45e9355\",\n      \"Phone\": \"012345678\",\n      \"AddressPart1\": \"12 rue gabriel péri\",\n      \"AddressPart2\": null,\n      \"IsFoodie\": 1,\n      \"IsRestaurant\": 0,\n      \"Token\": \"token\"\n    },\n    .....\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : true,\n  \"Message\" : \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/foodie.js",
    "groupTitle": "Foodie"
  },
  {
    "type": "get",
    "url": "/foodies/:id/messages",
    "title": "Get all messages for a Foodie",
    "name": "Get_all_messages_for_a_Foodie",
    "group": "Foodie",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Success\",\n  \"Messages\" : [\n    {\n      \"Id\": 3,\n      \"SenderId\": 8,\n      \"ReceiverId\": 7,\n      \"SenderFirstName\": \"foodie\",\n      \"SenderLastName\": \"foodie\",\n      \"Message\": \"test by postman\",\n      \"Creation\": \"2016-05-10T07:56:08.000Z\",\n      \"ReceiverFirstName\": \"quentin\",\n      \"ReceiverLastName\": \"journet\"\n    },\n    ....\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : true,\n  \"Message\" : \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/message.js",
    "groupTitle": "Foodie"
  },
  {
    "type": "get",
    "url": "/foodies/:id",
    "title": "Get one foodies",
    "name": "Get_one_foodies",
    "group": "Foodie",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Success\",\n  \"Foodies\" : [\n    {\n      \"Id\": 7,\n      \"BaseUserId\": 17,\n      \"FirstName\": \"quentin\",\n      \"LastName\": \"journet\",\n      \"Email\": \"qjournet2@gmail.com\",\n      \"Password\": \"5fee5ae1c5da17ee54b56abaa45e9355\",\n      \"Phone\": \"012345678\",\n      \"AddressPart1\": \"12 rue gabriel péri\",\n      \"AddressPart2\": null,\n      \"IsFoodie\": 1,\n      \"IsRestaurant\": 0,\n      \"Token\": \"token\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : true,\n  \"Message\" : \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/foodie.js",
    "groupTitle": "Foodie"
  },
  {
    "type": "get",
    "url": "/foodie/:id/reservations",
    "title": "Get reservation for a foodie",
    "name": "Get_reservation_for_a_foodie",
    "group": "Foodie",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Success\",\n  \"reservations\" : [\n     {\n       \"Id\": 1,\n       \"FoodieId\": 8,\n       \"RestaurantId\": 2,\n       \"Date\": \"2016-05-10T08:00:00.000Z\",\n       \"Hour\": \"13:30:00\",\n       \"NbPerson\": 2,\n       \"Comment\": \"à proximité de la fenêtre\"\n     },\n     ....\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : true,\n  \"Message\" : \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/reservation.js",
    "groupTitle": "Foodie"
  },
  {
    "type": "get",
    "url": "/foodies/:id/comment_restaurants",
    "title": "Get the comments_restaurant of a Foodie",
    "name": "Get_the_comments_restaurant_of_a_Foodie",
    "group": "Foodie",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Success\"\n  \"Comment_restaurants\" : [\n    {\n      \"Id\": 3,\n      \"RestaurantId\": 2,\n      \"Restaurant\": \"la bonne bouffe\",\n      \"Comment\": \"I'll be back.\\nPS - Malade en revenant\",\n      \"Mark\": 1,\n      \"CreationDate\": \"2016-05-05T16:00:00.000Z\"\n    },\n    .....\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/comment_restaurant.js",
    "groupTitle": "Foodie"
  },
  {
    "type": "",
    "url": "/foodies/:id/comment_restaurants/:commentId",
    "title": "Update comment by Foodie",
    "name": "Update_comment_by_Foodie",
    "group": "Foodie",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Commentaire updated.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/comment_restaurant.js",
    "groupTitle": "Foodie"
  },
  {
    "type": "post",
    "url": "/foodies/:id/messages",
    "title": "post a message",
    "name": "post_a_message",
    "group": "Foodie",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Your message is send.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : true,\n  \"Message\" : \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/message.js",
    "groupTitle": "Foodie"
  },
  {
    "type": "post",
    "url": "/foodies/:id/restaurants/:restoId/reservations",
    "title": "post a reservation",
    "name": "post_a_reservation",
    "group": "Foodie",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Reservation added\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : true,\n  \"Message\" : \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/reservation.js",
    "groupTitle": "Foodie"
  },
  {
    "type": "delete",
    "url": "/restaurants/:id/closeDates/:closeId",
    "title": "Delete a closeDate",
    "name": "Delete_a_closeDate",
    "group": "Restaurant",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"The close date is delete.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : true,\n  \"Message\" : \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/close_date.js",
    "groupTitle": "Restaurant"
  },
  {
    "type": "delete",
    "url": "/restaurants/:id/dishes/:dishId",
    "title": "Delete a dish",
    "name": "Delete_a_dish",
    "group": "Restaurant",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"The dish is delete from your restaurant.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : true,\n  \"Message\" : \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/dish.js",
    "groupTitle": "Restaurant"
  },
  {
    "type": "delete",
    "url": "/restaurants/:id/menus/:menuId/dishes/:dishId",
    "title": "Delete a dish from a menu",
    "name": "Delete_a_dish_from_a_menu",
    "group": "Restaurant",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"The dish is delete from your menu.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\": true,\n  \"Message\": \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/menu_restaurant.js",
    "groupTitle": "Restaurant"
  },
  {
    "type": "delete",
    "url": "/restaurants/:id/menus/:menuId",
    "title": "Delete a menu",
    "name": "Delete_a_menu",
    "group": "Restaurant",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"The menu is delete from your restaurant.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : true,\n  \"Message\" : \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/menu_restaurant.js",
    "groupTitle": "Restaurant"
  },
  {
    "type": "delete",
    "url": "/restaurants/:id/menus/:idmenu/comments/:idcomment",
    "title": "Delete a comment of Menu of Restaurant",
    "name": "Delte_a_comment_of_Menu_of_Restaurant",
    "group": "Restaurant",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Error executing MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : true,\n  \"Message\" : \"Error executing MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/comment_menu.js",
    "groupTitle": "Restaurant"
  },
  {
    "type": "get",
    "url": "/restaurants/:id/dishes/:dishId/comments",
    "title": "Get Dish Comment for restaurant",
    "group": "Restaurant",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\": false,\n  \"Message\": \"Success\",\n  \"Comments\": [\n    {\n      \"Id\": 19,\n      \"DishId\": 1,\n      \"FoodieId\": 8,\n      \"Comment\": \"Le best\",\n      \"Mark\": 4,\n      \"CreationDate\": \"2016-05-07T16:00:00.000Z\",\n      \"BaseUserId\": 19,\n      \"FirstName\": \"foodie\",\n      \"LastName\": \"foodie\",\n      \"Email\": \"foodie@foodie.com\",\n      \"Password\": \"889ea886e748fbd3dd317130a609f993\",\n      \"Phone\": \"125489\",\n      \"AddressPart1\": \"dtc\",\n      \"AddressPart2\": null,\n      \"IsFoodie\": 1,\n      \"IsRestaurant\": 0,\n      \"Token\": \"token\"\n    },\n    ......\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Error executing MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/comment_dish.js",
    "groupTitle": "Restaurant",
    "name": "GetRestaurantsIdDishesDishidComments"
  },
  {
    "type": "get",
    "url": "/restaurants/:id/menus/:idmenu/commentes",
    "title": "Get comment of a Menu of a Restaurant",
    "name": "Get_Comment_of_a_Menu_of_a_Restaurant",
    "group": "Restaurant",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Success\"\n  \"Comment_menu\" : [\n    {    \n      \"Comment\": \"les pates\",\n      \"Mark\": 5,\n      \"Name\": \"foodie\"\n    },\n    .......\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : true,\n  \"Message\" : \"Error executing MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/comment_menu.js",
    "groupTitle": "Restaurant"
  },
  {
    "type": "get",
    "url": "/restaurant/:id/comment_restaurants",
    "title": "Get Comment of a restaurant",
    "name": "Get_Comment_of_a_restaurant",
    "group": "Restaurant",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Success\",\n  \"Comment_restaurants\": [\n    {\n      \"Id\": 3,\n      \"FirstName\": \"foodie\",\n      \"LastName\": \"foodie\",\n      \"Mark\": 1,\n      \"Comment\": \"I'll be back.\\nPS - Malade en revenant\",\n      \"CreationDate\": \"2016-05-05T16:00:00.000Z\"\n    },\n    .....\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/comment_restaurant.js",
    "groupTitle": "Restaurant"
  },
  {
    "type": "get",
    "url": "/restaurants/:id/menus",
    "title": "Get Menus for a restaurant",
    "name": "Get_Menus_for_a_restaurant",
    "group": "Restaurant",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Success\",\n  \"Menus\" : [\n    {\n      \"Id\": 1,\n      \"Name\": \"PastaVsNoodle\",\n      \"Description\": \"qu'elle est le meilleur pasta or noodle ?!\",\n      \"Dish\": [\n        {\n          \"Name\": \"Pasta\",\n          \"Description\": \"better than noodles!\",\n          \"Id\": 2\n        },\n        .....\n      ],\n      \"Mark\": 4.5\n    },\n    ....\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : true,\n  \"Message\" : \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/menu_restaurant.js",
    "groupTitle": "Restaurant"
  },
  {
    "type": "get",
    "url": "/restaurants/:id/",
    "title": "Get a restaurant",
    "name": "Get_a_restaurant",
    "group": "Restaurant",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Success\",\n  \"Restaurant\": [\n    {\n      \"Id\": 2,\n      \"BaseUserId\": 20,\n      \"FirstName\": \"la bonne bouffe\",\n      \"LastName\": null,\n      \"Email\": \"resto@resto.com\",\n      \"Password\": \"9c6350b0aa51300d30790de1192fbcf8\",\n      \"Phone\": \"1246985\",\n      \"AddressPart1\": \"12 rue du resto\",\n      \"AddressPart2\": null,\n      \"IsFoodie\": 0,\n      \"IsRestaurant\": 0,\n      \"Token\": \"a token\",\n      \"Longitude\": null,\n      \"Latitude\": null\n    }\n  ]  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : true,\n  \"Message\" : \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/restaurant.js",
    "groupTitle": "Restaurant"
  },
  {
    "type": "get",
    "url": "/restaurants/:id/dishes",
    "title": "Get all dishes of a Restaurant",
    "name": "Get_all_dishes_of_a_Restaurant",
    "group": "Restaurant",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Success\", \n  \"Dishes\" : [\n    {\n      \"Id\": 1,\n      \"Name\": \"Noodles\",\n      \"Description\": \"Very good noodles!!!\",\n      \"Mark\": 3.5\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : true,\n  \"Message\" : Error executing MySQL query\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/dish.js",
    "groupTitle": "Restaurant"
  },
  {
    "type": "get",
    "url": "/restaurants",
    "title": "Get all restaurant",
    "name": "Get_all_restaurant",
    "group": "Restaurant",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Success\",\n  \"Restaurants\": [\n    {\n      \"Id\": 1,\n      \"BaseUserId\": 18,\n      \"FirstName\": \"restaurant\",\n      \"LastName\": \"restaurant\",\n      \"Email\": \"restaurant@gmail.com\",\n      \"Password\": \"6d4b62960a6aa2b1fff43a9c1d95f7b2\",\n      \"Phone\": \"0123465789\",\n      \"AddressPart1\": \"12 rue\",\n      \"AddressPart2\": null,\n      \"Latitude\": null,\n      \"Longitude\": null,\n      \"IsFoodie\": 0,\n      \"IsRestaurant\": 0,\n      \"Token\": \"a token\",\n      \"Mark\": 4,\n      \"OpenHour\": \"00:00:00\",\n      \"CloseHour\": \"00:00:00\",\n      \"ClosedDate\": null\n      },\n      .....\n    ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : true,\n  \"Message\" : \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/restaurant.js",
    "groupTitle": "Restaurant"
  },
  {
    "type": "get",
    "url": "/restaurants/:id/closeDates",
    "title": "Get closeDates for a restaurant",
    "name": "Get_closeDates_for_a_restaurant",
    "group": "Restaurant",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Success\",\n  CloseDates : [\n    {\n      \"Id\": 2,\n      \"RestaurantId\": 2,\n      \"DateClosed\": \"2016-05-10T16:00:00.000Z\",\n      \"DateReOpen\": \"2016-05-13T16:00:00.000Z\",\n      \"BaseUserId\": 20,\n      \"OpenHour\": \"10:30:00\",\n      \"CloseHour\": \"23:45:00\",\n      \"Longitude\": null,\n      \"Latitude\": null\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : true,\n  \"Message\" : \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/close_date.js",
    "groupTitle": "Restaurant"
  },
  {
    "type": "get",
    "url": "/restaurants/:id/reservations",
    "title": "Get reservation for a restaurant",
    "name": "Get_reservation_for_a_restaurant",
    "group": "Restaurant",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Success\",\n  \"reservations\" : [\n     {\n       \"Id\": 1,\n       \"FoodieId\": 8,\n       \"RestaurantId\": 2,\n       \"Date\": \"2016-05-10T08:00:00.000Z\",\n       \"Hour\": \"13:30:00\",\n       \"NbPerson\": 2,\n       \"Comment\": \"à proximité de la fenêtre\"\n     },\n     ....\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : true,\n  \"Message\" : \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/reservation.js",
    "groupTitle": "Restaurant"
  },
  {
    "type": "post",
    "url": "/restaurants/:id/menus/:idmenu/comments",
    "title": "Post a Comment on a Menu of a Restaurant",
    "name": "Post_a_Comment_on_a_Menu_of_a_Restaurant",
    "group": "Restaurant",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"Error\" : false,\n \"Message\" : \"Commentaire added\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : true,\n  \"Message\" : \"Error executing MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/comment_menu.js",
    "groupTitle": "Restaurant"
  },
  {
    "type": "post",
    "url": "/restaurants/:id/dishes",
    "title": "Post a dish in a Restaruant",
    "name": "Post_a_dish_in_a_Restaurant",
    "group": "Restaurant",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Dish add to your restaurant\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : true,\n  \"Message\" : Error executing MySQL query\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/dish.js",
    "groupTitle": "Restaurant"
  },
  {
    "type": "post",
    "url": "/restaurants/:id/closeDates",
    "title": "post a close date",
    "name": "post_a_close_date",
    "group": "Restaurant",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Close date added.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : true,\n  \"Message\" : \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/close_date.js",
    "groupTitle": "Restaurant"
  },
  {
    "type": "post",
    "url": "/restaurants/:id/menus/:menuId/dishes/:dishId",
    "title": "post a dish in a menu",
    "name": "post_a_dish_in_a_menu",
    "group": "Restaurant",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Dish Added\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : true,\n  \"Message\" : \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/menu_restaurant.js",
    "groupTitle": "Restaurant"
  },
  {
    "type": "post",
    "url": "/restaurants/:id/menus",
    "title": "post a menu",
    "name": "post_a_menu",
    "group": "Restaurant",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Menu Added to your restaurant\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : true,\n  \"Message\" : \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/menu_restaurant.js",
    "groupTitle": "Restaurant"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Delete a user",
    "name": "Delete_a_user",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Deleted user with id \"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Get all users.",
    "name": "Get_all_users",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Success\",\n  \"Users\": [\n    {\n      \"Id\": 17,\n      \"FirstName\": \"quentin\",\n      \"LastName\": \"journet\",\n      \"Email\": \"qjournet2@gmail.com\",\n      \"Password\": \"5fee5ae1c5da17ee54b56abaa45e9355\",\n      \"Phone\": \"012345678\",\n      \"AddressPart1\": \"12 rue gabriel péri\",\n      \"AddressPart2\": null,\n      \"IsFoodie\": 1,\n      \"IsRestaurant\": 0,\n      \"Token\": \"a token\"\n    },\n    ......\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : true,\n  \"Message\" : \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Get one user.",
    "name": "Get_one_user",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Success\",\n  \"User\": [\n    {\n      \"Id\": 17,\n      \"FirstName\": \"quentin\",\n      \"LastName\": \"journet\",\n      \"Email\": \"qjournet2@gmail.com\",\n      \"Password\": \"5fee5ae1c5da17ee54b56abaa45e9355\",\n      \"Phone\": \"012345678\",\n      \"AddressPart1\": \"12 rue gabriel péri\",\n      \"AddressPart2\": null,\n      \"IsFoodie\": 1,\n      \"IsRestaurant\": 0,\n      \"Token\": \"a token\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : true,\n  \"Message\" : \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Login",
    "name": "Login",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Success\",\n  \"User\": {\n    \"Id\": 19,\n    \"FirstName\": \"foodie\",\n    \"LastName\": \"foodie\",\n    \"Email\": \"foodie@foodie.com\",\n    \"Password\": \"889ea886e748fbd3dd317130a609f993\",\n    \"Phone\": \"125489\",\n    \"AddressPart1\": \"dtc\",\n    \"AddressPart2\": null,\n    \"IsFoodie\": 1,\n    \"IsRestaurant\": 0,\n    \"Token\": \"a token\",\n    \"FoodieId\": 8\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "",
    "url": "/users/:id",
    "title": "Update a Foodie",
    "name": "Update_a_Foodie",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"User updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "post a close date",
    "name": "post_a_close_date",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"Error\" : false,\n  \"Message\" : \"User Added !\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"Error\" : true,\n  \"Message\" : \"Error excecuting MySQL query\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/user.js",
    "groupTitle": "User"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_doc_main_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_doc_main_js",
    "name": ""
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/read.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_lib_read_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_lib_read_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/read.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_lib_read_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_lib_read_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/json.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_lib_types_json_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_lib_types_json_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/json.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_lib_types_json_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_lib_types_json_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/json.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_lib_types_json_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_lib_types_json_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/raw.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_lib_types_raw_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_lib_types_raw_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/text.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_lib_types_text_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_lib_types_text_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/text.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_lib_types_text_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_lib_types_text_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/urlencoded.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/urlencoded.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/urlencoded.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/urlencoded.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/bytes/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_bytes_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_bytes_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/bytes/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_bytes_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_bytes_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/browser.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_browser_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/browser.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_browser_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/browser.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_browser_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/browser.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_browser_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/browser.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_browser_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/debug.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_debug_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/debug.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_debug_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/debug.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_debug_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/debug.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_debug_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/debug.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_debug_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/debug.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_debug_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/node.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_node_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/node.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_node_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/node.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_node_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/node_modules/ms/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/node_modules/ms/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/node_modules/ms/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/debug/node_modules/ms/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_debug_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/on-finished/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_on_finished_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_on_finished_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/on-finished/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_on_finished_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_on_finished_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/on-finished/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_on_finished_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_on_finished_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/on-finished/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_on_finished_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_on_finished_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/type-is/node_modules/media-typer/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_type_is_node_modules_media_typer_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_type_is_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/type-is/node_modules/media-typer/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_type_is_node_modules_media_typer_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_type_is_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/type-is/node_modules/media-typer/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_type_is_node_modules_media_typer_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_type_is_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/type-is/node_modules/media-typer/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_type_is_node_modules_media_typer_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_type_is_node_modules_media_typer_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/node_modules/type-is/node_modules/media-typer/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_type_is_node_modules_media_typer_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_body_parser_node_modules_type_is_node_modules_media_typer_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cors/node_modules/vary/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_cors_node_modules_vary_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_cors_node_modules_vary_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cors/node_modules/vary/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_cors_node_modules_vary_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_cors_node_modules_vary_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cors/node_modules/vary/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_cors_node_modules_vary_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_cors_node_modules_vary_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/application.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/application.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/application.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/application.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/application.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/application.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/application.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/application.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/application.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/application.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/application.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/application.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/application.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/application.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/application.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/application.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/application.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/application.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/application.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/application.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_application_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/express.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_express_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_express_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/middleware/init.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_middleware_init_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_middleware_init_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/middleware/query.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_middleware_query_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_middleware_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/request.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/request.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/request.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/request.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/request.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/request.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/request.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/request.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/request.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/request.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/request.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/request.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/request.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/request.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/request.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/request.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/request.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/request.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/request.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/response.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/response.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/response.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/response.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/response.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/response.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/response.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/response.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/response.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/response.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/response.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/response.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/response.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/response.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/response.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/response.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/response.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/response.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/response.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/response.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/response.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/response.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_response_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/layer.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_layer_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_layer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/layer.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_layer_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_layer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/layer.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_layer_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_layer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/layer.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_layer_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_layer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/route.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_route_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_route_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/route.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_route_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_route_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/route.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_route_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_route_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/route.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_route_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_route_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/route.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_route_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_router_route_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_utils_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_utils_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_utils_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_utils_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_utils_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_utils_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_utils_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_utils_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_utils_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_utils_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_utils_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_utils_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_utils_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_utils_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/view.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_view_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_view_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/view.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_view_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_view_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/view.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_view_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_lib_view_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/content-disposition/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_content_disposition_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/content-disposition/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_content_disposition_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/content-disposition/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_content_disposition_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/content-disposition/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_content_disposition_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/content-disposition/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_content_disposition_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/content-disposition/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_content_disposition_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/content-disposition/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_content_disposition_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/content-disposition/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_content_disposition_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/content-disposition/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_content_disposition_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/content-disposition/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_content_disposition_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_content_disposition_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/cookie-signature/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_cookie_signature_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_cookie_signature_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/cookie-signature/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_cookie_signature_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_cookie_signature_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/browser.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_browser_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/browser.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_browser_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/browser.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_browser_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/browser.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_browser_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/browser.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_browser_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/debug.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_debug_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/debug.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_debug_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/debug.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_debug_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/debug.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_debug_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/debug.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_debug_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/debug.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_debug_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/node.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_node_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/node.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_node_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/node.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_node_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/node_modules/ms/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/node_modules/ms/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/node_modules/ms/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/debug/node_modules/ms/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_debug_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/escape-html/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_escape_html_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_escape_html_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/etag/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_etag_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_etag_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/etag/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_etag_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_etag_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/etag/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_etag_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_etag_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/etag/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_etag_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_etag_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/etag/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_etag_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_etag_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/finalhandler/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_finalhandler_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_finalhandler_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/finalhandler/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_finalhandler_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_finalhandler_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/finalhandler/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_finalhandler_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_finalhandler_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/fresh/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_fresh_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_fresh_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/on-finished/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_on_finished_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_on_finished_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/on-finished/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_on_finished_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_on_finished_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/on-finished/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_on_finished_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_on_finished_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/on-finished/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_on_finished_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_on_finished_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/parseurl/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_parseurl_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_parseurl_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/parseurl/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_parseurl_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_parseurl_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/parseurl/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_parseurl_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_parseurl_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/parseurl/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_parseurl_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_parseurl_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/path-to-regexp/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_path_to_regexp_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_path_to_regexp_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/proxy-addr/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_proxy_addr_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_proxy_addr_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/proxy-addr/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_proxy_addr_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_proxy_addr_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/proxy-addr/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_proxy_addr_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_proxy_addr_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/proxy-addr/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_proxy_addr_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_proxy_addr_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/proxy-addr/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_proxy_addr_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_proxy_addr_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/proxy-addr/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_proxy_addr_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_proxy_addr_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/proxy-addr/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_proxy_addr_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_proxy_addr_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/proxy-addr/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_proxy_addr_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_proxy_addr_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/proxy-addr/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_proxy_addr_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_proxy_addr_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/proxy-addr/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_proxy_addr_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_proxy_addr_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/proxy-addr/node_modules/forwarded/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_proxy_addr_node_modules_forwarded_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_proxy_addr_node_modules_forwarded_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/node_modules/ms/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_node_modules_ms_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/node_modules/ms/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_node_modules_ms_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/node_modules/ms/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_node_modules_ms_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/send/node_modules/ms/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_node_modules_ms_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_send_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/serve-static/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_serve_static_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_serve_static_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/type-is/node_modules/media-typer/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_type_is_node_modules_media_typer_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_type_is_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/type-is/node_modules/media-typer/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_type_is_node_modules_media_typer_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_type_is_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/type-is/node_modules/media-typer/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_type_is_node_modules_media_typer_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_type_is_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/type-is/node_modules/media-typer/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_type_is_node_modules_media_typer_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_type_is_node_modules_media_typer_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/type-is/node_modules/media-typer/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_type_is_node_modules_media_typer_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_type_is_node_modules_media_typer_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/utils-merge/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_utils_merge_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_utils_merge_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/vary/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_vary_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_vary_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/vary/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_vary_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_vary_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/vary/index.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_vary_index_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_express_node_modules_vary_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mysql/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mysql/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mysql/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mysql/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mysql/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mysql/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_quentin_chine_spt2_LFP_Api_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_quentin_chine_spt2_LFP_Api_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Public"
  }
] });
