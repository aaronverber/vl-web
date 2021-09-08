import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

import brett from "assets/img/faces/brett.jpg";
import nini from "assets/img/faces/nini.jpg";
import scott_s from "assets/img/faces/scott_s.jpg";
import erin from "assets/img/faces/erin.jpg";

import nathan from "assets/img/faces/nathan.jpg";
import nate from "assets/img/faces/nate.jpg";
import nick from "assets/img/faces/nick.jpg";
import eric from "assets/img/faces/eric.jpg";

import alex from "assets/img/faces/alex.jpg";
import scott from "assets/img/faces/scott.jpg";
import ngoc from "assets/img/faces/ngoc.jpg";
import chris from "assets/img/faces/chris.jpg";

import nate_d from "assets/img/faces/nate_d.jpg";
import harrison from "assets/img/faces/harrison.jpg";
import aaron from "assets/img/faces/aaron.jpg";
import will from "assets/img/faces/will.jpg";

import joseph from "assets/img/faces/joseph.jpg";
import cane from "assets/img/faces/cane.jpg";
import aaron_lee from "assets/img/faces/aaron_lee.jpg";

import ian from "assets/img/faces/ian.jpg";
import john from 'assets/img/faces/john.jpg';
import danny from "assets/img/faces/danny.jpg";

import culture from "assets/img/culture.png";


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
            <GridContainer style = {{justifyContent: "center", textAlign: "center", maxWidth: "1440px", margin: "auto"}}>
              <GridItem xs={12} sm={8} md={7} lg={7} xl={7} style = {{marginBottom: "50px"}}>
                <h1 className={classes.title}>Our team lives the mission every day.</h1>
                <p>
                  <b>VANNEVAR LABS</b> brings together a multi-disciplinary group of people with a wide range of experiences, over 40 years of military service, engineers from some of the top tech companies and startups, and a passion for delivering mission critical tools to support public servants on the front lines of the country's most important national security problems.
                </p>
                <Button
                  color="info"
                  id="top-button"
                  size="lg"
                  href="https://jobs.lever.co/vannevarlabs-2"
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
        <GridContainer style = {{maxWidth: "1440px", margin: "auto"}}>
        <h1>Our team</h1>
        </GridContainer>
          
            <GridContainer style = {{justifyContent: "center", maxWidth: "1440px", margin: "auto"}}>
            
            <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
            <img defer src={brett} alt="..." />
                <h2>Brett Granberg</h2>
                <h3>CEO</h3>

                <p>Previously, Brett worked with the CIA, NSA, and the Department of Defense on implementing computer vision and NLP technology and invested in startups for In-Q-Tel, the venture capital arm of the CIA and the US intelligence community. Before that, he worked at McKinsey & Co, focusing on the government sector.</p>
                <p>Brett was in graduate school at Stanford before dropping out to co-found Vannevar Labs.</p>
              </GridItem>
              <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
              <img defer src={nini} alt="..." />
                <h2>Nini Moorhead</h2>
                <h3>COO</h3>

                <p>Nini Moorhead is a former US intelligence officer who spent seven years working with counterterrorism mission groups, including embedding with the US military overseas. Nini also served as chief of staff to the Director of the National Counterterrorism Center.</p>
                <p>Nini holds a BA from Harvard College, where she studied Middle Eastern History and Arabic, and an MBA from the Stanford Graduate School of Business.</p>
              </GridItem>

              <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
            <img defer src={scott_s} alt="..." />
                <h2>Scott Sanders</h2>
                <h3>Head of Business Development</h3>

                <p>Scott Sanders is a former Marine Special Operations Officer who led the United States’ crisis response during the 2017 Battle of Marawi and was an early employee at Anduril Industries. Scott developed and led the first DoD contracts for Anduril and eventually created the Counter Unmanned X Systems program, building over 1.2B in contract vehicles in just under four years.</p>
              </GridItem>

              <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
            <img defer src={erin} alt="..." />
                <h2>Erin Biggers</h2>
                <h3>Director of Mission Success</h3>

                <p>Erin Biggers has over a decade of experience as an intelligence analyst working in operations support, first as a USAF Intelligence Officer and then as a Mission Team Lead for a national security program. She also worked as a budget analyst and legislative policy lead prior to joining Vannevar Labs. She is a distinguished graduate of the U.S. Air Force Academy and earned a Masters in Public Policy from the University of Maryland.</p>
              </GridItem>
            </GridContainer>
          </div>
        </div>


        <div id="bio-holder-next">
        <div className={classes.container}>
            <GridContainer style = {{maxWidth: "1440px", margin: "auto"}}>

            <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
              <img defer src={nathan} alt="..." />
                <h2>Nathan Hartman</h2>
                <h3>Engineering Manager</h3>

                <p>Nathan Hartman has more than a decade of experience as a software developer, where he’s worked on everything from frontend to embedded systems at several companies, including a company he co-founded as CTO.</p>
              </GridItem>
              <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
            <img defer src={nate} alt="..." />
                <h2>Nate Bush</h2>
                <h3>Engineering Manager</h3>

                <p>Nate Bush spent 5 years as a machine learning engineer and as manager at Apple, where his team deployed machine learning models that impacted Apple’s over 1-billion device users.</p>
              </GridItem>

              <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
              <img defer src={nick} alt="..." />
                <h2>Nick Hanson</h2>
                <h3>Mission Success Lead</h3>
                
                <p>Nick Hanson is a former Marine intelligence officer. He served in the Indo-Pacific Command with rotations to East, Southeast and South Asia. Nick graduated with Distinction from the United States Naval Academy where he studied Arabic and Middle Eastern studies. He is on leave from the joint MPP / MBA program at the Harvard Kennedy School of Government and Harvard Business School.</p>
              </GridItem>
              <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
              <img defer src={eric} alt="..." />
                <h2>Eric Gibbs</h2>
                <h3>Mission Success Lead</h3>

                <p>Eric Gibbs is a former Cryptologic Warfare Officer in the Navy with experience in both Intelligence and Operations roles. He provided signals intelligence analysis support to global military and intelligence community operations and deployed to the Middle East to conduct Information and Space Operations. He holds a BS from the U.S. Naval Academy where he studied Quantitative Economics.</p>
              </GridItem>

            </GridContainer>
          </div>
        </div>


        <div id="bio-holder">
        <div className={classes.container}>
            <GridContainer style = {{maxWidth: "1440px", margin: "auto"}}>
            <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
              <img defer src={alex} alt="..." />
                <h2>Alex Williams</h2>
                <h3>Mission Development Lead</h3>

                <p>Alex Williams is a former Air Force Intelligence officer who specialized in analysis and targeting, providing intelligence support to air operations while serving across Europe, Southeast Asia, and the Middle East. He graduated from the U.S. Air Force Academy with a B.S. in Political Science and has since worked to advance technology integration within the DOD.</p>
              </GridItem>

              <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
              <img defer src={chris} alt="..." />
                <h2>Chris Molino</h2>
                <h3>Mission Development Lead</h3>

                <p>Chris Molino is a former Army special operations officer whose 20 year career focused on counterterrorism, crisis response, and U.S. policymaking. Chris's operational experience complements multiple staff roles in the Pentagon, intelligence community, and the White House. Chris holds BAs in Government and History from the College of William and Mary, and a Master of Policy Management from Georgetown University.</p>
              </GridItem>

              <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
              <img defer src={will} alt="..." />
                <h2>Will Golinkin</h2>
                <h3>Mission Development Lead</h3>

                <p>Will Golinkin was born and raised in Houston, TX. After graduating from Dickinson College in 2013, he spent a year working in asset management for J.P. Morgan in Houston. He then joined the Marine Corps, where he served five years as a Communications Officer and Platoon Commander at 1st Battalion, 5th Marine Regiment. After transitioning out of the military, Will graduated from the Stanford Graduate School of Business, where he was introduced to the founding team at Vannevar Labs.</p>
              </GridItem>
              
              <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
              <img defer src={scott} alt="..." />
                <h2>Scott McCreary</h2>
                <h3>Software Engineer</h3>

                <p>Scott McCreary is a Fullstack Software Engineer. He previously worked at Grailed, a peer-to-peer menswear marketplace, where he helped build best-in-class digital item authentication.</p>
                <p>In a previous life, Scott was a musical theater actor (Dirty Dancing) and professional cellist (The Tonight Show, New Haven Symphony). He is the co-founder of Artists Who Code, a volunteer organization that helps artists learn to code and land jobs in tech.</p>
              </GridItem>

            </GridContainer>
          </div>
        </div>

        <div id="bio-holder-next">
        <div className={classes.container}>
            <GridContainer style = {{maxWidth: "1440px", margin: "auto"}}>
            <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
              <img defer src={joseph} alt="..." />
                <h2>Joseph Lombardo</h2>
                <h3>Software Engineer</h3>

                <p>Joseph Lombardo was born and raised in Stokesdale, NC. He has been working in the DevOps and Software Engineering space for well over a decade. Prior to Vannevar Labs, Joseph was a lead engineer at NetFoundry, Inc. where he helped build the core network and security automation platform.</p>
              </GridItem>  
            <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
              <img defer src={ngoc} alt="..." />
                <h2>Ngoc Do</h2>
                <h3>Software Engineer</h3>

                <p>Ngoc Do is a first generation college graduate, originally from Vietnam and raised in Seattle. He has been programming since high school and has interned and worked at companies such as Macy's, Avanade, Liberty Mutual, and Limeade.</p>
              </GridItem>
              <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
                <img defer src={nate_d} alt="..." />
                  <h2>Nate Diamond</h2>
                  <h3>Software Engineer</h3>

                  <p>Nate Diamond was an early software engineer at WELL Health, where he led development of foundational product capabilities and helped grow the engineering team. Before that, he graduated with a BS in Computer Science from UC Santa Barbara, where he worked on a variety of projects including work with the Department of Computational Neuroscience & leading development of the student-built interactive campus map. He was also previously a junior software developer for Octane5, where he scraped location data for more than 100,000 retail storefronts.</p>
                </GridItem>
                <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
                <img defer src={cane} alt="..." />
                  <h2>Cane Punma</h2>
                  <h3>Software Engineer</h3>

                  <p>Cane Punma was previously a Machine Learning Scientist at PwC and Landis. At PwC, he helped build their Artificial Intelligence Research Team and products. At Landis, he helped build a product that coached clients to become homeowners as quickly as possible. Prior to that, Cane studied Industrial Engineering and Computer Science at Georgia Tech in Atlanta.</p>
                </GridItem>
            </GridContainer>
          </div>
        </div>

        <div id="bio-holder">
        <div className={classes.container}>
        <GridContainer style = {{maxWidth: "1440px", margin: "auto"}}>
        <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
                <img defer src={aaron_lee} alt="..." />
                  <h2>Aaron Lee</h2>
                  <h3>Data Operations Engineer</h3>

                  <p>Aaron Lee is a former Navy helicopter pilot with 12 years of experience in STEM education. He founded after-school coding programs for at-risk teens and developed multiple world-class youth robotics programs. He holds a BS from the U.S. Naval Academy where he studied Systems Engineering.</p>
                </GridItem>
        <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
                <img defer src={harrison} alt="..." />
                  <h2>Harrison Nguyen</h2>
                  <h3>Business Operations and Strategy</h3>

                  <p>Harrison Nguyen was a software engineer at Rally Health. Before that, he helped build products for early stage startups. He holds a BS and MS from UC Davis.</p>
                </GridItem>
                <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
                <img defer src={aaron} alt="..." />
                  <h2>Aaron Verber</h2>
                  <h3>Designer</h3>

                  <p>Aaron Verber is a designer, technical writer, and product manager with over a decade of experience in hardware and software documentation. Most recently, he was a Product Manager and Lead Technical Writer at Marqeta. He has a BA from the University of Wisconsin Eau Claire.</p>
                </GridItem>
            </GridContainer>
          </div>
        </div>

        <div id="bio-holder-next">
        <div className={classes.container}>
        <GridContainer style = {{maxWidth: "1440px", margin: "auto"}}>
        <h1>Our advisors</h1>
        </GridContainer>
            <GridContainer style = {{maxWidth: "1440px", margin: "auto"}}>
            <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
              <img defer src={danny} alt="..." />
                <h2>Danny Goodman</h2>
                <h3>Co-founder at Vannevar Labs</h3>
                <p>Danny Goodman co-founded Switchback Ventures, which built custom enterprise Deep Learning and Data Science products. Earlier, Danny was VP of Platform at MetaMind, which enabled thousands of customers to train and deploy state-of-the-art text and image classifiers. Before that, he was Director of Data Science at MetroMile, the only per-mile car insurer in the US.</p>
              </GridItem>
            <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
            <img defer src={john} alt="..." />
                <h2>John Doyle</h2>
                <h3>Head of National Security Business at Palantir</h3>

                <p>John Doyle runs Palantir’s National Security business and advises Vannevar on Sales. John graduated from Harvard Law School and served in the US Army Special Forces.</p>
              </GridItem>
              <GridItem className="bio" xs={12} sm={6} md={6} lg={3} xl={3} style = {{marginBottom: "50px"}}>
              <img defer src={ian} alt="..." />
                <h2>Ian Wong</h2>
                <h3>CTO and Co-founder at Opendoor</h3>

                <p>Ian Wong is CTO and co-founder of Opendoor and advises Vannevar on Engineering and Product. Previously, he built machine learning applications at Square and Prismatic. He earned degrees in Electrical Engineering and Statistics from Stanford University. </p>
              </GridItem>
            </GridContainer>
          </div>
        </div>

        <div id="bio-holder">
        <div className={classes.container}>
            <GridContainer style = {{justifyContent: "center"}}>
            <GridItem className="bio" xs={12} sm={6} md={6} lg={4} xl={4} style = {{textAlign: "center"}}>
            <img defer src={culture} style={{maxWidth: "300px"}} alt="..." />
                <h2>Join our team!</h2>
                <p>We're building tools to support public servants working on the country’s most important problems.</p>
                <Button
                  color="info"
                  id="top-button"
                  size="lg"
                  href="https://jobs.lever.co/vannevarlabs-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </Button>
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