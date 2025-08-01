import { Test, TestingModule } from '@nestjs/testing';
import { StudentCertificatesController } from './student-certificates.controller';
import { StudentCertificatesService } from './student-certificates.service';

describe('StudentCertificatesController', () => {
  let controller: StudentCertificatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentCertificatesController],
      providers: [StudentCertificatesService],
    }).compile();

    controller = module.get<StudentCertificatesController>(
      StudentCertificatesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
