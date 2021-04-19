import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCloneComponent } from './video-clone.component';

describe('SkillsComponent', () => {
  let component: VideoCloneComponent;
  let fixture: ComponentFixture<VideoCloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
