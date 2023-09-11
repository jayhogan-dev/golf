export interface User {
  id: string;
  name: string;
  ghin: string;
  verified: boolean;
  image?: string;
  backgroundImg?: string;
  preferences: {
    daysOfWeek?: string[];
    playsGames?: boolean;
    preferredGames?: string[];
    timeOfDay?: string;
  };
}
