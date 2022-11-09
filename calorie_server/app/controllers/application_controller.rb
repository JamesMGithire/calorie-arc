require 'active_record/filter'
class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add routes
  get '/' do
    
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
  
  post'/history/:id' do
    
  end

end
