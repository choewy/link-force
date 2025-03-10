import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppConfigFactory } from './providers/app-config.factor';
import { ServerConfigFactory } from './providers/server-config.factory';
import { TypeOrmConfigFactory } from './providers/typeorm-config.factory';

const ConfigFactoryProviders = [AppConfigFactory, ServerConfigFactory, TypeOrmConfigFactory];

@Global()
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  providers: ConfigFactoryProviders,
  exports: ConfigFactoryProviders,
})
export class ConfigFactoryModule {}
