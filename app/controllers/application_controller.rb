class ApplicationController < ActionController::API
    # top level, should apply to all controllers
    include ActionController::Cookies

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end
end
