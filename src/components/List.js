import React, { Component } from "react";

class List extends Component {
  render() {
    let imgList = this.props.images.map((image, index) => {
      return (
        <div key={index}>
          <img src={image.urls.regular} alt="" />
        </div>
      );
    });

    return (
      <div>
        {imgList.length ? imgList : "No images found."}
      </div>
    );
  }
}

export default List;
