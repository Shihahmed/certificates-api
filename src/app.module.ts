import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { StudentsModule } from './students/students.module';
import { CertificatesModule } from './certificates/certificates.module';
import { StudentCertificatesModule } from './student-certificates/student-certificates.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    StudentsModule,
    CertificatesModule,
    StudentCertificatesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
