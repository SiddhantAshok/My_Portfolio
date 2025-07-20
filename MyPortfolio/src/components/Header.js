import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false, isPressed: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
    this.handleResumeButtonClick = this.handleResumeButtonClick.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  handleResumeButtonClick() {
    this.setState({ isPressed: true });
    setTimeout(() => this.setState({ isPressed: false }), 150);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();
    }

    const HeaderTitleTypeAnimation = React.memo( () => {
      return <Typical className="title-styles" steps={this.titles} loop={50} />
    }, (props, prevProp) => true);

    return (
      <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
        <div className="row aligner" style={{height: '100%'}}>
          <div className="col-md-12">
            <div>
              <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
              <br/>
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#baaa80"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="twemoji:owl"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "#353239",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="noto-v1:sun-with-face"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#353239",
                    }}
                  ></span>
                }
                id="icon-switch"
              />
              {/* Download Resume Button */}
              <a
                href="images/resume.pdf"
                download
                className="btn btn-primary mx-auto"
                style={{
                  display: "block",
                  width: "fit-content",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  backgroundColor: "rgba(53, 53, 53, 0.5)", // translucent
                  borderColor: "rgba(53, 53, 53, 0.3)",
                  borderRadius: "25px", // rounded corners
                  backdropFilter: "blur(2px)", // optional: adds a glass effect
                  color: "#fff",
                  boxShadow: this.state.isPressed
                    ? "0 4px 24px rgba(53,53,53,0.25)"
                    : "0 8px 24px rgba(53,53,53,0.35)", // stronger bottom shadow
                  marginTop: "34px",
                  padding: "8px 15px",
                  textDecoration: "none",
                  transition: "transform 0.15s, box-shadow 0.15s",
                  transform: this.state.isPressed ? "scale(0.96)" : "scale(1)"
                }}
                onClick={this.handleResumeButtonClick}
              >
                <span
                  className="iconify"
                  data-icon="mdi:file-download"
                  data-inline="false"
                  style={{
                    verticalAlign: "middle",
                    marginRight: "8px",
                    fontSize: "22px"
                  }}
                ></span>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
