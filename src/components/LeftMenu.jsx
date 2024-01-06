import React, { useState } from "react";
import Chats from "./Chats";
import RoundedBtn from "./Common/RoundedBtn";
import { MdPeopleAlt } from "react-icons/md";
import { TbCircleDashed } from "react-icons/tb";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { BiFilter } from "react-icons/bi";
import { pp } from "../assets/whatsapp";

function LeftMenu() {
  const [filter, setFilter] = useState(false);

  return (
    // LeftMenu container
    <div className="flex flex-col border-r border-neutral-700 w-[400px] bg-[#161923] h-screen">
      {/* Profile nav */}
      <div className="flex justify-between items-center bg-[#282d3f] h-[60px] p-3">
        {/* Profile picture */}
        <img src={pp} alt="profile_picture" className="rounded-full w-[40px]" />

        {/* Profile nav buttons */}
        <div className="flex justify-between w-[150px]">
          <RoundedBtn icon={<MdPeopleAlt />} />
          <RoundedBtn icon={<BsFillChatLeftTextFill />} />
          <RoundedBtn icon={<HiDotsVertical />} />
        </div>
      </div>

      {/* Search and filter */}
      <div className="flex justify-between items-center h-[60px] p-2 bg-[#282d3f]">
        {/* Search input */}
        <input
          type="text"
          placeholder="Search or start a new chat"
          className="rounded-lg bg-[#161923] text-[#8796a1] text-sm font-light outline-none px-4 py-2 w-[400px] h-[35px] placeholder:text-[#8796a1] placeholder:text-sm placeholder:font-light"
        />

        {/* Filter button */}
        <button
          className={`text-2xl m-2 p-1 rounded-full ${
            filter
              ? "bg-emerald-500 text-white rounded-full hover:bg-emerald-700"
              : "text-[#8796a1] hover:bg-[#3c454c]"
          }`}
          onClick={() => setFilter(!filter)}
        >
          <BiFilter />
        </button>
      </div>

      {/* Chats */}
      <Chats filter={filter} />
    </div>
  );
}

export default LeftMenu;
