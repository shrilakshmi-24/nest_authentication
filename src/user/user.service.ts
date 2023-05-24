import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { CONSTANTS } from "src/app.constants";

@Injectable()
export class UserService{
    public users:User[]=[{
        username:"user1",
        password:"user1",
        email:"user1@gmail.com",
        age:34,
        role:CONSTANTS.ROLES.WEB_DEVELOPER
    },
    {
        username:"user2",
        password:"user2",
        email:"user2@gmail.com",
        age:33,
        role:CONSTANTS.ROLES.ANDROID_DEVELOPER
    },
    {
        username:"user3",
        password:"user3",
        email:"user3@gmail.com",
        age:45,
        role:CONSTANTS.ROLES.ANDROID_DEVELOPER
    }]

    getUserByName(userName: string): User {
        return this.users.find((user: User) => user.username === userName);
      }
      
   }
