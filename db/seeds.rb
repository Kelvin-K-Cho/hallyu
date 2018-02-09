# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Station.destroy_all
Like.destroy_all
Dislike.destroy_all

user = User.create(email: "pandora", password: "secret")

station1 = Station.create(
  station_name: "Twice",
  description: "Twice is a South Korean girl group formed by JYP Entertainment through the 2015 reality show Sixteen. The group is composed of nine members: Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun, Chaeyoung, and Tzuyu. The group debuted on October 20, 2015, with The Story Begins.",
  # image_url: "https://i.imgur.com/ljkM9TX.jpg",
  user_id: user.id
)
station1.image = URI.parse("https://i.imgur.com/ljkM9TX.jpg")
station1.save!

track1 = Track.create(
  title: 'Cheer Up',
  song_url: 'https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/Twice+-+Cheer+Up.mp3',
  image_url: "https://i.imgur.com/ljkM9TX.jpg",
  ord: 1
)

track2 = Track.create(
  title: 'Like OOH-AHH',
  song_url: 'https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/Twice+-+Like+OOH-AHH.mp3',
  image_url: "https://i.imgur.com/ljkM9TX.jpg",
  ord: 1
)

track3 = Track.create(
  title: 'Likey',
  song_url: 'https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/Twice+-+Likey.mp3',
  image_url: "https://i.imgur.com/ljkM9TX.jpg",
  ord: 1
)

track4 = Track.create(
  title: 'TT',
  song_url: 'https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/Twice+-+TT.mp3',
  image_url: "https://i.imgur.com/ljkM9TX.jpg",
  ord: 1
)

Like.create(
  station_id: station1.id,
  track_id: track1.id
)

Like.create(
  station_id: station1.id,
  track_id: track2.id
)

Like.create(
  station_id: station1.id,
  track_id: track3.id
)

Like.create(
  station_id: station1.id,
  track_id: track4.id
)

station2 = Station.create(
  station_name: "BTS",
  description: "BTS, also known as the Bangtan Boys, is a seven-member South Korean boy band formed by Big Hit Entertainment. They debuted on June 12, 2013 with the song 'No More Dream' from their first album 2 Cool 4 Skool.",
  # image_url: "https://i.imgur.com/HdFyFqS.jpg",
  user_id: user.id
)

station2.image = URI.parse("https://i.imgur.com/HdFyFqS.jpg")
station2.save!

track5 = Track.create(
  title: 'DNA',
  song_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/BTS+-+DNA.mp3",
  image_url: "https://i.imgur.com/HdFyFqS.jpg",
  ord: 1
)

track6 = Track.create(
  title: 'Dope',
  song_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/BTS+-+Dope.mp3",
  image_url: "https://i.imgur.com/HdFyFqS.jpg",
  ord: 1
)

track7 = Track.create(
  title: 'Fire',
  song_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/BTS+-+Fire.mp3",
  image_url: "https://i.imgur.com/HdFyFqS.jpg",
  ord: 1
)

track8 = Track.create(
  title: 'Go Go',
  song_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/BTS+-+Go+Go.mp3",
  image_url: "https://i.imgur.com/HdFyFqS.jpg",
  ord: 1
)


Dislike.create(
  station_id: station1,
  track_id: track5
)

Dislike.create(
  station_id: station1,
  track_id: track6
)

Dislike.create(
  station_id: station1,
  track_id: track7
)

Dislike.create(
  station_id: station1,
  track_id: track8
)

Like.create(
  station_id: station2.id,
  track_id: track5.id
)

Like.create(
  station_id: station2.id,
  track_id: track6.id
)

Like.create(
  station_id: station2.id,
  track_id: track7.id
)

Like.create(
  station_id: station2.id,
  track_id: track8.id
)

station3 = Station.create(
  station_name: "GFriend",
  description: "GFriend is a six-member South Korean girl group formed by Source Music in 2015. The group consists of Sowon, Yerin, Eunha, Yuju, SinB and Umji. They made their debut with the extended play, Season of Glass on January 16, 2015.",
  # image_url: "https://i.imgur.com/VP1luUk.jpg",
  user_id: user.id
)

station3.image = URI.parse("https://i.imgur.com/VP1luUk.jpg")
station3.save!

track9 = Track.create(
  title: 'Fingertip',
  song_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/GFriend+-+Fingertip.mp3",
  image_url: "https://i.imgur.com/VP1luUk.jpg",
  ord: 1
)

track10 = Track.create(
  title: 'Me Gustas Tu',
  song_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/GFriend+-+Me+Gustas+Tu.mp3",
  image_url: "https://i.imgur.com/VP1luUk.jpg",
  ord: 1
)

track11 = Track.create(
  title: 'Navillera',
  song_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/GFriend+-+Navillera.mp3",
  image_url: "https://i.imgur.com/VP1luUk.jpg",
  ord: 1
)

track12 = Track.create(
  title: 'Rough',
  song_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/GFriend+-+Rough.mp3",
  image_url: "https://i.imgur.com/VP1luUk.jpg",
  ord: 1
)

Like.create(
  station_id: station3.id,
  track_id: track9.id
)

Like.create(
  station_id: station3.id,
  track_id: track10.id
)

Like.create(
  station_id: station3.id,
  track_id: track11.id
)

Like.create(
  station_id: station3.id,
  track_id: track12.id
)

station4 = Station.create(
  station_name: "Exo",
  description: "Exo is a South Korean-Chinese boy group based in Seoul. Formed by S.M. Entertainment in 2011, the group debuted in 2012 with twelve members separated into two subgroups, Exo-K (Suho, Baekhyun, Chanyeol, D.O., Kai, and Sehun) and Exo-M (Xiumin, Lay, Chen and former members Kris, Luhan and Tao, performing music in Korean and Mandarin respectively. Exo's first album XOXO (2013), which contained the breakthrough hit 'Growl', was a critical and commercial success. They have been named 'the biggest boyband in the world' by media outlets.",
  # image_url: "https://i.imgur.com/0f80Ah1.jpg",
  user_id: user.id
)

station4.image = URI.parse("https://i.imgur.com/0f80Ah1.jpg")
station4.save!

track13 = Track.create(
  title: 'Monster',
  song_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/Exo+-+Monster.mp3",
  image_url: "https://i.imgur.com/0f80Ah1.jpg",
  ord: 1
)

track14 = Track.create(
  title: 'Power',
  song_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/Exo+-+Power.mp3",
  image_url: "https://i.imgur.com/0f80Ah1.jpg",
  ord: 1
)

Like.create(
  station_id: station4.id,
  track_id: track13.id
)

Like.create(
  station_id: station4.id,
  track_id: track14.id
)

station5 = Station.create(
  station_name: "Black Pink",
  description: "Black Pink stylized as BLACKPINK or BLΛƆKPIИK, is a South Korean girl group formed by YG Entertainment. Consisting of members Jisoo, Jennie, Rosé, and Lisa, the group officially debuted on August 8, 2016, with their single Square One, which spawned their first number-one hit, 'Whistle'.",
  # image_url: "https://i.imgur.com/LxYsrUs.jpg",
  user_id: user.id
)

station5.image = URI.parse("https://i.imgur.com/LxYsrUs.jpg")
station5.save!

track15 = Track.create(
  title: "As If It's Your Last",
  song_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/Black+Pink+-+As+If+It's+Your+Last.mp3",
  image_url: "https://i.imgur.com/LxYsrUs.jpg",
  ord: 1
)

track16 = Track.create(
  title: "Boombayah",
  song_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/Black+Pink+-+Boombayah.mp3",
  image_url: "https://i.imgur.com/LxYsrUs.jpg",
  ord: 1
)

track17 = Track.create(
  title: "Playing With Fire",
  song_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/Black+Pink+-+Playing+With+Fire.mp3",
  image_url: "https://i.imgur.com/LxYsrUs.jpg",
  ord: 1
)

Like.create(
  station_id: station5.id,
  track_id: track15.id
)

Like.create(
  station_id: station5.id,
  track_id: track16.id
)

Like.create(
  station_id: station5.id,
  track_id: track17.id
)

station6 = Station.create(
  station_name: "Big Bang",
  description: "Big Bang is a South Korean boy band formed by YG Entertainment. With members G-Dragon, T.O.P, Taeyang, Daesung, and Seungri, they are often cited as one of the most influential acts to shape the K-pop industry by helping spread the Korean Wave internationally and dubbed as the 'Kings of K-pop' by the media. Their experimental and diverse use of music genres, personal involvement in producing their own records,[9] and stage performances have been admired by music critics and served as influence to numerous K-pop and international artists.",
  # image_url: "https://i.imgur.com/0zlqy2f.jpg",
  user_id: user.id
)

station6.image = URI.parse("https://i.imgur.com/0zlqy2f.jpg")
station6.save!

track18 = Track.create(
  title: "Bang Bang Bang",
  song_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/Big+Bang+-+Bang+Bang+Bang.mp3",
  image_url: "https://i.imgur.com/0zlqy2f.jpg",
  ord: 1
)

track19 = Track.create(
  title: "Fantastic Baby",
  song_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/Big+Bang+-+Fantastic+Baby.mp3",
  image_url: "https://i.imgur.com/0zlqy2f.jpg",
  ord: 1
)

Like.create(
  station_id: station6.id,
  track_id: track18.id
)

Like.create(
  station_id: station6.id,
  track_id: track19.id
)

station7 = Station.create(
  station_name: "Red Velvet",
  description: "Red Velvet is a South Korean girl group formed by S.M. Entertainment. The group debuted on August 1, 2014, with their digital single 'Happiness' and with four members: Irene, Seulgi, Wendy and Joy. In March 2015, Red Velvet added a fifth member, Yeri, to the group.",
  # image_url: "https://i.imgur.com/O1Ld7ze.jpg",
  user_id: user.id
)

station7.image = URI.parse("https://i.imgur.com/O1Ld7ze.jpg")
station7.save!

track20 = Track.create(
  title: "Peek-A-Boo",
  song_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/Red+Velvet+-+Peek-A-Boo.mp3",
  image_url: "https://i.imgur.com/O1Ld7ze.jpg",
  ord: 1
)

track21 = Track.create(
  title: "Red Flavor",
  song_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/Red+Velvet+-+Red+Flavor.mp3",
  image_url: "https://i.imgur.com/O1Ld7ze.jpg",
  ord: 1
)

track22 = Track.create(
  title: "Russian Roulette",
  song_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/Red+Velvet+-+Russian+Roulette.mp3",
  image_url: "https://i.imgur.com/O1Ld7ze.jpg",
  ord: 1
)

Like.create(
  station_id: station7.id,
  track_id: track20.id
)

Like.create(
  station_id: station7.id,
  track_id: track21.id
)

Like.create(
  station_id: station7.id,
  track_id: track22.id
)

station8 = Station.create(
  station_name: "Mamamoo",
  description: "Mamamoo, sometimes stylized as MAMAMOO, is a South Korean girl group formed by Rainbow Bridge World (formerly WA Entertainment) in 2014. The group officially debuted on June 19, 2014 with the song 'Mr. Ambiguous'. Their debut was considered by some critics as one of the best K-pop debuts of 2014. They are recognized for their retro, jazz, and R&B concepts and strong vocal performances.",
  # image_url: "https://i.imgur.com/FLbvqe7.jpg",
  user_id: user.id
)

station8.image = URI.parse("https://i.imgur.com/FLbvqe7.jpg")
station8.save!

track23 = Track.create(
  title: "Décalcomanie",
  song_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/Mamamoo+-+D%C3%A9calcomanie.mp3",
  image_url: "https://i.imgur.com/FLbvqe7.jpg",
  ord: 1
)

track24 = Track.create(
  title: "Yes I am",
  song_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/Mamamoo+-+Yes+I+Am.mp3",
  image_url: "https://i.imgur.com/FLbvqe7.jpg",
  ord: 1
)

track25 = Track.create(
  title: "You're the best",
  song_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/Mamamoo+-+You're+the+best.mp3",
  image_url: "https://i.imgur.com/FLbvqe7.jpg",
  ord: 1
)

Like.create(
  station_id: station8.id,
  track_id: track23.id
)

Like.create(
  station_id: station8.id,
  track_id: track24.id
)

Like.create(
  station_id: station8.id,
  track_id: track25.id
)

station9 = Station.create(
  station_name: "Got7",
  description: "Got7 is a South Korean boy group formed by JYP Entertainment. The group is composed of seven members: JB, Mark, Jackson, Jinyoung, Youngjae, BamBam, and Yugyeom. Got7 debuted in January 2014 with the release of their first EP Got It?, which peaked at number two on the Gaon Album Chart and number one on Billboard's World Albums Chart. The group gained attention for their stage performances, which include elements of martial arts tricking.",
  # image_url: "https://i.imgur.com/ozRBsJ8.jpg",
  user_id: user.id
)

station9.image = URI.parse("https://i.imgur.com/ozRBsJ8.jpg")
station9.save!

track26 = Track.create(
  title: "Hard Carry",
  song_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/Got7+-+Hard+Carry.mp3",
  image_url: "https://i.imgur.com/ozRBsJ8.jpg",
  ord: 1
)

track27 = Track.create(
  title: "If You Do",
  song_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/Got7+-+If+You+Do.mp3",
  image_url: "https://i.imgur.com/ozRBsJ8.jpg",
  ord: 1
)

Like.create(
  station_id: station9.id,
  track_id: track26.id
)

Like.create(
  station_id: station9.id,
  track_id: track27.id
)

station10 = Station.create(
  station_name: "Apink",
  description: "Apink is a South Korean girl group formed by Plan A Entertainment (formerly A Cube Entertainment) in 2011. The group consists of Park Cho-rong, Yoon Bo-mi, Jung Eun-ji, Son Na-eun, Kim Nam-joo and Oh Ha-young.",
  # image_url: "https://i.imgur.com/bLmnr79.jpg",
  user_id: user.id
)

station10.image = URI.parse("https://i.imgur.com/bLmnr79.jpg")
station10.save!

track28 = Track.create(
  title: "LUV",
  song_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/Apink+-+LUV.mp3",
  image_url: "https://i.imgur.com/bLmnr79.jpg",
  ord: 1
)

track29 = Track.create(
  title: "Mr Chu",
  song_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/Apink+-+Mr+Chu.mp3",
  image_url: "https://i.imgur.com/bLmnr79.jpg",
  ord: 1
)

track30 = Track.create(
  title: "No No No",
  song_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/Apink+-+No+No+No.mp3",
  image_url: "https://i.imgur.com/bLmnr79.jpg",
  ord: 1
)

track31 = Track.create(
  title: "Remember",
  song_url: "https://s3-us-west-1.amazonaws.com/hallyu-dev/songs/Apink+-+Remember.mp3",
  image_url: "https://i.imgur.com/bLmnr79.jpg",
  ord: 1
)

Like.create(
  station_id: station10.id,
  track_id: track28.id
)

Like.create(
  station_id: station10.id,
  track_id: track29.id
)

Like.create(
  station_id: station10.id,
  track_id: track30.id
)

Like.create(
  station_id: station10.id,
  track_id: track31.id
)
