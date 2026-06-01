require "test_helper"

class EmployeesControllerTest < ActionDispatch::IntegrationTest
  include Devise::Test::IntegrationHelpers

  setup do
    @employee = employees(:freja)
    @user = users(:freja)

    sign_in @user
  end

  test "should get index" do
    get employees_url

    assert_response :success
  end

  test "should redirect index when user is not authenticated" do
    sign_out @user

    get employees_url

    assert_redirected_to "/#!/login"
  end

  test "should get new" do
    get new_employee_url

    assert_response :success
  end

  test "should create employee" do
    assert_difference("Employee.count", 1) do
      post employees_url, params: {
        employee: {
          name: "Test User",
          email: "new_unique_employee_test@example.com",
          hire_date: Date.today,
          salary_base: 100,
          status: "active",
          department_id: departments(:one).id
        }
      }, as: :json
    end

    created_employee = Employee.last
    assert_response :success
  end

  test "should not create employee with invalid params" do
    assert_no_difference("Employee.count") do
      post employees_url, params: {
        employee: {
          name: nil,
          email: nil,
          salary_base: nil
        }
      }
    end

    assert_response :unprocessable_entity
  end

  test "should show employee" do
    get employee_url(@employee)

    assert_response :success
  end

  test "should get edit" do
    get edit_employee_url(@employee)

    assert_response :success
  end

  test "should update employee status" do
    patch employee_url(@employee), params: {
      employee: {
        status: "inactive"
      }
    }

    @employee.reload

    assert_redirected_to employee_url(@employee)
    assert_equal "inactive", @employee.status
  end

  test "should destroy employee" do
    assert_difference("Employee.count", -1) do
      delete employee_url(@employee)
    end

    assert_redirected_to employees_url
  end
end
