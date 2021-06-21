import _ from "lodash";

export function calculatePoints(loadedScores, loadedUsers) {
  var groupedSports = _.groupBy(loadedScores, "SportId");
  var first = _.values(groupedSports);
  for (let index = 0; index < first.length; index++) {
    const element = first[index];
    calculateSportPoints(element, loadedUsers);
  }
}

export function addPointsToUser(userId, pointsForSport, loadedUsers) {
  var user = loadedUsers.find((a) => a.UserId === userId);
  if (user) {
    user.totalPoints = user.totalPoints
      ? user.totalPoints + pointsForSport
      : pointsForSport;
  }
}

export function calculateSportPoints(sportScores, loadedUsers) {
  var topToBottom = sportScores.sort((a, b) => {
    return b.TotalScore - a.TotalScore;
  });
  for (let index = 0; index < topToBottom.length; index++) {
    var pointsForSport = 0;
    switch (index) {
      case 0:
        pointsForSport = 10;
        break;
      case 1:
        pointsForSport = 8;
        break;
      case 2:
        pointsForSport = 6;
        break;
      case 3:
        pointsForSport = 5;
        break;
      case 4:
        pointsForSport = 4;
        break;
      case 5:
        pointsForSport = 3;
        break;
      case 6:
        pointsForSport = 2;
        break;
      case 7:
        pointsForSport = 1;
        break;
      default:
        pointsForSport = 0;
        break;
    }
    const userId = topToBottom[index].UserId;
    addPointsToUser(userId, pointsForSport, loadedUsers);
  }
}
