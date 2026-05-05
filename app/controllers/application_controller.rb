class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  # Changes to the importmap will invalidate the etag for HTML responses
  stale_when_importmap_changes

  protect_from_forgery with: :null_session
  
  def authenticate_user!
    if user_signed_in?
      super
    else
      respond_to do |format|
        format.html { redirect_to "/#!/login" }
        format.json { render json: { error: "unauthorized" }, status: :unauthorized }
      end
    end
  end
end
