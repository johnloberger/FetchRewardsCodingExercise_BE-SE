import React from "react";

class CompareVersions extends React.Component {
  state = {
    Version1: "",
    Version2: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.Version1, this.state.Version2);
    console.log(this.compareVersions(this.state.Version1, this.state.Version2));
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
    return (
      <div>
        <h3>Welcome to Version Analyzer 1.0</h3>
        <div class="form-container">
          <section>
            <form onSubmit={this.handleFormSubmit} class="compare-form">
              <label>
                <input
                  onChange={this.handleChange}
                  type="Version1"
                  name="Version1"
                  id="version1"
                  required
                />
                <div class="label-text">Version 1</div>
              </label>
              <label>
                <input
                  onChange={this.handleChange}
                  type="Version2"
                  name="Version2"
                  id="version2"
                  required
                />
                <div class="label-text">Version 2</div>
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
    );
  }
}

export default CompareVersions;
