class Users::SessionsController < Devise::SessionsController
  respond_to :json

  def create
    self.resource = warden.authenticate!(auth_options)
    sign_in(resource_name, resource)

    render json: {
      user: {
        id: resource.id,
        email: resource.email
      },
      message: "login_success"
    }
  end

  def destroy
    sign_out(resource_name)
    render json: { message: "logout_success" }
  end
end