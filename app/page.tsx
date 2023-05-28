"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
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
  const [message, setMessage] = useState<any>("");
  const [messages, setMessages] = useState<any>([]);

  let user = "john";

  const messageRef = useRef<any>(null);

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
          user: Math.random() < 0.5 ? "john" : faker.internet.domainWord(),
          email: faker.internet.email(),
          name: faker.person.fullName(),
          avatar: faker.image.avatar(),
          message: faker.lorem.sentence(),
        };
      }
    );

    setMessages(messages);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      messageRef.current.scrollTo({
        top: 99999,
      });
    }, 1000);
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!message) return;

    const newMessage = {
      id: messages.length + 1,
      user: user,
      email: faker.internet.email(),
      name: faker.person.fullName(),
      avatar: faker.image.avatar(),
      message: message,
    };

    setMessages([...messages, newMessage]);

    setTimeout(() => {
      messageRef.current.scrollTo({
        top: 99999,
      });
    }, 100);

    setMessage("");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* left side */}
      <div className="hidden lg:flex flex-col md:w-[300px] w-full bg-[#f9f9f9]">
        {/*  */}
        <div className="mt-10 p-3 flex">
          {/* <div className="border rounded-3xl h-[50px] w-[50px] bg-gray-500"></div> */}

          <Image
            src="https://picsum.photos/200/200?random=1"
            height="50"
            width="50"
            className="h-[50px] w-[50px] rounded-3xl"
            alt=""
          ></Image>

          <div className="ml-2 flex flex-col justify-center">
            <h2 className="text-blue-500 ">Gravid Christofer</h2>
            <p className="text-xs text-gray-500">Senior Developer</p>
          </div>
        </div>

        {/*  */}
        <div className="flex items-center p-2">
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
        <div className="overflow-y-auto">
          {friends.map((data: any, index: any) => {
            return (
              <div key={data.id} className="flex p-3">
                <Image
                  src={data.avatar}
                  height="40"
                  width="40"
                  alt=""
                  className="w-[40px] h-[40px]  rounded-3xl"
                ></Image>

                <div className="ml-2">
                  <h2 className="text-blue-500 text-sm">{data.name}</h2>
                  <p className="text-xs text-gray-500">{data.message}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* main */}
      <div className="flex-1 grid grid-rows-[70px,1fr,60px] h-screen" id="main">
        <div className="flex justify-between sticky top-0 p-3 bg-white">
          <div className="flex items-center">
            <Image
              src="https://picsum.photos/200/200?random=1"
              height="40"
              width="40"
              alt=""
              className="w-[40px] h-[40px]  rounded-3xl"
            ></Image>
            <h2 className="ml-2">John Doe</h2>

            <span className="relative flex h-3 w-3 ml-2">
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>

          <div className="flex gap-3">
            <div className="justify-center flex items-center text-xl h-[40px] w-[40px]">
              <BsSearch></BsSearch>
            </div>
            <div className="justify-center flex items-center text-xl h-[40px] w-[40px]">
              <BiMicrophone></BiMicrophone>
            </div>
            <div className="justify-center flex items-center text-xl h-[40px] w-[40px]">
              <BiPaperclip></BiPaperclip>
            </div>
            <div className="justify-center flex items-center text-xl h-[40px] w-[40px] ">
              <BiSmile></BiSmile>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="messages overflow-y-auto" ref={messageRef}>
          {messages.map((data: any, index: number) => {
            const isUser = data.user == "john";

            if (!isUser) {
              return (
                <div className="flex mb-3 px-3" key={index}>
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
              <div className="flex flex-row-reverse mb-3 px-3" key={index}>
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

        <div className="flex sticky bottom-0 p-3 bg-white">
          <form
            className="flex items-center bg-[#f9f9f9] border w-full p-1 relative rounded-full"
            onSubmit={handleSubmit}
          >
            <span className="px-2">
              <BiMicrophone />
            </span>
            <input
              type="text"
              className="w-full bg-[#f9f9f9] text-sm focus:outline-none"
              placeholder="Write a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <span className="px-2">
              <BiPaperclip />
            </span>

            <span className="px-2">
              <BiSmile />
            </span>
            <span className="px-2 mr-[50px]">
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
      <div className="hidden lg:block md:w-[300px] w-full bg-[#f9f9f9]">
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

        <div className="flex justify-center mb-3">
          <Image
            src="https://picsum.photos/200/300?random=2"
            height={80}
            width={80}
            alt=""
            className="w-[80px] h-[80px] rounded-full"
          ></Image>
        </div>

        <div className="mb-6">
          <h2 className="text-blue-500 text-lg  text-center">
            Gravid Christofer
          </h2>
          <p className="text-sm text-gray-500 text-center">Junior Developer</p>
        </div>

        <div className="flex justify-around px-3 mb-6 text-center">
          <div className="h-[60px] w-[60px] bg-blue-200 text-blue-600 rounded-full justify-center flex items-center text-2xl">
            <BiChat></BiChat>
          </div>
          <div className="h-[60px] w-[60px] bg-blue-200 text-blue-600 rounded-full justify-center flex items-center text-2xl">
            <BiVideo></BiVideo>
          </div>
          <div className="h-[60px] w-[60px] bg-blue-200 text-blue-600 rounded-full justify-center flex items-center text-2xl">
            <MdAudiotrack></MdAudiotrack>
          </div>
        </div>

        <div className="mb-3 px-3">
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

        <div className="mb-3 mx-3 text-gray-600 font-medium">Attachment</div>

        <div className="flex justify-around px-3 mb-3 text-center">
          <div className="h-[60px] w-[60px] bg-blue-200 text-blue-600 rounded-lg flex justify-center items-center text-sm">
            Chat
          </div>
          <div className="h-[60px] w-[60px] bg-blue-200 text-blue-600 rounded-lg flex justify-center items-center text-sm">
            Video
          </div>
          <div className="h-[60px] w-[60px] bg-blue-200 text-blue-600 rounded-lg flex justify-center items-center text-sm">
            Files
          </div>

          <div className="h-[60px] w-[60px] bg-blue-200 text-blue-600 rounded-lg flex justify-center items-center text-sm">
            Images
          </div>
        </div>

        <div className="flex justify-center">
          <button className="border border-blue-400 p-1 px-3 text-blue-500 rounded-full text-xs">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}
