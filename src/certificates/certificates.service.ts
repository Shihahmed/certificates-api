import { Injectable } from '@nestjs/common';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class CertificatesService {
  constructor(private dbService: PrismaService) {}

  create(createCertificateDto: CreateCertificateDto) {
    return this.dbService.certificate.create({
      data: createCertificateDto,
    });
  }

  findAll() {
    return this.dbService.certificate.findMany();
  }

  findOne(id: string) {
    return this.dbService.certificate.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateCertificateDto: UpdateCertificateDto) {
    return this.dbService.certificate.update({
      where: {
        id,
      },
      data: updateCertificateDto,
    });
  }

  remove(id: string) {
    return this.dbService.certificate.delete({
      where: {
        id,
      },
    });
  }
}
