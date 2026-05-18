require "test_helper"

class UserTest < ActiveSupport::TestCase
  test "should be valid with valid fixture data" do
    user = users(:freja)

    assert user.valid?
  end

  test "should not be valid without email" do
    user = User.new(
      email: nil,
      password: "password123"
    )

    assert_not user.valid?
  end
end
