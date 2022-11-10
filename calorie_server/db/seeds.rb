require 'active_record/filter'
puts "Deleting..."
# User.destroy_all()
puts "🌱 Seeding ..."
# User.create(username: "JKL")
# Cuisine.create(name: "African cuisine", img_url: "https://upload.wikimedia.org/wikipedia/commons/0/03/Alicha_1.jpg")
# Cuisine.create(name: "Asian cuisine", img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Vegetarian_Curry.jpeg/200px-Vegetarian_Curry.jpeg")
# Cuisine.create(name: "European cuisine", img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wiener-Schnitzel02.jpg/250px-Wiener-Schnitzel02.jpg")

Meal.create(category: "Breakfast", name:"Mandazi",calories: 160, cuisine_id: 1, img_url: "https://www.okayafrica.com/media-library/mandazi-are-like-an-african-donut-or-fritter.jpg?id=22775443&width=576&quality=80")
Meal.create(category: "Breakfast", name:"Banana Biscotti",calories: 145, cuisine_id: 1, img_url: "https://i1.wp.com/thefoodexplorer.com/wp-content/uploads/2017/04/Banana-Biscotti-recipe.jpg?resize=756%2C1024")
Meal.create(category: "Breakfast", name:"Crunchies (South African)",calories: 66, cuisine_id: 1, img_url: "https://i2.wp.com/thefoodexplorer.com/wp-content/uploads/2017/04/Crunchies-South-African-recipe.jpg?resize=768%2C1014")

Meal.create(category: "Lunch", name:"Piri piri chicken, Mozambique",calories: 321, cuisine_id: 1, img_url: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170410115320-africa-food---piri-piri-chicken.jpg")
Meal.create(category: "Lunch", name:"Doro Wat",calories: 324, cuisine_id: 1, img_url: "https://www.okayafrica.com/media-library/image.jpg?id=22775422&width=700&quality=80")
Meal.create(category: "Lunch", name:"Muamba de Galinha, Angola",calories: 541, cuisine_id: 1, img_url: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170410115304-african-food---muamba-di-luanda.jpg")

Meal.create(category: "Dinner", name:"Nyama na irio, Kenya",calories: 250, cuisine_id: 1, img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkOuFkyUMv9wOBAQTmrVag8tiGxPcIe_bLw&usqp=CAU")
Meal.create(category: "Dinner", name:"Jollof rice and egusi soup, Nigeria",calories: 284, cuisine_id: 1, img_url: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170410115312-african-food---jollof-rice.jpg")
Meal.create(category: "Dinner", name:"Ofada Stew",calories: 311, cuisine_id: 1, img_url: "https://www.okayafrica.com/media-library/nigerian-ofada-stew-with-rice-and-banana-leaf-and-egg.png?id=22775562&width=542&quality=80")
# History.create(user_id: 5, meal_id: 2)

puts "✅ Done seeding!"