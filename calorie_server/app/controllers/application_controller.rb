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
    Meal.where(cuisine_id: params[:id])
  end

  get '/history/:id' do
    begin
      History.find(params[:id]).to_json
    rescue => exception
      {message: "Could not find history in databse with id #{params[:id]}\n"}.to_json
    end
  end

  get '/histories/:user_id' do
    begin
      History.where(user_id: (params[:user_id].to_i)).to_json
    rescue => exception
      "Could not find histories in databse for user_id #{params[user_id]}\nERROR: #{exception.message}"
    end
  end

  get '/choices/:user_id' do
    begin
      Choice.where(user_id: (params[:user_id].to_i)).to_json
    rescue => exception
      "Could not find choices in databse for user_id #{params[user_id]}\nERROR: #{exception.message}"
    end
  end

  post '/choice' do
    begin
      Choice.create(params).to_json
    rescue => exception
      "Could not create choice in databse\nERROR: #{exception.message}"
    end
  end
  
  post '/history' do
    begin
      new_history = History.create(meal_id: params[:meal_id], user_id: params[:user_id])
      new_history.to_json
      rescue => exception
      "Could not create history in databse\nERROR: #{exception.message}"
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
      {message: "Could not patch user\n ERROR : #{exception.message}"}.to_json
    end
  end

  delete '/users/:id' do
    begin
      deleted = User.find(params[:id]).destroy
      History.where("user_id" == params[:id]).destroy_all
      deleted.to_json
    rescue => exception
      {message: "Could not delete user\n ERROR : #{exception.message}"}.to_json
    end
  end

end
