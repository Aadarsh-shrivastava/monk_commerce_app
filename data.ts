export type Class = {
  id: number;
  name: string;
  type: string;
  capacity: number;
  currentBookings: string[];
  waitlist: string[];
  startTime: Date | undefined;
  endTime: Date | undefined;
  description: string;
  image?: string;
};

const classes: Class[] = [
  {
    id: 1,
    name: "Morning Yoga",
    type: "yoga",
    capacity: 10,
    currentBookings: ["user1", "user2", "user3", "user4", "user5"],
    waitlist: [],
    startTime: new Date("2024-10-10T07:00:00"),
    endTime: new Date("2024-10-10T08:00:00"),
    description:
      "Start your day with a refreshing morning yoga session. This class focuses on gentle stretches and breathing exercises to energize your body and calm your mind. Suitable for all levels.",
    image:
      "https://t3.ftcdn.net/jpg/04/87/48/66/360_F_487486623_CatNgUbulZ6rOpENckeTzRfY7IzrqOKd.jpg",
  },
  {
    id: 2,
    name: "Evening Gym",
    type: "gym",
    capacity: 15,
    currentBookings: [
      "user6",
      "user7",
      "user8",
      "user9",
      "user10",
      "user11",
      "user12",
      "user13",
      "user14",
      "user15",
    ],
    waitlist: ["user123", "user456"],
    startTime: new Date("2024-10-10T18:00:00"),
    endTime: new Date("2024-10-10T19:30:00"),
    description:
      "Join our evening gym session for a comprehensive workout. This class includes strength training, cardio exercises, and guided fitness routines tailored for various fitness levels.",
  },
  {
    id: 3,
    name: "Dance Workshop",
    type: "dance",
    capacity: 12,
    currentBookings: [
      "user15",
      "user16",
      "user17",
      "user18",
      "user19",
      "user20",
      "user21",
      "user22",
      "user23",
    ],
    waitlist: [],
    startTime: new Date("2024-10-11T16:00:00"),
    endTime: new Date("2024-10-11T17:30:00"),
    description:
      "Experience the joy of movement in our dance workshop! This class covers various dance styles, focusing on rhythm, coordination, and expression. Perfect for dancers of all skill levels.",
  },
  {
    id: 4,
    name: "Dance Workshop",
    type: "dance",
    capacity: 12,
    currentBookings: [
      "user15",
      "user16",
      "user17",
      "user18",
      "user19",
      "user20",
      "user21",
      "user22",
      "user23",
    ],
    waitlist: [],
    startTime: new Date("2024-10-11T16:00:00"),
    endTime: new Date("2024-10-11T17:30:00"),
    description:
      "Experience the joy of movement in our dance workshop! This class covers various dance styles, focusing on rhythm, coordination, and expression. Perfect for dancers of all skill levels.",
  },
  {
    id: 5,
    name: "Dance Workshop",
    type: "dance",
    capacity: 12,
    currentBookings: [
      "user15",
      "user16",
      "user17",
      "user18",
      "user19",
      "user20",
      "user21",
      "user22",
      "user23",
    ],
    waitlist: [],
    startTime: new Date("2024-10-11T16:00:00"),
    endTime: new Date("2024-10-11T17:30:00"),
    description:
      "Experience the joy of movement in our dance workshop! This class covers various dance styles, focusing on rhythm, coordination, and expression. Perfect for dancers of all skill levels.",
  },
];
export default classes;
