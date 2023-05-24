import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/user/user.entity";

@Injectable()
export class AuthService{
    constructor (private readonly jwtService:JwtService){

    }
    genarateToken(payload:User):string{
        return this.jwtService.sign(payload)

    }
}