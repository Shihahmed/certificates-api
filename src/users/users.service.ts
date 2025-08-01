import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private dbService: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.dbService.user.create({
      data: {
        email: createUserDto.email,
        name: createUserDto.name,
      },
    });
  }

  findAll() {
    return this.dbService.user.findMany();
  }

  findOne(id: string) {
    return this.dbService.user.findFirst({
      where: {
        id,
      },
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.dbService.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this.dbService.user.delete({
      where: {
        id,
      },
    });
  }
}
