'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const choose = options => function* (n) {
  let i = 0;
  while (i++ < n) {
    yield options[Math.floor(Math.random() * options.length)];
  }
};

const options = {
  locations: ['Memphis', 'Phoenix', 'Columbus']
};

const locations = exports.locations = choose(options.locations);