require "test_helper"

class DepartmentTest < ActiveSupport::TestCase
  test "is invalid without name" do
    department = Department.new(code: "IT")

    assert_not department.valid?
    assert_includes department.errors[:name], "can't be blank"
  end

  test "is invalid without code" do
    department = Department.new(name: "Information Technology")

    assert_not department.valid?
    assert_includes department.errors[:code], "can't be blank"
  end

  test "code must be unique" do
  Department.create!(
    name: "Information Technology",
    code: "IT"
  )

  duplicate = Department.new(
    name: "Another Department",
      code: "IT"
    )

    assert_not duplicate.valid?
  end

  test "ordered returns departments sorted by name" do
    Department.delete_all

    Department.create!(name: "Sales", code: "SALES")
    Department.create!(name: "Accounting", code: "ACC")

    assert_equal(
      ["Accounting", "Sales"],
      Department.ordered.pluck(:name)
    )
  end

  test "select_options returns id and value pairs" do
    Department.delete_all

    department = Department.create!(
      name: "Information Technology",
      code: "IT"
    )

    assert_equal [
      { id: department.id, value: department.name }
    ], Department.select_options
  end

  test "normalizes code and name before validation" do
    department = Department.create!(
      name: "  Information Technology  ",
      code: "  it  "
    )

    assert_equal "Information Technology", department.name
    assert_equal "IT", department.code
  end
end
