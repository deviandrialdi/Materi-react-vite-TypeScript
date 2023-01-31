import { useState, useEffect } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import DetailCard from "../components/DetailCard";
import { LoadingAnimation } from "../components/Loading";
import Carousel from "../components/Carousel";
import { MovieType } from "../utils/types/movie";

import { useTitle } from "../utils/hooks/customHooks"; // ini custom Hooks yang dibuat

const Index = () => {
  useTitle("Cinephile - Now Playing Movie"); // langkah kedua ketika sudah buat custom Hooks
  const [datas, setDatas] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  // ini adalah HOOK 1 tentang useState

  useEffect(() => {
    fetchData(1);
  }, []);
  // ini adalah hook 2 tentang useEffect

  function fetchData(page: number) {
    setTimeout(() => {
      axios
        .get(
          `now_playing?api_key=${
            import.meta.env.VITE_API_KEY
          }&language=en-US&page=${page}`
        )
        .then((data) => {
          const { results, total_pages } = data.data;
          setDatas(results);
          setTotalPage(total_pages);
        })
        .catch((error) => {
          alert(error.tostring());
        })
        .finally(() => setLoading(false));
    }, 8000);
  }

  function nextpage() {
    const newPage = page + 1;
    setPage(newPage);
    fetchData(newPage);
  }

  function prevPage() {
    const newPage = page - 1;
    setPage(newPage);
    fetchData(newPage);
  }

  function handleFavorite(data: MovieType) {
    const checkExist = localStorage.getItem("FavMovie");
    if (checkExist) {
      let parsefav: MovieType[] = JSON.parse(checkExist);
      parsefav.push(data);
      localStorage.setItem("FavMovie", JSON.stringify(parsefav));
      alert("Movie Succes add to favorite");
    } else {
      localStorage.setItem("FavMovie", JSON.stringify([data]));
      alert("Succes added Movie to Favorite");
    }
  }

  return (
    <Layout>
      {!loading && (
        <Carousel
          datas={datas}
          content={(data) => (
            <div
              className="w-full h-full flex justify-center items-center bg-cover bg-center dark:opacity-90"
              style={{
                backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.5),
                    rgba(0, 0, 0, 0.5)
                  ), url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
              }}
            >
              <p className="text-white italic tracking-widest font-bold break-words text-2xl text-center">
                {data.title}
              </p>
            </div>
          )}
        />
      )}
      <div className="grid grid-cols-4 justify-center gap-3 p-3">
        {loading
          ? [...Array(20).keys()].map((data) => <LoadingAnimation key={data} />)
          : datas.map((data) => (
              <DetailCard
                key={data.id}
                title={data.title}
                image={data.poster_path}
                labelButton="Add To Favorite"
                id={data.id}
                onClickFav={() => handleFavorite(data)}
              />
            ))}
      </div>
      <div className="btn-group w-full justify-center">
        <button
          className="btn bg-blue-800"
          onClick={() => prevPage()}
          disabled={page === 1}
        >
          «
        </button>
        <button className="btn">{page}</button>
        <button
          className="btn bg-indigo-900"
          onClick={() => nextpage()}
          disabled={page === totalPage}
        >
          »
        </button>
      </div>
    </Layout>
  );
};

export default Index;
