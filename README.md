#### JavaScript Testing with Jasmine

##### Installation
1. npm i

##### Execute
1. npm start

#### Result
```javascript
$ node index.js
Started
...FF.

Failures:
1) Tests for my math functions For Null array expect to throw error
  Message:
    Expected function to throw Error: Parameter [numbers] should NOT be NULL., b
ut it threw Error: Parameter [numbers] should be NULL..
  Stack:
    Error: Expected function to throw Error: Parameter [numbers] should NOT be N
ULL., but it threw Error: Parameter [numbers] should be NULL..
        at Object.<anonymous> (<URL>\mathFunctionsSpec.js:30:12)

2) Tests for my math functions For decimal numbers to have at least 2 precision
correct
  Message:
    Expected 4.2079 to be close to 4.108, 2.
  Stack:
    Error: Expected 4.2079 to be close to 4.108, 2.
        at Object.<anonymous> (<URL>\mathFunctionsSpec.js:35:45)

6 specs, 2 failures
Finished in 0.02 seconds
Failed
```