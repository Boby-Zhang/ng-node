var User = require('./models/user');

function getUsers(res){
	User.find(function(err,users){
		if(err){res.send(err)}
			res.json(users);
	}

	)
}

module.exports = function(app){

	app.get('api/users',function(req,res){
		getUsers(res);
	});

	app.post('/api/users',function(req,res){
		User.create({
			name:req.body.name,
			mobile:req.body.mobile
		},function(err,user){
			if(err){res.send(err);}
			console.log('api/users',user);
			getUsers(res);
		});
	});

	app.delete('api/users/:user_id',function(req,res){
		User.remove({
			_id:req.params.user_id
		},function(err,user){
			if(err){res.send(err);}
			getUsers(res); 
		})
	});

} 
