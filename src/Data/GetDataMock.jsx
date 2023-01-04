import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../Data/data-mock";

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
 * @param {Number} userId id of current user
 * @returns {UserData} data of user
 */
function GetDataMock(userId) {

    const userData = USER_MAIN_DATA.find(elem => elem.id === parseInt(userId))
    const userDataActivity = USER_ACTIVITY.find(elem => elem.userId === parseInt(userId))
    const userDataAverage = USER_AVERAGE_SESSIONS.find(elem => elem.userId === parseInt(userId))
    const userDataPerformance = USER_PERFORMANCE.find(elem => elem.userId === parseInt(userId))
    const isLoading = null
    const error= null
    
    const userDataAverageSessions = userDataAverage.sessions.map(element => ({...element, day : ["L","M","M","J","V","S","D"][element.day - 1]}))
    const userDataPerformancekind = userDataPerformance.data.map(performance => {
        return {
          value: performance.value,
          kind: performance.kind
        }
      })
    const performanceKind = userDataPerformance.kind

    return { 
        userData, 
        userDataActivity, 
        userDataAverageSessions, 
        userDataPerformancekind, 
        performanceKind, 
        isLoading, 
        error }
}

export default GetDataMock;

