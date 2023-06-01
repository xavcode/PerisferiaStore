import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Demo.css';

const DemoRev = () => {

    const [stateRev, setStateRev] = useState({});
    useEffect(() => {
        const callApi = async () => {
            try {
                const reviews = await axios.get('https://perisferiastore-production.up.railway.app/store/1')
                const allReview = await reviews.data.Reviews.map(rev => {
                    return {
                        Usuario: rev.userId,
                        comentario: rev.comment,
                        Rating: rev.rating
                    }
                });
                setStateRev(allReview)
            } catch (error) {
                console.error('error al pedir la informacion', error)
            };
        };
        callApi();
    }, []);
    const arrayReview = stateRev[0].Usuario;
    console.log(arrayReview);


    return (
        <div className='divDemo'>
            <h1 className='text'>{stateRev.Usuario}</h1>
            {
                arrayReview.map(rev => {
                    return (
                        <div>
                            <h1>{rev.Usuario}</h1>
                            <p>{rev.comentario}</p>
                            <h2>{rev.Rating}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default DemoRev
