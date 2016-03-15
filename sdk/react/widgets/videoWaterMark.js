var React = require('react-native');
var {
  Image,
  Text,
  StyleSheet,
  Animated,
  View,
} = React;
var ResponsiveDesignManager = require('../responsiveDesignManager');
var Constants = require('../constants');
var styles = require('../utils').getStyles(require('./style/videoWaterMarkStyles.json'));
var {
  BUTTON_NAMES,
  IMG_URLS,
  UI_SIZES
} = Constants;



var logo = React.createClass({
  propTypes: {
    buttonWidth: React.PropTypes.number.isRequired,
    buttonHeight: React.PropTypes.number.isRequired,
    waterMarkName: React.PropTypes.string.isRequired,
  },

renderLogo: function(){
  var waterMarkName = this.props.waterMarkName;
  var sizeStyle = {width: this.props.buttonWidth, height: this.props.buttonHeight};
  return (
        <View style={[styles.watermarkContainer]}>
          <Image
            style={sizeStyle}
            source={{uri: waterMarkName}}/>
        </View>
      );
  },

  render: function() {
    return this.renderLogo();
  }
});
module.exports = logo;
