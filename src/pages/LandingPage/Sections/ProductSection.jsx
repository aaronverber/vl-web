import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.jsx";
import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import lineart from "assets/img/lineart.svg"

class ProductSection extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className="product-section">
        <GridContainer style = {{width: "100%", display: "flex", padding: "0 20px", justifyContent: "center", alignItems: "center", flexWrap: "wrap-reverse"}}>
          <GridItem xs={12} sm={12} md={8} lg={6} xl={6}>
            <div id="decryptLeft">
              <img src={lineart} alt="..." />
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} lg={6} xl={6}>
            <div id="decryptRight">
            <div class="product" justify="center">
          <div class="product-item">
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
                  Contact us
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
