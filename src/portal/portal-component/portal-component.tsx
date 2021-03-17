import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'portal-component',
  styleUrl: 'portal-component.css',
  shadow: true,
})
export class PortalComponent {

  render() {
    return (
      <Host>
        <my-component-demo></my-component-demo>
      </Host>
    );
  }

}
