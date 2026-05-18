require "test_helper"

class EmployeeTest < ActiveSupport::TestCase
  test "should not save employee without name" do
    employee = Employee.new(name: nil)

    assert_not employee.save
  end
end
