class Meal < ActiveRecord::Base
    belongs_to :cuisine
    belongs_to :choice
end