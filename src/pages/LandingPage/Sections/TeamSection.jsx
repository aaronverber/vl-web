import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import brett from "assets/img/faces/brett.jpg";
import nini from "assets/img/faces/nini.jpg";
import danny from "assets/img/faces/danny.jpg";
import nathan from "assets/img/faces/nathan.jpg";

import nate from "assets/img/faces/nate.jpg";
import alex from "assets/img/faces/alex.jpg";

import { Link } from "gatsby";

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
                  rel="noopener noreferrer"
                  href="/people"
                  style={{marginRight: "10px"}}
                >
                  <Link to ="/people">Meet the team</Link>
                </Button> <div style={{display: "inline-block", marginBottom: "20px"}}><a id="jobs" href="https://jobs.lever.co/vannevarlabs-2"><u>Explore careers at Vannevar Labs</u></a></div>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={6} xl={6} className={classes.itemGrid}>
          <GridContainer id="photos" style={{justifyContent: "space-between"}}>
            <GridItem xs={4} sm={6} md={4} lg={4} xl={4} className={classes.itemGrid}>
              <img defer src={brett} alt="..." className={imageClasses} />
            </GridItem>
            <GridItem xs={4} sm={6} md={4} lg={4} xl={4} className={classes.itemGrid}>
              <img defer src={nini} alt="..." className={imageClasses} />
            </GridItem>
            <GridItem xs={4} sm={6} md={4} lg={4} xl={4} className={classes.itemGrid}>
              <img defer src={danny} alt="..." className={imageClasses} />
            </GridItem>
            <GridItem xs={4} sm={6} md={4} lg={4} xl={4} className={classes.itemGrid}>
              <img defer src={nathan} alt="..." className={imageClasses} />
            </GridItem>
            <GridItem xs={4} sm={6} md={4} lg={4} xl={4} className={classes.itemGrid}>
              <img defer src={nate} alt="..." className={imageClasses} />
            </GridItem>
            <GridItem xs={4} sm={6} md={4} lg={4} xl={4} className={classes.itemGrid}>
              <img defer src={alex} alt="..." className={imageClasses} />
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
