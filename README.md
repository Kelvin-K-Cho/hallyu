# Hallyu Production Readme

Hallyu, also known as the "Korean Wave", is a single-page music web application inspired by Pandora. It allows users to create stations based off their favorite k-pop artists and personalize their stations through likes/dislikes.

Application Link: [Hallyu](hallyu.herokuapp.com "Hallyu")

![HomePage](https://imgur.com/a/VH4oL)

# Features
+ User authentication using secure session tokens via encryption provided by BCrypt.
+ Media Bar that allows users to play/pause audio, skip tracks and adjust volume.
+ Users can create and manage their favorite stations.
+ Each station keeps track of the likes/dislikes of every track leading to more personalization of the user experience.
+ Image Uploading provided by Paperclip and hosted on Amazon Web Services.

# Challenges
+ The volume/duration bars are dynamically changing.  In order to

# Technology
  Hallyu was designed and built in two weeks using Ruby on Rails RESTful backend to handle the PostgreSQL database with a React/Redux frontend.

# Future Implementation
+ Search bar to add existing stations to user's stations.
+ Users can edit their profile.
