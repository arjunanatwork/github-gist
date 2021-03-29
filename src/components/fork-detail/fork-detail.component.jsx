import React from "react";

const ForkDetail = (props) => {

    return (
        <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img
                  src={props.owner.avatar_url}
                  alt="Avatar"
                />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{props.owner.login}</strong>
                </p>
              </div>
            </div>
          </article>
    )
}

export default ForkDetail;