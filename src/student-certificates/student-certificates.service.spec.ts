import { Test, TestingModule } from '@nestjs/testing';
import { StudentCertificatesService } from './student-certificates.service';

describe('StudentCertificatesService', () => {
  let service: StudentCertificatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentCertificatesService],
    }).compile();

    service = module.get<StudentCertificatesService>(StudentCertificatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
