import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoDetailComponent } from './aluno-detail.component';

describe('AlunoDetailComponent', () => {
  let component: AlunoDetailComponent;
  let fixture: ComponentFixture<AlunoDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlunoDetailComponent]
    });
    fixture = TestBed.createComponent(AlunoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
