import React from "react";

const GistProfile = ({currentUser}) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src={currentUser.avatar_url}
                alt="Avatar"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{currentUser.login}</p>
            <p className="subtitle is-6">{currentUser.company}</p>
          </div>
        </div>
        <div className="content">
          <p>{currentUser.bio}</p>
          <div className="git-profile has-text-centered	">
            <a className="button" href={currentUser.html_url} target="_blank" rel="noreferrer">View Github Profile</a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default GistProfile;