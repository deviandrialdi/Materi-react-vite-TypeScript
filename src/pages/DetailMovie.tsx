import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import moment from "moment";

import Layout from "../components/Layout";
import { LoadingAnimation } from "../components/Loading";
import { withRouter } from "../utils/navigation";
import { MovieType } from "../utils/types/movie";

const formatUSD = (money: any) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(money);
};

const DetailMovie = () => {
  const params = useParams();
  const [data, setData] = useState<MovieType>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const { id_movie } = params;
    setTimeout(() => {
      fetch(
        `https://api.themoviedb.org/3/movie/${id_movie}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&append_to_response=videos`,
        { method: "GET" }
      )
        .then((response) => response.json())

        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          alert(error.tostring());
        })
        .finally(() => setLoading(false));
    }, 5000);
  }

  return (
    <Layout>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div className="flex w-full h-[60vh] bg-blue-900 text-white text-base overflow-auto gap-3">
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.title}
          />
          <div className="p-5">
            <p className="text-center">
              <h1 className="text-white text-2xl font-bold text-center">
                {" "}
                Title: {data.title}
              </h1>
              <span className="italic">{data.tagline}</span>
            </p>

            <div className="card flex-shrink-0 w-full max-lg: shadow-2xl">
              <div className="card-body p-1">
                <div className="form-control">
                  <p className="px-3 label-text text-white">
                    Ratings: {data.vote_average}
                  </p>
                  <p className="px-3 label-text text-white">
                    Release: {moment(data.release_date).format("ll")}{" "}
                  </p>
                  <p className="px-3 label-text text-white">
                    Genre :{" "}
                    {data.genres
                      ?.map((genre) => {
                        return genre.name;
                      })
                      .join(", ")}
                  </p>
                  <p className="px-3 label-text text-white">
                    Production Companies:{" "}
                    {data.production_companies
                      ?.map((production_companies) => {
                        return production_companies.name;
                      })
                      .join(", ")}
                  </p>
                  <p className="px-3 label-text text-white">
                    Budget: {formatUSD(data.budget)}.00
                  </p>
                  <p className="px-3 label-text text-white">
                    Runtime: {data.runtime} mins
                  </p>
                  <p className="px-3 label-text text-white">
                    Original Language: {data.original_language}
                  </p>
                  <p className="px-3 label-text text-white">
                    Status: {data.status}
                  </p>
                  <p className="px-3 label-text text-white">
                    Overview:{" "}
                    <span className="italic font-bold text-white">
                      {data.overview}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default DetailMovie;
