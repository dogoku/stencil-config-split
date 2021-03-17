import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-component2',
  styleUrl: 'my-component2.css',
  shadow: true,
})
export class MyComponent2 {

  render() {
    return (
      <Host>
        Hello Again
      </Host>
    );
  }

}
