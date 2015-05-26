import React from 'react';
import { Link } from 'react-router';
import NavigationMenuControl from './navigationMenuControl/';
import NavigationMenu from './navigationMenu/';
import NavigationMenuItem from './navigationMenuItem/';

import './navigation.scss';

class Navigation extends React.Component {
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
    <div className="navigation">
      <div className="navigation__wrapper">
        <NavigationMenuControl onMenuToggle={this.handleMenuToggle} open={this.state.open}>React Seed 1.0</NavigationMenuControl>
          <Link onClick={this.closeMenu} className="navigation__brand" to="/">
            React Seed 1.0
          </Link>
        <NavigationMenu open={this.state.open} brand={"React Seed 1.0"}>
          <NavigationMenuItem  onMenuToggle={this.closeMenu} linkTo="pageone">Page One</NavigationMenuItem>
          <NavigationMenuItem onMenuToggle={this.closeMenu} linkTo="pagetwo">Page Two</NavigationMenuItem>
        </NavigationMenu>
        <div className="navigation__clearfix"/>
      </div>
    </div>
    );
  }
}

export default Navigation;