import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { LoaderPage } from './loader.page';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router } from '@angular/router';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderPage],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);  // Mengganti TestBed.get ke TestBed.inject karena TestBed.get sudah deprecated
    fixture.detectChanges();
  }));

  it('should go to login page after load', fakeAsync(() => {
    spyOn(router, 'navigate');

    component.ngOnInit();

    tick(1500);  // Simulasi waktu yang diperlukan untuk pindah halaman

    expect(router.navigate).toHaveBeenCalledWith(['login']);
  }));
});
