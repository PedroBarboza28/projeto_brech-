import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [

    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '.753159Tata.',
    database: 'db_brecho',
    entities: [],
    synchronize: true,
})
],
  controllers: [],
  providers: [],
})
export class AppModule {}
