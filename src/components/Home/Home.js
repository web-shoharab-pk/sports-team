import React, { useEffect, useState } from 'react';
import './Home.css'
 import League from './../League/League'

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    // console.log(leagues);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(res => res.json())
            .then(data => setLeagues(data.leagues.slice(100, 200)))
    }, [])
    return (
        <div>
            <div className="headerDiv">
                <h1>100 Leagues</h1>
            </div>
         
            <div className="container mt-5">   
            <div className="all-leagues ">
                {
                    leagues.map(leagues => <League leagues={leagues} />)
                }
            </div>
        </div>
        </div>
      
    );
};

export default Home;