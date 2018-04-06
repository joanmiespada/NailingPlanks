

function solution(A,B,C)
{
    var iNails=0;
    var iPlanks=0;
    var nailed=0;
    var minimumNailed=Number.MAX_VALUE;
    var nailsWithPlanks= 0; 

    while( iNails < C.length)
    {
        if(iPlanks < A.length)//or B
        {
            if(A[iPlanks] <= C[iNails] && C[iNails] <= B[iPlanks] ) {
                nailsWithPlanks++; 
                nailed++;
                iPlanks++;
            } else {
                iNails++;
                if(nailed === A.length)
                    {
                        if(minimumNailed > nailed)
                            minimumNailed= nailed;  
                    }
                    /*else if (nailed ===0){
                        iPlanks=0;
                        nailed=0;
                    }*/
                
            }
        }else
           iNails++;
    }

    return minimumNailed === Number.MAX_VALUE ? -1: minimumNailed;

}

var aux = solution([1,4,5,8],[4,5,9,10],[4,6,7,10,2]);
//var aux = solution([10,20],[12,22],[3,11,2,21,2]);
console.log(aux);

module.exports=
{
    MinimumNumberNails: solution
}