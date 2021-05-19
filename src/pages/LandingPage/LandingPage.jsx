import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// React icons


// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";

import gridVideo from "/src/assets/img/grid.mp4";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <div id="top" style={{alignItems: "center"}}>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Vannevar Labs"
          rightLinks={<HeaderLinks />}
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={8} lg={6} xl={6}>
                <h1 className={classes.title}>Cutting-edge artificial intelligence for critical national security problems.</h1>
                <h4>
                  <b>VANNEVAR LABS</b> builds artificial intelligence (AI) and natural language processing (NLP) tools to power a safer America. Our mission brings together experts from Washington to Silicon Valley with decades of success solving our country’s biggest challenges.
                </h4>
                <Button
                  color="info"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact us
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </div>
        <div id="decrypt" className={classNames(classes.main)}>
          <video id="grid-video" autoPlay muted loop>
            <source src={gridVideo} type="video/mp4" />
          </video>
          <div style = {{color: "white"}}>   
            <ProductSection />
          </div>
        </div>
        <div className={classNames(classes.main)}>
          <div className={classes.container}>   
            <TeamSection />
          </div>
          <div id="big-quote">
            <p>"We think that <b>the people that defend our country</b> should have access to <b>the best tools and technologies</b> to do their job. We know these people, we used to work with them, <b>and we want to help them</b>.”</p>
            <h3>Brett Granberg, CEO</h3>
          </div>
        </div>
        <div id="news" className={classes.main}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12} xl={12}>
              <h1 className={classes.title} style={{textAlign: "left"}}>News & Announcements</h1>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6} lg={6} xl={6}>
              <h3>Vannevar Labs Seeks to Support Intel Agencies with AI Tech</h3>
              <h4>ExecutiveBiz, September 27, 2019</h4>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={6} xl={6}>
              <h3>Vannevar Labs comes out of stealth to bring best-in-class AI tech to national security agencies</h3>
              <h4>TechCrunch, Sepember 25, 2019</h4>
            </GridItem>
          </GridContainer>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
