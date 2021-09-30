// @desc  get all books
// @route GET /api/v1/books
// @access  private
exports.getBooks = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show all books`, hello: req.hello });
};

// @desc  get single book
// @route GET /api/v1/books/:id
exports.getBook = (req, res, next) => {
  res.status(200).json({ success: true, msg: `show book ${req.params.id}` });
};

// @desc create new book
// @route  POST /api/v1/books
// @access private
exports.createBook = (req, res, next) => {
  res.status(200).json({ success: true, msg: `create new book` });
};

// @desc  update book
// @route  PUT /api/v1/books/:id
// @access private
exports.updateBook = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Update book ${req.params.id}` });
};

// @desc  delete book
// @route DELETE /api/v1/books/:id
// @access  private
exports.deleteBook = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Delete book ${req.params.id}` });
};
