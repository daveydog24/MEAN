// Create a Schema for Users
var UserSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number}
}, {timestamps: true})

// Store the Schema under the name 'User'
mongoose.model('User', UserSchema);
// Retrieve the Schema called 'User' and store it to the variable User
var User = mongoose.model('User');

   

// finding all users
// Using the User Schema...
// ...retrieve all records matching {}
User.find({}, function(err, users) {
    // Retrieve an array of users
    // This code will run when the DB is done attempting to retrieve all matching records to {}
   })
   

//    Finding all users based on a requirement
// ...retrieve all records matching {name:'Jessica'}
User.find({name:'Jessica'}, function(err, users) {
    /* Retrieve an array of users matching the name. Even if 1 record is found, 
    the result will be an array the size of 1, with 1 object inside. 
    (Notice, if we are expecting to retrieve one record, we may want to use 
    findOne and retrieve the object as oppose to an array the size of one.
    This code will run when the DB is done attempting to retrieve all matching 
    records to {name:'Jessica'} */
});

// Finding one user
// ...retrieve 1 record (the first record found) matching {} 
User.findOne({}, function(err, user) {
    // Retrieve 1 object
    // This code will run when the DB is done attempting to retrieve 1 record.
   })


//    Let's create a sample user
// ...create a new instance of the User Schema and save it to the DB.
var userInstance = new User()
userInstance.name = 'Andriana'
userInstance.age = 29
userInstance.save(function(err){
 // This code will run when Mongo has attempted to save the record.
 // If (err) exists, the record was not saved, and (err) contains validation errors.
 // If (err) does not exist (undefined), Mongo saved the record successfully.
})


// Delete all users
// ...delete all records of the User Model
User.remove({}, function(err){
    // This code will run when the DB has attempted to remove all matching records to {}
   })


// Delete one user
   // ...delete 1 record by a certain key/value.
User.remove({_id: 'insert record unique id here'}, function(err){
    // This code will run when the DB has attempted to remove one matching record to {_id: 'insert record unique id here'}
   })


//    Update any records
// ...update any records that match the query
User.update({name:'Andriana'}, {$push: {pets: {name: 'Skippy', type: 'cactus' }}}, function(err){
    // This code will run when the DB has attempted to update the matching record.
   })
   // another way to update a record
   User.find({name: 'Andriana'}, function(err, user){
    user.name = 'Andri';
    user.pets.push({name: 'Skippy', type: 'cactus'});
    user.save(function(err){
        // if save was successful awesome!
    })
   })
   
   

// validations  <--------------------------------------------validations----------------------
// require the mongoose module
var mongoose = require('mongoose');
// to make a model, you can first define a schema, which is just the BLUEPRINT for a model
var UserSchema = new mongoose.Schema({
    first_name:  { type: String, required: true, minlength: 6},
    last_name: { type: String, required: true, maxlength: 20 },
    age: { type: Number, min: 1, max: 150 },
    email: { type: String, required: true }
}, {timestamps: true });


// flash errors  <-------------------------------------------- flash errors----------------------
// terminal command 
// npm install --save express-flash 

// server.js
// ..... set up other middleware, such as session
const flash = require('express-flash');
app.use(flash());
app.post('/users', function (req, res){
    var user = new User(req.body);
    user.save(function(err){
        if(err){
            // if there is an error upon saving, use console.log to see what is in the err object 
            console.log("We have an error!", err);
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            }
            // redirect the user to an appropriate route
            res.redirect('/');
        }
        else {
            res.redirect('/users');
        }
    });
});

// index.ejs
//      <!-- tip to easily see objects printed in full instead of [object Object] -->
//                  <%- JSON.stringify(messages) %> 
//       <!-- based on the structure of your messages, determine how to display them -->
//                  <% if(messages.registration) { %>
//                      <% for (var x of messages.registration) { %>
//                          <h3><%= x %></h3>
//                      <% } %>
//                  <% } %>

// Associations
// nested array = joins in SQL
const PostSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Posts must have a title"]},
    content: {type: String, required: [true, "Posts must have content"]},
  }, {timestamps: true})
  const BlogSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Blogs must have a title"], minlength: [3, "Titles must have at least 3 characters"]},
    posts: [PostSchema]
  }, {timestamps: true})
  const UserSchema = new mongoose.Schema({
    first_name: {type: String, required: [true, "A first name is required"]},
    last_name: {type: String, required: [true, "A last name is required"]},
    blogs: [BlogSchema]
  }, {timestamps: true})
  

/* Now, we may create a new blog and push it into the user's blogs array. 
The code snippet below assumes the id of a user was passed through the 
url parameters and the blog information was passed as post data (that code is 
not shown).  Similarly, we may create new posts and push them into a 
blog's posts array. */

const Blog = mongoose.Schema('Blog');
const User = mongoose.Schema('User');
Blog.create(req.body, function(err, data){
    if(err){
        // handle the error from creating a blog
     } else {
        User.findOneAndUpdate({_id: req.params.id}, {$push: {blogs: data}}, function(err, data){
            if(err){
                // handle the error from trying to update the user
            } else {
                // it worked! How shall we celebrate?
            }
        })
    }
})    

/* FUTURE DATA FROM ABOVE:
{  _id: ObjectId("5a753823645d421b8ec93b38"),
   first_name: "Beth",
   last_name: "Sanchez",
   created_at: ISODate("2018-02-03T04:18:56.841Z"),
   updated_at: ISODate("2018-02-03T04:18:56.841Z"),
   blogs: [ { _id : ObjectId("5a754273635d422b8ec93b3c"),
              title: "Programming challenges",
              created_at: ISODate("2018-03-03T04:16:56.841Z"),
              updated_at: ISODate("2018-02-03T04:18:56.841Z"),
              posts: [ { _id: ObjectId("5a753813645d421b8ec93b37"),
                         title: "My first day with JavaScript",
                         content: "Loving the es6 syntactic sugar!",
                         created_at: ISODate("2018-03-03T04:16:56.841Z"),
                         updated_at: ISODate("2018-02-03T04:18:56.841Z"),
                        },
                        { _id: ObjectId("5a753973645d421b8ec93b3a"),
                          title: "My second day with JavaScript",
                          content: "I changed my mind, es5 is still king.",
                          created_at: ISODate("2018-03-05T02:16:56.841Z"),
                          updated_at: ISODate("2018-03-05T02:18:56.841Z"),
                        } ]
             },
             { _id: ObjectId("5a853933625d499b8fc93s3a"),
               title: "Cats and kittens",
               created_at: ISODate("2018-03-18T04:09:32.511Z"),
               updated_at: ISODate("2018-03-19T04:09:32.511Z"),
               posts: [ { _id: ObjectId("5a754474645n428b4rc73b3b"),
                          title: "Everyone needs a cat",
                          content: "They're purrfect.",
                          created_at: ISODate("2018-04-03T04:16:56.841Z"),
                          updated_at: ISODate("2018-04-03T04:18:56.841Z"),
                         } ]
               } ]
} */

