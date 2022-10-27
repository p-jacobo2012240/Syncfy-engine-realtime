import { Module } from '@nestjs/common';
import { ApplicationModule } from './engine/application/application.module';
import { InfrastructureModule } from './engine/infrastructure/infrastructure.module';
import { TypeOrmModule } from '@nestjs/typeorm'; 

@Module({
  imports: [
    ApplicationModule, 
    InfrastructureModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root@2k22',
      database: 'postgres',
      schema: 'syncfy_configuration',
      autoLoadEntities: true,
      synchronize: true
    })
  ],
  providers: [],
})
export class AppModule {}
