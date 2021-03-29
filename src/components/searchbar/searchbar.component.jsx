import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";

import toast, { Toaster } from "react-hot-toast";

import { fetchUserGistStartAsync } from "./../../redux/home/home.actions";

const SearchBar = ({isFetching, fetchUserGistStartAsync, errorMessage}) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    console.log("search effect");
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [errorMessage]);

  const onFormSubmit = (event) => {
    try {
      event.preventDefault();
      if (!user) {
        toast.error("Enter a User to Search."); // Show Error when no user input is given
      } else {
        fetchUserGistStartAsync(1, user); // Get User Gist Data
      }
    } catch (error) {
      toast.error(errorMessage);
    }
  };

  return (
    <Fragment>
      <form onSubmit={onFormSubmit}>
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="Find a user"
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <button
            className={`${
              isFetching ? "is-loading" : ""
            } button has-background-link	has-text-white`}
            onClick={onFormSubmit}
          >
            Search
          </button>
        </div>
      </form>
      <Toaster position="bottom-center" />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.home.isFetching,
    errorMessage: state.home.errorMessage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserGistStartAsync: (currentPage, user) => dispatch(fetchUserGistStartAsync(currentPage, user)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
