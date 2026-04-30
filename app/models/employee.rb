class Employee < ApplicationRecord
    validates :name, presence: true
    validates :salary_base, numericality: { greater_than_or_equal_to: 0 }
end