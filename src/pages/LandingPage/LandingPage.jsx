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
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";

import gridVideo from "/src/assets/img/grid.mp4";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
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
        <Parallax filter style={{alignItems: "flexStart", marginTop: "-120px", zIndex: -5}} image={require("assets/img/farm_small.png")}>
          <div className={classes.container}>
            <GridContainer style = {{paddingTop: 100}}>
              <GridItem xs={12} sm={12} md={8} lg={6} xl={6}>
                <h1 className={classes.title}>Cutting-edge artificial intelligence for critical national security problems.</h1>
                <h4>
                  <b>VANNEVAR LABS</b> builds artificial intelligence (AI) and natural language processing (NLP) tools to power a safer America. Our mission brings together experts from Washington to Silicon Valley with decades of success solving our country’s biggest challenges.
                </h4>
                <br />
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
        </Parallax>
        <div id="decrypt" className={classNames(classes.main)}>
        <video id="grid-video" autoPlay muted loop>
        <source src={gridVideo} type="video/mp4" />
        </video>
            <div style = {{height: "600px", color: "white"}}>   
            <ProductSection />
            </div>
        </div>
        <div className={classNames(classes.main)}>
          <div className={classes.container}>   
            <TeamSection />
            <WorkSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
