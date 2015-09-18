import * as Utils from '../lib/Utils';
import chai from 'chai';
const expect = chai.expect;

describe('Utils', function() {
    it('should exist', function () {
        expect(Utils).to.be.a('object');
    });
    describe('get', function() {
        let obj = {
            b: true,
            c: {
                d: {
                    e: 5
                }
            }
        };
        it('should exist', function () {
            expect(Utils.get).to.be.a('function');
        });
        it('should be null if param is not found', function () {
            expect(Utils.get(obj, 'a')).to.be.null;
        });
        it('should give back the value of the param if found', function () {
            expect(Utils.get(obj, 'b')).to.equal(true);
        });
        it('should be null if param is not found (chained)', function () {
            expect(Utils.get(obj, 'a.b')).to.be.null;
        });
        it('should give back the value of the param if found (chained)', function () {
            expect(Utils.get(obj, 'c.d.e')).to.equal(5);
        });
    });
    describe('set', function() {
        let obj = {
            b: true,
            c: {
                d: {
                    e: 5
                }
            }
        };
        it('should exist', function () {
            expect(Utils.set).to.be.a('function');
        });
        it('should create a new param and set the value if not found', function() {
            Utils.set(obj, 'a', 3);
            expect(Utils.get(obj, 'a')).to.equal(3);
        });
        it('should override the param and set the value if found', function() {
            Utils.set(obj, 'a', 5);
            expect(Utils.get(obj, 'a')).to.equal(5);
        });
        it('should create a new param and set the value if not found (chained)', function() {
            Utils.set(obj, 'c.e', 3);
            expect(Utils.get(obj, 'c.e')).to.equal(3);
        });
        it('should override the param and set the value if found (chained)', function() {
            Utils.set(obj, 'c.e', 5);
            expect(Utils.get(obj, 'c.e')).to.equal(5);
        });
        it('should create an objects for nested params if they dont exist', function() {
            Utils.set(obj, 'f.g', 5);
            expect(Utils.get(obj, 'f')).to.be.a('object');
            expect(Utils.get(obj, 'f.g')).to.equal(5);
        });
    });
    describe('generateRandomString', function() {
        it('should exist', function () {
            expect(Utils.generateRandomString).to.be.a('function');
        });
        it('should generate a string with 4 chars as default', function () {
            const random = Utils.generateRandomString();
            expect(random).to.be.a('string');
            expect(random).to.have.length(4);
        });
        it('should generate a random string with 8 chars', function () {
            const random = Utils.generateRandomString(8);
            expect(random).to.be.a('string');
            expect(random).to.have.length(8);
        });
    });
    describe('isArray', function() {
        it('should return true if param is an array', function () {
            expect(Utils.isArray([])).to.equal(true);
            expect(Utils.isArray(new Array())).to.equal(true);
        });
        it('should return false if param is not an array', function () {
            expect(Utils.isArray({})).to.equal(false);
            expect(Utils.isArray("string")).to.equal(false);
            expect(Utils.isArray(5)).to.equal(false);
            expect(Utils.isArray(false)).to.equal(false);
            expect(Utils.isArray(null)).to.equal(false);
            expect(Utils.isArray(NaN)).to.equal(false);
        });
        it('should return false if param is undefined', function () {
            expect(Utils.isArray(undefined)).to.equal(false);
        });
    });
    describe('isObject', function() {
        it('should return true if param is an object', function () {
            expect(Utils.isObject({})).to.equal(true);
            expect(Utils.isObject(Object.create({}))).to.equal(true);
        });
        it('should return false if param is not an object', function () {
            expect(Utils.isObject("string")).to.equal(false);
            expect(Utils.isObject(5)).to.equal(false);
            expect(Utils.isObject(false)).to.equal(false);
            expect(Utils.isObject(null)).to.equal(false);
            expect(Utils.isObject(NaN)).to.equal(false);
        });
        it('should return false if param is array', function () {
            expect(Utils.isObject([])).to.equal(false);
        });
        it('should return false if param is undefined', function () {
            expect(Utils.isObject(undefined)).to.equal(false);
        });
    });
    describe('isBoolean', function() {
        it('should return true if param is a boolean', function () {
            expect(Utils.isBoolean(true)).to.equal(true);
            expect(Utils.isBoolean(false)).to.equal(true);
            expect(Utils.isBoolean(!!'text')).to.equal(true);
        });
        it('should return false if param is not a boolean', function () {
            expect(Utils.isBoolean([])).to.equal(false);
            expect(Utils.isBoolean({})).to.equal(false);
            expect(Utils.isBoolean("string")).to.equal(false);
            expect(Utils.isBoolean(5)).to.equal(false);
            expect(Utils.isBoolean(null)).to.equal(false);
            expect(Utils.isBoolean(NaN)).to.equal(false);
        });
        it('should return false if param is undefined', function () {
            expect(Utils.isBoolean(undefined)).to.equal(false);
        });
    });
    describe('isNumber', function() {
        it('should return true if param is an int', function () {
            expect(Utils.isNumber(1)).to.equal(true);
            expect(Utils.isNumber(-3)).to.equal(true);
            expect(Utils.isNumber(9999)).to.equal(true);
        });
        it('should return true if param is an float', function () {
            expect(Utils.isNumber(1.2)).to.equal(true);
        });
        it('should return false if param is NaN', function () {
            expect(Utils.isNumber(NaN)).to.equal(false);
        });
        it('should return false if param is not a number', function () {
            expect(Utils.isNumber([])).to.equal(false);
            expect(Utils.isNumber({})).to.equal(false);
            expect(Utils.isNumber("string")).to.equal(false);
            expect(Utils.isNumber(true)).to.equal(false);
            expect(Utils.isNumber(null)).to.equal(false);
        });
        it('should return false if param is undefined', function () {
            expect(Utils.isNumber(undefined)).to.equal(false);
        });
    });
    describe('isString', function() {
        it('should return true if param is a string', function () {
            expect(Utils.isString('string')).to.equal(true);
        });
        it('should return false if param is not a string', function () {
            expect(Utils.isString([])).to.equal(false);
            expect(Utils.isString({})).to.equal(false);
            expect(Utils.isString(false)).to.equal(false);
            expect(Utils.isString(5)).to.equal(false);
            expect(Utils.isString(null)).to.equal(false);
            expect(Utils.isString(NaN)).to.equal(false);
        });
        it('should return false if param is undefined', function () {
            expect(Utils.isString(undefined)).to.equal(false);
        });
    });
    describe('isEmpty', function() {
        it('should be true if object has no keys', function () {
            expect(Utils.isEmpty({})).to.equal(true);
        });
        it('should be false if object has keys', function () {
            expect(Utils.isEmpty({a:true})).to.equal(false);
        });
        it('should be true if array has no length', function () {
            expect(Utils.isEmpty([])).to.equal(true);
        });
        it('should be false if array has items', function () {
            expect(Utils.isEmpty(["as"])).to.equal(false);
        });
        it('should be true if string has no chars', function () {
            expect(Utils.isEmpty("")).to.equal(false);
        });
        it('should be false if string has at least one char', function () {
            expect(Utils.isEmpty("a")).to.equal(true);
        });
    });
})
