import NavBar from "../../PublicComponent/NavBar";
import TradingViewWidget from "./indexChart";
import "./IndexPage.css"

function IndexPage() {
  return (
    <main>
      <NavBar linkName1={"POST"} linkName2={"LOGIN"} link1={'/board'} link2={'/login'} />
      <div className="index-box">
        <TradingViewWidget />
      </div>
    </main>
  )
}

export default IndexPage;