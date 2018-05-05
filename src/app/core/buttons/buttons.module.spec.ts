import { ButtonsModule } from './buttons.module';

describe('ButtonsModule', () => {
  let buttonsModule: ButtonsModule;

  beforeEach(() => {
    buttonsModule = new ButtonsModule();
  });

  it('should create an instance', () => {
    expect(buttonsModule).toBeTruthy();
  });
});
