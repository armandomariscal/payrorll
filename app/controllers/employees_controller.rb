class EmployeesController < ApplicationController
  before_action :set_employee, only: %i[
    show
    edit
    update
    destroy
  ]

  before_action :authenticate_user!

  # GET /employees
  def index
    @employees = Employee.all.order(id: :desc)
  end

  # GET /employees/kept
  def kept
    @employees = Employee.kept.order(id: :desc)

    render :index
  end

  def webix
  end

  def show
  end

  def new
    @employee = Employee.new
  end

  def edit
  end

  def create
    @employee = Employee.new(employee_params)

    @employee.status = "active" if @employee.status.blank?

    respond_to do |format|
      if @employee.save
        format.html do
          redirect_to @employee,
          notice: "Employee was successfully created."
        end

        format.json do
          render :show,
          status: :created,
          location: @employee
        end

      else
        format.html do
          render :new,
          status: :unprocessable_entity
        end

        format.json do
          render json: @employee.errors,
          status: :unprocessable_entity
        end
      end
    end
  end

  def update
    respond_to do |format|
      if @employee.update(employee_params)

        format.html do
          redirect_to @employee,
          notice: "Employee was successfully updated.",
          status: :see_other
        end

        format.json do
          render :show,
          status: :ok,
          location: @employee
        end

      else
        format.html do
          render :edit,
          status: :unprocessable_entity
        end

        format.json do
          render json: @employee.errors,
          status: :unprocessable_entity
        end
      end
    end
  end

  def destroy
    @employee.destroy!

    respond_to do |format|
      format.html do
        redirect_to employees_path,
        notice: "Employee was successfully destroyed.",
        status: :see_other
      end

      format.json { head :no_content }
    end
  end

  private

  def set_employee
    @employee = Employee.find(params[:id])
  end

  def employee_params
    params.require(:employee).permit(
      :name,
      :email,
      :salary_base,
      :hire_date,
      :status
    )
  end
end
