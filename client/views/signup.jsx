/** @jsx React.DOM */

var Navigation = ReactRouter.Navigation;

var SignUp = React.createClass({
  
  mixins: [Navigation],

  getInitialState: function() {
    return {email: null, password: null, signup: true};
  },
  
  handleEmailChange: function(e) {
     this.setState({email: e.target.value});
  },

  handlePasswordChange: function(e) {
     this.setState({password: e.target.value});
  },

  handleSignUp: function() {
    var that = this;
    var user = this.props.user;
    user.set(this.state);
    user.save({}, {
      success: function(model, res){
        console.log("Successful sign up!");
        that.transitionTo('login');
      },
      error: function(model, err){
        console.error("I'm sorry, there was an error!");
      }
    });
  },

  _transition: function(e){
    this.transitionTo(e.target.dataset.id);
  },

  render : function() {
    return (
      <div>
        <button type='button' data-id='signup' onClick={this._transition}>Sign Up</button>
        <button type='button' data-id='login' onClick={this._transition}>Log In</button>
        <form>
          <input type="text" name="email" placeholder="Email" onChange={this.handleEmailChange} />
          <input type="password" name="password" placeholder="Password" onChange={this.handlePasswordChange}/>
          <button type="button" onClick={this.handleSignUp}>Sign Up</button>
        </form>
      </div>
    );
  }

});


