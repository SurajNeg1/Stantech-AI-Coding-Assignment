// Count the number of unique users
function countUniqueUsers(data) {
  const userSet = new Set();
  for (const entry of data) {
    userSet.add(entry.userId);
  }
  return userSet.size;
}

// Find the most common activity type
function findMostCommonActivity(data) {
  const activityCount = {};
  for (const entry of data) {
    if (activityCount[entry.activityType]) {
      activityCount[entry.activityType]++;
    } else {
      activityCount[entry.activityType] = 1;
    }
  }
  const sortedActivities = Object.entries(activityCount).sort((a, b) => b[1] - a[1]);
  return sortedActivities[0][0];
}


// Generate a timeline of activities for each user, sorted by timestamp
function generateUserTimeline(data) {
  const userTimelines = {};
  for (const entry of data) {
    if (!userTimelines[entry.userId]) {
      userTimelines[entry.userId] = [];
    }
    userTimelines[entry.userId].push(entry);
  }
  for (const userId in userTimelines) {
    userTimelines[userId].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
  }
  return userTimelines;
}

// Results with dummy data
const data = [
  { userId: 1, activityType: 'login', timestamp: '2024-06-14T10:00:00Z' },
  { userId: 2, activityType: 'logout', timestamp: '2024-06-14T10:01:00Z' },
  { userId: 1, activityType: 'pageview', timestamp: '2024-06-14T10:02:00Z' },
  { userId: 3, activityType: 'login', timestamp: '2024-06-14T10:03:00Z' },
  { userId: 1, activityType: 'logout', timestamp: '2024-06-14T10:04:00Z' },
  { userId: 2, activityType: 'pageview', timestamp: '2024-06-14T10:05:00Z' },
];

console.log(countUniqueUsers(data)); // 3
console.log(findMostCommonActivity(data)); // 'pageview'
console.log(generateUserTimeline(data));
/*
{
  '1': [
    { userId: 1, activityType: 'login', timestamp: '2024-06-14T10:00:00Z' },
    { userId: 1, activityType: 'pageview', timestamp: '2024-06-14T10:02:00Z' },
    { userId: 1, activityType: 'logout', timestamp: '2024-06-14T10:04:00Z' }
  ],
  '2':[
    { userId: 2, activityType: 'logout', timestamp: '2024-06-14T10:01:00Z' },
    { userId: 2, activityType: 'pageview', timestamp: '2024-06-14T10:05:00Z' }
  ],
  '3': [
    { userId: 3, activityType: 'login', timestamp: '2024-06-14T10:03:00Z' }
  ]
}
*/
