import React from "react";
import { connect } from "react-redux";

import FileType from "../filetype/filetype.component";
import GistList from "../gist-list/gist-list.component";
import GistProfile from "../gist-profile/gist-profile.component";


const Main = ({fileTypeData, filteredData, currentUser}) => {
  return (
    <div className="columns">
      <div className="column is-3" >
        {currentUser ? <GistProfile currentUser={currentUser}/> : "" }
        {fileTypeData ? <FileType fileTypeData={fileTypeData}/> : ""}
      </div>
      <div className="column is-9">
        {filteredData && currentUser ? <GistList filteredData={filteredData} currentUser={currentUser}/> : "" }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
      fileTypeData: state.home.fileTypeData,
      filteredData: state.home.filteredData,
      currentUser: state.home.currentUser
    };
  };
export default connect(mapStateToProps, null)(Main);;
