import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "./fetchData";
import { apiUrl } from "./apiUrl";

export function FetchRoutes() {
  const { userId } = useParams();

  const userUrl = `${apiUrl}/user/${userId}`;
  const activityUrl = `${apiUrl}/user/${userId}/activity`;
  const avgSessionsUrl = `${apiUrl}/user/${userId}/average-sessions`;
  const performanceURl = `${apiUrl}/user/${userId}/performance`;

  const [userData, setUserData] = useState();
  const [activityData, setActivityData] = useState();
  const [avgSessionsData, setAvgSessionsData] = useState();
  const [performanceData, setPerformanceData] = useState();

  useEffect(() => {
    fetchData(userUrl).then((data) => setUserData(data));
    fetchData(activityUrl).then((data) => setActivityData(data));
    fetchData(avgSessionsUrl).then((data) => setAvgSessionsData(data));
    fetchData(performanceURl).then((data) => setPerformanceData(data));
  }, [userUrl, activityUrl, avgSessionsUrl, performanceURl]);

  return {
    userData,
    activityData,
    avgSessionsData,
    performanceData,
  };
}
