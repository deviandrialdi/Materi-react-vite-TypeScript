import { NavigationType } from "react-router-dom";
import { Component } from "react";

import Button from "./Button";
import { withRouter } from "../utils/navigation";

interface DetailCardProps {
  title: string;
  image: string;
  id: number;
  labelButton: string;
  onClickFav?: () => void;
  navigate?: any;
  params?: any;
}

class DetailCard extends Component<DetailCardProps> {
  onClikDetail() {
    // alert(`Movie ${this.props.id} selected`);
    this.props.navigate(`/movie/${this.props.id}`);
  }

  render() {
    return (
      <div className="card glass bg-slate-400">
        <figure onClick={() => this.onClikDetail()}>
          <img
            className="mx-auto"
            src={`https://image.tmdb.org/t/p/w500${this.props.image}`}
            alt={this.props.title}
          />
        </figure>
        <div className="card-body items-center justify-between">
          <h2
            className="card-title items-center text-center"
            onClick={() => this.onClikDetail()}
          >
            {this.props.title}
          </h2>
          <div className="card-actions w-full justify-center">
            <Button
              label={this.props.labelButton}
              onClick={this.props.onClickFav}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DetailCard);
