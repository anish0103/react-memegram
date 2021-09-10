import { React, useEffect, useState } from 'react'

import './CSS/MainPage.css'

const MainPage = () => {

    const [URL, SetURL] = useState('');
    const [Loading, SetLoading] = useState(false);

    useEffect(() => {
        const fetchphoto = async () => {
            const response = await fetch("https://meme-api.herokuapp.com/gimme");
            const data = await response.json();
            console.log(data.url)
            SetURL(data.url)
        }
        fetchphoto();
    }, [])

    const NextHandler = async () => {
        SetLoading(true)
        const response = await fetch("https://meme-api.herokuapp.com/gimme");
        const data = await response.json();
        console.log(data.url)
        SetURL(data.url)
        SetLoading(false)
    }

    return (
        <div className="mainpage-maincontainer">
            <div className="imagecontainer">
                {Loading && <h2>Loading...</h2>}
                {!Loading && <img src={URL} alt="Please Refresh Your Page" />}
            </div>
            <div className="buttoncontainer">
                <button type="button" onClick={NextHandler} >Next</button>
            </div>
        </div>
    )
}

export default MainPage;