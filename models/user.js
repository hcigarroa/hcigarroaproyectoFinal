User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  