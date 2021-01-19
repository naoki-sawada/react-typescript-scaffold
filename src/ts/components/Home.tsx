import React from "react";

type Props = {
  text?: string;
}

const Home: React.FC<Props> = ({ text = "" }) => {
  return <div id="home">{text}</div>;
}

export default Home;