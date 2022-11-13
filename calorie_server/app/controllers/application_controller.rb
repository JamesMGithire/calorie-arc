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

  get '/users/:id' do
    User.find(params[:id]).to_json
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
      choices = Choice.where(user_id: (params[:user_id].to_i)).uniq
      choices.to_json(include: :meal)
    rescue => exception
      "Could not find choices in databse for user_id #{params[user_id]}\nERROR: #{exception.message}"
    end
  end
  
  post '/validate' do
    begin
      user = User.find_by(username: params[:username])
      user.password == params[:password] ? {user: user, message: "valid"}.to_json : {message: "invalid"}.to_json
    rescue => exception
      {message:"Could not find user in databse for user #{params}\nERROR: #{exception.message}"}.to_json
    end
  end

  post '/choices' do
    begin
      Choice.create(params).to_json(include: :meal)
    rescue => exception
      {message: "Could not create choice in databse\nERROR: #{exception.message}"}.to_json
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
      new_user = User.create(
        first_name: params[:first_name],
        last_name: params[:last_name],
        email: params[:email],
        password: params[:password],
        username: params[:username],
      )
      {message: "created" ,user: new_user}.to_json
    rescue => exception
      {message: "Could not create user in databse\nERROR: #{exception.message}"}.to_json
    end
  end

  patch '/users/:id' do
    begin
      patched = User.find(params[:id])
      patched.update(params)
      {message: "updated" , user: patched}.to_json
      
    rescue => exception
      {message: "Could not patch user\nERROR : #{exception.message}"}.to_json
    end
  end

  delete '/users/:id' do
    begin
      deleted = User.find(params[:id]).destroy
      # Choice.where("user_id" == params[:id]).destroy_all
      deleted.to_json
    rescue => exception
      {message: "Could not delete user\nERROR : #{exception.message}"}.to_json
    end
  end

end
