import { useState } from "react";
import NavBar from "../component/NavBar";
import SubBar from "../component/chart_subbar";
import TopBar from "../component/chart_topbar";
import Graph from "../component/graph";
import "../styles/ChartPage.css"

function IndexPage() {
  const [linkData, setData] = useState("initial data");
  const [major_cg, set_major_cg] = useState("initial data");
  const [medium_cg, set_medium_cg] = useState("initial data");
  const [minor_cg, set_minor_cg] = useState("initial data");

  return (
    <main>
      <NavBar linkName1={"게시판"} linkName2={"로그인"} link1={'/board'} link2={'/login'} />
      <div id="chart-contents">
        <TopBar major_cg={major_cg} medium_cg={medium_cg} minor_cg={minor_cg} />
        <div id="chart-box">
          <div id="chart-graph">
            <Graph link={linkData} />
          </div>
          <SubBar setData={setData} set_major_cg={set_major_cg} set_medium_cg={set_medium_cg} set_minor_cg={set_minor_cg} />
        </div>
      </div>
    </main>
  )
}

export default IndexPage;