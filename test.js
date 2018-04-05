var assert = require('assert');
var main = require('./main.js');

describe('NailingPlanks',function(){
    describe('NailingPlanks',function(){
        it('first test1', function(){
            console.time('test');
            assert.equal( main.MinimumNumberNails([1,4,5,8],[4,5,9,10],[4,6,7,10,2]),4);
            assert.equal( main.MinimumNumberNails([1,4,5,8],[4,5,9,10],[4,6,7]),-1);
            assert.equal( main.MinimumNumberNails([1,4,5,8],[4,5,9,10],[4,6]),-1);
            console.timeEnd('test');
        });
        it('first test2', function(){
            console.time('test');
            assert.equal( main.MinimumNumberNails([1,2],[2,3],[1]),-1);
            assert.equal( main.MinimumNumberNails([1,2],[2,3],[3]),-1);
            assert.equal( main.MinimumNumberNails([1,4],[2,4],[3,3]),-1);
            assert.equal( main.MinimumNumberNails([10,20],[12,22],[3,11,2,21,2]),2);

            //assert.equal( main.MinimumNumberNails([4,7,10],[6,9,15],[1,1,11,5,8]),3);

            console.timeEnd('test');
        });
    });
});
