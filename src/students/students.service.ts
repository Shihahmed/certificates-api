import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class StudentsService {
  constructor(private dbService: PrismaService) {}

  create(createStudentDto: CreateStudentDto) {
    return this.dbService.student.create({
      data: createStudentDto,
    });
  }

  findAll() {
    return this.dbService.student.findMany();
  }

  findOne(id: string) {
    return this.dbService.student.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateStudentDto: UpdateStudentDto) {
    return this.dbService.student.update({
      where: {
        id,
      },
      data: updateStudentDto,
    });
  }

  remove(id: string) {
    return this.dbService.student.delete({
      where: {
        id,
      },
    });
  }
}
