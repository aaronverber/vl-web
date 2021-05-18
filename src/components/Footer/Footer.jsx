/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";

import vSymbol from "assets/img/symbol_blue.png";


import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left} id="footerLeft">
          <List className={classes.list}>
          <ListItem className={classes.inlineBlock} xs={12} sm={12} md={8} lg={6} xl={6}>
          <img src={vSymbol} style={{height: "40px", width: "auto", display: "inline", marginTop: "-10px"}}></img>
          <h3 style={{fontFamily:"Saira Semi Condensed", fontWeight: "700", display: "inline", paddingLeft: "15px"}}>VANNEVAR <span style={{fontWeight:"400"}}>Labs</span></h3>
            </ListItem>
          </List>
        </div>
        <div className={classes.right} id="footerRight">
        <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/"
                className={classes.block}
                target="_blank"
              >
                People
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/presentation"
                className={classes.block}
                target="_blank"
              >
                Careers
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://blog.creative-tim.com/"
                className={classes.block}
                target="_blank"
              >
                Contact
              </a>
            </ListItem>
          </List>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
