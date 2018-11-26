var Blogs= require('../models/blogs');

exports.index = async function(req,res){
    Blogs.find({},function(err, output) {
        if (err) throw err;
        console.log(output);
        res.render('Blogs/index',{
            records: output
        })
      });
}

exports.view =async function(req,res){
   
    user_id=req.params.user_id;
    Blogs.findOne({ 'user_id': user_id}, function(err, output) {
        if (err) throw err;
        console.log(output);
        res.render('Blogs/view',{
            output: output
        })
      });
   
}

exports.add = async function(req,res){
    username=req.session.user.username;
    res.render('Blogs/add',{
        username: username
    });
}

exports.createBlog = async function(req,res){
    user_id= req.session.user.username;
    title= req.body.title;
    text= req.body.text;
    location= req.body.location;
    date= req.body.date;
    date_time= new Date(date);
    signature= req.body.signature;
    Blogs.create({user_id: user_id,title: title, text: text, location:location,date_time,signature: signature}, function(err,result){
        if(err==null){
            err="Successfully created Blog Post: "+title;
            //mongoose.connection.close();
        }
        res.render('Blogs/add',{
            message: err
        });
    });
}


/*
exports.updateBlog =async function(req,res){
    console.log("blog");
    username=req.session.user.username;
    // find all athletes that play tennis
    Blogs.update(
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
*/
