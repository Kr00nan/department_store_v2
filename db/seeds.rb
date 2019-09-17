10.times do
  Department.create(
    name: Faker::Commerce.department
  )
end

puts '10 departments have been seeded'

100.times do
  Item.create(
    name: Faker::Commerce.product_name,
    description: Faker::Lorem.sentence,
    price: Faker::Commerce.price.to_f,
    department_id: rand(1..10)
  )
end

puts '100 items have been seeded'