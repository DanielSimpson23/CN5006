const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://u2426673:QhJcWd0OspxnsYYs@cluster0.b7lks.mongodb.net/';

mongoose.connect(MONGO_URI);
const db = mongoose.connection;

db.on('error', (err) => {
    console.log("Error occurred during connection: " + err);
});

db.once('connected', () => {
    console.log(`Connected to ${MONGO_URI}`);
});

// Creating the schema
const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: Number,
    Gender: String,
    Salary: Number,
});

// Creating the model with the collection named 'personCollection'
const person_doc = mongoose.model('modelname', PersonSchema, 'personCollection');

// Creating a single document
const doc1 = new person_doc({
    name: 'Yosef',
    age: 44,
    Gender: "Male",
    Salary: 3456,
});

// Adding one document to the collection
doc1
    .save()
    .then((doc1) => {
        console.log("New Article Has been Added Into Your Database.", doc1);
    })
    .catch((err) => {
        console.error(err);
    });

    manypersons=[{  name:  'Simon',age:42,Gender:"Male",Salary:3456 } 
        ,{  name:  'Neesha',age:23,Gender:"Female",Salary:1000  } 
        ,{  name:  'Mary',age:27,Gender:"Female",Salary:5402    
        }, 
        {  name:  'Mike',age:40,Gender:"Male",Salary:4519   } 
        ] 
        person_doc.insertMany(manypersons).then(function(){  
        console.log("Data inserted")  // Success  
        }).catch(function(error){  
        console.log(error)      
        // Failure  
        }); 

        // Finding all the documents in the collection
        person_doc.find({}) // find all users
        .sort({ Salary: 1 }) // sort ascending by Salary
        .select('name Salary age') // select Name, Salary, and Age only
        .limit(10) // limit to 10 items
        .exec() // execute the query
        .then(docs => {
            console.log("Showing multiple documents");
            docs.forEach(function (Doc) {
                console.log(Doc.age, Doc.name);
            });
        })
        .catch(err => {
            console.error(err);
        });
        
        var givenage = 30;
        
        person_doc.find({ Gender: "Female", age: { $gte: givenage } }) // find all users matching the criteria
            .sort({ Salary: 1 }) // sort ascending by Salary
            .select('name Salary age') // select Name, Salary, and Age only
            .limit(10) // limit to 10 items
            .exec() // execute the query
            .then(docs => {
                console.log("Showing multiple documents");
                console.log("Showing age greater than", givenage);
                
                docs.forEach(function (Doc) {
                    console.log(Doc.age, Doc.name); // Log age and name of each document
                });
            })
            .catch(err => {
                console.error(err); // Log any errors
            });
         
            //  counting  all  the  documents 
        person_doc.countDocuments().exec() 
        .then(count=>{ 
         
        console.log("Total  documents  Count  :",  count) 
         
         
        })  .catch(err  =>  { 
        console.error(err) 
        }) 
        
        person_doc.deleteMany({  age:  {  $gte:  25  }  }) 
        .exec() 
        .then(docs=>{ 
        console.log('deleted  documents  are:',docs); 
        }).catch(function(error){ 
        console.log(error); 
        });
        
        