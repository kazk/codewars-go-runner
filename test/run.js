"use strict";

const expect = require('chai').expect;
const run = require('../');

describe('run', function() {
  it('should handle basic code evaluation', function(done) {
    run({
      language: 'go',
      code: [
        'package main',
        'import "fmt"',
        'func main() {',
        '  fmt.Println("42")',
        '}',
      ].join('\n'),
    }, function(buffer) {
      expect(buffer.stdout).to.equal('42\n');
      done();
    });
  });
});
