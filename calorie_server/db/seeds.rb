require 'active_record/filter'
puts "Deleting..."
# User.destroy_all()
puts "🌱 Seeding ..."
# User.create(username: "JKL")
Cuisine.create(name: "African cuisine", img_url: "https://upload.wikimedia.org/wikipedia/commons/0/03/Alicha_1.jpg")
Cuisine.create(name: "Asian cuisine", img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Vegetarian_Curry.jpeg/200px-Vegetarian_Curry.jpeg")
Cuisine.create(name: "European cuisine", img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wiener-Schnitzel02.jpg/250px-Wiener-Schnitzel02.jpg")

Meal.create(category: "Breakfast", name:"Homemade Croissants",calories: 365, cuisine_id: 3, img_url: "https://bigseventravel.com/wp-content/uploads/2020/08/Screenshot-2020-08-06-at-10.15.34.png")
Meal.create(category: "Breakfast", name:"Swiss Rosti With Smoked Salmon",calories: 589, cuisine_id: 3, img_url: "https://bigseventravel.com/wp-content/uploads/2020/08/Screenshot-2020-08-06-at-10.17.46.png")
Meal.create(category: "Breakfast", name:"Racuszki! (Yeasted Polish Pancakes)",calories: 589, cuisine_id: 3, img_url: "https://bigseventravel.com/wp-content/uploads/2020/08/Screenshot-2020-08-06-at-10.23.04.png")

Meal.create(category: "Lunch", name:"Pierogi",calories: 230, cuisine_id: 3, img_url: "https://blog.topdeck.travel/wp-content/uploads/2017/04/Pierogi-1024x683.jpg")
Meal.create(category: "Lunch", name:"Goulash",calories: 289, cuisine_id: 3, img_url: "https://blog.topdeck.travel/wp-content/uploads/2017/04/goulash-1024x683.jpg")
Meal.create(category: "Lunch", name:"Köttbullar",calories: 589, cuisine_id: 3, img_url: "https://blog.topdeck.travel/wp-content/uploads/2017/04/kottbullar-1024x768.jpg")

Meal.create(category: "Dinner", name:"Baked Cod in a Chorizo Broth",calories: 380, cuisine_id: 3, img_url: "https://images.ctfassets.net/qu53tdnhexvd/ldkjemMSFqcwCMIY0Qw88/db7deb84709c44474b93e894ad4b8903/baked-cod-with-olives-and-chorizo.jpg")
Meal.create(category: "Dinner", name:"Eggs baked in patatas bravas",calories: 309, cuisine_id: 3, img_url: "https://img.taste.com.au/45N67qX3/w643-h428-cfill-q90/taste/2016/11/eggs-baked-in-patatas-bravas-100484-1.jpeg")
Meal.create(category: "Dinner", name:"Köttbullar",calories: 589, cuisine_id: 3, img_url: "https://blog.topdeck.travel/wp-content/uploads/2017/04/kottbullar-1024x768.jpg")
# History.create(user_id: 5, meal_id: 2)

puts "✅ Done seeding!"