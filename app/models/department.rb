class Department < ApplicationRecord
  has_many :employees, dependent: :nullify

  validates :name, presence: true, length: { maximum: 100 }
  validates :code, presence: true, uniqueness: true

  scope :ordered, -> { order(:name) }

  before_validation :normalize_attributes

  def self.select_options
    ordered.map do |department|
      {
        id: department.id,
        value: department.name
      }
    end
  end

  private

  def normalize_attributes
    self.name = name&.strip
    self.code = code&.strip&.upcase
  end
end
