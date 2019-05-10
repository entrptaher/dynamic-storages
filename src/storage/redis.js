const debug = require("debug")("redis-storage");
const asyncRedis = require("async-redis");

let client;

export async function init(...args) {
  debug("Initializing redis storage");
  client = asyncRedis.createClient(...args);
  return client;
}

export async function clear() {
  debug("Clearing All");
  await client.flushall();
  return null;
}

export async function getItem(key) {
  debug("Getting Item with key: ", key);
  const data = await client.get(key);
  console.log(data)
  return data;
}

export async function removeItem(key) {
  debug("Removing Item with key", key);
  const data = await client.remove(key);
  return null;
}

export async function setItem(key, value) {
  debug("Setting Item with key: ", key, " and value: ", value);
  await client.set(key, value);
  return null;
}
