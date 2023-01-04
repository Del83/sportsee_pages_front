import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import url from "./url";


/**
 * @typedef {Object} UserData
 * @property {Object} dataUser user main data
 * @property {Object} dataActivity user activity
 * @property {Object} dataAverageSessions user average sessions
 * @property {Object} dataPerformance user performance
 * @property {Object} dataPerformanceKind user performance
 * @property {boolean} isLoading loading or loaded
 * @property {boolean} error error or not
 */

/**
 * Custom hook that get all user data
 * @returns {UserData} data of user
 */
function GetDataFetch() {
        let{ id } = useParams();
        let userId = parseInt(id);
        const { urlUser, urlActivity, urlAverageSessions, urlPerformance } = url(userId)
        const [dataUser, setData] = useState();
        const [dataActivity, setActivity] = useState()
        const [dataAverageSessions, setAverageSessions] = useState()
        const [dataPerformance, setPerformance] = useState()
        const [dataPerformanceKind, setPerformanceKind] = useState()
        const [isLoading, setLoading] = useState(true);
        const [error, setError] = useState(false);

            useEffect(() => {
              async function fetchData() {
                try {
                  const resUser = await fetch(urlUser);
                  const resActivity = await fetch(urlActivity);
                  const resAverageSessions = await fetch(urlAverageSessions);
                  const resPerformance = await fetch(urlPerformance);

                  const dataUser = await resUser.json();
                  const dataActivity = await resActivity.json();
                  const dataAverageSessions = await resAverageSessions.json();
                  const dataPerformance = await resPerformance.json();
 
                  const dataAverageSessionsMap = dataAverageSessions.data.sessions.map(element => ({...element, day : ["L","M","M","J","V","S","D"][element.day - 1]}))

                  const dataPerformanceMap = dataPerformance.data.data.map(performance => {
                          return {
                            value: performance.value,
                            kind: performance.kind
                          }
                        })
 
                  setData(dataUser);
                  setActivity(dataActivity.data)
                  setAverageSessions(dataAverageSessionsMap)
                  setPerformance(dataPerformanceMap)
                  setPerformanceKind(dataPerformance.data.kind)

                } catch (err) {
                  console.log(err);
                  setError(true);
                } finally {
                  setLoading(false);
                }
              }
              fetchData();
            }, );
  
  return {dataUser, dataActivity, dataAverageSessions, dataPerformance, dataPerformanceKind, isLoading, error} 
}

export default GetDataFetch

