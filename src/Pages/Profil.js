import React from "react";
// PAGE COMPONENT
import Layout from "../components/Layout/Layout";
import Loader from "../components/Loader/Loader";
// DASHBOARD COMPONENT
import ProfilUser from "../components/ProfilUser/ProfilUser";
import Activity from "../components/Activity/Activity";
import AverageSessions from "../components/AverageSessions/AverageSessions";
import Performance from "../components/Performance/Performance";
import Score from "../components/Score/Score";
import NutrientCard from "../components/Nutrient/Nutrient";
// DATA
import GetDataFetch from "../Data/GetDataFetch";
// CSS
import "../Style/Profil.css";
import imageOups from "../assets/oups_image.jpeg";

/**Render the profil page
 * @return {JSX}
 */
function Profil() {
  const {
    dataUser,
    dataActivity,
    dataAverageSessions,
    dataPerformance,
    dataPerformanceKind,
    isLoading,
    error,
  } = GetDataFetch();

  if (error) {
    return (
      <div className="message-oups">
        {" "}
        <img className="imageOups" src={imageOups} alt="imageOups" />{" "}
      </div>
    );
  } else if (isLoading) {
    return <Loader />;
  } else {
    return (
      <div className="profil">
        <Layout />
        <React.StrictMode>
          <ProfilUser name={dataUser.data.userInfos.firstName} />
          <div className="dashboard">
            <Activity
              title="Activité quotidienne"
              data={dataActivity.sessions}
              xDataKey="day"
              yDataKey1="kilogram"
              yDataKey2="calories"
            />
            <div className="nutrient">
              {Object.keys(dataUser.data.keyData).map((key) => (
                <NutrientCard
                  categorie={key}
                  value={dataUser.data.keyData[key]}
                  key={key}
                />
              ))}
            </div>
            <div className="diag-ctn">
              <AverageSessions
                title="Durée moyenne des sessions"
                data={dataAverageSessions}
              />
              <Performance
                title="Performance"
                data={dataPerformance}
                kind={dataPerformanceKind}
              />
              <Score
                name="todayScore"
                data={dataUser.data.score || dataUser.data.todayScore}
                dataKey="score"
              />
            </div>
          </div>
        </React.StrictMode>
      </div>
    );
  }
}

export default Profil;
