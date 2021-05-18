import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.jsx";
import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    return (
      <div style = {{backgroundColor: "rgba(0,0,0,0.5)", height: "600px", display: "flex"}} className="product-section">
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
    );
  }
}

export default withStyles(productStyle)(ProductSection);
