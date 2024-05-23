import NavBar from "../../PublicComponent/NavBar";
import TradingViewWidget from "./indexChart";
import "./IndexPage.css"

function IndexPage() {
  return (
    <main>
      <NavBar linkName1={"POST"} linkName2={"LOGIN"} />
      <div className="index-box">
        <TradingViewWidget />
      </div>
    </main>
  )
}

export default IndexPage;