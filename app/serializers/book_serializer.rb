class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :author, :illustrator

  has_many :reviews
end
