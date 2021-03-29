import React from "react";
import { connect } from "react-redux";

import UserMetadata from "./user-metadata/user-metadata.component";
import ReactEmbedGist from 'react-embed-gist';
import ForkModal from "../fork-modal/fork-modal.component";


const GistDetail = (props) => {
  return (
    <div className="card">
      <header className="card-header">
        <UserMetadata {...props.gistData} />
      </header>
      <div className="card-content">
        <div className="content">
          <ReactEmbedGist gist={props.gistData.owner.login+'/'+props.gistData.id} />
        </div>
      </div>
      {props.isActive ? <ForkModal isActive={props.isActive}/>:''}
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    isActive: state.home.modalIsActive,
  };
};
export default connect(mapStateToProps, null)(GistDetail);
