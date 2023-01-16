import React, { Component } from "react";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar sticky border-gray-200 bg-blue-900 gap-3">
        <div className="btn-circle bg-slate-400 text-purple-700 justify-center">
          <img src="https://i2.wp.com/avatar-management--avatars.us-west-2.prod.public.atl-paas.net/initials/SA-3.png?ssl=1" />
        </div>
        <div className="flex-1 gap-5">
          <a className="btn btn-ghost normal-case text-2xl text-white">
            SocialAPP
          </a>
          <div className="flex flex-1 items-center  justify-around">
            <div className="form-control w-full max-w-xs">
              <input type="text" placeholder="Search..." className="input" />
            </div>
          </div>

          <div className="justify-between">
            <label tabIndex={0} className="justify-between:flex-end">
              <a className="btn btn-ghost normal-case text-2xl text-white">
                Devi Andri
              </a>
            </label>
          </div>

          <div className="flex items-center justify-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://media-exp1.licdn.com/dms/image/C5103AQFoQigjRDlcaw/profile-displayphoto-shrink_800_800/0/1527350439453?e=2147483647&v=beta&t=1-_pvt9Emq3bhaJzQIWPjJMNvF1iP0R5VNyM7uRk98s" />
              </div>
            </label>
          </div>
        </div>
      </div>
    );
  }
}
