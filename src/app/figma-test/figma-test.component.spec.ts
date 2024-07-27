import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigmaDesignPageComponent } from './figma-test.component';

describe('FigmaDesignPageComponent', () => {
  let component: FigmaDesignPageComponent;
  let fixture: ComponentFixture<FigmaDesignPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FigmaDesignPageComponent]
    });
    fixture = TestBed.createComponent(FigmaDesignPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
