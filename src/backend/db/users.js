import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: '0af3d380-4d9e-4b80-88af-b0a59483de42',
    firstName: "Adarsh",
    lastName: "Balika",
    FullName: 'Adarsh Balika',
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: '0af3d380-4d9e-4b80-88af-b0a59483de44',
    firstName: "Abbas",
    lastName: "Mustan",
    FullName: 'Abbas Mustan',
    username: "abbasmustan",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
