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

import team1 from "assets/img/faces/brett.png";
import brett from "assets/img/faces/brett.png";
import nini from "assets/img/faces/nini.png";
import danny from "assets/img/faces/danny.png";
import nathan from "assets/img/faces/nathan.png";

import nate from "assets/img/faces/nate.png";
import alex from "assets/img/faces/alex.png";

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
                  href="/people"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{marginRight: "10px"}}
                >
                  Meet the team
                </Button> <div style={{display: "inline-block", marginBottom: "20px", paddingLeft: "10px"}}><a href="https://jobs.lever.co/vannevarlabs-2"><u>Explore careers at Vannevar Labs</u></a></div>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={6} xl={6} className={classes.itemGrid}>
          <GridContainer id="photos" style={{justifyContent: "space-between"}}>
            <GridItem xs={4} sm={6} md={4} lg={4} xl={4} className={classes.itemGrid}>
              <img src={brett} alt="..." className={imageClasses} />
            </GridItem>
            <GridItem xs={4} sm={6} md={4} lg={4} xl={4} className={classes.itemGrid}>
              <img src={nini} alt="..." className={imageClasses} />
            </GridItem>
            <GridItem xs={4} sm={6} md={4} lg={4} xl={4} className={classes.itemGrid}>
              <img src={danny} alt="..." className={imageClasses} />
            </GridItem>
            <GridItem xs={4} sm={6} md={4} lg={4} xl={4} className={classes.itemGrid}>
              <img src={nathan} alt="..." className={imageClasses} />
            </GridItem>
            <GridItem xs={4} sm={6} md={4} lg={4} xl={4} className={classes.itemGrid}>
              <img src={nate} alt="..." className={imageClasses} />
            </GridItem>
            <GridItem xs={4} sm={6} md={4} lg={4} xl={4} className={classes.itemGrid}>
              <img src={alex} alt="..." className={imageClasses} />
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
