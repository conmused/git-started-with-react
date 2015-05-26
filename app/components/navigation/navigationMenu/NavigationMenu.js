import React from 'react';
import classNames from 'classNames';
import './navigationMenu.scss';

class NavigationMenu extends React.Component {
  displayName: 'Navigation Menu';
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    if(this.props.menuToggle){
      this.props.menuToggle();
    }
  }
  render(){
    let classes = classNames({
      'navigation-menu': true,
      'navigation-menu--open': this.props.open
    });

    return (
      <div className={classes}>
        <div className="navigation-menu__icon"/>
        {this.props.children}
      </div>
    );
  }
}

NavigationMenu.defaultProps = {
  open: false
};

NavigationMenu.propTypes = {
  open: React.PropTypes.bool
};

export default NavigationMenu;