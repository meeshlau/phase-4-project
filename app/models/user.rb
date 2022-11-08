class User < ApplicationRecord
    has_many :books
    has_many :reviews, through: :books

    validates :username, presence: true, uniqueness: true
end
