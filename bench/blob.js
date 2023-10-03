const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();
const { eventToMdTable, H2, createTableHeader } = require('../markdown');
const { Blob } = require('buffer');

const tableHeader = createTableHeader(['name', 'ops/sec', 'samples']);

const source128 = Buffer.allocUnsafe(128);
const source1024 = Buffer.allocUnsafe(1024);
const blob128 = new Blob(source128);
const blob1024 = new Blob(source1024);

const options128 = { defer: true };
const options1024 = { defer: true };

suite
  .add('new Blob (128)', function () {
    const result = new Blob(source128);
  })
  .add('new Blob (1024)', function () {
    const result = new Blob(source1024);
  })
  .add(
    'text (128)',
    function (deferred) {
      blob128.text().then(deferred.resolve.bind(deferred));
    },
    options128
  )
  .add(
    'text (1024)',
    function (deferred) {
      blob1024.text().then(deferred.resolve.bind(deferred));
    },
    options1024
  )
  .add(
    'arrayBuffer (128)',
    function (deferred) {
      blob128.arrayBuffer().then(deferred.resolve.bind(deferred));
    },
    options128
  )
  .add(
    'arrayBuffer (1024)',
    function (deferred) {
      blob1024.arrayBuffer().then(deferred.resolve.bind(deferred));
    },
    options1024
  )
  .add('slice (0, 64)', function () {
    blob128.slice(0, 64);
  })
  .add('slice (0, 512)', function (deferred) {
    blob1024.slice(0, 512);
  })
  .on('cycle', function (event) {
    console.log(eventToMdTable(event));
  })
  .on('start', function () {
    console.log(H2('Blob'));
    console.log(tableHeader);
  })
  .run({ async: false });