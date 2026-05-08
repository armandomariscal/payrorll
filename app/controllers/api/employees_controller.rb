class Api::EmployeesController < ApplicationController
  def destroy
    employee = Employee.find(params[:id])

    employee.destroy

    head :no_content
  end
end
