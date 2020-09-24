import React from "react";

class CompareVersions extends React.Component {
  state = {
    Version1: "",
    Version2: "",
    comparisonResult: false,
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.Version1 !== nextState.Version1) {
      return false;
    } else if (this.state.Version2 !== nextState.Version2) {
      return false;
    }
    return true;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({
      comparisonResult: this.compareVersions(
        this.state.Version1,
        this.state.Version2
      ),
    });
  };

  compareVersions = (version1, version2) => {
    let current = version1
      .replace(/\./g, " .")
      .split(" ")
      .map((x) => parseFloat(x, 10));
    let min = version2
      .replace(/\./g, " .")
      .split(" ")
      .map((x) => parseFloat(x, 10));
    for (let i = 0; i < Math.max(current.length, min.length); i++) {
      if ((current[i] || 0) < (min[i] || 0)) {
        return -1;
      } else if ((current[i] || 0) > (min[i] || 0)) {
        return 1;
      }
    }
    return 0;
  };

  render() {
    let equal = <span style={{ color: "#03fcf4" }}>equal</span>;
    let after = <span style={{ color: "#ff3d3d" }}>after</span>;
    let before = <span style={{ color: "#3dff5a" }}>before</span>;
    return (
      <div style={{ top: "8%", position: "absolute" }}>
        <div class="prompt">
          <h3>Welcome to Version Analyzer 1.0</h3>
          <p style={{ color: "rgba(255, 255, 255, 0.5)" }}>
            Accepted Formats: '1' -- '1.2' -- '1.2.3'
          </p>
          <div class="form-container">
            <section>
              <form onSubmit={this.handleFormSubmit} class="compare-form">
                <label>
                  <input
                    onChange={this.handleChange}
                    type="text"
                    pattern="[+]?[0-9]*[.]?[0-9]?[0-9]*[.]?[0-9]*[.]?[0-9]+"
                    name="Version1"
                    id="version1"
                    autoComplete="off"
                    required
                  />
                  <div class="label-text">Version A</div>
                </label>
                <label>
                  <input
                    onChange={this.handleChange}
                    type="text"
                    name="Version2"
                    id="version2"
                    autoComplete="off"
                    required
                  />
                  <div class="label-text">Version B</div>
                </label>
                <br></br>
                <button class="compare-btn" type="submit" value="Submit">
                  Compare
                </button>
                <br></br>
              </form>
            </section>
          </div>
        </div>
        <div>
          {this.state.comparisonResult === 0 ? (
            <h2>
              Version {this.state.Version1} is {equal} to Version{" "}
              {this.state.Version2}
            </h2>
          ) : this.state.comparisonResult === 1 ? (
            <h2>
              Version {this.state.Version1} was made {after} Version{" "}
              {this.state.Version2}
            </h2>
          ) : this.state.comparisonResult === -1 ? (
            <h2>
              Version {this.state.Version1} was made {before} Version{" "}
              {this.state.Version2}
            </h2>
          ) : null}
        </div>
      </div>
    );
  }
}

export default CompareVersions;
