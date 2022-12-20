import { TestBed } from '@angular/core/testing';

import { PopupService } from './popup.service';

describe('PopupService', () => {
  let service: PopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopupService]
    });
    service = TestBed.inject(PopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should toggle popup', () => {
    expect(service.isModalOpen$.value).toBeFalse();
    service.modalToggle(true);
    expect(service.isModalOpen$.value).toBeTruthy()
  });
});
