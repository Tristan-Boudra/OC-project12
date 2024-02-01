/**
 * Une classe utilitaire pour formater des données brutes en fonction d'une correspondance fournie.
 *
 * @class
 */
class DataFormatter {
  /**
   * Crée une instance de DataFormatter.
   *
   * @constructor
   * @param {Object} mapping - L'objet de correspondance spécifiant comment formater les données.
   */
  constructor(mapping) {
    /**
     * L'objet de correspondance spécifiant comment formater les données.
     *
     * @type {Object}
     * @memberof DataFormatter
     * @instance
     */
    this.mapping = mapping;
  }

  /**
   * Formate les données brutes en fonction de la correspondance fournie.
   *
   * @param {Object|Object[]} rawData - Les données brutes ou un tableau de données brutes à formater.
   * @returns {Object[]} Un tableau d'objets de données formatées.
   * @memberof DataFormatter
   * @instance
   * @method
   */
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

/**
 * Correspondance pour le formatage des données utilisateur.
 *
 * @type {Object}
 */
const userMapping = {
  id: ["id"],
  userInfos: ["userInfos"],
  todayScore: ["todayScore", "score"],
  keyData: ["keyData"],
};

/**
 * Correspondance pour le formatage des sessions d'activité utilisateur.
 *
 * @type {Object}
 */
const activityMapping = {
  userId: ["userId"],
  sessions: ["sessions"],
};

/**
 * Correspondance pour le formatage des sessions moyennes de l'utilisateur.
 *
 * @type {Object}
 */
const averageSessionsMapping = {
  userId: ["userId"],
  sessions: ["sessions"],
};

/**
 * Correspondance pour le formatage des performances de l'utilisateur.
 *
 * @type {Object}
 */
const performanceMapping = {
  userId: ["userId"],
  kind: ["kind"],
  data: ["data"],
};

/**
 * Instance de DataFormatter pour le formatage des données utilisateur.
 *
 * @type {DataFormatter}
 */
const userFormatter = new DataFormatter(userMapping);

/**
 * Instance de DataFormatter pour le formatage des sessions d'activité utilisateur.
 *
 * @type {DataFormatter}
 */
const activityFormatter = new DataFormatter(activityMapping);

/**
 * Instance de DataFormatter pour le formatage des sessions moyennes de l'utilisateur.
 *
 * @type {DataFormatter}
 */
const averageSessionsFormatter = new DataFormatter(averageSessionsMapping);

/**
 * Instance de DataFormatter pour le formatage des performances de l'utilisateur.
 *
 * @type {DataFormatter}
 */
const performanceFormatter = new DataFormatter(performanceMapping);

/**
 * Formate les données brutes utilisateur.
 *
 * @param {Object|Object[]} rawUserData - Les données brutes de l'utilisateur ou un tableau de données brutes de l'utilisateur.
 * @returns {Object[]} Un tableau d'objets de données formatées de l'utilisateur.
 * @function
 */
export const formatUserData = (rawUserData) =>
  userFormatter.formatData(rawUserData);

/**
 * Formate les données brutes d'activité utilisateur.
 *
 * @param {Object|Object[]} rawUserActivity - Les données brutes d'activité utilisateur ou un tableau de données brutes d'activité utilisateur.
 * @returns {Object[]} Un tableau d'objets de données formatées d'activité utilisateur.
 * @function
 */
export const formatUserActivity = (rawUserActivity) =>
  activityFormatter.formatData(rawUserActivity);

/**
 * Formate les données brutes de sessions moyennes utilisateur.
 *
 * @param {Object|Object[]} rawUserAverageSessions - Les données brutes de sessions moyennes utilisateur ou un tableau de données brutes de sessions moyennes utilisateur.
 * @returns {Object[]} Un tableau d'objets de données formatées de sessions moyennes utilisateur.
 * @function
 */
export const formatUserAverageSessions = (rawUserAverageSessions) =>
  averageSessionsFormatter.formatData(rawUserAverageSessions);

/**
 * Formate les données brutes de performances utilisateur.
 *
 * @param {Object|Object[]} rawUserPerformance - Les données brutes de performances utilisateur ou un tableau de données brutes de performances utilisateur.
 * @returns {Object[]} Un tableau d'objets de données formatées de performances utilisateur.
 * @function
 */
export const formatUserPerformance = (rawUserPerformance) =>
  performanceFormatter.formatData(rawUserPerformance);
