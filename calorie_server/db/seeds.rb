puts "Deleting..."
# User.destroy_all()
puts "🌱 Seeding ..."
# User.create(username: "JKL")
# Cuisine.create()
# Cuisine.create(name: "African cuisine", img_url: "https://upload.wikimedia.org/wikipedia/commons/0/03/Alicha_1.jpg")
# Cuisine.create(name: "Asian cuisine", img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Vegetarian_Curry.jpeg/200px-Vegetarian_Curry.jpeg")
# Cuisine.create(name: "European cuisine", img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wiener-Schnitzel02.jpg/250px-Wiener-Schnitzel02.jpg")

# Meal.create(name:"Swiss Rosti With Smoked Salmon",calories: 589, cuisine_id: 3, img_url: "https://bigseventravel.com/wp-content/uploads/2020/08/Screenshot-2020-08-06-at-10.17.46.png")

History.create(user_id: 5, meal_id: 2)

puts "✅ Done seeding!"