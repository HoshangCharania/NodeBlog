var Users= require('../models/users');

exports.view =async function(req,res){
    console.log("user");
    user=req.params.username;
    // find all athletes that play tennis
    Users.findOne({ 'username': user}, function(err, user) {
        if (err) throw err;
      
        // show the one user
        console.log(user);
        res.render('Users/view',{
            username: user
        })
      });
   
}

exports.createUser = async function(req,res){
    username=req.body.username;
    password=req.body.password;
    access= req.body.access;
    if(username=="" || password=="" || access=="" ){
        res.render('signup',{
            message:"Please enter all required parameters"
        });
    }
    Users.create({username: username, password: password,access: access}, function(err,result){
        if(err==null){
            err="Successfully created user: "+username;
            //mongoose.connection.close();
        }
        res.render('signup',{
            message:err
        });
    });
}

exports.edit= async function(req,res){
    console.log("user");
    user=req.params.username;
    // find all athletes that play tennis
    Users.findOne({ 'username': user}, function(err, user) {
        if (err) throw err;
      
        // show the one user
        console.log(user);
        res.render('Users/edit',{
            username: user
        })
      });
   
}

exports.updateUser =async function(req,res){
    console.log("user");
    username=req.session.user.username;
    password=req.body.password;
    // find all athletes that play tennis
    Users.update(
        { username: username },
        {
          $set: {
            password: password
            // Mongoose will add `updatedAt`
          }
        }
     , function(err, user) {
        if (err) throw err;
        // show the one user
        console.log(username);
        res.redirect('/users/view/'+username);
     });
   
}
exports.signup = async function(req,res){
    res.render('signup');
}
