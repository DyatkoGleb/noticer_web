import React, { useState, useEffect } from 'react';
import axios from "axios";

const NoticeList = () => {
    const [notices, setNotices] = useState({});

    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }

        axios.get('http://localhost:8008/getNotices', { headers })
        .then(response => {
            setNotices(response.data.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    return (
        <div>
            <h2>Notices</h2>
            <ul>
            {Array.isArray(notices) && notices.length > 0 ? (
                notices.map(notice => (
                <li key={notice.id}>{notice.text} - {notice.datetime}</li>
                ))
            ) : (
                <li>No notices available</li>
            )}
            </ul>
        </div>
    );
}

export default NoticeList