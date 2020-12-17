const reviewService = require('../services/review.service.server');

module.exports = (app) => {
  app.get('/api/reviews', (req, res) => {
    reviewService.findAllReviews()
      .then(reviews => res.send(reviews))
  });
  app.get('/api/reviews/:rid', (req, res) => {
    reviewService.findReviewById(req.params['rid'])
      .then(review => res.json(review))
  });
  app.get('/api/reviews/users/:uid', (req, res) => {
    reviewService.findReviewByUser(req.params['uid'])
      .then(reviews => res.send(reviews))
  });
  app.get('/api/profile/:username', (req, res) => {
    reviewService.findReviewByUserName(req.params['username'])
    .then(reviews => res.send(reviews))
  });
  app.get('/api/reviews/restaurants/:rid', (req, res) => {
    reviewService.findReviewByRestaurant(req.params['rid'])
      .then(reviews => res.send(reviews))
  });
  app.post('/api/reviews/users/:uid/restaurants/:rid', (req, res) => {
    reviewService.createReview(req.params['uid'], req.params['rid'], req.body)
      .then(review => res.json(review))
  });
  app.post('/api/reviews/restaurants/:rid/users/:uid', (req, res) => {
    reviewService.createReview(req.params['uid'], req.params['rid'], req.body)
      .then(review => res.json(review))
  });
  app.post('/api/reviews', (req, res) => {
    reviewService.createReviewSimpleURL(req.body)
    .then(review => res.json(review))
  });
  app.delete('/api/reviews/:rid', (req, res) => {
    reviewService.deleteReview(req.params['rid'])
      .then(review => res.send("Successfully deleted."))
  })
}
