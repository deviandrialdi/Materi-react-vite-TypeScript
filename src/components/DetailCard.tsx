import React, { Component } from "react";

interface DetailCardProps {
  title: string;
  image: string;
}

export default class DetailCard extends Component<DetailCardProps> {
  render() {
    return (
      <div className="card glass">
        <figure>
          <img src={this.props.image} alt={this.props.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{this.props.title}</h2>
          {/* <p>How to park your car at your garage?</p> */}
          <div className="card-actions justify-center">
            <button className="btn btn-primary w-full">Add To Favorite</button>
          </div>
        </div>
      </div>
    );
  }
}
