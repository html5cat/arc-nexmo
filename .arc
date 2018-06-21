@app
arc-nexmo

@html
get /
get /protected
get /notes/:noteID

post /login
post /logout
post /notes
post /notes/:noteID
post /notes/:noteID/del

@tables
users
  userID *String
  name String
  email String
  phone String

notes
  userID *String
  noteID **String
  text String