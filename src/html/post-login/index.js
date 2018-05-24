let arc = require('@architect/functions')

function route(req, res) {
  var isLoggedIn = req.body.phone === 'admin'
  res({
    session: {isLoggedIn},
    location: req._url(`/`)
  })
}

exports.handler = arc.html.post(route)