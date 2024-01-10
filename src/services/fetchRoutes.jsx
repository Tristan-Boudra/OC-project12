import { useState, useEffect } from "react";
import apiService from "./apiService";

/**
 * Hook personnalisé pour récupérer les données utilisateur, d'activité, de sessions moyennes
 * et de performances en fonction de l'ID de l'utilisateur.
 * @param {string} userId - L'identifiant de l'utilisateur.
 * @returns {Object} - Un objet contenant les données utilisateur, d'activité,
 * de sessions moyennes et de performances.
 */

export function FetchRoutes(userId) {
  // États pour stocker les différentes données.
  const [userData, setUserData] = useState();
  const [activityData, setActivityData] = useState();
  const [avgSessionsData, setAvgSessionsData] = useState();
  const [performanceData, setPerformanceData] = useState();

  // Effet qui se déclenche lorsque l'ID de l'utilisateur change.
  useEffect(() => {
    // Fonction asynchrone pour récupérer les données.
    const fetchData = async () => {
      try {
        // Récupération des différentes données via le service API.
        const allUsersData = await apiService.getUserMainData();
        const userActivity = await apiService.getUserActivity();
        const userAverageSessions = await apiService.getUserAverageSessions();
        const userPerformance = await apiService.getUserPerformance();

        // Filtrage des données pour l'utilisateur actuel.
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

        // Mise à jour des états avec les données récupérées.
        setUserData(currentUserData);
        setActivityData(currentUserActivityData);
        setAvgSessionsData(currentUserAvgSessionsData);
        setPerformanceData(currentUserPerformanceData);
      } catch (error) {
        // Gestion des erreurs en cas de problème lors de la récupération des données.
        console.error("Error fetching data:", error);
      }
    };

    // Appel de la fonction pour récupérer les données.
    fetchData();
  }, [userId]); // Le useEffect se déclenche à chaque changement de l'ID de l'utilisateur.

  // Retourne un objet contenant toutes les données nécessaires.
  return {
    userData,
    activityData,
    avgSessionsData,
    performanceData,
  };
}
