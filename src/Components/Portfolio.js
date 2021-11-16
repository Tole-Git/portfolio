import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        
        return (
          <div key={projects.title} className="columns">
            <div className="item-wrap portfolio-card">
              
              <a href={projects.url} title={projects.title}>
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div>
                    <h5 className="card-title">{projects.title}</h5>
                    <p  className="card-body">{projects.category}</p>
                  </div>
                </div>
              </a>
              
            </div>
          </div>
        )

      })



    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works. (WIP)</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div> 

          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
