/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, Work, People } from "@material-ui/icons";
import EmailIcon from '@material-ui/icons/Email';


// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        
        <Button
          color="transparent"
          className={classes.navLink}
          href="/people"
        >
          <Link to="/people">People</Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://jobs.lever.co/vannevarlabs-2"
          target="_blank"
          color="transparent"
          className={classes.navLink}
        >
          Careers
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          href="/contact"
        >
          <Link to="/contact">Contact</Link>
        </Button>
      </ListItem>
      
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
