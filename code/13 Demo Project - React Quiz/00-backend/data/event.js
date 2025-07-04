const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readEventsData, writeEventsData } = require('./util');

async function getAll() {
  const storedData = await readEventsData();
  if (!storedData.events) {
    throw new NotFoundError('Could not find any events.');
  }
  return storedData.events;
}

async function get(id) {
  const storedData = await readEventsData();
  if (!storedData.events || storedData.events.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const event = storedData.events.find((ev) => ev.id === id);
  if (!event) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return event;
}

async function add(data) {
  const storedData = await readEventsData();
  storedData.events.unshift({ ...data, id: generateId() });
  await writeEventsData(storedData);
}

async function replace(id, data) {
  const storedData = await readEventsData();
  if (!storedData.events || storedData.events.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.events.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.events[index] = { ...data, id };

  await writeEventsData(storedData);
}

async function remove(id) {
  const storedData = await readEventsData();
  const updatedData = storedData.events.filter((ev) => ev.id !== id);
  await writeEventsData({ ...storedData, events: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
