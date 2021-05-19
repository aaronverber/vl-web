import React from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";



import gridVideo from "/src/assets/img/grid.mp4";

const dashboardRoutes = [];

class People extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <div id="vannevar" style={{alignItems: "center"}}>
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
              <GridItem xs={12} sm={8} md={7} lg={7} xl={7} style = {{marginBottom: "50px"}}>
                <h1 className={classes.title}>Our team won't stop until mission accomplished.</h1>
                <p>
                  <b>VANNEVAR LABS</b> brings together a multi-disciplinary task force with a wide range of experiences, over X years of military service, engineers from some of the top tech startups, and a passion for delivering mission critical tools that protect our country from worldwide threats. [A line here, something about the type of folks we’re looking for or just something about overall apply to our company, etc....]
                </p>
                <Button
                  color="info"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join our team
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

          </div>
        </div>
        <div className={classNames(classes.main)}>
          <div className={classes.container}>   

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

export default withStyles(landingPageStyle)(People);
