const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

  it('should return fizz-buzz for numbers divisible by 15', function() {
+    [30, 45, 60].forEach(function(input) {
+      expect(fizzBuzzer(input)).to.equal('fizz-buzz');
+    });
+  });
+
+  it('should return fizz for numbers divisible by 3', function() {
+    [3, 6, 9].forEach(function(input) {
+      expect(fizzBuzzer(input)).to.equal('fizz');
+    });
+  });
+
+  it('should return buzz for numbers divisible by 5', function() {
+    [5, 10, 20].forEach(function(input) {
+      expect(fizzBuzzer(input)).to.equal('buzz');
+    });
+  });
+
+  it('should return number if not divisible by 3 or 15 or 5', function() {
+    [1, 2, 4, 7].forEach(function(input) {
+      expect(fizzBuzzer(input)).to.equal(input);
+    });
+  });
+
+  it('should produce error if input isn\'t number', function() {
+    const badInputs = [true, false, 'sentence', function() {}, [1, 2, 3]];
+    badInputs.forEach(function(input) {
+      expect(function() {
+          fizzBuzzer(input);
+      }).to.throw(Error);
+    });
+  });
});