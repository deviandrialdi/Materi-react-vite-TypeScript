import { useState, useEffect } from "react";

import Layout from "../components/Layout";
import axios from "axios";
import Button from "../components/Button";

import { useFetchGet } from "../utils/hooks/customHooks"; // setelah dibikin lalu diimport

const Sandbox = () => {
  const [count, setCount] = useState(0); // setelah itu bikin useState*
  const [trigger, setTrigger] = useState(false); // ini state untuk trigger agar button berjalan terus
  const [data] = useFetchGet("https://jsonplaceholder.typicode.com/todos/1"); // langkah selanjutnya.

  // codingan
  useEffect(() => {
    fetchData();
  }, []);

  // contoh penggunaan useeffect ada state.
  useEffect(() => {
    // console.log("RUNNING");
  }, [trigger]);

  // function fect data
  function fetchData() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Layout>
      <p>test</p>
      <Button label="Button" onClick={() => setTrigger(!trigger)} />
      {/* cara membuat button dengan label, jgn lupa import dulu agar bisa digunakan. 
      
      onClick={() => setTrigger(!trigger)}  berfungsi sebagai ketika fitutr sreach diketik lalu dienter maka halamannya tidak direfresh melainkan hanya data yg diketik direfresh*/}
    </Layout>
  );
};

export default Sandbox;

// cara pemanggilan API menggunakan Axios

/* 
- Buat dulu routesnya di router
- buat di main.tx (untuk testing hasilnya)
- Lalu buat di Nabvar
- import layout
- setelah itu import { *useState, useEffect } from "react";
- bikin codingan useState
- lalu import axios
- Bikin codingan useEffect didalam const sandbox (rumus dasar use effect useEffect(() => {}, []);)
- bikin codingan fectData 
- lalu bikin function fectdata


Contoh pengunaan useEffect
- bikin dulu kodingan useEffcet
- lalu tambahn state pada codingan const


*/

/* 
  1. Penjelassan pada const Index 
  Ketika ada perubahan state pada saat useEffect berjalan, maka terjadi sebuah re-render component.

  2. PENJELASAN PADA useEffect
  Mirip dengan componentDidMount, artinya dia hanya dipanggil sekali setelah komponent dimuat/render (menambahkan empty scope)
  useEffect(() => {
    ...
  }, [])


  3. PENULISAN USEEFECT LAINNYA
  useEffect akan jalan terus atau dipanggil kalau penulisannya tanpa scope ([])
  useEffect(() => {
    ...
  }) => cara counting down



  4. PENULISAN USEEFECT lainnya
  useEffect(() => {
    ...
  }, [state1, state2, state3])
  
  Seperti componentDidMount + componentDidUpdate, dijalankan sekali pada saat komponen telah dimuat, lalu dia akan jalan kembali ketika ada perubahan nilai dari salah satu state yang ditulis didalam scope.



5. penulisan USEEFEEFTC LAINNYA
useEffect(() => {
    ...
    return () => {
      ...
    }
  })
  
  Mirip dengan componentDidUpdate + componentDidMount + componentWillUnmount, dia bakal dijalankan setiap waktu (mirip dengan penulisan useEffect tanpa scope), namun dia bakal berhenti/unsubscribe ketika kita meninggalkan halaman, dengan harap agar performa dari web tetap terjaga(karna ga proses yg berjalan dibelakang layar), implementasinya seperti OTP (ada perhitungan mundur yang dijalankan setiap detik), status online.

  Semua component yang ada diclass digantikan dengan useeEffect pada function. 1 hooks di fucntional component bisa digantikan dengan lifecycle yang berbeda. Tergantung cara penulisannya. UseeEffect bisa ditulis lebih dari 1 dan tergantung fungsinya.

  contoh button ingin didisable(form), ketika inputan semua udah diisi semua, baru button bisa diklik. itu adalah cara useeffect 
  */

// Cara lain bikin custom Hooks
