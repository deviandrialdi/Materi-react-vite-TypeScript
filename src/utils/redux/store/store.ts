import { configureStore } from "@reduxjs/toolkit";
import reducers from "utils/redux/reducers/reducer";

const store = configureStore({
  reducer: {
    data: reducers.state,
  },
});

export default store;

/* 
store atau data base karna dibuat sebagai wadah yang berfungsi menyimpan datanya

Store adalah sebuah function/method yang menerima sebuah parameter yang dinamakan reducer, yang berfungsi untuk mendaftarkan sebuah state.


Store ini sendiri digunakan untuk membuat sebuah wadah/tempat yang nantinya dipakai untuk menyimpan informasi/data/state yang ditempatkan pada hirarki paling atas dari sebuah component tree.
*/

// jika main dibungkus oleh store, maka secara otomatis semua halaman bisa akses state yang sama. Hal tersbut dinamakan redux. jadi artinya semua project atau aplikasi sudah dibungkus oleh store.

/*secara hirarki =>
provider 
router 
 - halaman homepage,
 - detail,
 - favorites 
 - sandbox
 */
