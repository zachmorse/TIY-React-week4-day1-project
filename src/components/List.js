import React, { Component } from "react";

class List extends Component {
  render() {
    let imgList = this.props.images.map((image, index) => {
      return (
        <div key={index}>
          <img
            src={image.urls.regular}
            alt=""
            style={{ boxShadow: "grey 1px 1px 2px" }}
          />
        </div>
      );
    });

    return (
      <div>
        {imgList.length ? (
          imgList
        ) : (
          "Enter a search above, and hit enter to begin."
        )}
      </div>
    );
  }
}

export default List;
