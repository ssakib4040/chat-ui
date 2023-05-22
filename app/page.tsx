"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const main = document.querySelector("#main");

    main?.scrollTo({
      top: 99999,
    });
  }, []);

  return (
    <div className="dev flex flex-col md:flex-row h-screen">
      {/* left side */}
      <div className="dev hidden lg:flex flex-col md:w-[300px] w-full bg-[#f9f9f9]">
        {/*  */}
        <div className="dev mt-10 p-3 flex">
          <div className="border rounded-3xl h-[50px] w-[50px] bg-gray-500 dev"></div>

          <div className="ml-2 flex flex-col justify-center dev">
            <h2 className="text-blue-500 ">Gravid Christofer</h2>
            <p className="text-xs text-gray-500">Senior Developer</p>
          </div>
        </div>

        {/*  */}
        <div className="dev">
          <form action="" className="p-2">
            <input
              type="text"
              name=""
              id=""
              className="w-full p-2 text-gray-500 focus:outline-none text-sm rounded-3xl border border-gray-300"
              placeholder="Search Friends"
            />
          </form>
        </div>

        {/*  */}
        <div className="dev overflow-y-auto">
          {[
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20,
          ].map((index, data) => {
            return (
              <div key={index} className="dev flex p-3">
                <div>
                  <div className="w-[40px] h-[40px] bg-slate-500 rounded-3xl dev"></div>
                </div>

                <div className="dev ml-2">
                  <h2 className="text-blue-500 text-sm">John Doe</h2>
                  <p className="text-xs text-gray-500">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
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
            <div className="w-[40px] h-[40px] bg-gray-400 rounded-full dev"></div>
            <h2 className="dev ml-2">John Doe</h2>

            <span>active</span>
          </div>

          <div className="flex gap-3 dev">
            <div className="dev h-[40px] w-[40px]">1</div>
            <div className="dev h-[40px] w-[40px]">2</div>
            <div className="dev h-[40px] w-[40px]">3</div>
          </div>
        </div>

        {/*  */}
        <div className="messages mb-[50px]">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index, data) => {
            const isOdd = Boolean(data % 2);
            console.log(isOdd);

            if (isOdd) {
              return (
                <div className="flex dev mb-3 px-3 dev" key={index}>
                  <div className="flex mt-1">
                    <div className="w-[20px] h-[20px] bg-slate-500 rounded-full"></div>
                  </div>

                  <div className="text-sm bg-[#f9f9f9] ml-3 p-1 px-3 border rounded-lg text-gray-600 max-w-[70%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                  <div className="w-[20px] h-[20px] bg-slate-500 rounded-full"></div>
                </div>

                <div className="text-sm bg-blue-500 text-white mr-3 p-1 px-3 border rounded-lg max-w-[70%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor
                  sit amet conLorem ipsum dolor sit amet consectetur adipisicing
                  elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex dev sticky bottom-0 p-3 bg-white">
          <form
            className="flex bg-[#f9f9f9] border w-full p-1"
            action="#"
            method="post"
          >
            <span className="dev">icon</span>
            <input
              type="text"
              className="w-full bg-[#f9f9f9] text-sm dev focus:outline-none"
              placeholder="Write a message"
            />
            <span className="dev">icon</span>

            <span className="dev">icon</span>
            <span className="dev">icon</span>

            <button type="submit">Go</button>
          </form>
        </div>

        {/*  */}
      </div>

      {/* right side */}
      <div className="dev hidden lg:block md:w-[300px] w-full bg-[#f9f9f9]">
        <form action="" className="p-2 mt-10">
          <input
            type="text"
            className="w-full border p-2 text-sm focus:outline-none rounded-3xl border-gray-300"
            placeholder="Search Messages"
          />
        </form>

        <div className="dev flex justify-center mb-3">
          <div className="w-[80px] h-[80px] rounded-full bg-slate-500"></div>
        </div>

        <div className="mb-3 dev">
          <h2 className="text-blue-500 text-lg  text-center">
            Gravid Christofer
          </h2>
          <p className="text-sm text-gray-500 text-center">Junior Developer</p>
        </div>

        <div className="flex justify-around px-3 mb-3 text-center dev">
          <div className="h-[60px] w-[60px] bg-blue-200 text-blue-600 rounded-full dev">
            Chat
          </div>
          <div className="h-[60px] w-[60px] bg-blue-200 text-blue-600 rounded-full dev">
            Video Call
          </div>
          <div className="h-[60px] w-[60px] bg-blue-200 text-blue-600 rounded-full dev">
            Audio
          </div>
        </div>

        <div className="mb-3 dev">
          <ul>
            <li>Option 1</li>
            <li>Option 1</li>
          </ul>
        </div>

        <div className="mb-3 dev">Attachment</div>

        <div className="flex justify-around px-3 mb-3 text-center dev">
          <div className="h-[60px] w-[60px] bg-blue-200 text-blue-600 rounded-lg dev">
            Chat
          </div>
          <div className="h-[60px] w-[60px] bg-blue-200 text-blue-600 rounded-lg dev">
            Video Call
          </div>
          <div className="h-[60px] w-[60px] bg-blue-200 text-blue-600 rounded-lg dev">
            Files
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
