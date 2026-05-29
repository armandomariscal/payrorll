class Employee < ApplicationRecord
    enum :status, {
        active: "active",
        inactive: "inactive"
    }

    validates :name, presence: true
    validates :salary_base, numericality: { greater_than_or_equal_to: 0 }
    validates :status, presence: true

    # default_scope { where.not(status: :inactive) }
    scope :kept, -> { where.not(status: :inactive) }
end
