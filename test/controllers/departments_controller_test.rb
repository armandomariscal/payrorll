require "test_helper"
require "securerandom"

class DepartmentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    Employee.delete_all
    Department.delete_all

    @department = Department.create!(
      name: "Setup Department",
      code: "SETUP"
    )
  end

  test "should get index" do
    get departments_url, as: :json
    assert_response :success
  end

  test "should create department" do
    assert_difference("Department.count") do
      post departments_url,
           params: {
             department: {
               code: "NEW_#{SecureRandom.hex(2)}",
               description: "New Dept",
               name: "New Department"
             }
           },
           as: :json
    end

    assert_response :created
  end

  test "should show department" do
    get department_url(@department), as: :json
    assert_response :success
  end

  test "should update department" do
    patch department_url(@department),
          params: { department: { name: "Updated Name" } },
          as: :json

    assert_response :success
  end

  test "should destroy department" do
    empty = Department.create!(
      name: "Empty Dept",
      code: "EMPTY_#{SecureRandom.hex(2)}",
      description: "No employees here"
    )

    assert_difference("Department.count", -1) do
      delete department_url(empty), as: :json
    end

    assert_response :no_content
  end

  test "should get departments select list" do
    Department.create!(
      name: "Information Technology",
      code: "IT_#{SecureRandom.hex(3)}"
    )

    get departments_select_list_url

    assert_response :success
  end

  test "select list returns formatted departments" do
    Department.create!(
      name: "Information Technology",
      code: "IT_#{SecureRandom.hex(3)}"
    )

    get departments_select_list_url

    json = JSON.parse(response.body)

    assert_equal 1, json.size
    assert_equal "Information Technology", json[0]["value"]
  end

  test "select list is ordered by name" do
    Department.create!(name: "Sales", code: "SALES_#{SecureRandom.hex(2)}")
    Department.create!(name: "Accounting", code: "ACC_#{SecureRandom.hex(2)}")

    get departments_select_list_url

    json = JSON.parse(response.body)

    assert_equal "Accounting", json[0]["value"]
    assert_equal "Sales", json[1]["value"]
  end
end
