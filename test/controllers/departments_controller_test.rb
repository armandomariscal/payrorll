require "test_helper"

class DepartmentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @department = departments(:one)
  end

  test "should get index" do
    get departments_url, as: :json
    assert_response :success
  end

  test "should create department" do
    assert_difference("Department.count") do
      post departments_url,
           params: { department: { code: "NEW", description: "New Dept", name: "New Department" } },
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
    empty = Department.create!(name: "Empty Dept", code: "EMPTY", description: "No employees here")

    assert_difference("Department.count", -1) do
      delete department_url(empty), as: :json
    end
    assert_response :no_content
  end

  test "should get departments select list" do
    Department.create!(
      name: "Information Technology",
      code: "IT"
    )

    get departments_select_list_url

    assert_response :success
  end

  test "select list returns formatted departments" do
    department = Department.create!(
      name: "Information Technology",
      code: "IT"
    )

    get departments_select_list_url

    json = JSON.parse(response.body)

    assert_equal 1, json.size
    assert_equal department.id, json[0]["id"]
    assert_equal department.name, json[0]["value"]
  end

  test "select list returns formatted departments" do
    department = Department.create!(
      name: "Information Technology",
      code: "IT"
    )

    get departments_select_list_url

    json = JSON.parse(response.body)

    assert_equal 1, json.size
    assert_equal department.id, json[0]["id"]
    assert_equal department.name, json[0]["value"]
  end

  test "select list returns formatted departments" do
    department = Department.create!(
      name: "Information Technology",
      code: "IT"
    )

    get departments_select_list_url

    json = JSON.parse(response.body)

    assert_equal 1, json.size
    assert_equal department.id, json[0]["id"]
    assert_equal department.name, json[0]["value"]
  end

  test "select list is ordered by name" do
    Department.create!(name: "Sales", code: "SALES")
    Department.create!(name: "Accounting", code: "ACC")

    get departments_select_list_url

    json = JSON.parse(response.body)

    assert_equal "Accounting", json[0]["value"]
    assert_equal "Sales", json[1]["value"]
  end

end
