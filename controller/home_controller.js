const Task=require('../models/task');

module.exports.home= async (req,res)=>{

    // return res.render('home',{
    //     title:"To Do Home",
    //     taskS:task,
    // })
    const taskk= await Task.find({});
    if(taskk){
        return res.render('home',{
                title:"To Do Home",
                taskS:taskk,
                });
    }
    else{
        console.log('Eroor in rendering the contacts from Database');
        return;
    }
}

module.exports.post= async (req,res)=>{
    // console.log(req.body);
    // task.push(req.body);
    // return res.redirect('back');

    const taskk= await Task.create(req.body);

    if(taskk){
        // console.log('****************', taskk);
        return res.redirect('back');

    }else{
        console.log('error encountered in creating the entry in database');
            return;
    }
}

// const task=[
//     {
//         description:'Test',
//         category:'Test Category',
//         date:'1994-08-08'
//     }
// ];

module.exports.delete= async (req,res)=>{
    // console.log('inside delete');
    // console.log(req.query);
    let id=req.query.id;
    // console.log(typeof (id));
    
    if(typeof (id)=='string'){
        const ifDeleted=await Task.findByIdAndDelete(id);
        if(!ifDeleted){
        console.log('error in deleting the contact');
        } 
    }else{
    for(i of id){
        // console.log(i);
      let ifDeleted=  await Task.findByIdAndDelete(i);
      if(!ifDeleted){
        console.log('error in deleting the contact',i);
        } 
     }
    }
    return res.redirect('back');
}


