import React from "react";


class CompareVersions extends React.Component {


  handleChange = () => {
    
  }

  handleFormSubmit = () => {

  }

  render(){
    return <div>
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
  }

}

export default CompareVersions;