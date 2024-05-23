import React, { useEffect, useRef, memo } from 'react';
import "./indexChart.css"

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
          "width": "1416",
          "height": "2250",
          "autosize": true,
          "symbol": "NASDAQ:AAPL",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "kr",
          "hide_top_toolbar": true,
          "allow_symbol_change": false,
          "details": true,
          "save_image": false,
          "calendar": false,
          "studies": [
            "STD;24h%Volume",
            "STD;Accumulation_Distribution",
            "STD;Advance%1Decline%1Line",
            "STD;Advance%1Decline%1Ratio",
            "STD;Advance_Decline_Ratio_Bars"
          ],
          "support_host": "https://www.tradingview.com"
        }`;
            container.current.appendChild(script);
        },
        []
    );

    return (
        <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
            <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
        </div>
    );
}

export default memo(TradingViewWidget);