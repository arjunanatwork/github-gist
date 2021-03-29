import React, { Fragment } from "react";
import Header from "../../components/header/header.component";
import Main from "../../components/main/main.component";
import Searchbar from "../../components/searchbar/searchbar.component";

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container" style={{ marginTop: "10px" }}>
          <div className="columns is-mobile">
            <div className="column is-three-fifths is-offset-one-fifth">
              <Searchbar />
            </div>
          </div>
          <Main />
        </div>
      </Fragment>
    );
  }
}

export default Home;
