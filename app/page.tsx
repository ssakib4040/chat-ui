"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { BsFillPeopleFill, BsSearch } from "react-icons/bs";
import {
  BiMicrophone,
  BiPaperclip,
  BiSmile,
  BiCamera,
  BiSend,
  BiChat,
  BiVideo,
  BiPhoneCall,
  BiInfoCircle,
  BiBlock,
} from "react-icons/bi";
import { MdAudiotrack } from "react-icons/md";

export default function Home() {
  const [friends, setFriends] = useState<any>([]);
  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    // create 10 items in faker js
    const friends = Array.from({ length: 10 }, (_, i) => i + 1).map((index) => {
      return {
        id: index,
        name: faker.person.fullName(),
        avatar: faker.image.avatar(),
        message: faker.lorem.sentence(),
      };
    });
    setFriends(friends);

    // create 10 items in faker js
    const messages = Array.from({ length: 20 }, (_, i) => i + 1).map(
      (index) => {
        return {
          id: index,
          email: faker.internet.email(),
          name: faker.person.fullName(),
          avatar: faker.image.avatar(),
          message: faker.lorem.sentence(),
        };
      }
    );

    // console.log(messages);
    setMessages(messages);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const main = document.querySelector("#main");

      main?.scrollTo({
        top: 99999,
      });
    }, 1000);
  }, []);

  return (
    <div className="dev flex flex-col md:flex-row h-screen">
      {/* left side */}
      <div className="dev hidden lg:flex flex-col md:w-[300px] w-full bg-[#f9f9f9]">
        {/*  */}
        <div className="dev mt-10 p-3 flex">
          {/* <div className="border rounded-3xl h-[50px] w-[50px] bg-gray-500 dev"></div> */}

          <Image
            src="https://picsum.photos/200/200?random=1"
            height="50"
            width="50"
            className="h-[50px] w-[50px] rounded-3xl"
            alt=""
          ></Image>

          <div className="ml-2 flex flex-col justify-center dev">
            <h2 className="text-blue-500 ">Gravid Christofer</h2>
            <p className="text-xs text-gray-500">Senior Developer</p>
          </div>
        </div>

        {/*  */}
        <div className="flex items-center p-2 dev">
          <form
            action=""
            className="flex items-center bg-white border border-gray-300 w-full rounded-3xl overflow-hidden"
          >
            <span className="ml-2">
              <BsSearch />
            </span>
            <input
              type="text"
              className="w-full p-2 text-gray-500 focus:outline-none text-sm"
              placeholder="Search Friends"
            />
          </form>
        </div>

        {/*  */}
        <div className="dev overflow-y-auto">
          {friends.map((data: any, index: any) => {
            return (
              <div key={data.id} className="dev flex p-3">
                <Image
                  src={data.avatar}
                  height="40"
                  width="40"
                  alt=""
                  className="w-[40px] h-[40px]  rounded-3xl"
                ></Image>

                <div className="dev ml-2">
                  <h2 className="text-blue-500 text-sm">{data.name}</h2>
                  <p className="text-xs text-gray-500">{data.message}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* main */}
      <div className="dev flex-1 overflow-auto" id="main">
        <div className="flex justify-between dev sticky top-0 p-3 bg-white">
          <div className="flex items-center dev">
            <Image
              src="https://picsum.photos/200/200?random=1"
              height="40"
              width="40"
              alt=""
              className="w-[40px] h-[40px]  rounded-3xl"
            ></Image>
            <h2 className="dev ml-2">John Doe</h2>

            <span className="relative flex h-3 w-3 ml-2">
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>

          <div className="flex gap-3 dev">
            <div className="dev justify-center flex items-center text-xl h-[40px] w-[40px]">
              <BsSearch></BsSearch>
            </div>
            <div className="dev justify-center flex items-center text-xl h-[40px] w-[40px]">
              <BiMicrophone></BiMicrophone>
            </div>
            <div className="dev justify-center flex items-center text-xl h-[40px] w-[40px]">
              <BiPaperclip></BiPaperclip>
            </div>
            <div className="dev justify-center flex items-center text-xl h-[40px] w-[40px] ">
              <BiSmile></BiSmile>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="messages mb-[50px]">
          {messages.map((data: any, index: number) => {
            const isOdd = Boolean(index % 2);
            console.log(data);

            if (isOdd) {
              return (
                <div className="flex dev mb-3 px-3 dev" key={index}>
                  <div className="flex mt-1">
                    {/* <div className=""></div> */}

                    <Image
                      src={data.avatar}
                      height={40}
                      width={40}
                      alt=""
                      className="w-[20px] h-[20px] bg-slate-500 rounded-full"
                    ></Image>
                  </div>

                  <div className="text-sm bg-[#f9f9f9] ml-3 p-1 px-3 border rounded-lg text-gray-600 max-w-[70%]">
                    {data.message}
                  </div>
                </div>
              );
            }

            return (
              <div
                className="flex flex-row-reverse dev mb-3 px-3 dev"
                key={index}
              >
                <div className="flex mt-1">
                  <Image
                    src={`https://picsum.photos/200/300?random=2`}
                    height={40}
                    width={40}
                    alt=""
                    className="w-[20px] h-[20px] bg-slate-500 rounded-full"
                  ></Image>
                </div>

                <div className="text-sm bg-blue-500 text-white mr-3 p-1 px-3 border rounded-lg max-w-[70%]">
                  {data.message}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex dev sticky bottom-0 p-3 bg-white">
          <form
            className="flex items-center bg-[#f9f9f9] border w-full p-1 relative rounded-full"
            action="#"
            method="post"
          >
            <span className="px-2 dev">
              <BiMicrophone />
            </span>
            <input
              type="text"
              className="w-full bg-[#f9f9f9] text-sm dev focus:outline-none"
              placeholder="Write a message"
            />
            <span className="dev px-2">
              <BiPaperclip />
            </span>

            <span className="dev px-2">
              <BiSmile />
            </span>
            <span className="dev px-2 mr-[50px]">
              <BiCamera />
            </span>

            <button
              type="submit"
              className="absolute right-0 bg-blue-500 text-white p-3 rounded-full"
            >
              <BiSend />
            </button>
          </form>
        </div>

        {/*  */}
      </div>

      {/* right side */}
      <div className="dev hidden lg:block md:w-[300px] w-full bg-[#f9f9f9]">
        <form
          action=""
          className=" mt-10 flex items-center bg-white border border-gray-300 rounded-full mx-3 mb-3 px-3 "
        >
          <span className="ml-1">
            <BsSearch />
          </span>
          <input
            type="text"
            className="w-full p-2 text-sm focus:outline-none rounded-3xl "
            placeholder="Search Messages"
          />
        </form>

        <div className="dev flex justify-center mb-3">
          {/* <div className="w-[80px] h-[80px] rounded-full bg-slate-500"></div> */}

          <Image
            src="https://picsum.photos/200/300?random=2"
            height={80}
            width={80}
            alt=""
            className="w-[80px] h-[80px] rounded-full"
          ></Image>
        </div>

        <div className="mb-6 dev">
          <h2 className="text-blue-500 text-lg  text-center">
            Gravid Christofer
          </h2>
          <p className="text-sm text-gray-500 text-center">Junior Developer</p>
        </div>

        <div className="flex justify-around px-3 mb-6 text-center dev">
          <div className="h-[60px] w-[60px] bg-blue-200 text-blue-600 rounded-full justify-center flex items-center text-2xl dev">
            <BiChat></BiChat>
          </div>
          <div className="h-[60px] w-[60px] bg-blue-200 text-blue-600 rounded-full justify-center flex items-center text-2xl dev">
            <BiVideo></BiVideo>
          </div>
          <div className="h-[60px] w-[60px] bg-blue-200 text-blue-600 rounded-full justify-center flex items-center text-2xl dev">
            <MdAudiotrack></MdAudiotrack>
          </div>
        </div>

        <div className="mb-3 px-3 dev">
          <ul>
            <li className="flex text-gray-600 items-center mb-2">
              <BsFillPeopleFill />{" "}
              <span className="ml-2 text-sm">View People</span>
            </li>
            <li className="flex text-gray-600 items-center mb-2">
              <BiPhoneCall /> <span className="ml-2 text-sm">Call</span>
            </li>
            <li className="flex text-gray-600 items-center mb-2">
              <BiVideo /> <span className="ml-2 text-sm">Video</span>
            </li>
            <li className="flex text-gray-600 items-center mb-2">
              <BiInfoCircle /> <span className="ml-2 text-sm">View Info</span>
            </li>

            <li className="flex text-gray-600 items-center mb-2">
              <BiBlock /> <span className="ml-2 text-sm">Block</span>
            </li>
          </ul>
        </div>

        <div className="mb-3 mx-3 text-gray-600 font-medium dev">
          Attachment
        </div>

        <div className="flex justify-around px-3 mb-3 text-center dev">
          <div className="h-[60px] w-[60px] bg-blue-200 text-blue-600 rounded-lg flex justify-center items-center text-sm dev">
            Chat
          </div>
          <div className="h-[60px] w-[60px] bg-blue-200 text-blue-600 rounded-lg flex justify-center items-center text-sm dev">
            Video
          </div>
          <div className="h-[60px] w-[60px] bg-blue-200 text-blue-600 rounded-lg flex justify-center items-center text-sm dev">
            Files
          </div>

          <div className="h-[60px] w-[60px] bg-blue-200 text-blue-600 rounded-lg flex justify-center items-center text-sm dev">
            Images
          </div>
        </div>

        <div className="flex justify-center dev">
          <button className="border border-blue-400 p-1 px-3 text-blue-500 rounded-full text-xs">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}
