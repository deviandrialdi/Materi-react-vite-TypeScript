import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// useSelector digunakan untuk mengambil data
// useDispatch merubah data

import Layout from "components/Layout";
import DetailCard from "components/DetailCard";

import { setFavorites } from "utils/redux/reducers/reducer";
import { LoadingAnimation } from "components/Loading";
import { useTitle } from "utils/hooks/customHooks";
import { MovieType } from "utils/types/movie";
import { RootState } from "utils/types/redux";

const Favorite = () => {
  const dispatch = useDispatch(); // ini buat ketika data dihapus pada form favorite, maka akan langsung refresh tanpa harus di paksa refresh
  useTitle("Cinephile - Your Favorite Movie");
  const datas = useSelector((state: RootState) => state.data.favorites); // ini dipanggil datanya

  function removeFavorite(data: MovieType) {
    let dupeDatas: MovieType[] = datas.slice();
    const filterData = dupeDatas.filter((item) => item.id !== data.id);
    localStorage.setItem("FavMovie", JSON.stringify(filterData));
    dispatch(setFavorites(filterData)); // ini buat ketika data dihapus pada form favorite, maka akan langsung refresh tanpa harus di paksa refresh
    alert(`Movie ${data.title} delete from favorite list`);
  }

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-3 p-3">
        {datas.map((data) => (
          <DetailCard
            key={data.id}
            title={data.title}
            image={data.poster_path}
            id={data.id}
            labelButton="Remove From Favorite"
            onClickFav={() => removeFavorite(data)}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Favorite;
