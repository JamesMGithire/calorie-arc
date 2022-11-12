require 'pp'  # Pretty print
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

  # get meals from a certain cuisine
  get '/cuisines/:id' do
    Meal.where(cuisine_id: params[:id]).to_json
  end

  get '/choices/:user_id' do
    begin
      Choice.where(user_id: (params[:user_id].to_i)).to_json(include: :meal)
    rescue => exception
      "Could not find choices in databse for user_id #{params[user_id]}\nERROR: #{exception.message}"
    end
  end
  
  post '/validation' do
    p params
  end

  post '/choices' do
    begin
      Choice.create(params).to_json
    rescue => exception
      "Could not create choice in databse\nERROR: #{exception.message}"
    end
  end

  delete '/choices/:id' do
    begin
      Choice.find(params[:id]).destroy.to_json
    rescue => exception
      "Could not delete choice\nERROR : #{exception.message}"
    end
  end

  post '/users' do
    begin
      User.create(params).to_json
    rescue => exception
      {message: "Could not create user in databse\nERROR: #{exception.message}"}.to_json
    end
  end

  patch '/users/:id' do
    begin
      patched = User.find(params[:id])
      patched.update(params)
      patched.to_json
      
    rescue => exception
      {message: "Could not patch user\nERROR : #{exception.message}"}.to_json
    end
  end

  delete '/users/:id' do
    begin
      deleted = User.find(params[:id]).destroy
      Choice.where("user_id" == params[:id]).destroy_all
      deleted.to_json
    rescue => exception
      {message: "Could not delete user\nERROR : #{exception.message}"}.to_json
    end
  end

end
