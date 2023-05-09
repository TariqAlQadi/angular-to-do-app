import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CoreService } from './core.service';

describe('CoreService', () => {
  let testSubject: CoreService;
  let snackSpy: jasmine.SpyObj<any>;

  beforeEach(() => {
    snackSpy = jasmine.createSpyObj('snackBar', ['open']);
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule],
    });
    testSubject = TestBed.inject(CoreService);
  });

  it('should be created', () => {
    expect(testSubject).toBeTruthy();
  });
});
