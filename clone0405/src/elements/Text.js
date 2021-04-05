import axios from "axios";
import React from "react";
import { useSelectior } from "react-redux";
import { useState, useEffect } from "react";

const Test = () => {
  //요청 결과 , 로딩 상태, 에러
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setUsers(null);
        // 로딩 상태에선 true로 값을 바꿔준다
        const response = await axios.get("http://13.125.39.34/insta/main");

        setUsers(response.data);
        console.log(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;

  //데이터 넣기

  //   const updateData = () => {
  //     const data = {
  //       userId: "1022",
  //       id: "1022",
  //       title: "good",
  //       body: "nice dddd meet you",
  //     };

  //     axios
  //       .put("https://jsonplaceholder.typicode.com/posts/2", data)
  //       .then((data) => {
  //         console.log(data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  //   const deleteData = () => {
  //     const data = {
  //       userId: "1022",
  //       id: "1022",
  //       title: "good",
  //       body: "nice dddd meet you",
  //     };

  //     axios
  //       .delete("https://jsonplaceholder.typicode.com/posts/2", data)
  //       .then((data) => {
  //         console.log(data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  return (
    <React.Fragment>
      {/* <ul>
        {users.map((user) => (
          <li>{user[0]}</li>
        ))}
      </ul> */}
      <div>{users.ret._id}</div>
      {/* <button onClick={updateData}>포스트 엑시오스</button>
      <button onClick={deleteData}>딜리트 엑시오스</button> */}
    </React.Fragment>
  );
};

export default Test;

// import React from "react";
// import styled from "styled-components";

// const Text = (props) => {
//   const { bold, color, size, children, margin } = props;

//   const styles = {bold: bold, color: color, size: size, margin};
//   return (
//       <P {...styles}>
//           {children}
//       </P>
//   )
// };

// Text.defaultProps = {
//   children: null,
//   bold: false,
//   color: "#222831",
//   size: "14px",
//   margin: false,
// };

// const P = styled.p`
//   color: ${(props) => props.color};
//   font-size: ${(props) => props.size};
//   font-weight: ${(props) => (props.bold? "600" : "400")};
//   ${(props) => (props.margin? `margin: ${props.margin};` : '')}
// `;

// export default Text;
