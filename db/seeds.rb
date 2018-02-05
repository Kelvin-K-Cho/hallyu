# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Station.destroy_all

user = User.create(email: "pandora", password: "secret")

Station.create(
  station_name: "Twice",
  description: "Twice is a South Korean girl group formed by JYP Entertainment through the 2015 reality show Sixteen. The group is composed of nine members: Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun, Chaeyoung, and Tzuyu. The group debuted on October 20, 2015, with The Story Begins.",
  image_url: "https://i.imgur.com/ljkM9TX.jpg",
  user_id: user.id
)

Station.create(
  station_name: "BTS",
  description: "BTS, also known as the Bangtan Boys, is a seven-member South Korean boy band formed by Big Hit Entertainment. They debuted on June 12, 2013 with the song 'No More Dream' from their first album 2 Cool 4 Skool.",
  image_url: "https://i.imgur.com/HdFyFqS.jpg",
  user_id: user.id
)

Station.create(
  station_name: "GFriend",
  description: "GFriend is a six-member South Korean girl group formed by Source Music in 2015. The group consists of Sowon, Yerin, Eunha, Yuju, SinB and Umji. They made their debut with the extended play, Season of Glass on January 16, 2015.",
  image_url: "https://i.imgur.com/VP1luUk.jpg",
  user_id: user.id
)

Station.create(
  station_name: "Exo",
  description: "Exo is a South Korean-Chinese boy group based in Seoul. Formed by S.M. Entertainment in 2011, the group debuted in 2012 with twelve members separated into two subgroups, Exo-K (Suho, Baekhyun, Chanyeol, D.O., Kai, and Sehun) and Exo-M (Xiumin, Lay, Chen and former members Kris, Luhan and Tao, performing music in Korean and Mandarin respectively. Exo's first album XOXO (2013), which contained the breakthrough hit 'Growl', was a critical and commercial success. They have been named 'the biggest boyband in the world' by media outlets.",
  image_url: "https://i.imgur.com/0f80Ah1.jpg",
  user_id: user.id
)

Station.create(
  station_name: "Black Pink",
  description: "Black Pink stylized as BLACKPINK or BLΛƆKPIИK, is a South Korean girl group formed by YG Entertainment. Consisting of members Jisoo, Jennie, Rosé, and Lisa, the group officially debuted on August 8, 2016, with their single Square One, which spawned their first number-one hit, 'Whistle'.",
  image_url: "https://i.imgur.com/LxYsrUs.jpg",
  user_id: user.id
)

Station.create(
  station_name: "Big Bang",
  description: "Big Bang is a South Korean boy band formed by YG Entertainment. With members G-Dragon, T.O.P, Taeyang, Daesung, and Seungri, they are often cited as one of the most influential acts to shape the K-pop industry by helping spread the Korean Wave internationally and dubbed as the 'Kings of K-pop' by the media. Their experimental and diverse use of music genres, personal involvement in producing their own records,[9] and stage performances have been admired by music critics and served as influence to numerous K-pop and international artists.",
  image_url: "https://i.imgur.com/0zlqy2f.jpg",
  user_id: user.id
)

Station.create(
  station_name: "Red Velvet",
  description: "Red Velvet is a South Korean girl group formed by S.M. Entertainment. The group debuted on August 1, 2014, with their digital single 'Happiness' and with four members: Irene, Seulgi, Wendy and Joy. In March 2015, Red Velvet added a fifth member, Yeri, to the group.",
  image_url: "https://i.imgur.com/O1Ld7ze.jpg",
  user_id: user.id
)

Station.create(
  station_name: "Mamamoo",
  description: "Mamamoo, sometimes stylized as MAMAMOO, is a South Korean girl group formed by Rainbow Bridge World (formerly WA Entertainment) in 2014. The group officially debuted on June 19, 2014 with the song 'Mr. Ambiguous'. Their debut was considered by some critics as one of the best K-pop debuts of 2014. They are recognized for their retro, jazz, and R&B concepts and strong vocal performances.",
  image_url: "https://i.imgur.com/FLbvqe7.jpg",
  user_id: user.id
)

Station.create(
  station_name: "Got7",
  description: "Got7 (Hangul: 갓세븐) is a South Korean boy group formed by JYP Entertainment. The group is composed of seven members: JB, Mark, Jackson, Jinyoung, Youngjae, BamBam, and Yugyeom. Got7 debuted in January 2014 with the release of their first EP Got It?, which peaked at number two on the Gaon Album Chart and number one on Billboard's World Albums Chart. The group gained attention for their stage performances, which include elements of martial arts tricking.",
  image_url: "https://i.imgur.com/ozRBsJ8.jpg",
  user_id: user.id
)

Station.create(
  station_name: "Apink",
  description: "Apink is a South Korean girl group formed by Plan A Entertainment (formerly A Cube Entertainment) in 2011. The group consists of Park Cho-rong, Yoon Bo-mi, Jung Eun-ji, Son Na-eun, Kim Nam-joo and Oh Ha-young.",
  image_url: "https://i.imgur.com/bLmnr79.jpg",
  user_id: user.id
)
