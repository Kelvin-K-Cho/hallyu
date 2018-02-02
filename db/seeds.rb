# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Station.destroy_all

User.create(email: "pandora", password: "secret")

Station.create(
  station_name: "Twice",
  description: "Twice is a South Korean girl group formed by JYP Entertainment through the 2015 reality show Sixteen. The group is composed of nine members: Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun, Chaeyoung, and Tzuyu. The group debuted on October 20, 2015, with The Story Begins.",
  image_url: "https://i.imgur.com/fxWXKRi.jpg",
  user_id: 1
)

Station.create(
  station_name: "Gfriend",
  description: "GFriend is a six-member South Korean girl group formed by Source Music in 2015. The group consists of Sowon, Yerin, Eunha, Yuju, SinB and Umji. They made their debut with the extended play, Season of Glass on January 16, 2015.",
  image_url: "https://i.imgur.com/pASCUFP.jpg",
  user_id: 1
)
