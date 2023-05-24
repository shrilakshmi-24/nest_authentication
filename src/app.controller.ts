import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { User } from './user/user.entity';
import { RoleGuard } from './role.guard';
import { CONSTANTS } from './app.constants';

@Controller('app')
export class AppController {
  constructor(private readonly authService:AuthService){}

  @Post('/login')
  @UseGuards(AuthGuard("local"))
  login(@Request()req): string {
    // console.log(req.user); // Assuming the structure of the LoginDto matches the incoming request body
    // const token = this.authService.genarateToken(req.user);
    // return token;
    const token=this.authService.genarateToken(req.user)
    return token
  }
  

  @Get('/android-developer')
  @UseGuards(AuthGuard("jwt"),new RoleGuard(CONSTANTS.ROLES.ANDROID_DEVELOPER))
  developerData(@Request()req):string{
    return "this is private data for android developer"+JSON.stringify(req.user)
  }

  @Get('/web-developer')
  @UseGuards(AuthGuard("jwt"),new RoleGuard(CONSTANTS.ROLES.WEB_DEVELOPER))
  webDeveloperData(@Request()req):string{
    return "this is private data from web developer"+JSON.stringify(req.user)
  }
}
