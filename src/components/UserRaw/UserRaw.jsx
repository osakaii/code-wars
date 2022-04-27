import React, { useState, useEffect } from "react";
import "./UserRaw.css";
import { getChallenge, getUserInfo } from "../../axios";

function UserRaw({ data, startDate, endDate }) {
  const [userData, setUserData] = useState({});
  const [challenges, setChallenges] = useState([]);
  const [challengesCount, setChallengesCount ] = useState(0)
  const [points, setPoints] = useState(0);

  const getData = async () => {
    const responseUserData = await getUserInfo(data.userName);
    let tempChallenges = []
    for(let i = 0; i < responseUserData.data.length; i++){
        let completedDate = Date.parse(responseUserData.data[i].completedAt);
          if (
            completedDate > Date.parse(startDate) &&
            completedDate < Date.parse(endDate)
          ){
              tempChallenges.push(responseUserData.data[i])
          }else continue
    }
    tempChallenges = tempChallenges.map(async kata =>{
        return await getChallenge(kata.id);
    })
    Promise.all(tempChallenges).then((challenges) => {
      setChallenges(challenges);
    });
    setUserData(responseUserData);
  };
  useEffect(() => {
    getData();
  }, [startDate, endDate]);

  useEffect(() => {
    console.log("challange", challenges);
    setPoints(
      challenges?.reduce((start, el) => {
        switch (el?.rank?.name) {
          case "8 kyu":
            start += 10;
            break;
          case "7 kyu":
            start += 20;
            break;
          case "6 kyu":
            start += 30;
            break;
          case "5 kyu":
            start += 40;
            break;
          case "4 kyu":
            start += 50;
            break;
        }
        return start;
      }, 0)
    );
  }, [challenges]);

  return (
    <div className="grid__raw">
      <div className="grid__rawItem">{data.name}</div>
      <div className="grid__rawItem">{challenges.length}</div>
      <div className="grid__rawItem">{points}</div>
    </div>
  );
}

export default UserRaw;
