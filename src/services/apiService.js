import { fetchData } from "./fetchData";
import { apiUrl } from "./apiUrl";
import { useMockData } from "./toggleData";
import {
  formatUserData,
  formatUserActivity,
  formatUserAverageSessions,
  formatUserPerformance,
} from "./dataFormatter";

const mockUserData = [
  {
    id: 12,
    userInfos: {
      firstName: "Karl",
      lastName: "Dovineau",
      age: 31,
    },
    todayScore: 0.12,
    keyData: {
      calorieCount: 1930,
      proteinCount: 155,
      carbohydrateCount: 290,
      lipidCount: 50,
    },
  },
  {
    id: 18,
    userInfos: {
      firstName: "Cecilia",
      lastName: "Ratorez",
      age: 34,
    },
    score: 0.3,
    keyData: {
      calorieCount: 2500,
      proteinCount: 90,
      carbohydrateCount: 150,
      lipidCount: 120,
    },
  },
];

const mockUserActivity = [
  {
    userId: 12,
    sessions: [
      {
        day: "2020-07-01",
        kilogram: 80,
        calories: 240,
      },
      {
        day: "2020-07-02",
        kilogram: 80,
        calories: 220,
      },
      {
        day: "2020-07-03",
        kilogram: 81,
        calories: 280,
      },
      {
        day: "2020-07-04",
        kilogram: 81,
        calories: 290,
      },
      {
        day: "2020-07-05",
        kilogram: 80,
        calories: 160,
      },
      {
        day: "2020-07-06",
        kilogram: 78,
        calories: 162,
      },
      {
        day: "2020-07-07",
        kilogram: 76,
        calories: 390,
      },
    ],
  },
  {
    userId: 18,
    sessions: [
      {
        day: "2020-07-01",
        kilogram: 70,
        calories: 240,
      },
      {
        day: "2020-07-02",
        kilogram: 69,
        calories: 220,
      },
      {
        day: "2020-07-03",
        kilogram: 70,
        calories: 280,
      },
      {
        day: "2020-07-04",
        kilogram: 70,
        calories: 500,
      },
      {
        day: "2020-07-05",
        kilogram: 69,
        calories: 160,
      },
      {
        day: "2020-07-06",
        kilogram: 69,
        calories: 162,
      },
      {
        day: "2020-07-07",
        kilogram: 69,
        calories: 390,
      },
    ],
  },
];

const mockUserAverageSessions = [
  {
    userId: 12,
    sessions: [
      {
        day: 1,
        sessionLength: 30,
      },
      {
        day: 2,
        sessionLength: 23,
      },
      {
        day: 3,
        sessionLength: 45,
      },
      {
        day: 4,
        sessionLength: 50,
      },
      {
        day: 5,
        sessionLength: 0,
      },
      {
        day: 6,
        sessionLength: 0,
      },
      {
        day: 7,
        sessionLength: 60,
      },
    ],
  },
  {
    userId: 18,
    sessions: [
      {
        day: 1,
        sessionLength: 30,
      },
      {
        day: 2,
        sessionLength: 40,
      },
      {
        day: 3,
        sessionLength: 50,
      },
      {
        day: 4,
        sessionLength: 30,
      },
      {
        day: 5,
        sessionLength: 30,
      },
      {
        day: 6,
        sessionLength: 50,
      },
      {
        day: 7,
        sessionLength: 50,
      },
    ],
  },
];

const mockUserPerformance = [
  {
    userId: 12,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      {
        value: 80,
        kind: 1,
      },
      {
        value: 120,
        kind: 2,
      },
      {
        value: 140,
        kind: 3,
      },
      {
        value: 50,
        kind: 4,
      },
      {
        value: 200,
        kind: 5,
      },
      {
        value: 90,
        kind: 6,
      },
    ],
  },
  {
    userId: 18,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      {
        value: 200,
        kind: 1,
      },
      {
        value: 240,
        kind: 2,
      },
      {
        value: 80,
        kind: 3,
      },
      {
        value: 80,
        kind: 4,
      },
      {
        value: 220,
        kind: 5,
      },
      {
        value: 110,
        kind: 6,
      },
    ],
  },
];

/**
 * Service API pour récupérer les données de l'utilisateur.
 * @namespace
 */
const apiService = {
  /**
   * Récupère les données principales de l'utilisateur.
   *
   * @param {number} userId - L'identifiant de l'utilisateur.
   * @returns {Promise<UserData>} Une promesse résolue avec les données principales de l'utilisateur.
   * @memberof apiService
   * @method
   */
  getUserMainData: (userId) => {
    if (useMockData) {
      return Promise.resolve(formatUserData(mockUserData)).then((data) => {
        const user = data.find((item) => item.id === Number(userId));
        if (user) {
          return user;
        } else {
          window.location.href = "/error";
        }
      });
    } else {
      return fetchData(`${apiUrl}/user/${userId}`).then((data) =>
        formatUserData(data)
      );
    }
  },

  /**
   * Récupère l'activité de l'utilisateur.
   *
   * @param {number} userId - L'identifiant de l'utilisateur.
   * @returns {Promise<Array<UserActivity>>} Une promesse résolue avec l'activité de l'utilisateur.
   * @memberof apiService
   * @method
   */
  getUserActivity: (userId) => {
    if (useMockData) {
      return Promise.resolve(formatUserActivity(mockUserActivity)).then(
        (data) => {
          const userActivities = data.filter(
            (item) => item.userId === Number(userId)
          );
          if (userActivities.length > 0) {
            return userActivities;
          } else {
            window.location.href = "/error";
          }
        }
      );
    } else {
      return fetchData(`${apiUrl}/user/${userId}/activity`).then((data) =>
        formatUserActivity(data)
      );
    }
  },

  /**
   * Récupère les sessions moyennes de l'utilisateur.
   *
   * @param {number} userId - L'identifiant de l'utilisateur.
   * @returns {Promise<Array<UserAverageSessions>>} Une promesse résolue avec les sessions moyennes de l'utilisateur.
   * @memberof apiService
   * @method
   */
  getUserAverageSessions: (userId) => {
    if (useMockData) {
      return Promise.resolve(
        formatUserAverageSessions(mockUserAverageSessions)
      ).then((data) => {
        const userAverageSessions = data.filter(
          (item) => item.userId === Number(userId)
        );
        if (userAverageSessions.length > 0) {
          return userAverageSessions;
        } else {
          window.location.href = "/error";
        }
      });
    } else {
      return fetchData(`${apiUrl}/user/${userId}/average-sessions`).then(
        (data) => formatUserAverageSessions(data)
      );
    }
  },

  /**
   * Récupère les performances de l'utilisateur.
   *
   * @param {number} userId - L'identifiant de l'utilisateur.
   * @returns {Promise<Array<UserPerformance>>} Une promesse résolue avec les performances de l'utilisateur.
   * @memberof apiService
   * @method
   */
  getUserPerformance: (userId) => {
    if (useMockData) {
      return Promise.resolve(formatUserPerformance(mockUserPerformance)).then(
        (data) => {
          const userPerformances = data.filter(
            (item) => item.userId === Number(userId)
          );
          if (userPerformances.length > 0) {
            return userPerformances;
          } else {
            window.location.href = "/error";
          }
        }
      );
    } else {
      return fetchData(`${apiUrl}/user/${userId}/performance`).then((data) =>
        formatUserPerformance(data)
      );
    }
  },
};

export default apiService;
