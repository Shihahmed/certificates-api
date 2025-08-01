import { Injectable } from '@nestjs/common';
import { CreateStudentCertificateDto } from './dto/create-student-certificate.dto';
import { UpdateStudentCertificateDto } from './dto/update-student-certificate.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class StudentCertificatesService {
  constructor(private dbService: PrismaService) {}

  create(createStudentCertificateDto: CreateStudentCertificateDto) {
    return this.dbService.studentCertificate.create({
      data: createStudentCertificateDto,
    });
  }

  findAll() {
    return this.dbService.studentCertificate.findMany();
  }

  findOne(id: string) {
    return this.dbService.studentCertificate.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateStudentCertificateDto: UpdateStudentCertificateDto) {
    return this.dbService.studentCertificate.update({
      where: {
        id,
      },
      data: updateStudentCertificateDto,
    });
  }

  remove(id: string) {
    return this.dbService.studentCertificate.delete({
      where: {
        id,
      },
    });
  }
}
