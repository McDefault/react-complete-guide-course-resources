const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readQuizData, writeQuizData } = require('./util');

async function getAll() {
  const storedData = await readQuizData();
  if (!storedData.quizzes) {
    throw new NotFoundError('Could not find any quiz.');
  }
  return storedData.quizzes;
}

async function get(id) {
  const storedData = await readQuizData();
  if (!storedData.quizzes || storedData.quizzes.length === 0) {
    throw new NotFoundError('Could not find any quiz.');
  }

  const event = storedData.quizzes.find((ev) => ev.id === id);
  if (!event) {
    throw new NotFoundError('Could not find quiz for id ' + id);
  }

  return event;
}

async function add(data) {
  const storedData = await readQuizData();
  storedData.quizzes.unshift({ ...data, id: generateId() });
  await writeQuizData(storedData);
}

async function replace(id, data) {
  const storedData = await readQuizData();
  if (!storedData.quizzes || storedData.quizzes.length === 0) {
    throw new NotFoundError('Could not find any quiz.');
  }

  const index = storedData.quizzes.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find quiz for id ' + id);
  }

  storedData.quizzes[index] = { ...data, id };

  await writeQuizData(storedData);
}

async function remove(id) {
  const storedData = await readQuizData();
  const updatedData = storedData.quizzes.filter((ev) => ev.id !== id);
  await writeQuizData({ ...storedData, quizzes: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
