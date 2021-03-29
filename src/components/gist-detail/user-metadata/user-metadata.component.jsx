import React, { Fragment } from "react";
import { useDispatch } from 'react-redux'

import ReactTimeAgo from 'react-time-ago'
import { fetchForkUserListStartAsync } from "../../../redux/home/home.actions";

const UserMetadata = ({ owner, created_at, id }) => {
  const dispatch = useDispatch()

  return (
    <Fragment>
      <div className="card-header-title">
        <div className="content is-small">
          <strong>{owner.login}</strong> Created <ReactTimeAgo date={created_at} locale="en-US"/>
        </div>
      </div>
      <a className="card-header-icon" aria-label="more options">
        <span className="icon" onClick={() => dispatch(fetchForkUserListStartAsync(id))}>
          <i className="fas fa-code-branch" aria-hidden="true"></i>
        </span>
      </a>
    </Fragment>
  );
};

export default UserMetadata;
