// Hooks diawali kata use. useeffect, useState, useNavigate, usecontecxt, useReducer, uselayoutEffect, useparams.

// custom hooks berfungsi sebagai untuk merubah judul dari website bawaan pada saat install.

import { useEffect, useState } from "react";

export function useTitle(title: string) {
  useEffect(() => {
    const prevTitle = document.title; // dokument title default
    document.title = title;
    return () => {
      document.title = prevTitle; // kembali ke titlte sebelumya.
    };
  });
}

// berfungsi sebagai merubah nama pada tab di website.

// -------------------------------------------------- //

/*
cara buat custom hook 
-export {}
*/

export function useFetchGet(url: string) {
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);
  return [data];
}
