import Menu from "../components/Menu";
import Header from "../components/Header";
import TimeLine from "../components/Timeline";

import { CSSReset } from "../components/CSSReset";
import config from "../../config.json";
import { Footer } from "../components/Footer";

export default function HomePage() {
  const valorDoFiltro = "";

  return (
    <>
      <CSSReset />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu />
        <Header />
        <TimeLine 
        searchValue={valorDoFiltro}
        playlists={config.playlists} 
        />
        <Footer favorites={config.favorites} />
      </div>
    </>
  );
}
