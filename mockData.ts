// mockData.ts
export const userData = {
  username: "JeanEco",
  totalReports: 12,
  totalWeight: 24,
  wasteTypes: ["plastic", "organic", "glass"],
  consecutiveDays: 3,
  photosUploaded: 6,
  visitedPoints: ["Point A", "Point B", "Point C"],
  invitedFriends: 2,
  badges: ["Plastic Sorter", "Explorer", "Reporter"]
};

export const collectionPoints = [
  { id: "1", type: "plastic", status: "full", distance: "2 km", location: "Point A" },
  { id: "2", type: "glass", status: "in progress", distance: "1 km", location: "Point B" },
  { id: "3", type: "organic", status: "empty", distance: "3 km", location: "Point C" },
];