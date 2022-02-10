import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartmentModule } from './department/department.module';
import { ProfileModule } from './profile/profile.module';
import { PositionModule } from './position/position.module';

@Module({
  imports: [DepartmentModule, ProfileModule, PositionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
