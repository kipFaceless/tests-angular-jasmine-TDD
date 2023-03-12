import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharizardComponent } from './charizard.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PokemonService } from '../services/pokemon.service';
import { registerSnapshots } from 'jasmine-snapshot';

describe('CharizardComponent', () => {
  let component: CharizardComponent;
  let fixture: ComponentFixture<CharizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharizardComponent ],
      imports: [ HttpClientTestingModule, HttpClientTestingModule],
      providers : [PokemonService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CharizardComponent);
     fixture.detectChanges();
    const serialized = fixture.nativeElement.outerHTML;
    expect(serialized).toMatchSnapshot();
    fixture.detectChanges();

  });

});
