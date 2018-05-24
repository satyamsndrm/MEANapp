const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports =function(){
	let opts ={};
	opts.jwtFromRequest = ExtractJwt.fromAuthHeder();
//	opts.secretOrKey = config.secret;
	passport.use(new JwtStrategy(opts , (jwt_payload , done) =>{
		Users.getUserById(jwt_payload._id , (err , user) =>{
			if(err){
				return done(err , false);
			}
			
			if(user){
				return done(null , user);
			}else{
				return done(null , false);
			}

		});

	}));


}