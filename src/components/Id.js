import React from "react";

const Id = ({ aaa, arr, setArr }) => {
  const deleteId = () => {
    let remaining = arr.filter((a) => a !== aaa);
    setArr(remaining);
  };
  return (
    <div className="arr">
      {aaa}
      <button onClick={deleteId}>delete</button>
    </div>
  );
};

export default Id;
