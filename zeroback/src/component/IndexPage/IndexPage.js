// TradingViewWidget.jsx
import { Route } from "react-router-dom"
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "width": "800",
          "height": "550",
          "symbol": "NASDAQ:AAPL",
          "interval": "W",
          "timezone": "Asia/Seoul",
          "theme": "light",
          "style": "0",
          "locale": "kr",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "allow_symbol_change": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    }
  );

  return (
    <div className="tradingview-widget-container" ref={container} />
  );
}

function IndexPage() {
  return (
    <main>
      <Route path="/index" element={<TradingViewWidget />}></Route>
    </main>
  )
}

export default memo(TradingViewWidget);