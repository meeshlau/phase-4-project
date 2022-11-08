class ReviewsController < ApplicationController

    def index
        render json: Review.all
    end

    def create
        find_user = User.find_by(user_id: params[:user_id])

        if find_user
            review = Review.create!(review_params)
            render json: review, status: :created
        else
            render json: { review.error.messages }, status: 422
        end
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end

    private

    def review_params
        params.permit(:id, :book_id, :user_id, :review_comment, :rating)
    end
end
