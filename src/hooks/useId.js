import { useMemo } from "react";

let createId = () => {
  let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
  return `${s4() + "-" + s4() + "-" + s4() + "-" + s4()}`;
};


const useGenerateId = () => {
  const id = useMemo(() => createId(), []);
  return `${id}`;
};

export default useGenerateId;
