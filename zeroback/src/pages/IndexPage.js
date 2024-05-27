import NavBar from "../component/NavBar";
import TradingViewWidget from "../component/indexChart";
import SubBar from "../component/indexChartSubbar";
import TopBar from "../component/indexChartTopbar";
import "../styles/pages/IndexPage.css"

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
          <SubBar />
        </div>
      </div>
    </main>
  )
}

export default IndexPage;