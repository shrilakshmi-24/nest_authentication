import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule,AuthModule,ConfigModule.forRoot({isGlobal:true,envFilePath:"./local.env"})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
