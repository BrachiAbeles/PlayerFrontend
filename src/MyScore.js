import './MyScore.css';
import React, { useState, useEffect } from "react";

const MyScore = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5170/api/players"); // וודאי שכתובת זו נכונה
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setPlayers(data.top4Players); // שמירת הנתונים מהשרת
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div id="container">
            <div id="divButtons2">

                {players.map((player) => {
                    debugger
                    return (
                        <div className="bottonAvatar"
                            key={player.playerPosition}
                        // style={{ backgroundColor: player.playerPosition <= 3 ? "blue" : "black" }}
                        >

                            <div className='playerPosition'>{player.playerPosition}</div>
                            {player.playerName}

                            <img
                                src={"/OBJECTS.png" /*player.playerMedia*/}
                                alt={`${player.playerName}`}
                                // width="50"
                            />
                            {player.playerScore}
                        </div>
                    )
                })}

            </div>
            <div id="divButtons3">
                <div id="me" className="bottonAvatar">
                    את/ה<img id="meImg" src="/Group3.png" alt="Your avatar" />
                    505
                </div>
                <button id="continue">המשך</button>
            </div>
        </div>
    );
};

export default MyScore;

