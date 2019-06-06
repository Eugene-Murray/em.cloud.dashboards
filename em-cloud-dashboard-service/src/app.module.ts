import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DashboardsModule } from './dashboards/dashboards.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://dashboard:thedoors@cluster0-v83pi.azure.mongodb.net/test?retryWrites=true&w=majority'),
    DashboardsModule,
  ],
})
export class AppModule {}
