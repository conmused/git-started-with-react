import React from 'react';
import { Link } from 'react-router';
import NavigationMenuControl from './navigationMenuControl/';
import NavigationMenu from './navigationMenu/';
import NavigationMenuItem from './navigationMenuItem/';

import styles from './navigation.css';

export default class Navigation extends React.Component {
  displayName: 'Navigation';
  constructor(props){
    super(props);
    this.state = { open: false };
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleMenuToggle() {
    this.setState({open:!this.state.open});
  }

  closeMenu(){
    this.setState({open:false});
  }

  render() {
    return(
    <div className={styles.navigation}>
      <div className={styles.wrapper}>
        <NavigationMenuControl onMenuToggle={this.handleMenuToggle} open={this.state.open}/>
          <Link onClick={this.closeMenu} className={styles.brand} to="/">
            React Seed 1.0
          </Link>
        <NavigationMenu open={this.state.open} >
          <NavigationMenuItem  onMenuToggle={this.closeMenu} linkTo="/pageone">Page One</NavigationMenuItem>
          <NavigationMenuItem onMenuToggle={this.closeMenu} linkTo="/pagetwo">Page Two</NavigationMenuItem>
        </NavigationMenu>
        <div className={styles.clearfix}/>
      </div>
    </div>
    );
  }
}