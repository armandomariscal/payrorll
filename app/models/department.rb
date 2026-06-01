class Department < ApplicationRecord
    has_many :employees, dependent: :nullify
end
