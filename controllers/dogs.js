var Dog = require('../models/dogs'); 
 
// List of all Dogs 
exports.dog_list =async function(req, res) { 
    try{ 
        theDogs = await Dog.find(); 
        res.send(theDogs); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
    //res.send('NOT IMPLEMENTED: Dog list'); 
}; 

// VIEWS 
// Handle a show all view 
exports.dog_view_all_Page = async function(req, res) { 
    try{ 
        theDogs = await Dog.find(); 
        res.render('dogs', { title: 'Dog Search Results', results: theDogs }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 


 
// for a specific Dog. 
exports.dog_detail =async  function(req, res) {
    console.log("detail"+req.params.id) 
    try{
        result=await Dog.findById(req.params.id)
        res.send(result)
    }
    catch(error){
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`)
    }
    //res.send('NOT IMPLEMENTED: Dog detail: ' + req.params.id); 
}; 
 
// Handle Dog create on POST. 
exports.dog_create_post =async function(req, res) { 
    console.log(req.body)
    let document= new Dog();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"dogType":"Husky", "dogName":"Coco", "price":25000} 
    document.dogType = req.body.dogType; 
    document.dogName = req.body.dogName; 
    document.price = req.body.price; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
    //res.send('NOT IMPLEMENTED: Dog create POST'); 
}; 
 
// Handle Dog delete form on DELETE. 
exports.dog_delete =async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Dog.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
    //res.send('NOT IMPLEMENTED: Dog delete DELETE ' + req.params.id); 
}; 
 
// Handle Dog update form on PUT. 
exports.dog_update_put =async function(req, res) { 
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Dog.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.dogType)  
               toUpdate.dogType = req.body.dogType; 
        if(req.body.dogName) toUpdate.dogName = req.body.dogName; 
        if(req.body.price) toUpdate.price = req.body.price; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    }
    //res.send('NOT IMPLEMENTED: Dog update PUT' + req.params.id); 
}; 

// Handle a show one view with id specified by query 
exports.dog_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Dog.findById( req.query.id) 
        res.render('dogdetail',  
{ title: 'Dog Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a dog. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.dog_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('dogcreate', { title: 'Dog Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 