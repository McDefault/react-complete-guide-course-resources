const express = require('express');

const { getAll, get, add, replace, remove } = require('../data/quiz');
const { checkAuth } = require('../util/auth');
const {
  isValidText,
} = require('../util/validation');

const router = express.Router();

router.get('/', async (req, res, next) => {
  console.log(req.token);
  try {
    const quiz = await getAll();
    res.json({ quizzes: quiz });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const quiz = await get(req.params.id);
    res.json({ quiz: quiz });
  } catch (error) {
    next(error);
  }
});

router.use(checkAuth);

router.post('/', async (req, res, next) => {
  console.log(req.token);
  const data = req.body;

  let errors = {};

  if (!isValidText(data.title)) {
    errors.title = 'Invalid title.';
  }

  if (!isValidText(data.description)) {
    errors.description = 'Invalid description.';
  }


  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: 'Adding the event failed due to validation errors.',
      errors,
    });
  }

  try {
    await add(data);
    res.status(201).json({ message: 'Quiz saved.', event: data });
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  const data = req.body;

  let errors = {};

  if (!isValidText(data.title)) {
    errors.title = 'Invalid title.';
  }

  if (!isValidText(data.description)) {
    errors.description = 'Invalid description.';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: 'Updating the quiz failed due to validation errors.',
      errors,
    });
  }

  try {
    await replace(req.params.id, data);
    res.json({ message: 'Quiz updated.', event: data });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await remove(req.params.id);
    res.json({ message: 'Quiz deleted.' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
