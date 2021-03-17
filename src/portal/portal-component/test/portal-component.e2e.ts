import { newE2EPage } from '@stencil/core/testing';

describe('portal-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<portal-component></portal-component>');

    const element = await page.find('portal-component');
    expect(element).toHaveClass('hydrated');
  });
});
