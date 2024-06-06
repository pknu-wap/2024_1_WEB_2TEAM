import React, { useState } from "react";
import NavBar from "../component/NavBar";
import SubBar from "../component/chart_subbar";
import TopBar from "../component/chart_topbar";
import Graph from "../component/graph";
import "../styles/ChartPage.css"

function IndexPage() {
  const [linkData, setLinkData] = useState("");
  const [major_cg, setMajorCg] = useState("initial data");
  const [medium_cg, setMediumCg] = useState("initial data");
  const [minor_cg, setMinorCg] = useState("initial data");

  return (
    <main>
      <NavBar linkName1={"게시판"} link1={'/board'} />
      <div id="chart-contents">
        <TopBar major_cg={major_cg} medium_cg={medium_cg} minor_cg={minor_cg} />
        <div id="chart-box">
          <div id="chart-graph">
            <Graph link={linkData} />
          </div>
          <SubBar setData={setLinkData} set_major_cg={setMajorCg} set_medium_cg={setMediumCg} set_minor_cg={setMinorCg} />
        </div>
      </div>
    </main>
  );
}

export default IndexPage;
