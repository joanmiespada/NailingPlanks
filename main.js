
function addit(items, nail, plank)
{
    if(items[nail]===undefined)
        items[nail] = new Array([plank]);
    else
        items[nail].push(plank);
}


function solution(A,B,C)
{

    var totalPlanks= A.length;
    var totalNails = C.length;
    var nailsUsed = -1;
    var lastPlank=0;
    var nailsUsed = new Array(totalNails); 

    for(var j=0; j<totalNails; j++)
        {
            for(var i=0; i<totalPlanks; i++)
            {
                if( A[i] <= C[j] && C[j] <= B[i])
                    {
                        addit(nailsUsed,j,i); 
                    }
            }
        }

    
    if(nailsUsed.length >= totalPlanks )  return nailsUsed.length ;
    else return -1;

}

var aux = solution([1,4,5,8],[4,5,9,10],[4,6,7,10,2]);
//var aux = solution([10,20],[12,22],[3,11,2,21,2]);
console.log(aux);

module.exports=
{
    MinimumNumberNails: solution
}