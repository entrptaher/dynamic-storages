import Datastore from "nedb-promises";
let datastore;
const debug = require("debug")("nedb-storage");

export async function init(...args) {
  debug("Initializing Nedb storage");
  datastore = await Datastore.create(...args);
  await datastore.persistence.compactDatafile();
  return datastore;
}

export async function clear() {
  debug("Clearing All");
  await datastore.remove({});
  return null;
}

export async function getItem(key) {
  debug("Getting Item with key: ", key);
  const data = await datastore.findOne({ key });
  return data && data.value;
}

export async function removeItem(key) {
  debug("Removing Item with key", key);
  const data = await datastore.remove({ key });
  return null;
}

export async function setItem(key, value) {
  debug("Setting Item with key: ", key, " and value: ", value);
  const data = await datastore.update(
    { key },
    { $set: { value } },
    { upsert: true }
  );
  return null;
}
