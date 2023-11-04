import { useEffect, useState } from "react";

const useNumber = () => {
    const [numbers, setNumbers] = useState([])
    useEffect(() => {
        axios.get("/getNumber").then(res=>setNumbers(res.data))
    },[])
  return numbers
};

export default useNumber;
