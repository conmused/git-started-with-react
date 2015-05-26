import React from 'react';
import { Link } from 'react-router';
import './navigationMenuItem.scss';

class NavigationItem extends React.Component {
  displayName: 'NavigationItem';
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if(this.props.onMenuToggle){
      this.props.onMenuToggle();
    }
  }

  render() {
    return(
      <Link
        activeClassName="navigation-menu-item--active"
        onClick={this.handleClick}
        className="navigation-menu-item"
        brand={this.props.brand}
        to={this.props.linkTo}>
          {this.props.children}
      </Link>
    );
  }
}

NavigationItem.defaultProps = {
  brand: false
};

NavigationItem.propTypes = {
  brand: React.PropTypes.bool,
  linkTo: React.PropTypes.string.isRequired,
};

export default NavigationItem;