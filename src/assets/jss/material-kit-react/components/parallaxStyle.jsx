const parallaxStyle = {
  parallax: {
    height: "800px",
    maxHeight: "1000px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "bottom right",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "flexStart"
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.2)"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  small: {
    height: "380px"
  }
};

export default parallaxStyle;
