import React from "react";

import { useDispatch, connect } from "react-redux";
import { modalIsActive } from "../../redux/home/home.actions";
import ForkDetail from "../fork-detail/fork-detail.component";

const NoModalData =  () => {
 return (
   <div>
     No Fork Data Present
   </div>
 )
}

const ForkModal = ({ isActive, forkUserList }) => {
  const dispatch = useDispatch();

  return (
    <div id="modal" className={`modal ${isActive ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="box">
          {forkUserList.length !== 0
            ? forkUserList.map((forkUser,index) => {
                return <ForkDetail key={index} owner={forkUser.owner} />;
              })
            : <NoModalData/>}
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => dispatch(modalIsActive())}
      ></button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    forkUserList: state.home.forkUserListData,
  };
};
export default connect(mapStateToProps, null)(ForkModal);
