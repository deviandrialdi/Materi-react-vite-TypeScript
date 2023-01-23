import { useNavigate } from "react-router-dom";
import { FC } from "react";

import Button from "./Button";
import { withRouter } from "../utils/navigation";

interface DetailCardProps {
  title?: string;
  image?: string;
  id?: number;
  labelButton?: string;
  onClickFav: () => void;
}

const DetailCard: FC<DetailCardProps> = ({
  id,
  title,
  image,
  labelButton,
  onClickFav,
}) => {
  const navigate = useNavigate();
  function onClickDetail() {
    navigate(`/movie/${id}`);
  }

  return (
    <div className="card glass bg-slate-400">
      <figure onClick={() => onClickDetail()}>
        <img
          className="mx-auto"
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt={title}
        />
      </figure>
      <div className="card-body items-center justify-between">
        <h2
          className="card-title items-center text-center"
          onClick={() => onClickDetail()}
        >
          {title}
        </h2>
        <div className="card-actions w-full justify-center">
          <Button label={labelButton} onClick={onClickFav} />
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
