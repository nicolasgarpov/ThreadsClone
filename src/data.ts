import type { User, Post } from "./types";

export const Users: User[] = [
  {
    id: "u1",
    username: "martin_artist",
    name: "Martin Johansson", // Suecia, Europa
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Contemporary painter and muralist.",
  },
  {
    id: "u2",
    username: "sofia_music",
    name: "Sofia Okafor", // Nigeria, África
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Folk singer and songwriter.",
  },
  {
    id: "u3",
    username: "leo_photos",
    name: "Leonard Smith", // Estados Unidos, América del Norte
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    bio: "Nature and travel photographer.",
  },
  {
    id: "u4",
    username: "valen_film",
    name: "Valentina Ivanova", // Rusia, Europa/Asia
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Independent film director.",
  },
  {
    id: "u5",
    username: "cami_sculpture",
    name: "Camille Dubois", // Francia, Europa
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    bio: "Sculptor and visual artist.",
  },
  {
    id: "u6",
    username: "tomas_sells",
    name: "Tomás Tanaka", // Japón, Asia
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    bio: "Art and antiques seller.",
  },
  {
    id: "u7",
    username: "lucia_dance",
    name: "Lucia Patel", // India, Asia
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    bio: "Dancer and choreographer.",
  },
];

export const Posts: Post[] = [
  {
    id: "p1",
    createdAt: "2025-05-01T09:00:00Z",
    content: "Today I finished a mural downtown. So happy with the result!",
    user_id: "u1",
    user: Users[0],
    parent_id: undefined,
    parent: null,
    replies: [],
  },
  {
    id: "p2",
    createdAt: "2025-05-01T10:30:00Z",
    content:
      "Does anyone have recommendations for galleries to exhibit sculptures?",
    user_id: "u5",
    user: Users[4],
    parent_id: undefined,
    parent: null,
    replies: [],
  },
  {
    id: "p3",
    createdAt: "2025-05-01T11:00:00Z",
    content:
      "Uploaded new photos from my trip to Patagonia. The light was amazing!",
    user_id: "u3",
    user: Users[2],
    parent_id: undefined,
    parent: null,
    replies: [],
  },
  {
    id: "p4",
    createdAt: "2025-05-01T11:15:00Z",
    content: "I'm writing a new song inspired by the rain.",
    user_id: "u2",
    user: Users[1],
    parent_id: undefined,
    parent: null,
    replies: [],
  },
  {
    id: "p5",
    createdAt: "2025-05-01T11:20:00Z",
    content: "That mural looks amazing, Martin!",
    user_id: "u2",
    user: Users[1],
    parent_id: "p1",
    parent: null,
    replies: [],
  },
  {
    id: "p6",
    createdAt: "2025-05-01T11:25:00Z",
    content: "Thanks Sofia, glad you like it!",
    user_id: "u1",
    user: Users[0],
    parent_id: "p5",
    parent: null,
    replies: [],
  },
  {
    id: "p7",
    createdAt: "2025-05-01T12:00:00Z",
    content: "I highly recommend the 'Syntax' podcast.",
    user_id: "u3",
    user: Users[2],
    parent_id: "p2",
    parent: null,
    replies: [],
  },
  {
    id: "p8",
    createdAt: "2025-05-01T12:15:00Z",
    content: "Nice, I'll check it out. Thanks Mike!",
    user_id: "u2",
    user: Users[1],
    parent_id: "p7",
    parent: null,
    replies: [],
  },
  {
    id: "p9",
    createdAt: "2025-05-01T13:00:00Z",
    content: "Sara, love your travel art!",
    user_id: "u1",
    user: Users[0],
    parent_id: "p4",
    parent: null,
    replies: [],
  },
  {
    id: "p10",
    createdAt: "2025-05-01T13:10:00Z",
    content: "Thank you so much! ❤️",
    user_id: "u4",
    user: Users[3],
    parent_id: "p9",
    parent: null,
    replies: [],
  },
  {
    id: "p11",
    createdAt: "2025-05-01T14:00:00Z",
    content: "Hot take: Tabs > Spaces.",
    user_id: "u3",
    user: Users[2],
    parent_id: undefined,
    parent: null,
    replies: [],
  },
  {
    id: "p12",
    createdAt: "2025-05-01T14:05:00Z",
    content: "Block him.",
    user_id: "u4",
    user: Users[3],
    parent_id: "p11",
    parent: null,
    replies: [],
  },
];
