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
exports.dog_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Dog detail: ' + req.params.id); 
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
exports.dog_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Dog delete DELETE ' + req.params.id); 
}; 
 
// Handle Dog update form on PUT. 
exports.dog_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Dog update PUT' + req.params.id); 
}; 