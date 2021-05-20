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

// React icons
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

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
          href="/people"
          color="transparent"
          className={classes.navLink}
        >
          <People className={classes.icons} /> People
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://jobs.lever.co/vannevarlabs-2"
          target="_blank"
          color="transparent"
          className={classes.navLink}
        >
          <Work className={classes.icons} /> Careers
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://jobs.lever.co/vannevarlabs-2"
          color="transparent"
          className={classes.navLink}
        >
          <EmailIcon className={classes.icons} /> Contact
        </Button>
      </ListItem>
      
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
