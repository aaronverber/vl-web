import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// React icons
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRounded,
      classes.imgFluid
    );
    return (
      <div id="people" className={classes.section}>
        <div>
          <GridContainer id="peopleall">
          <GridItem  xs={12} sm={6} md={6} lg={6} xl={6}>
          <h1 className={classes.title} style={{textAlign: "left"}}>A team of experts.</h1>
          <p><b>VANNEVAR LABS</b> brings together a multi-disciplinary task force with a wide range of experiences, over X years of military service, engineers from some of the top tech startups, and a passion for delivering mission critical tools that protect our country from worldwide threats.</p>
          <Button
                  color="info"
                  size="md"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{marginRight: "10px"}}
                >
                  Meet the team
                </Button> <div style={{display: "inline-block", marginBottom: "20px"}}><a href="/">Explore careers at Vannevar Labs</a></div>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={6} xl={6} className={classes.itemGrid}>
          <GridContainer id="photos" style={{justifyContent: "space-between"}}>
            <GridItem xs={4} sm={6} md={4} lg={4} xl={4} className={classes.itemGrid}>
              <img src={team1} alt="..." className={imageClasses} />
            </GridItem>
            <GridItem xs={4} sm={6} md={4} lg={4} xl={4} className={classes.itemGrid}>
              <img src={team1} alt="..." className={imageClasses} />
            </GridItem>
            <GridItem xs={4} sm={6} md={4} lg={4} xl={4} className={classes.itemGrid}>
              <img src={team1} alt="..." className={imageClasses} />
            </GridItem>
            <GridItem xs={4} sm={6} md={4} lg={4} xl={4} className={classes.itemGrid}>
              <img src={team1} alt="..." className={imageClasses} />
            </GridItem>
            <GridItem xs={4} sm={6} md={4} lg={4} xl={4} className={classes.itemGrid}>
              <img src={team1} alt="..." className={imageClasses} />
            </GridItem>
            <GridItem xs={4} sm={6} md={4} lg={4} xl={4} className={classes.itemGrid}>
              <img src={team1} alt="..." className={imageClasses} />
            </GridItem>
          </GridContainer>
        </GridItem>

            
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
