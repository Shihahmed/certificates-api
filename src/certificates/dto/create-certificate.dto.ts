import { ApiProperty } from '@nestjs/swagger';

export class CreateCertificateDto {
  @ApiProperty({
    description: 'The name of the certificate',
    example: 'Certificate of Completion',
  })
  name: string;

  @ApiProperty({
    description: 'The structure of the certificate',
    example: 'Certificate of Completion',
  })
  structure: string;
}
