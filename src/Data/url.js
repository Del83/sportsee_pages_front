/**
 * @const url API url
 */
const url = (idUser) => {
  const urlUser = `http://localhost:3000/user/${idUser}`;
  const urlActivity = `http://localhost:3000/user/${idUser}/activity`;
  const urlAverageSessions = `http://localhost:3000/user/${idUser}/average-sessions`;
  const urlPerformance = `http://localhost:3000/user/${idUser}/performance`;
  return { urlUser, urlActivity, urlAverageSessions, urlPerformance };
};

export default url;
