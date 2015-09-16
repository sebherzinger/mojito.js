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
    })
})
