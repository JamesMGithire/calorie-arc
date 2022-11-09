require 'active_record/filter'
class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add routes
  get '/' do
    "Calorie API @2022"
  end
  
  get '/users' do
    User.all.to_json
  end
  get '/meals' do
    Meals.all.to_json
  end

  get '/cuisines' do
    Cuisine.all.to_json
  end

  get '/history/:id' do
    begin
      History.find(params[:id]).to_json
      
    rescue => exception
      exception.to_json

    end
  end
  
  post '/history' do
    begin
      History.create(meal_id: params[:meal_id], user_id:[:user_id]).to_json
      rescue => exception
        exception.to_json
      end
  end

  post '/user' do
    begin
      User.create(username: params[:username],
      first_name: params[:username],
      last_name: params[:lastname],
      calories: params[:calories],
      password: params[:password],
      food_calories_range: params[:food_calories_range],
      gender: params[:gender],
      ).to_json
    rescue => exception
      {message: "Could not create user in databse\nERROR: #{exception.message}"}
    end
  end

end
