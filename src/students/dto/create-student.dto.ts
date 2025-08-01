import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  @ApiProperty({
    description: 'The name of the student',
    example: 'John Doe',
  })
  name: string;
}
