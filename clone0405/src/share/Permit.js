import React from "react";
import { useSelector } from "react-redux";

const Permit = (props) => {
  const is_login = useSelector((state) => state.user.is_login);

  // const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const token = localStorage.getItem("token");
  // const is_session = sessionStorage.getItem(_session_key) ? true : false;

  if (token) {
    return <React.Fragment>{props.children}</React.Fragment>;
  }

  return null;
};

export default Permit;
