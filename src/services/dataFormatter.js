// // Fonction de formatage
// const formatData = (rawData, mapping) => {
//   // Si rawData n'est pas déjà une liste, le met dans un tableau
//   const dataArray = Array.isArray(rawData) ? rawData : [rawData];

//   return dataArray.map((item) => {
//     const result = {};
//     for (const key in mapping) {
//       const possibleKeys = mapping[key];
//       let value = null;

//       // Vérifie chaque clé possible pour trouver la première qui existe dans l'objet
//       for (const possibleKey of possibleKeys) {
//         if (item.hasOwnProperty(possibleKey)) {
//           value = item[possibleKey];
//           break;
//         }
//       }

//       result[key] = value || 0;
//     }
//     return result;
//   });
// };

// // Mappage pour les données utilisateur
// const userMapping = {
//   id: ["id"],
//   userInfos: ["userInfos"],
//   todayScore: ["todayScore", "score"],
//   keyData: ["keyData"],
// };

// // Mappage pour les sessions d'activité utilisateur
// const activityMapping = {
//   userId: ["userId"],
//   sessions: ["sessions"],
// };

// // Mappage pour les sessions moyennes de l'utilisateur
// const averageSessionsMapping = {
//   userId: ["userId"],
//   sessions: ["sessions"],
// };

// // Mappage pour les performances de l'utilisateur
// const performanceMapping = {
//   userId: ["userId"],
//   kind: ["kind"],
//   data: ["data"],
// };

// export const formatUserData = (rawUserData) => {
//   return formatData(rawUserData, userMapping);
// };

// export const formatUserActivity = (rawUserActivity) => {
//   return formatData(rawUserActivity, activityMapping);
// };

// export const formatUserAverageSessions = (rawUserAverageSessions) => {
//   return formatData(rawUserAverageSessions, averageSessionsMapping);
// };

// export const formatUserPerformance = (rawUserPerformance) => {
//   return formatData(rawUserPerformance, performanceMapping);
// };

class DataFormatter {
  constructor(mapping) {
    this.mapping = mapping;
  }

  formatData(rawData) {
    const dataArray = Array.isArray(rawData) ? rawData : [rawData];

    return dataArray.map((item) => {
      const result = {};
      for (const key in this.mapping) {
        const possibleKeys = this.mapping[key];
        let value = null;

        for (const possibleKey of possibleKeys) {
          if (item.hasOwnProperty(possibleKey)) {
            value = item[possibleKey];
            break;
          }
        }

        result[key] = value || 0;
      }
      return result;
    });
  }
}

// Mappage pour les données utilisateur
const userMapping = {
  id: ["id"],
  userInfos: ["userInfos"],
  todayScore: ["todayScore", "score"],
  keyData: ["keyData"],
};

// Mappage pour les sessions d'activité utilisateur
const activityMapping = {
  userId: ["userId"],
  sessions: ["sessions"],
};

// Mappage pour les sessions moyennes de l'utilisateur
const averageSessionsMapping = {
  userId: ["userId"],
  sessions: ["sessions"],
};

// Mappage pour les performances de l'utilisateur
const performanceMapping = {
  userId: ["userId"],
  kind: ["kind"],
  data: ["data"],
};

const userFormatter = new DataFormatter(userMapping);
const activityFormatter = new DataFormatter(activityMapping);
const averageSessionsFormatter = new DataFormatter(averageSessionsMapping);
const performanceFormatter = new DataFormatter(performanceMapping);

export const formatUserData = (rawUserData) =>
  userFormatter.formatData(rawUserData);
export const formatUserActivity = (rawUserActivity) =>
  activityFormatter.formatData(rawUserActivity);
export const formatUserAverageSessions = (rawUserAverageSessions) =>
  averageSessionsFormatter.formatData(rawUserAverageSessions);
export const formatUserPerformance = (rawUserPerformance) =>
  performanceFormatter.formatData(rawUserPerformance);
