import React, { useState, useEffect, useCallback } from "react";
import "./UserRaw.css";
import { getChallenge, getUserInfo } from "../../axios";
import { POINTS } from "../../consts/points";

function UserRaw({ data, startDate, endDate }) {
  const [challenges, setChallenges] = useState([]);
  const [points, setPoints] = useState(0);
  const [loading, setLoading] = useState(false);

  const getData = useCallback(async () => {
    setLoading(true)
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
      setLoading(false)
    });
  }, [data?.userName, endDate, startDate])

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    setPoints(
      challenges?.reduce((start, el) => {
        start += POINTS[el?.rank?.name]
        return start;
      }, 0)
    );
  }, [challenges]);

  const handleOpenInfo = () => {
    const result = {}
    challenges.forEach(c => {
      if (!result[c.rank.name]) {
        result[c.rank.name] = 1
      } else {
        result[c.rank.name] += 1
      }
    })
    alert(JSON.stringify(result))
  }

  return (
    <div className="grid__raw">
      <div className="grid__rawItem">{data.name}</div>
      <div className="grid__rawItem">{data.userName}</div>
      <div className="grid__rawItem">{challenges.length}</div>
      <div className="grid__rawItem">{points}</div>
      <div className="grid__rawItem">
        <button disabled={loading} onClick={handleOpenInfo} className="button">Info</button>
      </div>
    </div>
  );
}

export default UserRaw;
