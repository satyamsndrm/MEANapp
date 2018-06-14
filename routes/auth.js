

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
