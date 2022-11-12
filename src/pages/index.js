import Menu from "../components/Menu";
import Header from "../components/Header";
import TimeLine from "../components/Timeline";

import { CSSReset } from "../components/CSSReset";
import config from "../../config.json";

export default function HomePage() {
  return (
    <>
      <CSSReset />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          // backgroundColor: "red",
        }}
      >
        <Menu />
        <Header />
        <TimeLine playlists={config.playlists} />
      </div>
    </>
  );
}
