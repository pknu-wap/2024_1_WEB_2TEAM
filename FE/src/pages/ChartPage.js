import { useState } from "react";
import NavBar from "../component/NavBar";
import TradingViewWidget from "../component/chart_graph";
import SubBar from "../component/chart_subbar";
import TopBar from "../component/chart_topbar";
import Graph from "../component/graph";
import "../styles/ChartPage.css"

function IndexPage() {
  const [linkData, setData] = useState("initial data");

  return (
    <main>
      <NavBar linkName1={"게시판"} linkName2={"로그인"} link1={'/board'} link2={'/login'} />
      <div id="chart-contents">
        <TopBar />
        <div id="chart-box">
          <div id="chart-graph">
            <Graph link={linkData} />
          </div>
          <SubBar setData={setData} />
        </div>
      </div>
    </main>
  )
}

export default IndexPage;