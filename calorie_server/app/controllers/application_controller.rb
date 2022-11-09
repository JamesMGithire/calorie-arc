require 'active_record/filter'
class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add routes
  get '/users' do
    User.all.to_json
  end
  get '/meals' do
    Meals.all.to_json
  end

  get '/cuisines' do
    Cuisine.all.to_json
  end
  
  post'/history/:id' do
    
  end

  post '/messages' do
    message = Message.create(
      body: params[:body],
      username: params[:username]
    )
    message.to_json
  end

  patch '/messages/:id' do
    message = Message.find(params[:id])
    message.update(body: params[:body])
    message.to_json
  end

  delete '/messages/:id' do
    message = Message.find(params[:id]).destroy
    message.to_json
  end
end
