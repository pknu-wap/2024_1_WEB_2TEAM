import NavBar from "../../PublicComponent/NavBar";
import TradingViewWidget from "./indexChart";
import TopBar from "./indexChartTopbar";
import "./IndexPage.css"

function IndexPage() {
  return (
    <main>
      <NavBar linkName1={"POST"} linkName2={"LOGIN"} link1={'/board'} link2={'/login'} />
      <div id="chart-contents">
        <TopBar />
        <div id="chart-box">
          <div id="chart-graph">
            <TradingViewWidget />
          </div>
          {/* SubBar */}
        </div>
      </div>
    </main>
  )
}

export default IndexPage;