import React, { useEffect, useState, useCallback } from "react";
import { getToken } from "./Auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/chart_topbar.css';

function Bookmark({ indexId }) {
    const [id, setId] = useState(indexId);
    const [marking, setMarking] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        console.log("useEffect - Setting id:", indexId);
        setId(indexId);
    }, [indexId]);

    const getData = useCallback(async () => {
        const token = getToken();
        if (!token) {
            console.log("No token found, please log in.");
            navigate("/login");
            return;
        }

        if (id === undefined) {
            console.error("getData - id is undefined");
            return;
        }

        try {
            console.log("Fetching data for id:", id);
            const response = await axios.get(`http://localhost:8080/bookmarks/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            setMarking(response.data);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    }, [id, navigate]);

    useEffect(() => {
        if (id !== undefined) {
            getData();
        } else {
            console.error("useEffect - id is undefined");
        }
    }, [getData, id]);

    const setData = async (e) => {
        e.preventDefault();
        const token = getToken();
        if (!token) {
            console.log("No token found, please log in.");
            navigate("/login");
            return;
        }

        if (id === undefined) {
            console.error("setData - id is undefined");
            return;
        }

        try {
            console.log("PUT request for id:", id);
            console.log("Token:", token);
            await axios.put(`http://localhost:8080/bookmarks/${id}`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            setMarking(!marking);
        } catch (error) {
            console.error("Error in PUT request:", error);
        }
    };

    useEffect(() => {
        console.log("marking change");
        const bk = document.getElementsByName("bookmark")[0];
        if (marking === true) {
            bk.checked = true;
        } else {
            bk.checked = false;
        }
    }, [marking]);

    return (
        <div id="topbar-bookmark" onClick={setData}>
            <input type="checkbox" id="topbar-checkbox" name="bookmark" />
            <img id="topbar-offimg" src={process.env.PUBLIC_URL + '/bookmark_off.png'} alt="bookmark off" />
            <img id="topbar-onimg" src={process.env.PUBLIC_URL + '/bookmark_on.png'} alt="bookmark on" />
        </div>
    );
}

export default Bookmark;