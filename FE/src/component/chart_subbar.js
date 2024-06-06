import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ChartSubbarElement from "./chart_subbar_element";
import '../styles/chart_subbar.css';

function SubBar(props) {
    const { indexId } = useParams();
    const [linkData, setData] = useState("initial data");
    const [major_cg, set_major_cg] = useState("initial data");
    const [medium_cg, set_medium_cg] = useState("initial data");
    const [minor_cg, set_minor_cg] = useState("initial data");

    const [Indexdata, setIndexData] = useState([]);

    function loadIndexs() {
        const data = Indexdata; // getData로 변경 예정
        console.log(data);

        return data.map((entity) => (
            <ChartSubbarElement
                id={entity.id}
                major_cg={entity.major_category}
                medium_cg={entity.medium_category}
                minor_cg={entity.minor_category}
                link={entity.link}

                setData={setData}
                set_major_cg={set_major_cg}
                set_medium_cg={set_medium_cg}
                set_minor_cg={set_minor_cg} />
        ));
    }

    const getData = useCallback(async () => {
        try {
            console.log(`Fetching data for indexId: ${indexId}`); // indexId 값 확인
            const response = await axios.get(`http://localhost:8080/index/${indexId}`);
            console.log("Fetched data:", response.data); // Fetch된 데이터를 콘솔에 출력
            setIndexData(response.data);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    }, [indexId]);

    useEffect(() => {
        console.log('Indexdata updated:', Indexdata);
        getData();
    }, [getData]); 

    /*  function getChartData() { // 임시
         return [
             { "id": 1, "major_category": "stock", "medium_category": "country", "minor_category": "SSEC", "link": "https://s.tradingview.com/dailyfx/widgetembed/?symbol=SSE_EOD%3A000001&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f4f7f9&studies=%5B%5D&hideideas=1&theme=White&timezone=exchange&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.dailyfx.com&utm_medium=widget&utm_campaign=chart&utm_term=COINBASE%3ABTCUSD" },
             { "id": 2, "major_category": "stock", "medium_category": "country", "minor_category": "FTSE", "link": "https://s.tradingview.com/dailyfx/widgetembed/?frameElementId=tradingview_5ae06&symbol=OANDA%3AUK100GBP&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f4f7f9&studies=%5B%5D&hideideas=1&theme=White&timezone=exchange&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.dailyfx.com&utm_medium=widget&utm_campaign=chart&utm_term=OANDA%3AUK100GBP" },
             { "id": 3, "major_category": "stock", "medium_category": "country", "minor_category": "DAX", "link": "https://s.tradingview.com/dailyfx/widgetembed/?frameElementId=tradingview_432ad&symbol=INDEX%3ADAX&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f4f7f9&studies=%5B%5D&hideideas=1&theme=White&timezone=exchange&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.dailyfx.com&utm_medium=widget&utm_campaign=chart&utm_term=INDEX%3ADAX" },
             { "id": 4, "major_category": "stock", "medium_category": "country", "minor_category": "NIKKEI", "link": "https://s.tradingview.com/dailyfx/widgetembed/?hideideas=1&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en#%7B%22symbol%22%3A%22EIGHTCAP%3AJPN225%22%2C%22frameElementId%22%3A%22tradingview_10da5%22%2C%22interval%22%3A%22D%22%2C%22hide_side_toolbar%22%3A%220%22%2C%22allow_symbol_change%22%3A%221%22%2C%22save_image%22%3A%221%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22Light%22%2C%22timezone%22%3A%22exchange%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22www.dailyfx.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22EIGHTCAP%3AJPN225%22%2C%22page-uri%22%3A%22www.dailyfx.com%2Fnikkei-225%22%7D" },
             { "id": 5, "major_category": "stock", "medium_category": "america_index", "minor_category": "us_dow", "link": "https://s.tradingview.com/dailyfx/widgetembed/?symbol=US30&amp;interval=D&amp;hidesidetoolbar=0&amp;symboledit=1&amp;saveimage=1&amp;toolbarbg=f4f7f9&amp;studies=%5B%5D&amp;hideideas=1&amp;theme=White&amp;timezone=exchange&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en&amp;utm_source=www.dailyfx.com&amp;utm_medium=widget&amp;utm_campaign=chart&amp;utm_term=COINBASE%3ABTCUSD" },
             { "id": 6, "major_category": "stock", "medium_category": "america_index", "minor_category": "us_nasdaq", "link": "https://s.tradingview.com/dailyfx/widgetembed/?symbol=USTECH100CFD&amp;interval=D&amp;hidesidetoolbar=0&amp;symboledit=1&amp;saveimage=1&amp;toolbarbg=f4f7f9&amp;studies=%5B%5D&amp;hideideas=1&amp;theme=White&amp;timezone=exchange&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en&amp;utm_source=www.dailyfx.com&amp;utm_medium=widget&amp;utm_campaign=chart&amp;utm_term=COINBASE%3ABTCUSD" },
             { "id": 7, "major_category": "stock", "medium_category": "america_index", "minor_category": "us_s&p500", "link": "https://kr.investing.com/charts/advinion.php?version=6.3.1.0&domain_ID=18&lang_ID=18&timezone_ID=88&pair_ID=166&interval=1D&majors=new_touch_pairs_indices" },
             { "id": 8, "major_category": "stock", "medium_category": "america_index", "minor_category": "us_dow_Transport_index", "link": "https://fred.stlouisfed.org/graph/graph-landing.php?g=K7D9&width=880&height=500" },
             { "id": 9, "major_category": "stock", "medium_category": "america_index", "minor_category": "us_put_call_ratio", "link": "http://www.market-harmonics.com/free-charts/sentiment/putcall.htm" },
             { "id": 10, "major_category": "stock", "medium_category": "america_index", "minor_category": "us_nya200r", "link": "https://stockcharts.com/h-sc/ui?s=$NYA200R" },
             { "id": 11, "major_category": "stock", "medium_category": "america_index", "minor_category": "us_insider_sold", "link": "http://openinsider.com/charts" },
             { "id": 12, "major_category": "stock", "medium_category": "msci", "minor_category": "msci_world_index", "link": "https://s.tradingview.com/dailyfx/widgetembed/?symbol=ACWI&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f4f7f9&studies=%5B%5D&hideideas=1&theme=White&timezone=exchange&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.dailyfx.com&utm_medium=widget&utm_campaign=chart&utm_term=COINBASE%3ABTCUSD" },
             { "id": 13, "major_category": "stock", "medium_category": "msci", "minor_category": "msci_emerging_markets_index", "link": "https://s.tradingview.com/dailyfx/widgetembed/?symbol=EEM&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f4f7f9&studies=%5B%5D&hideideas=1&theme=White&timezone=exchange&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.dailyfx.com&utm_medium=widget&utm_campaign=chart&utm_term=COINBASE%3ABTCUSD" },
             { "id": 14, "major_category": "bond", "medium_category": "", "minor_category": "msci_global_government_bond_yields", "link": "http://kr.investing.com/rates-bonds/" },
             { "id": 15, "major_category": "bond", "medium_category": "10_year_bond", "minor_category": "korea_10_year_bond", "link": "https://d3fy651gv2fhd3.cloudfront.net/embed/?s=GVSK10YR&v=202405160000&type=line&h=400&w=800" },
             { "id": 16, "major_category": "bond", "medium_category": "10_year_bond", "minor_category": "us_10_year_bond", "link": "https://d3fy651gv2fhd3.cloudfront.net/embed/?s=USGG10YR&v=202405202325&type=line&h=400&w=800" },
             { "id": 17, "major_category": "bond", "medium_category": "10_year_bond", "minor_category": "china_10_year_bond", "link": "https://d3fy651gv2fhd3.cloudfront.net/embed/?s=GCNY10YR&v=202405210000&type=line&h=400&w=800" },
             { "id": 18, "major_category": "bond", "medium_category": "10_year_bond", "minor_category": "british_10_year_bond", "link": "https://d3fy651gv2fhd3.cloudfront.net/embed/?s=GUKG10&v=202405210000&type=line&h=400&w=800" },
             { "id": 19, "major_category": "bond", "medium_category": "10_year_bond", "minor_category": "germany_10_year_bond", "link": "https://d3fy651gv2fhd3.cloudfront.net/charts/embed.png?s=GDBR10&v=202405160000&type=line&h=400&w=800" },
             { "id": 20, "major_category": "bond", "medium_category": "10_year_bond", "minor_category": "japan_10_year_bond", "link": "https://d3fy651gv2fhd3.cloudfront.net/embed/?s=GJGB10&v=202405160000&type=line&h=400&w=800" },
             { "id": 21, "major_category": "bond", "medium_category": "america_bond_index", "minor_category": "us_bei", "link": "https://s.tradingview.com/dailyfx/widgetembed/?symbol=T10YIE&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f4f7f9&studies=%5B%5D&hideideas=1&theme=White&timezone=exchange&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.dailyfx.com&utm_medium=widget&utm_campaign=chart&utm_term=T10YIE" },
             { "id": 22, "major_category": "bond", "medium_category": "america_bond_index", "minor_category": "us_treasury_tender_schedule", "link": "https://www.treasurydirect.gov/instit/instit.htm#tabs-2" },
             { "id": 23, "major_category": "bond", "medium_category": "america_bond_index", "minor_category": "us_tips", "link": "https://fred.stlouisfed.org/graph/graph-landing.php?g=zbhz&width=880&height=500" },
             { "id": 24, "major_category": "bond", "medium_category": "america_bond_index", "minor_category": "us_junk_bond_etf", "link": "https://s.tradingview.com/dailyfx/widgetembed/?symbol=HYG&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f4f7f9&studies=%5B%5D&hideideas=1&theme=White&timezone=exchange&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.dailyfx.com&utm_medium=widget&utm_campaign=chart&utm_term=COINBASE%3ABTCUSD" },
             { "id": 25, "major_category": "bond", "medium_category": "america_bond_index", "minor_category": "fed_rate_monitoring", "link": "https://kr.investing.com/central-banks/fed-rate-monitor" },
             { "id": 26, "major_category": "crypto", "medium_category": "", "minor_category": "major_crypto", "link": "https://www.widgets.investing.com/top-cryptocurrencies?theme=darkTheme" },
             { "id": 27, "major_category": "crypto", "medium_category": "crypto", "minor_category": "bitcoin", "link": "https://s.tradingview.com/dailyfx/widgetembed/?symbol=COINBASE%3ABTCUSD&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f4f7f9&studies=%5B%5D&hideideas=1&theme=White&timezone=exchange&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.dailyfx.com&utm_medium=widget&utm_campaign=chart&utm_term=COINBASE%3ABTCUSD" },
             { "id": 28, "major_category": "crypto", "medium_category": "crypto", "minor_category": "ethereum", "link": "https://s.tradingview.com/dailyfx/widgetembed/?symbol=COINBASE%3AETHUSD&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f4f7f9&studies=%5B%5D&hideideas=1&theme=White&timezone=exchange&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.dailyfx.com&utm_medium=widget&utm_campaign=chart&utm_term=COINBASE%3AETHUSD" },
             { "id": 29, "major_category": "exchange_rate", "medium_category": "", "minor_category": "realtime_currency", "link": "https://www.widgets.investing.com/live-currency-cross-rates?theme=darkTheme&pairs=1,3,1565,9511,9536,158,159,650" },
             { "id": 30, "major_category": "exchange_rate", "medium_category": "", "minor_category": "country_base_rate", "link": "http://kr.investing.com/central-banks/" },
             { "id": 31, "major_category": "exchange_rate", "medium_category": "exchange_rate", "minor_category": "dollar_yen", "link": "https://s.tradingview.com/dailyfx/widgetembed/?symbol=FX_IDC%3AUSDJPY&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f4f7f9&studies=%5B%5D&hideideas=1&theme=White&timezone=exchange&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.dailyfx.com&utm_medium=widget&utm_campaign=chart&utm_term=FX_IDC%3AUSDJPY" },
             { "id": 32, "major_category": "exchange_rate", "medium_category": "exchange_rate", "minor_category": "dollar_yuan", "link": "https://s.tradingview.com/dailyfx/widgetembed/?symbol=FX_IDC%3AUSDCNY&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f4f7f9&studies=%5B%5D&hideideas=1&theme=White&timezone=exchange&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.dailyfx.com&utm_medium=widget&utm_campaign=chart&utm_term=FX_IDC%3AUSDCNY" },
             { "id": 33, "major_category": "exchange_rate", "medium_category": "exchange_rate", "minor_category": "dollar_won", "link": "https://s.tradingview.com/dailyfx/widgetembed/?symbol=FX_IDC%3AUSDKRW&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f4f7f9&studies=%5B%5D&hideideas=1&theme=White&timezone=exchange&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.dailyfx.com&utm_medium=widget&utm_campaign=chart&utm_term=FX_IDC%3AEURKRW" },
             { "id": 34, "major_category": "exchange_rate", "medium_category": "exchange_rate", "minor_category": "yuan_won", "link": "https://s.tradingview.com/dailyfx/widgetembed/?symbol=FX_IDC%3ACNYKRW&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f4f7f9&studies=%5B%5D&hideideas=1&theme=White&timezone=exchange&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.dailyfx.com&utm_medium=widget&utm_campaign=chart&utm_term=FX_IDC%3ACNYKRW" },
             { "id": 35, "major_category": "exchange_rate", "medium_category": "exchange_rate", "minor_category": "euro_dollar", "link": "https://s.tradingview.com/dailyfx/widgetembed/?symbol=FX_IDC%3AEURUSD&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f4f7f9&studies=%5B%5D&hideideas=1&theme=White&timezone=exchange&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.dailyfx.com&utm_medium=widget&utm_campaign=chart&utm_term=FX_IDC%3AEURUSD" },
             { "id": 36, "major_category": "exchange_rate", "medium_category": "exchange_rate", "minor_category": "euro_won", "link": "https://s.tradingview.com/dailyfx/widgetembed/?symbol=FX_IDC%3AEURKRW&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f4f7f9&studies=%5B%5D&hideideas=1&theme=White&timezone=exchange&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.dailyfx.com&utm_medium=widget&utm_campaign=chart&utm_term=FX_IDC%3AEURKRW" },
             { "id": 37, "major_category": "exchange_rate", "medium_category": "exchange_rate", "minor_category": "yen_won", "link": "https://s.tradingview.com/dailyfx/widgetembed/?symbol=FX_IDC%3AJPYKRW&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f4f7f9&studies=%5B%5D&hideideas=1&theme=White&timezone=exchange&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.dailyfx.com&utm_medium=widget&utm_campaign=chart&utm_term=FX_IDC%3AJPYKRW" },
             { "id": 38, "major_category": "exchange_rate", "medium_category": "dollar_index", "minor_category": "dollar_index", "link": "https://s.tradingview.com/dailyfx/widgetembed/?symbol=CAPITALCOM:DXY&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f4f7f9&studies=%5B%5D&hideideas=1&theme=White&timezone=exchange&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.dailyfx.com&utm_medium=widget&utm_campaign=chart&utm_term=COINBASE%3ABTCUSD" },
             { "id": 39, "major_category": "exchange_rate", "medium_category": "dollar_index", "minor_category": "oitp", "link": "https://fred.stlouisfed.org/graph/graph-landing.php?g=tpc2&width=880&height=500" },
             { "id": 40, "major_category": "exchange_rate", "medium_category": "dollar_index", "minor_category": "dollar_redeption", "link": "https://fred.stlouisfed.org/graph/graph-landing.php?g=sm6z&width=880&height=500" },
             { "id": 41, "major_category": "raw_materials", "medium_category": "", "minor_category": "commodity_price", "link": "https://d3fy651gv2fhd3.cloudfront.net/embed/?s=CRB&&v=202405210017&type=line&h=400&w=800" },
             { "id": 42, "major_category": "raw_materials", "medium_category": "", "minor_category": "comprehensive_market_price", "link": "http://kr.investing.com/commodities/real-time-futures" },
             { "id": 43, "major_category": "raw_materials", "medium_category": "metal", "minor_category": "gold", "link": "https://s.tradingview.com/widgetembed/?symbol=TVC%3AGOLD&interval=D&hidesidetoolbar=1&symboledit=1&saveimage=0&toolbarbg=rgba(255, 255, 255, 1)&studies=%5B%5D&hideideas=1&theme=White&style=1&timezone=Etc%2FUTC&withdateranges=1&hidevolume=1&studies_overrides=%7B%7D&overrides=%7B%22symbolWatermarkProperties.color%22%3A%22%23fff%22%2C%22volumePaneSize%22%3A%22tiny%22%7D&enabled_features=%5B%5D&disabled_features=%5B%22use_localstorage_for_settings%22%5D&locale=en&utm_source=tradingeconomics.com&utm_medium=widget&utm_campaign=chart&utm_term=TVC%3AGOLD" },
             { "id": 44, "major_category": "raw_materials", "medium_category": "metal", "minor_category": "silver", "link": "https://s.tradingview.com/widgetembed/?symbol=TVC%3ASILVER&interval=D&hidesidetoolbar=1&symboledit=1&saveimage=0&toolbarbg=rgba(255, 255, 255, 1)&studies=%5B%5D&hideideas=1&theme=White&style=1&timezone=Etc%2FUTC&withdateranges=1&hidevolume=1&studies_overrides=%7B%7D&overrides=%7B%22symbolWatermarkProperties.color%22%3A%22%23fff%22%2C%22volumePaneSize%22%3A%22tiny%22%7D&enabled_features=%5B%5D&disabled_features=%5B%22use_localstorage_for_settings%22%5D&locale=en&utm_source=tradingeconomics.com&utm_medium=widget&utm_campaign=chart&utm_term=TVC%3ASILVER" },
             { "id": 45, "major_category": "raw_materials", "medium_category": "metal", "minor_category": "copper", "link": "https://s.tradingview.com/widgetembed/?symbol=COMEX_DL%3AHG1!&interval=D&hidesidetoolbar=1&symboledit=1&saveimage=0&toolbarbg=rgba(255, 255, 255, 1)&studies=%5B%5D&hideideas=1&theme=White&style=1&timezone=Etc%2FUTC&withdateranges=1&hidevolume=1&studies_overrides=%7B%7D&overrides=%7B%22symbolWatermarkProperties.color%22%3A%22%23fff%22%2C%22volumePaneSize%22%3A%22tiny%22%7D&enabled_features=%5B%5D&disabled_features=%5B%22use_localstorage_for_settings%22%5D&locale=en&utm_source=tradingeconomics.com&utm_medium=widget&utm_campaign=chart&utm_term=COMEX_DL%3AHG1!" },
             { "id": 46, "major_category": "raw_materials", "medium_category": "metal", "minor_category": "gold_reserve", "link": "https://en.m.wikipedia.org/wiki/Gold_reserve#Officially_reported_holdings" },
             { "id": 47, "major_category": "raw_materials", "medium_category": "metal", "minor_category": "gold_silver_ratio", "link": "https://s.tradingview.com/widgetembed/?symbol=TVC%3AGOLDSILVER&interval=D&hidesidetoolbar=1&symboledit=1&saveimage=0&toolbarbg=rgba(255, 255, 255, 1)&studies=%5B%5D&hideideas=1&theme=White&style=1&timezone=Etc%2FUTC&withdateranges=1&hidevolume=1&studies_overrides=%7B%7D&overrides=%7B%22symbolWatermarkProperties.color%22%3A%22%23fff%22%2C%22volumePaneSize%22%3A%22tiny%22%7D&enabled_features=%5B%5D&disabled_features=%5B%22use_localstorage_for_settings%22%5D&locale=en&utm_source=tradingeconomics.com&utm_medium=widget&utm_campaign=chart&utm_term=TVC%3AGOLDSILVER" },
             { "id": 48, "major_category": "raw_materials", "medium_category": "crude oil", "minor_category": "wti", "link": "https://s.tradingview.com/widgetembed/?frameElementId=tradingview_51d4b&symbol=TVC%3AUSOIL&interval=1D&hidesidetoolbar=1&symboledit=1&saveimage=0&toolbarbg=rgba(255,%20255,%20255,%201)&studies=%5B%5D&hideideas=1&theme=White&style=1&timezone=Etc%2FUTC&withdateranges=1&hidevolume=1&studies_overrides=%7B%7D&overrides=%7B%22symbolWatermarkProperties.color%22%3A%22%23fff%22%2C%22volumePaneSize%22%3A%22tiny%22%7D&enabled_features=%5B%5D&disabled_features=%5B%22use_localstorage_for_settings%22%5D&locale=ko&utm_source=ko.tradingeconomics.com&utm_medium=widget&utm_campaign=chart&utm_term=TVC%3AUSOIL" },
             { "id": 49, "major_category": "raw_materials", "medium_category": "crude oil", "minor_category": "us_oil_production", "link": "https://www.eia.gov/dnav/pet/hist/LeafHandler.ashx?n=PET&s=WCRFPUS2&f=W" },
             { "id": 50, "major_category": "raw_materials", "medium_category": "crude oil", "minor_category": "refining_margin", "link": "https://ir-service.appspot.com/v/nesteoil/monitor/RefiningMargin/en" },
             { "id": 51, "major_category": "raw_materials", "medium_category": "semiconductor", "minor_category": "semiconductor_etf", "link": "https://s.tradingview.com/dailyfx/widgetembed/?symbol=SOXX&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f4f7f9&studies=%5B%5D&hideideas=1&theme=White&timezone=exchange&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.dailyfx.com&utm_medium=widget&utm_campaign=chart&utm_term=COINBASE%3ABTCUSD" },
             { "id": 52, "major_category": "raw_materials", "medium_category": "semiconductor", "minor_category": "dramexchange", "link": "http://www.dramexchange.com/" },
             { "id": 53, "major_category": "raw_materials", "medium_category": "silicon", "minor_category": "us_steal_etf", "link": "https://s.tradingview.com/dailyfx/widgetembed/?symbol=SLX&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f4f7f9&studies=%5B%5D&hideideas=1&theme=White&timezone=exchange&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.dailyfx.com&utm_medium=widget&utm_campaign=chart&utm_term=COINBASE%3ABTCUSD" },
             { "id": 54, "major_category": "raw_materials", "medium_category": "silicon", "minor_category": "china_polysilicon", "link": "http://www.sunsirs.com/uk/prodetail-463.html" },
             { "id": 55, "major_category": "raw_materials", "medium_category": "silicon", "minor_category": "shanghai_steal", "link": "https://d3fy651gv2fhd3.cloudfront.net/embed/?s=steel&v=202405210000&type=line&h=400&w=800" },
             { "id": 56, "major_category": "korea", "medium_category": "", "minor_category": "m1", "link": "https://tradingeconomics.com/embed/?s=southkoremonsupm1&v=202405210000&h=400&w=800&ref=" },
             { "id": 57, "major_category": "korea", "medium_category": "", "minor_category": "m2", "link": "https://tradingeconomics.com/embed/?s=southkoremonsupm2&v=202405210000&h=400&w=800&ref=" },
             { "id": 58, "major_category": "korea", "medium_category": "economy", "minor_category": "inflation", "link": "https://tradingeconomics.com/embed/?s=kocpiyoy&v=202405210000&h=400&w=800&ref=" },
             { "id": 59, "major_category": "korea", "medium_category": "economy", "minor_category": "leading_index", "link": "https://tradingeconomics.com/embed/?s=southkoreleaecoind&v=202405210344&h=400&w=800&ref=" },
             { "id": 60, "major_category": "korea", "medium_category": "economy", "minor_category": "annual_gdp_growth", "link": "https://tradingeconomics.com/embed/?s=kogdpyoy&v=202405210000&h=400&w=800&ref=" },
             { "id": 61, "major_category": "korea", "medium_category": "economy", "minor_category": "gorvernment_debt_gdp", "link": "https://tradingeconomics.com/embed/?s=kordebt2gdp&v=202405210000&h=400&w=800&ref=" },
             { "id": 62, "major_category": "korea", "medium_category": "economy", "minor_category": "private_debt_gdp", "link": "https://tradingeconomics.com/embed/?s=southkorepdtg&v=202405210000&h=400&w=800&ref=" },
             { "id": 63, "major_category": "korea", "medium_category": "economy", "minor_category": "increase_producer_price", "link": "https://tradingeconomics.com/embed/?s=southkorepropricha&v=202405151617V20230410&h=300&w=600&ref=/south-korea/producer-prices-change&type=column&d1=2023-04-01&d2=2024-03-30' height='300' width='600'  frameborder='0' scrolling='no'" },
             { "id": 64, "major_category": "korea", "medium_category": "real_estate", "minor_category": "housing_price", "link": "https://tradingeconomics.com/embed/?s=southkorehouind&v=202405210000&h=400&w=800&ref=" },
             { "id": 65, "major_category": "korea", "medium_category": "real_estate", "minor_category": "increase_housing_prices", "link": "https://www.index.go.kr/unity/potal/main/EachDtlPageDetail.do?idx_cd=1240" },
             { "id": 66, "major_category": "korea", "medium_category": "corporation", "minor_category": "stock_change", "link": "https://tradingeconomics.com/embed/?s=southkorechaininv&v=202405210400&h=400&w=800&ref=" },
             { "id": 67, "major_category": "korea", "medium_category": "corporation", "minor_category": "manufacturing_pmi", "link": "https://tradingeconomics.com/embed/?s=southkoremanpmi&v=202405210000&h=400&w=800&ref=" },
             { "id": 68, "major_category": "korea", "medium_category": "trade", "minor_category": "korea_export", "link": "https://tradingeconomics.com/embed/?s=koextot&v=202405210000&h=400&w=800&ref=" },
             { "id": 69, "major_category": "korea", "medium_category": "trade", "minor_category": "major_export", "link": "https://comtrade.tradingeconomics.com/comtrade/share?r=kor&c=0000&v=treemapmarkets&t=2" },
             { "id": 70, "major_category": "korea", "medium_category": "trade", "minor_category": "major_import", "link": "https://comtrade.tradingeconomics.com/comtrade/share?r=kor&c=0000&v=treemapmarkets&t=1" },
             { "id": 71, "major_category": "korea", "medium_category": "trade", "minor_category": "trade_balance", "link": "https://tradingeconomics.com/embed/?s=kotrbal&v=202405210000&h=400&w=800&ref=" },
             { "id": 72, "major_category": "korea", "medium_category": "trade", "minor_category": "current_account", "link": "https://tradingeconomics.com/embed/?s=kobpcb&v=202405210000&h=400&w=800&ref=" },
             { "id": 73, "major_category": "america", "medium_category": "", "minor_category": "m1", "link": "https://tradingeconomics.com/embed/?s=unitedstamonsupm1&v=202405210413&h=400&w=800&ref=" },
             { "id": 74, "major_category": "america", "medium_category": "", "minor_category": "m2", "link": "https://tradingeconomics.com/embed/?s=unitedstamonsupm2&v=202405210414&h=400&w=800&ref=" },
             { "id": 75, "major_category": "america", "medium_category": "economy", "minor_category": "inflation", "link": "https://tradingeconomics.com/embed/?s=cpi+yoy&v=202405210414&h=400&w=800&ref=" },
             { "id": 76, "major_category": "america", "medium_category": "economy", "minor_category": "leading_index", "link": "https://tradingeconomics.com/embed/?s=unitedstaleaecoind&v=202405210415&h=400&w=800&ref=" },
             { "id": 77, "major_category": "america", "medium_category": "economy", "minor_category": "annual_gdp_growth", "link": "//fred.stlouisfed.org/graph/graph-landing.php?g=qPR2&width=880&height=500" },
             { "id": 78, "major_category": "america", "medium_category": "economy", "minor_category": "gorvernment_debt_gdp", "link": "https://tradingeconomics.com/embed/?s=usadebt2gdp&v=202405210459&h=400&w=800&ref=" },
             { "id": 79, "major_category": "america", "medium_category": "economy", "minor_category": "private_debt_gdp", "link": "https://tradingeconomics.com/embed/?s=unitedstpridebtogdp&v=202405210459&h=400&w=800&ref=" },
             { "id": 80, "major_category": "america", "medium_category": "economy", "minor_category": "increase_producer_price", "link": "https://fred.stlouisfed.org/graph/graph-landing.php?g=6HWS&width=539&height=308" },
             { "id": 81, "major_category": "america", "medium_category": "economy", "minor_category": "fed_reserves", "link": "https://fred.stlouisfed.org/graph/graph-landing.php?g=12AUX&width=464&height=266" },
             { "id": 82, "major_category": "america", "medium_category": "economy", "minor_category": "pce", "link": "https://tradingeconomics.com/embed/?s=unitedstapcepriind&v=202405210503&h=400&w=800&ref=" },
             { "id": 83, "major_category": "america", "medium_category": "economy", "minor_category": "michigan_consumer sentiment", "link": "https://tradingeconomics.com/embed/?s=concconf&v=202405210504&h=400&w=800&ref=" },
             { "id": 84, "major_category": "america", "medium_category": "economy", "minor_category": "unemployment", "link": "https://tradingeconomics.com/embed/?s=usurtot&v=202405210506&h=400&w=800&ref=" },
             { "id": 85, "major_category": "america", "medium_category": "real_estate", "minor_category": "housing_price", "link": "https://fred.stlouisfed.org/graph/graph-landing.php?g=6HXl&width=880&height=500" },
             { "id": 86, "major_category": "america", "medium_category": "real_estate", "minor_category": "housing_construction", "link": "https://fred.stlouisfed.org/graph/graph-landing.php?g=6HXx&width=880&height=500" },
             { "id": 87, "major_category": "america", "medium_category": "real_estate", "minor_category": "loan_delinquency", "link": "https://fred.stlouisfed.org/graph/graph-landing.php?g=Qew0&width=880&height=500" },
             { "id": 88, "major_category": "america", "medium_category": "corporation", "minor_category": "stock_change", "link": "https://tradingeconomics.com/embed/?s=unitedstachaininv&v=202404251329V20230410&h=300&w=600&ref=/united-states/changes-in-inventories&type=column&d1=2021-03-01&d2=2024-03-01' height='300' width='600'  frameborder='0' scrolling='no'" },
             { "id": 89, "major_category": "america", "medium_category": "corporation", "minor_category": "manufacturing_pmi", "link": "https://tradingeconomics.com/embed/?s=unitedstamanpmi&v=202405210512&h=400&w=800&ref=" },
             { "id": 90, "major_category": "america", "medium_category": "corporation", "minor_category": "manufacturing_ism", "link": "https://tradingeconomics.com/embed/?s=napmpmi&v=202405210512&h=400&w=800&ref=" },
             { "id": 91, "major_category": "america", "medium_category": "corporation", "minor_category": "corporate_inventory", "link": "https://tradingeconomics.com/embed/?s=unitedstabusinv&v=202405210513&h=400&w=800&ref=" },
             { "id": 92, "major_category": "america", "medium_category": "corporation", "minor_category": "corporate_inventory_sales", "link": "https://fred.stlouisfed.org/graph/graph-landing.php?g=6HXN&width=464&height=266" },
             { "id": 93, "major_category": "america", "medium_category": "corporation", "minor_category": "corporate_profits", "link": "https://fred.stlouisfed.org/graph/graph-landing.php?g=fWfr&width=880&height=500" },
             { "id": 94, "major_category": "america", "medium_category": "corporation", "minor_category": "industrial_production_growth", "link": "https://fred.stlouisfed.org/graph/graph-landing.php?g=6HXK&width=880&height=500" },
             { "id": 95, "major_category": "america", "medium_category": "corporation", "minor_category": "utilization", "link": "https://fred.stlouisfed.org/graph/graph-landing.php?g=6HXM&width=880&height=500" },
             { "id": 96, "major_category": "america", "medium_category": "trade", "minor_category": "major_export", "link": "https://comtrade.tradingeconomics.com/comtrade/share?r=usa&c=0000&v=treemapmarkets&t=2" },
             { "id": 97, "major_category": "america", "medium_category": "trade", "minor_category": "major_import", "link": "https://comtrade.tradingeconomics.com/comtrade/share?r=usa&c=0000&v=treemapmarkets&t=1" },
             { "id": 98, "major_category": "china", "medium_category": "", "minor_category": "m1", "link": "https://tradingeconomics.com/embed/?s=chinamonsupm1&v=202405210000&h=400&w=800&ref=" },
             { "id": 99, "major_category": "china", "medium_category": "", "minor_category": "m2", "link": "https://tradingeconomics.com/embed/?s=chinamonsupm2&v=202405210000&h=400&w=800&ref=" },
             { "id": 100, "major_category": "china", "medium_category": "economy", "minor_category": "inflation", "link": "https://tradingeconomics.com/embed/?s=cncpiyoy&v=202405210000&h=400&w=800&ref=" },
             { "id": 101, "major_category": "china", "medium_category": "economy", "minor_category": "leading_index", "link": "https://tradingeconomics.com/embed/?s=chinaleaecoind&v=202405210545&h=400&w=800&ref=" },
             { "id": 102, "major_category": "china", "medium_category": "economy", "minor_category": "annual_gdp_growth", "link": "https://tradingeconomics.com/embed/?s=cngdpyoy&v=202405210000&h=400&w=800&ref=" },
             { "id": 103, "major_category": "china", "medium_category": "economy", "minor_category": "gorvernment_debt_gdp", "link": "https://tradingeconomics.com/embed/?s=chndebt2gdp&v=202405210000&h=400&w=800&ref=" },
             { "id": 104, "major_category": "china", "medium_category": "economy", "minor_category": "increase_producer_price", "link": "https://tradingeconomics.com/embed/?s=chinapropricha&v=202405210000&h=400&w=800&ref=" },
             { "id": 105, "major_category": "china", "medium_category": "real_estate", "minor_category": "housing_price", "link": "https://tradingeconomics.com/embed/?s=chinahouind&v=202405210000&h=400&w=800&ref=" },
             { "id": 106, "major_category": "china", "medium_category": "corporation", "minor_category": "stock_change", "link": "https://tradingeconomics.com/embed/?s=chinachaininv&v=202405210548&h=400&w=800&ref=" },
             { "id": 107, "major_category": "china", "medium_category": "corporation", "minor_category": "manufacturing_pmi", "link": "https://kr.investing.com/economic-calendar/chinese-manufacturing-pmi-594" },
             { "id": 108, "major_category": "china", "medium_category": "corporation", "minor_category": "manufacturing_pmi_caixin", "link": "https://tradingeconomics.com/embed/?s=chinamanpmi&v=202405210000&h=400&w=800&ref=" },
             { "id": 109, "major_category": "eurozone", "medium_category": "", "minor_category": "m1", "link": "https://tradingeconomics.com/embed/?s=emuevolvmonsupm1&v=202405210000&h=400&w=800&ref=" },
             { "id": 110, "major_category": "eurozone", "medium_category": "", "minor_category": "m2", "link": "https://tradingeconomics.com/embed/?s=emuevolvmonsupm2&v=202405210000&h=400&w=800&ref=" },
             { "id": 111, "major_category": "eurozone", "medium_category": "economy", "minor_category": "inflation", "link": "https://tradingeconomics.com/embed/?s=eccpemuy&v=202405210000&h=400&w=800&ref=" },
             { "id": 112, "major_category": "eurozone", "medium_category": "economy", "minor_category": "annual_gdp_growth", "link": "https://tradingeconomics.com/embed/?s=eugnemuy&v=202405210000&h=400&w=800&ref=" },
             { "id": 113, "major_category": "eurozone", "medium_category": "economy", "minor_category": "gorvernment_debt_gdp", "link": "https://tradingeconomics.com/embed/?s=emudebt2gdp&v=202405210000&h=400&w=800&ref=" },
             { "id": 114, "major_category": "eurozone", "medium_category": "economy", "minor_category": "increase_producer_price", "link": "https://tradingeconomics.com/embed/?s=euroareapropricha&v=202405210000&h=400&w=800&ref=" },
             { "id": 115, "major_category": "eurozone", "medium_category": "real_estate", "minor_category": "housing_price", "link": "https://tradingeconomics.com/embed/?s=euroareahouind&v=202405210000&h=400&w=800&ref=" },
             { "id": 116, "major_category": "eurozone", "medium_category": "corporation", "minor_category": "stock_change", "link": "https://tradingeconomics.com/embed/?s=euroareachaininv&v=202405210555&h=400&w=800&ref=" },
             { "id": 117, "major_category": "eurozone", "medium_category": "corporation", "minor_category": "manufacturing_pmi", "link": "https://tradingeconomics.com/embed/?s=euroareamanpmi&v=202405210000&h=400&w=800&ref=" }];
     } */

    function setDatas() {
        props.setData(linkData);
        props.set_major_cg(major_cg);
        props.set_medium_cg(medium_cg);
        props.set_minor_cg(minor_cg);
    }

    return (
        <div id="subbar">
            <div id="subbar-classification" onChange={setDatas}>
                {loadIndexs()}
            </div>
        </div>
    );
}

export default SubBar;