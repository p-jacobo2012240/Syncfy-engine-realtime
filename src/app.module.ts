import { Module } from '@nestjs/common';
import { ApplicationModule } from './engine/application/application.module';
import { InfrastructureModule } from './engine/infrastructure/infrastructure.module';

@Module({
  imports: [
    ApplicationModule, 
    InfrastructureModule
  ],
  providers: [],
})
export class AppModule {}
