import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false, isPressed: false, isHovered: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
    this.handleResumeButtonClick = this.handleResumeButtonClick.bind(this);
    this.handleResumeButtonHover = this.handleResumeButtonHover.bind(this);
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

  handleResumeButtonHover(isHovered) {
    this.setState({ isHovered });
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
      <header id="home" style={{ height: '100%', display: 'block' }}>
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
                  fontWeight: "600",
                  fontSize: "1.1rem",
                  background: this.state.checked
                    ? this.state.isHovered
                      ? "linear-gradient(135deg, #A0A0A0 0%, #7a7a7a 100%)"
                      : "linear-gradient(135deg, #8C8C8C 0%, #6d6d6d 100%)"
                    : this.state.isHovered
                    ? "linear-gradient(135deg, #E5D9B8 0%, #d9ccaa 100%)"
                    : "linear-gradient(135deg, #D7CAAA 0%, #c9b895 100%)",
                  borderColor: this.state.checked ? "#8C8C8C" : "#D7CAAA",
                  border: "2px solid " + (this.state.checked ? "#8C8C8C" : "#D7CAAA"),
                  borderRadius: "28px",
                  color: this.state.checked ? "#fff" : "#3C342C",
                  zIndex: 5,
                  boxShadow: this.state.isPressed
                    ? "0 2px 12px " + (this.state.checked ? "rgba(140,140,140,0.25)" : "rgba(215,202,170,0.3)")
                    : this.state.isHovered
                    ? "0 12px 32px " + (this.state.checked ? "rgba(140,140,140,0.5)" : "rgba(215,202,170,0.6)") + ", inset 0 1px 0 rgba(255,255,255,0.2)"
                    : "0 8px 28px " + (this.state.checked ? "rgba(140,140,140,0.4)" : "rgba(215,202,170,0.5)"),
                  marginTop: "34px",
                  marginBottom: "40px",
                  padding: "12px 28px",
                  textDecoration: "none",
                  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transform: this.state.isPressed ? "scale(0.95)" : this.state.isHovered ? "scale(1.05) translateY(-2px)" : "scale(1)",
                  letterSpacing: "0.5px",
                  textShadow: this.state.checked ? "0 1px 2px rgba(0,0,0,0.2)" : "none",
                  cursor: "pointer",
                  outline: "none"
                }}
                onClick={this.handleResumeButtonClick}
                onMouseEnter={() => this.handleResumeButtonHover(true)}
                onMouseLeave={() => this.handleResumeButtonHover(false)}
              >
                <span
                  className="iconify"
                  data-icon="mdi:file-download"
                  data-inline="false"
                  style={{
                    verticalAlign: "middle",
                    marginRight: "10px",
                    fontSize: "22px",
                    transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    transform: this.state.isHovered ? "translateY(2px)" : "translateY(0)"
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
