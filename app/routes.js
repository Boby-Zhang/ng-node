var User = require('./models/user');
var Car = require('./models/car');
var path = require('path');

function getUsers(res){
	User.find(function(err,users){
		if(err){res.send(err)}
			res.json(users);
	}

	)
}

function getCars(res){
	Car.find(function(err,cars){
		if(err){res.send(err)}
			res.json(cars);
	}

	)
}

module.exports = function(app){
	//users
	app.get('/api/users',function(req,res){
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

	app.delete('/api/users/:user_id',function(req,res){
		User.remove({
			_id:req.params.user_id
		},function(err,user){
			if(err){res.send(err);}
			getUsers(res); 
		})
	});

	//car
	app.get('/api/cars',function(req,res){
		getCars(res);
	});

	app.post('/api/cars',function(req,res){
		Car.create({
			name:req.body.name,
			price:req.body.price,
			color:req.body.color
		},function(err,car){
			if(err){res.send(err);}
			console.log('api/car',car);
			getCars(res);
		});
	});

	app.delete('/api/cars/:car_id',function(req,res){
		Car.remove({
			_id:req.params.car_id
		},function(err,car){
			if(err){res.send(err);}
			getCars(res); 
		})
	});

	app.get('*',function(req,res){
		//res.sendFile('./public/index.html');
		res.sendFile(path.join(__dirname, '../public', 'index.html'));
	})
} 
