import React, { useEffect, useState, useCallback } from "react";
import { getToken } from "./Auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/chart_topbar.css';

function Bookmark(probs) {
    let { indexId } = probs;
    const [marking, setMarking] = useState(false);

    const navigate = useNavigate();

    const getData = useCallback(async () => {
        const token = getToken();
        try {
            const response = await axios.get(`http://localhost:8080/bookmarks/${indexId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            setMarking(response.data);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    }, [{ indexId }]);

    useEffect(() => {
        getData();
    }, [getData]);

    const setData = async (e) => {
        e.preventDefault();
        const token = getToken();
        if (!token) {
            console.log("No token found, please log in.");
            navigate("/login");
            return;
        }

        try {
            console.log("Token:", token); // 토큰 로그 추가
            const response = await axios.put(`http://localhost:8080/bookmarks/${indexId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        console.log("marking change");
        const bk = document.getElementsByName("bookmark")[0];
        if (marking == true) {
            bk.checked = true;
        } else {
            bk.checked = false;
        }
    }, [marking]);

    return (<div id="topbar-bookmark" onChange={setData}>
        <input type="checkbox" id="topbar-checkbox" name="bookmark" />
        <img id="topbar-offimg" src={process.env.PUBLIC_URL + '/bookmark_off.png'} />
        <img id="topbar-onimg" src={process.env.PUBLIC_URL + '/bookmark_on.png'} />
    </div>
    );
}

export default Bookmark