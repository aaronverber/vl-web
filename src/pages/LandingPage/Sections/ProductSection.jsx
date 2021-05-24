import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.jsx";
import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import lineart from "assets/img/lineart.svg"

import {Link} from "gatsby";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div id="product-section" className={classes.container}>
        <GridContainer style = {{width: "100%", display: "flex", padding: "0 20px", justifyContent: "center", alignItems: "center", flexWrap: "wrap-reverse", maxWidth: "1140px"}}>
          <GridItem xs={12} sm={12} md={8} lg={6} xl={6}>
            <div id="decryptLeft">
              <img defer src={lineart} alt="Vannevar Decrypt" />
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} lg={6} xl={6}>
            <div id="decryptRight">
            <div className="product" justify="center">
          <div className="product-item">
            <h1 style={{fontFamily:"Saira Semi Condensed", fontWeight: "700"}}>VANNEVAR <span style={{fontWeight:"400"}}>Decrypt</span></h1>
            <h2>
              A persistent, taskable sensor for foreign text data.
            </h2>
            <br/>
            <Button
                  color="info"
                  size="md"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link to="/contact">Contact us</Link>
                </Button>
          </div>
        </div>
            </div>
          </GridItem>
        </GridContainer>

      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
