export const formatUserData = (rawUserData) => {
  return rawUserData.map((user) => ({
    id: user.id,
    userInfos: {
      firstName: user.userInfos.firstName,
      lastName: user.userInfos.lastName,
      age: user.userInfos.age,
    },
    todayScore: user.todayScore || user.score,
    keyData: {
      calorieCount: user.keyData.calorieCount,
      proteinCount: user.keyData.proteinCount,
      carbohydrateCount: user.keyData.carbohydrateCount,
      lipidCount: user.keyData.lipidCount,
    },
  }));
};

export const formatUserActivity = (rawUserActivity) => {
  return rawUserActivity.map((activity) => ({
    userId: activity.userId,
    sessions: activity.sessions.map((session) => ({
      day: new Date(session.day).toLocaleDateString(),
      kilogram: session.kilogram,
      calories: session.calories,
    })),
  }));
};

export const formatUserAverageSessions = (rawUserAverageSessions) => {
  return rawUserAverageSessions.map((averageSessions) => ({
    userId: averageSessions.userId,
    sessions: averageSessions.sessions.map((session) => ({
      day: session.day,
      sessionLength: session.sessionLength,
    })),
  }));
};

export const formatUserPerformance = (rawUserPerformance) => {
  return rawUserPerformance.map((performance) => ({
    userId: performance.userId,
    kind: performance.kind,
    data: performance.data.map((dataItem) => ({
      value: dataItem.value,
      kind: dataItem.kind,
    })),
  }));
};
