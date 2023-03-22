import { type NextPage } from "next";
import { embed } from "@trufflehq/sdk";

const Home: NextPage = () => {
  return (
    <div>
      <div onClick={() => embed.setSize('500px', '500px')}>Change Size</div>
    </div>
  );
};

export default Home;
