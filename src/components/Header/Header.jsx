import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import headerStyle from "assets/jss/material-kit-react/components/headerStyle.jsx";

import { Link } from "gatsby";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }
  handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }
  componentDidMount() {
    if (this.props.changeColorOnScroll) {
      window.addEventListener("scroll", this.headerColorChange);
    }
  }

  componentWillUnmount() {
    if (this.props.changeColorOnScroll) {
      typeof window !== 'undefined' && window.removeEventListener("scroll", this.headerColorChange);
    }
  }
  render() {
    const {
      classes,
      color,
      rightLinks,
      leftLinks,
      absolute
    } = this.props;
    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes[color]]: color,
      [classes.absolute]: absolute
    });
    return (
      <AppBar className={appBarClasses}>
        <Toolbar className={classes.container}>
          <div id="logo">
            <Link to= "/">
              <svg viewBox = "0 0 129 173" alt=" " style={{width: "30px", height: "auto", display: "inline", verticalAlign: "middle", marginTop: "-8px"}}>
                <path d="M39 103.5L0 0H77.5L39 103.5Z M64.5 172.5L44.5 118.5L65.2212 62.5H105.5L64.5 172.5Z M69 52.5H109L129 0H88.5L69 52.5Z" fill="white"/>
              </svg>
              <h3 style={{fontFamily:"Saira Semi Condensed", fontWeight: "700", display: "inline", paddingLeft: "15px"}}>VANNEVAR <span style={{fontWeight:"400"}}>Labs</span></h3>
            </Link>
          </div>
          <Hidden smDown implementation="css">
            {rightLinks}
          </Hidden>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={"right"}
            open={this.state.mobileOpen}
            classes={{
              paper: classes.drawerPaper
            }}
            onClose={this.handleDrawerToggle}
          >
            <div className={classes.appResponsive}>
              {leftLinks}
              {rightLinks}
            </div>
          </Drawer>
        </Hidden>
      </AppBar>
    );
  }
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // this.props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // this.props.color (see above)
};

export default withStyles(headerStyle)(Header);
