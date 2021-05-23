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

import { Link } from "gatsby";

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
              <GridItem xs={12} sm={12} md={8} lg={8} xl={9}>
                <h1 className={classes.title}>Cutting-edge artificial intelligence for critical national security problems.</h1>
                <GridItem xs={12} sm={12} md = {12} lg = {11} xl={11} id="top-details">
                <h4>
                  <b>VANNEVAR LABS</b> builds artificial intelligence (AI) and natural language processing (NLP) tools to power a safer America. Our mission brings together experts from Washington to Silicon Valley with decades of success solving our country’s biggest challenges.
                </h4>
                <Button
                  color="info"
                  href="/contact"
                  id="top-button"
                  size="lg"
                  rel="noopener noreferrer"
                >
                  <Link to="/contact">Contact us</Link>
                </Button>
                </GridItem>
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
              <h3><a target="_blank" rel="noreferrer" href="https://blog.executivebiz.com/2019/09/vannevar-labs-seeks-to-support-intell-agencies-with-ai-tech-brett-granberg-quoted/">Vannevar Labs Seeks to Support Intel Agencies with AI Tech</a></h3>
              <h4>ExecutiveBiz, September 27, 2019</h4>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={6} xl={6}>
              <h3><a target="_blank" rel="noreferrer" href="https://techcrunch.com/2019/09/25/vannevar-labs-comes-out-of-stealth-to-bring-best-in-class-ai-tech-to-national-security-agencies/">Vannevar Labs comes out of stealth to bring best-in-class AI tech to national security agencies</a></h3>
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
