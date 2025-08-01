import { Module } from '@nestjs/common';
import { StudentCertificatesService } from './student-certificates.service';
import { StudentCertificatesController } from './student-certificates.controller';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Module({
  controllers: [StudentCertificatesController],
  providers: [StudentCertificatesService, PrismaService],
})
export class StudentCertificatesModule {}
