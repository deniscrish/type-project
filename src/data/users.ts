import { IUser } from "../models";

export const users: IUser[] = [
  {
    address: {
      geolocation: { lat: "-37.3159", long: "81.1496" },
      city: "kilcoole",
      street: "new road",
      number: 7682,
      zipcode: "12926-3874",
    },
    id: 1,
    email: "john@gmail.com",
    username: "johnd",
    password: "m38rmF$",
    name: { firstname: "john", lastname: "doe" },
    phone: "1-570-236-7033",
    __v: 0,
  },
  {
    address: {
      geolocation: { lat: "-37.3159", long: "81.1496" },
      city: "kilcoole",
      street: "Lovers Ln",
      number: 7267,
      zipcode: "12926-3874",
    },
    id: 2,
    email: "morrison@gmail.com",
    username: "mor_2314",
    password: "83r5^_",
    name: { firstname: "david", lastname: "morrison" },
    phone: "1-570-236-7033",
    __v: 0,
  },
];
