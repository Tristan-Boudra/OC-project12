import { useState, useEffect } from "react";
import apiService from "./apiService";

export function FetchRoutes(userId) {
  const [userData, setUserData] = useState();
  const [activityData, setActivityData] = useState();
  const [avgSessionsData, setAvgSessionsData] = useState();
  const [performanceData, setPerformanceData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allUsersData = await apiService.getUserMainData();
        const userActivity = await apiService.getUserActivity();
        const userAverageSessions = await apiService.getUserAverageSessions();
        const userPerformance = await apiService.getUserPerformance();

        const currentUserData = allUsersData.find(
          (user) => user.id === Number(userId)
        );

        const currentUserActivityData = userActivity.filter(
          (data) => data.userId === Number(userId)
        );

        const currentUserAvgSessionsData = userAverageSessions.filter(
          (data) => data.userId === Number(userId)
        );

        const currentUserPerformanceData = userPerformance.filter(
          (data) => data.userId === Number(userId)
        );

        setUserData(currentUserData);
        setActivityData(currentUserActivityData);
        setAvgSessionsData(currentUserAvgSessionsData);
        setPerformanceData(currentUserPerformanceData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId]);

  return {
    userData,
    activityData,
    avgSessionsData,
    performanceData,
  };
}
