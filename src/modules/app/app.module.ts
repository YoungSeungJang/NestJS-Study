import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from '../../board/board.module';
import { ClassroomModule } from '../../classroom/classroom.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    // BoardModule, ClassroomModule
    // 1. ConfigModule 설정 : .env 파일로드
    ConfigModule.forRoot({
      isGlobal: true, // 전역으로 COnfigService 사용가능
      envFilePath:`.env/${process.env.NODE_ENV||'development'}.env`,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
