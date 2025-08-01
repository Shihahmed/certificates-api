import { Module } from '@nestjs/common';
import { CertificatesService } from './certificates.service';
import { CertificatesController } from './certificates.controller';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Module({
  controllers: [CertificatesController],
  providers: [CertificatesService, PrismaService],
})
export class CertificatesModule {}
