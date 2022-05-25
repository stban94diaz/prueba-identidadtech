import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

// Modules
import { UserModule } from './user/user.module';
import { CsvModule } from './csv/csv.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.ENV==='prod' ? '.production.env' : '.development.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(
      `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`
    ),
    AuthModule,
    UserModule,
    CsvModule
  ],
  providers: [],
})
export class AppModule {}
