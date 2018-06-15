let arc = require('@architect/functions')

function route(req, res) {
  var isLoggedIn = req.body.phone === '6504342004'
  res({
    session: {isLoggedIn},
    location: req._url(`/`)
  })
}

exports.handler = arc.html.post(route)