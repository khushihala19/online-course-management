exports.validator((req, res, next) => {
    if (req.method === 'POST' && req.url === '/courses/add') {
      if (!req.body.name || !req.body.category || !req.body.instructor || !req.body.duration) {
        res.status(400).send('All fields are required');
        return;
      }
    }
    next();
  });