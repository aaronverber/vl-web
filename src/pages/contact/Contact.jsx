import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";



const dashboardRoutes = [];

class Contact extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <div id="contact" style={{alignItems: "center"}}>
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
              <GridItem xs={12} sm={8} md={6} lg={6} xl={6} style = {{marginBottom: "0px"}}>
                <h1 className={classes.title}>How can we help?</h1>
                <p>We’re here to answer your questions about Vannevar Labs. Want to know more about our solutions? How you can integrate with our systems? How to get started? Let us know.</p>
              </GridItem>
            <GridItem  xs={12} sm={8} md={6} lg={6} xl={6}>
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <GridContainer>
                <GridItem xs={12} sm={12} md={12} style = {{backgroundColor: "rgba(0,0,0,0.5)"}}>
                  <CustomInput
                    labelText="Your Name"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12} style = {{backgroundColor: "rgba(0,0,0,0.5)"}}>
                  <CustomInput
                    labelText="Your Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12} style = {{backgroundColor: "rgba(0,0,0,0.5)"}}>
                <CustomInput
                  labelText="Your Message"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}
                />
                </GridItem>
                
                  <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    className={classes.textCenter}
                  >
                    <Button color="primary">Submit</Button>
                  </GridItem>
              </GridContainer>
            </form>
            </GridItem>
            </GridContainer>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(Contact);