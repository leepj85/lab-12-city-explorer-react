import React from 'react';

export default class Result extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae nulla ipsum. Integer non varius arcu. Maecenas eleifend orci et pretium accumsan. Suspendisse scelerisque nunc ac venenatis suscipit. Nam eu posuere dui. Aliquam eget ultrices est, id sagittis libero. Maecenas finibus feugiat diam. Suspendisse a tempus mauris. Sed tincidunt efficitur metus eu fermentum. Etiam efficitur semper neque, et hendrerit nisi ultrices euismod',
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.words}</p>
      </div>
    );
  }
}