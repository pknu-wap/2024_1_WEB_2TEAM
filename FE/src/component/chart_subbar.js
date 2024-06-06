import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { getToken } from "./Auth";
import ChartSubbarElement from "./chart_subbar_element";
import '../styles/chart_subbar.css';

function SubBar(props) {
    const { indexId } = useParams();
    const [id, setId] = useState(indexId);
    const [linkData, setData] = useState("");
    const [major_cg, set_major_cg] = useState("initial data");
    const [medium_cg, set_medium_cg] = useState("initial data");
    const [minor_cg, set_minor_cg] = useState("initial data");
    const navigate = useNavigate();

    const [Indexdata, setIndexData] = useState([]);

    function loadIndexs() {
        const data = Indexdata;
        console.log(data);

        return data.map((entity) => (
            <ChartSubbarElement
                key={entity.indexId}
                id={entity.indexId}
                major_cg={entity.majorCategory}
                medium_cg={entity.mediumCategory}
                minor_cg={entity.minorCategory}
                link={entity.link}

                setData={setData}
                set_major_cg={set_major_cg}
                set_medium_cg={set_medium_cg}
                set_minor_cg={set_minor_cg}
                setId={setId} // id를 설정하도록 함
            />
        ));
    }

    const getData = useCallback(async () => {
        try {
            if (indexId != 10) {
                const response = await axios.get(`http://localhost:8080/index/${indexId}`);
                setIndexData(response.data);
            } else {
                const token = getToken();
                if (!token) {
                    console.log("No token found, please log in.");
                    navigate("/login");
                    return;
                }

                const response = await axios.get(`http://localhost:8080/index/${indexId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                setIndexData(response.data);
            }
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    }, [indexId]);

    useEffect(() => {
        console.log('Indexdata updated:', Indexdata);
        getData();
    }, [getData]);

    useEffect(() => {
        props.setData(linkData);
        props.set_major_cg(major_cg);
        props.set_medium_cg(medium_cg);
        props.set_minor_cg(minor_cg);
        props.setId(id);
    }, [linkData, major_cg, medium_cg, minor_cg, id]);

    return (
        <div id="subbar">
            <div id="subbar-classification">
                {loadIndexs()}
            </div>
        </div>
    );
}

export default SubBar;

/*  */