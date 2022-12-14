class ApplicationController < ActionController::API
    before_action :authenticate_user
    # top level, should apply to all controllers
    include ActionController::Cookies

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end

    def current_user
         #memoization
         #use the value of current user and find by to raise nil as a response instead of an exception
        @current_user ||= User.find_by_id(session[:user_id])
    end

    private

    def authenticate_user # checking to see if a user is logged in
        render json: { errors: {User: "Not Authorized"} }, status: :unauthorized unless current_user
    end
end
