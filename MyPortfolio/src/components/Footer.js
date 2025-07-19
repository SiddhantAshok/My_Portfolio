import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span 
            key={network.name} 
            className="m-4"
            style={{ position: "relative", display: "inline-block" }}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector("i").style.transform = "scale(1.2)";
              e.currentTarget.querySelector(".tooltip").style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector("i").style.transform = "scale(1)";
              e.currentTarget.querySelector(".tooltip").style.opacity = "0";
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "-2rem",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#1F2937",
                color: "white",
                fontSize: "1.1rem",
                padding: "0.25rem 0.5rem",
                borderRadius: "0.25rem",
                opacity: 0,
                transition: "opacity 0.3s ease",
                pointerEvents: "none",
                whiteSpace: "nowrap",
              }}
              className="tooltip"
            >
              {network.name}
            </span>
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i 
                className={network.class}
                style={{
                  transition: "transform 0.3s ease",
                  display: "inline-block",
                }}
              ></i>
            </a>
          </span>
        );
      });
    }

    return (
      <footer>
        <div className="col-md-12">
          <div className="social-links">{networks}</div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Copyright &copy;{" "}
                {this.props.sharedBasicInfo
                  ? this.props.sharedBasicInfo.name
                  : "???"}
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;