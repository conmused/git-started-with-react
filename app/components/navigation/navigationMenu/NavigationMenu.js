import React from 'react';
import classNames from 'classNames';
import styles from './navigationMenu.css';

export default class NavigationMenu extends React.Component {
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
    let classes = classNames(styles.navigationMenu, (!this.props.open || styles.navigationMenuOpen));

    return (
      <div className={classes}>
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
