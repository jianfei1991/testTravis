'use strict';

var mocha = require('mocha');
var chai = require('chai');
var colors = require('./index.js');

var expect = chai.expect;

describe('colors', function() {

    it('should export an object', function() {
        expect(colors).to.be.an('object');
    });

    it('should return the right decimal value', function() {
        expect(colors.red).to.eql([255, 0, 0]);
        expect(colors.darkblue).to.eql([0, 0, 139]);
    });

    it('should return undefined if the color name not exists', function() {
        expect(colors.redss).to.be.undefined;
    });
});