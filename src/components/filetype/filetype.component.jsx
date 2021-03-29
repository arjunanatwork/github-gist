import React from "react";
import { useDispatch } from 'react-redux'
import { filterByLanguages } from "../../redux/home/home.actions";

const FileType = ({ fileTypeData }) => {
  const dispatch = useDispatch()

  return (
    <div className="box">
      <div className="content">
        <h4>Languages</h4>
        <ul>
          {fileTypeData.map((type, index) => {
            return (<li className="filetype-item" key={index} onClick={() => dispatch(filterByLanguages(type.name))}>{type.name} <span className="tag is-rounded">{type.count}</span>
            </li>);
          })}
        </ul>
      </div>
    </div>
  );
};

export default FileType;
