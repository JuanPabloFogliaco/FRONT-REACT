import ReactLoading from "react-loading";
import { Wraper } from "../Wrapper/Wrapper";

const Loading = () => {
  return (
    <Wraper
      width="100%"
      height="600px"
      justifyContent="center"
      aligItem="center"
      background="whitesmoke"
    >
      <ReactLoading
        type={"spinningBubbles"}
        color={"#ad3245"}
        height={67}
        width={75}
      />
    </Wraper>
  );
};

export default Loading;
