import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: '0af3d380-4d9e-4b80-88af-b0a59483de42',
    firstName: "Akshay",
    lastName: "Kumar",
    FullName: 'Akshay Kumar',
    username: "akshaykumar",
    password: "adarshBalika123",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
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
    img: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
