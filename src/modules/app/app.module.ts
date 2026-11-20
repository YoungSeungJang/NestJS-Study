import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from '../../board/board.module';
import { ClassroomModule } from '../../classroom/classroom.module';


@Module({
  imports: [BoardModule, ClassroomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
