import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentCertificateDto {
  @ApiProperty({
    description: 'The id of the student',
    example: '1',
  })
  studentId: string;

  @ApiProperty({
    description: 'The id of the certificate',
    example: '1',
  })
  certificateId: string;
}
