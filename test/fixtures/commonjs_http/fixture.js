'use strict';

var assert = require('http-assert');

function add (a, b) {
    assert(!isNaN(a));
    assert(!isNaN(a), 404, 'not found');
    assert.equal(typeof b, 'number');
    assert.ok(!isNaN(b));
    return a + b;
}
