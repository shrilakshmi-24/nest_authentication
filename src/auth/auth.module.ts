import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { localStrategy } from './local.strategy';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';


@Module({
  imports: [PassportModule,UserModule,JwtModule.register({
        secret:"key",
        signOptions:{
            expiresIn:"600s"
        }
  })],
  controllers: [],
  providers: [localStrategy,JwtStrategy,AuthService],
  exports:[AuthService]
})
export class AuthModule {}
