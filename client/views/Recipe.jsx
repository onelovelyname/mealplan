/** @jsx React.DOM */

var Recipe = React.createClass({

  getInitialState: function(){
    return { forReview: true };
  },

  componentWillMount: function(){
    this.setState({ forReview: this.props.forReview || this.state.forReview });
  },

  _navigateToRecipe: function(){
    window.open('http://www.yummly.com/recipe/external/' + this.props.recipe.get('id'));
  },

  render : function() {
    // Getting the image url and modifying it to get the correct size. Note: this could break if Yummly changes their img urls
    var imgUrl = this.props.recipe.get('smallImageUrls')[0];
    imgUrl = imgUrl.substring(0, imgUrl.length - 2) + '400';
    var bgStyle = {
      backgroundImage: 'url(' + imgUrl + ')',
    };

    return (
      <div className="thumbnail recipe-preview col-md-2" style={bgStyle} key={this.props.recipe}>
        <div className={this.state.forReview ? 'show review-buttons' : 'hide'} >
          <button type='button' className="btn btn-default btn-small" onClick={this._navigateToRecipe}>View</button>
          <button type='button' className="btn btn-default btn-small" data-position={this.props.position} data-collection={this.props.collection} onClick={this.props.rejectRecipe}>Reject</button>
        </div>
        <div className="overlay">
          <p className="overlay-title">{this.props.recipe.get('recipeName')}</p>
        </div>
      </div>
    );
  }
});