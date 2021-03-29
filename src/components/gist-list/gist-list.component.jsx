import React, { Fragment, useState, useEffect } from "react";
import { useDispatch } from 'react-redux'

import GistDetail from "../gist-detail/gist-detail.component";
import Paginate from "../paginate/paginate.component";

import { fetchUserGistStartAsync } from "./../../redux/home/home.actions";

const GistList = ({ filteredData, currentUser }) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [totalGists, setTotalGists] = useState(null);

  useEffect(() => {
    setCurrentPage(1)
    setTotalGists(currentUser.public_gists)
  },[currentUser.login]);

  const dispatch = useDispatch()

  const pageChange = (pageNo) => {
   setCurrentPage(pageNo)
   dispatch(fetchUserGistStartAsync(pageNo, currentUser.login));
  }

  return (
    <Fragment>
      {filteredData.map((gistData) => {
        return (
          <div className="columns">
            <div className="column is-full">
              <GistDetail key={gistData.id} gistData={gistData} />
            </div>
          </div>
        );
      })}
      {filteredData ? <Paginate currentPage={currentPage} onClick={pageChange} totalGists={totalGists}/> : ""}
    </Fragment>
  );
};

export default GistList;
