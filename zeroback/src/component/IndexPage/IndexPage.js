import NavBar from "../PublicComponent/NavBar";
import TradingViewWidget from "./test";
import "./IndexPage.css"

function IndexPage() {
  return (
    <main>
      <NavBar />
      <div className="index-box">
        <TradingViewWidget />
      </div>
    </main>
  )
}

export default IndexPage;