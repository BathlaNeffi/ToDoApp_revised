// console.log('scripted ');



var arr=[];

function checkedOrNot(uid){
    const index=arr.findIndex((item)=> {
        // console.log('This is in find',item)
        return item == uid
    } );
    if(index==-1){
        // console.log(desc,'added in the array');
        arr.push(uid);
    }else{
        // console.log(desc,'removed in the array');
        arr.splice(index,1);
    }
    
    return;
}

function deletTask(){
    let string="?"
        for(i of arr){
            string+=`id=${i}&`
        }
    console.log(string);
    window.location.href=`./delete-task/${string}`;


}