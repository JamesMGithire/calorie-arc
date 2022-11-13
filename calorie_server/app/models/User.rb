class User < ActiveRecord::Base
    has_many :choices
    has_many :meals, through: :choices
    has_many :cuisines, through: :meals
end