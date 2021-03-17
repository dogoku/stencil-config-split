import { newE2EPage } from '@stencil/core/testing';

describe('my-component2', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-component2></my-component2>');

    const element = await page.find('my-component2');
    expect(element).toHaveClass('hydrated');
  });
});
