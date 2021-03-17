import { newSpecPage } from '@stencil/core/testing';
import { MyComponent2 } from '../my-component2';

describe('my-component2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyComponent2],
      html: `<my-component2></my-component2>`,
    });
    expect(page.root).toEqualHtml(`
      <my-component2>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-component2>
    `);
  });
});
