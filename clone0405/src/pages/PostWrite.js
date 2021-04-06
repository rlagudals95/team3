import React from "react";
import axios from "axios";
import { useDispatch, useSelecotor } from "react-redux";
// import {actionCreator as imageActions } from "psot2"

const PostWrite = () => {
  const [file, setFile] = React.useEffect(null);

  return (
    <React.Fragment>
      <input type="file" />
      <input type="text" />
    </React.Fragment>
  );
};

export default PostWrite;
