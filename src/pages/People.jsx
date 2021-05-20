import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

import brett from "assets/img/faces/brett.png";
import nini from "assets/img/faces/nini.jpeg";
import danny from "assets/img/faces/danny.png";
import nathan from "assets/img/faces/nathan.png";

import nate from "assets/img/faces/nate.jpeg";
import alex from "assets/img/faces/alex.jpeg";
import nick from "assets/img/faces/nick.jpeg";
import eric from "assets/img/faces/eric.png";

import erin from "assets/img/faces/erin.jpeg";
import scott from "assets/img/faces/scott.jpeg";
import ngoc from "assets/img/faces/ngoc.jpeg";
import harrison from "assets/img/faces/harrison.jpeg"


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
        <div id="bio-holder">
        <div className={classes.container}>
            <GridContainer style = {{justifyContent: "center"}}>
            <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
                <h2>Brett Granberg</h2>
                <h3>CEO</h3>
                <img src={brett} alt="..." />
                <p>Previously, Brett worked with the CIA, NSA, and the Department of Defense on implementing computer vision and NLP technology and invested in startups for In-Q-Tel, the venture capital arm of the CIA and the US intelligence community. Before that, he worked at McKinsey & Co, focusing on the government sector.</p>
                <p>Brett was in graduate school at Stanford before dropping out to co-found Vannevar Labs.</p>
              </GridItem>
              <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
                <h2>Nini Moorhead</h2>
                <h3>COO</h3>
                <img src={nini} alt="..." />
                <p>She is a former US intelligence officer who spent seven years working with counterterrorism mission groups, including embedded with the US military overseas. Nini also served as chief of staff to the Director of the National Counterterrorism Center.</p>
                <p>Nini holds a BA from Harvard College, where she studied Middle Eastern History and Arabic, and an MBA from the Stanford Graduate School of Business.</p>
              </GridItem>
              <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
                <h2>Danny Goodman</h2>
                <h3>Co-founder</h3>
                <img src={danny} alt="..." />
                <p>Danny Goodman co-founded Switchback Ventures, which built custom enterprise Deep Learning and Data Science products. Earlier, Danny was VP of Platform at MetaMind, which enabled thousands of customers to train and deploy state-of-the-art text and image classifiers. Before that, he was Director of Data Science at MetroMile, the only per-mile car insurer in the US.</p>
              </GridItem>
              <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
                <h2>Nathan Hartman</h2>
                <h3>Engingeering Manager</h3>
                <img src={nathan} alt="..." />
                <p>Nathan Hartman has more than a decade of experience as a software developer, where he’s worked on everything from frontend to embedded systems at several companies, including a company he co-founded as CTO.</p>
              </GridItem>
            </GridContainer>
          </div>
        </div>


        <div id="bio-holder-next">
        <div className={classes.container}>
            <GridContainer>
            <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
                <h2>Nate Bush</h2>
                <h3>Engineering Manager</h3>
                <img src={nate} alt="..." />
                <p>Nate Bush spent 5 years as a machine learning engineer and as manager at Apple, where his team deployed machine learning models that impacted Apple’s >1 billion device users.</p>
              </GridItem>
              <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
                <h2>Alex Williams</h2>
                <h3>Mission Development</h3>
                <img src={alex} alt="..." />
                <p>Alex Williams is a former Air Force Intelligence officer who specialized in analysis and targeting, providing intelligence support to air operations while serving across Europe, Southeast Asia, and the Middle East. He graduated from the U.S. Air Force Academy with a B.S. in Political Science and has since worked to advance technology integration within the DOD.</p>
              </GridItem>
              <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
                <h2>Nick Hanson</h2>
                <h3>Mission Success</h3>
                <img src={nick} alt="..." />
                <p>Nick Hanson is a former intelligence officer in the USMC. Nick served his career in the Indo-Pacific Command with rotations to East, Southeast and South Asia. Nick graduated with Distinction from the United States Naval Academy where he studied Arabic and Middle Eastern studies. He is on leave from a joint MPP / MBA at the Harvard Kennedy School and Harvard Business School.</p>
              </GridItem>
              <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
                <h2>Eric Gibbs</h2>
                <h3>Mission Success Lead</h3>
                <img src={eric} alt="..." />
                <p>Eric Gibbs is a former Cryptologic Warfare Officer in the Navy with experience in both Intelligence and Operations roles. He provided signals intelligence analysis support to global military and intelligence community operations and deployed to the Middle East to conduct Information and Space Operations. He holds a BS from the U.S. Naval Academy where he studied Quantitative Economics.</p>
              </GridItem>
            </GridContainer>
          </div>
        </div>


        <div id="bio-holder">
        <div className={classes.container}>
            <GridContainer>
            <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
                <h2>Erin Biggers</h2>
                <h3>Director of Mission Success</h3>
                <img src={erin} alt="..." />
                <p>Erin Biggers has over a decade of experience as an intelligence analyst working in operations support, first as a USAF Intelligence Officer and then as a Mission Team Lead for a national security program. She also worked as a budget analyst and legislative policy lead prior to joining Vannevar Labs. She is a distinguished graduate of the U.S. Air Force Academy and earned a Master in Public Policy from the University of Maryland.</p>
              </GridItem>
              <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
                <h2>Scott McCreary</h2>
                <h3>Software Engineer</h3>
                <img src={scott} alt="..." />
                <p>Scott McCreary is a Fullstack Software Engineer. He previously worked at Grailed, a peer-to-peer menswear marketplace, where he helped build best-in-class digital item authentication.</p>
                <p>In a previous life, Scott was a musical theater actor (Dirty Dancing) and professional cellist (The Tonight Show, New Haven Symphony). He is the co-founder of Artists Who Code, a volunteer organization that helps artists learn to code and land jobs in tech.</p>
              </GridItem>
              <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
                <h2>Ngoc Do</h2>
                <h3>Software Engineer</h3>
                <img src={ngoc} alt="..." />
                <p>Ngoc Do is a first generation college graduate, originally from Vietnam and raised in Seattle. He has been programming since high school and has interned and worked at companies such as Macy's, Avanade, Liberty Mutual, and Limeade.</p>
              </GridItem>
              <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
                <h2>Scott McCreary</h2>
                <h3>Software Engineer</h3>
                <img src={harrison} alt="..." />
                <p>Harrison Nguyen was a software engineer at Rally Health. Before that, he helped build products for early stage startups. He holds a BS and MS from UC Davis.</p>
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
