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
    Meal.all.to_json
  end

  get '/cuisines' do
    Cuisine.all.to_json
  end

  get '/history/:id' do
    begin
      History.find(params[:id]).to_json
    rescue => exception
      {message: "Could not find history in databse with id #{params[:id]}\n"}.to_json
    end
  end

  get '/choices/:user_id' do
    begin
      Choice.find_by(user_id: params[user_id])
    rescue => exception
      {message: "Could not find choices in databse for user_id #{params[user_id]}\n"}.to_json
    end
  end
  
  post '/history' do
    begin
      History.create(meal_id: params[:meal_id], user_id: params[:user_id]).to_json
      rescue => exception
      {message: "Could not create history in databse\nERROR: #{exception.message}"}.to_json
      end
  end

  delete '/history/:id' do
    begin
      deleted = History.find(params[:id]).destroy
      deleted.to_json
    rescue => exception
      {message: "Could not create history in databse\nERROR: #{exception.message}"}.to_json
    end
  end

  post '/user' do
    begin
      User.create(username: params[:username],
      first_name: params[:first_name],
      last_name: params[:lastname],
      calories: params[:calories],
      password: params[:password],
      food_calories_range: params[:food_calories_range],
      gender: params[:gender],
      ).to_json
    rescue => exception
      {message: "Could not create user in databse\nERROR: #{exception.message}"}.to_json
    end
  end

end
