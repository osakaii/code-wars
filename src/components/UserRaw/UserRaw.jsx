import React, { useState, useEffect, useCallback } from "react";
import "./UserRaw.css";
import { getChallenge, getUserInfo } from "../../axios";
import { POINTS } from "../../consts/points";

function UserRaw({ data, startDate, endDate }) {
  const [challenges, setChallenges] = useState([]);
  const [points, setPoints] = useState(0);

  const getData = useCallback(async () => {
    const responseUserData = await getUserInfo(data.userName);
    let tempChallenges = []
    
    for(let i = 0; i < responseUserData.data.length; i++){
        let completedDate = Date.parse(responseUserData.data[i].completedAt);
          if (
            completedDate > Date.parse(startDate) &&
            completedDate < Date.parse(endDate) + 86400000
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
  }, [data?.userName, endDate, startDate])

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    setPoints(
      challenges?.reduce((start, el) => {
        console.log(el?.rank?.name)
        start += POINTS[el?.rank?.name]
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
