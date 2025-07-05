const fs = require('node:fs/promises');

async function readEventsData() {
  const data = await fs.readFile('events.json', 'utf8');
  return JSON.parse(data);
}

async function writeEventsData(data) {
  await fs.writeFile('events.json', JSON.stringify(data));
}

async function readQuizData() {
  const data = await fs.readFile('quizzes.json', 'utf8');
  return JSON.parse(data);
}

async function writeQuizData(data) {
  await fs.writeFile('quizzes.json', JSON.stringify(data));
}

exports.readEventsData = readEventsData;
exports.writeEventsData = writeEventsData;
exports.readQuizData = readQuizData;
exports.writeQuizData = writeQuizData;