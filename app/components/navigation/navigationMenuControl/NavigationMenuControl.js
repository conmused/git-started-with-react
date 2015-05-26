import React from 'react';
import classNames from 'classNames';
import './navigationMenuControl.scss';

class NavigationMenuControl extends React.Component {
  displayName: 'NavigationMenuControl';
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.onMenuToggle){
      this.props.onMenuToggle();
    }
  }

  render() {
    var classes = classNames({
      'navigation-menu-control__icon': true,
      'navigation-menu-control__icon--active': this.props.open
    });

    return(
      <div className="navigation-menu-control">
        <div className={classes} onClick={this.handleClick}>
          <div className="navigation-menu-control__icon__inner"/>
        </div>
      </div>
    );
  }
}

export default NavigationMenuControl;