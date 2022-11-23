import type {NextPage} from "next";
import {useState} from "react";

const Home: NextPage = () => {
  const [state, setState] = useState<number>(0);
  return (
      <div>
        <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"}
                onClick={() => setState((prevState) => prevState + 1)}>Number: {state}</button>
      </div>
  );
};

export default Home;
