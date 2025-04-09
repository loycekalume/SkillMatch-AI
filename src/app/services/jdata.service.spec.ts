import { TestBed } from '@angular/core/testing';

import { JdataService } from './jdata.service';

describe('JdataService', () => {
  let service: JdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
