import { newSpecPage } from '@stencil/core/testing';
import { PortalComponent } from '../portal-component';

describe('portal-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PortalComponent],
      html: `<portal-component></portal-component>`,
    });
    expect(page.root).toEqualHtml(`
      <portal-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </portal-component>
    `);
  });
});
