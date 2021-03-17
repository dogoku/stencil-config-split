import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component-demo'
})
export class MyComponent {

  render() {
    return <my-component first="John" middle="Doe" last="Smith"></my-component>;
  }
}
