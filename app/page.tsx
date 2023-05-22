export default function Home() {
  return (
    <div className="dev flex flex-col md:flex-row h-screen">
      {/* left side */}
      <div className="dev hidden lg:flex flex-col md:w-[250px] w-full bg-[#f9f9f9]">
        {/*  */}
        <div className="dev p-3 flex">
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
              className="w-full p-2 text-gray-500 focus:outline-none text-sm"
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
      <div className="dev flex-1 overflow-auto">
        <div className="flex dev sticky top-0 p-3 bg-white">Main Header</div>

        {/*  */}
        <div className="content dev">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          magni earum aliquid nemo pariatur accusamus, maxime magnam excepturi
          nihil ullam voluptatum laborum adipisci quam voluptatibus quia atque
          impedit, velit totam quaerat reprehenderit dolorum saepe nisi! Ipsa
          libero tenetur aliquam sequi, sapiente iure consequuntur
          exercitationem eveniet quas necessitatibus ipsum dicta rem accusamus
          expedita doloribus praesentium tempore beatae odit, nemo similique
          est? Quod blanditiis exercitationem, perferendis delectus quos ex.
          Beatae dolore asperiores exercitationem molestias id labore sit,
          reiciendis reprehenderit voluptates? Vitae eum ullam ratione dolorem.
          Quasi distinctio sed quisquam consequatur consequuntur esse
          accusantium vitae maxime doloremque ut reiciendis illum, inventore,
          commodi neque perspiciatis laborum. Quidem ullam, exercitationem
          veritatis magnam incidunt dignissimos placeat praesentium cumque
          ducimus libero laboriosam? Inventore odio rem nulla libero, aliquam
          dolore consectetur vero. Temporibus itaque asperiores incidunt sint
          odit repudiandae aspernatur tempora, praesentium in dolor adipisci eum
          molestiae aut error similique aperiam optio quos rem minima doloribus.
          Incidunt similique, itaque odio rem autem a cum eligendi placeat,
          velit distinctio, voluptas est? Eaque omnis porro suscipit dolorum?
          Voluptate quis aut ipsa quos beatae nam esse hic. Quidem sapiente
          reprehenderit nemo culpa magnam molestiae aliquid, odit magni, ea
          nobis optio et maxime eius unde repudiandae fugiat deserunt! Eaque
          maxime libero reprehenderit harum illo, perferendis deleniti rem
          voluptates id laboriosam repellat distinctio sed magni soluta natus,
          fugiat quas nulla vel, nostrum est ad vitae? Nihil, rerum eius
          perferendis, nostrum illum esse consequuntur aut aliquam dolorum
          quaerat quos nam corporis repellendus dicta reprehenderit placeat!
          Provident repellendus corporis nemo nulla doloribus adipisci deserunt
          commodi debitis ipsum, accusamus iure, officia impedit tempora libero
          eos ea vitae, doloremque odio quasi laudantium! Aspernatur veritatis
          obcaecati officiis voluptatem corrupti? Veritatis suscipit sed vel?
          Dicta soluta velit error animi temporibus cum porro nam. Molestias,
          qui aspernatur. Alias, quidem similique excepturi animi error deleniti
          sint natus atque voluptatibus! Veniam, necessitatibus dolores
          explicabo at similique consectetur veritatis ex eaque sint mollitia
          libero vitae fugit maiores ea neque? Tenetur dolor fugiat, eligendi
          dolores sequi suscipit laboriosam accusamus aspernatur deleniti eum
          quaerat. Laboriosam animi cupiditate perspiciatis doloremque
          recusandae dolores quae culpa quod porro, amet, ipsam totam. Quod
          itaque dolore nostrum aliquam incidunt perferendis sapiente ratione
          cum repellendus tenetur a porro impedit quae excepturi laudantium,
          numquam molestias, dignissimos autem voluptatibus perspiciatis commodi
          veritatis. Minus iste repellat laborum soluta, quia quisquam? Suscipit
          expedita, consequatur dolorem nihil enim repudiandae eveniet. Beatae,
          odio laboriosam. Perspiciatis pariatur magnam, reiciendis accusantium
          tempore dolores error earum facere eveniet aliquam iusto porro
          similique suscipit autem aut voluptates? Similique aperiam, tempora,
          odio libero nostrum dolorum accusantium reprehenderit quam omnis optio
          ratione eos nam vero quos quaerat iste fugiat sequi ipsum ullam
          repellat. Magni maxime exercitationem deserunt corrupti dolorem beatae
          at temporibus itaque id magnam ad architecto esse asperiores in ab
          blanditiis vero sequi aliquam odit quod optio, commodi impedit.
          Perferendis laboriosam aut eligendi, officia hic alias dolor error,
          possimus nemo id sapiente deleniti iure accusantium! Vitae ab
          perferendis quo culpa, non asperiores. Dignissimos quaerat, aliquid
          corporis autem eveniet reprehenderit modi eius, quo nostrum suscipit
          praesentium quam quis quibusdam consequatur. Amet eius magni possimus
          suscipit nulla aspernatur! Asperiores, earum temporibus repellat,
          adipisci sequi modi quod error laboriosam labore cupiditate unde odit
          aperiam incidunt enim obcaecati inventore expedita beatae dolorem
          maiores praesentium nulla aliquam atque quos. Totam deleniti explicabo
          obcaecati nostrum omnis debitis fuga distinctio maiores facere
          consequuntur animi, sit ad! Error iusto, sit tempore facere quia
          libero ad, voluptate doloribus optio tempora et repudiandae est qui
          modi labore inventore id? Voluptatem illo omnis porro optio id et
          magnam laboriosam tempore accusamus dolorem, illum eos pariatur
          reiciendis eveniet provident quod esse debitis sed ad veritatis, eaque
          error culpa laborum. Dignissimos tempora ex aspernatur repudiandae,
          distinctio, vel veniam magni itaque laboriosam facere at rem!
          Accusamus voluptas quod, debitis omnis maiores placeat ipsum
          voluptatem aspernatur aliquid possimus esse ipsa in quisquam alias
          iusto cupiditate. Reiciendis commodi quam necessitatibus magni,
          expedita optio qui sunt, quos modi similique dolore excepturi deserunt
          at voluptatem enim sed! Perferendis animi doloremque similique eaque
          consequuntur blanditiis ea provident nulla ipsum corporis voluptatem
          maxime, totam iusto facere quia sed laborum? Nisi eos eaque, officia
          eius dolore ex quasi vero in facere nulla, sunt rem? Eveniet enim
          blanditiis aperiam tempore dicta incidunt magnam voluptatem doloribus
          maiores, nesciunt dolores asperiores reiciendis corrupti doloremque,
          soluta sit ipsam laboriosam ipsum debitis assumenda fuga odio
          praesentium provident animi! Quidem numquam ratione beatae, libero et
          sed deleniti veniam sunt eaque possimus quos reiciendis perspiciatis,
          reprehenderit mollitia rem facilis totam unde cupiditate velit
          dignissimos delectus voluptas non accusantium! Odio fuga architecto
          iure commodi deleniti sed inventore ipsum maxime, quos nemo fugit amet
          saepe. Tenetur laboriosam rerum consectetur ducimus! Consectetur
          deleniti minima delectus, repellendus quidem dolorum! Ipsam facere,
          assumenda voluptas ab alias quas iure voluptate quasi voluptates eius
          est rem recusandae deleniti at suscipit tempore eos culpa non numquam
          provident! Dolorem ipsa sed quasi itaque obcaecati alias quibusdam
          magnam voluptatum dolorum, delectus rem temporibus quis, eum error
          nesciunt illum? Ducimus beatae porro dignissimos velit rerum dolores
          minima animi dicta ullam possimus praesentium veritatis eaque,
          deleniti facere doloribus consectetur ratione maiores exercitationem,
          maxime corrupti cupiditate soluta culpa voluptates. Rem, dolore
          deleniti! At, veniam? Sint dolore fuga quaerat neque, natus eligendi.
          Deleniti harum officiis soluta eum odit nostrum odio dolorum eos
          doloribus cumque temporibus omnis laudantium quibusdam maxime,
          accusamus minima mollitia qui debitis, itaque rerum deserunt sapiente
          totam ea consequuntur? Dolore laborum placeat aperiam amet explicabo
          dolorum animi dignissimos recusandae. Ipsam dolore quas provident vel
          est itaque temporibus mollitia praesentium perspiciatis atque dolor
          rerum maiores voluptatem iusto alias cupiditate omnis odio accusantium
          in harum, reprehenderit commodi. Nisi nemo repellat numquam natus
          perspiciatis vel soluta repellendus minus? Magnam aut iusto, quia
          voluptas et velit pariatur doloremque culpa suscipit illum vero
          aliquam optio ad assumenda error atque excepturi quibusdam, possimus
          vitae, tempore dicta esse sunt? Delectus aspernatur odit nisi
          doloremque, totam voluptates, harum voluptatibus provident maiores
          omnis accusamus nostrum exercitationem sed recusandae. Eligendi
          voluptatibus incidunt ut fuga expedita minima culpa nemo pariatur
          fugit quidem ullam, dolor repellendus sunt praesentium voluptate
          officiis asperiores temporibus dolorum rerum autem minus nulla!
          Voluptatem unde quasi, incidunt aperiam maiores ducimus.
        </div>

        <div className="flex dev sticky bottom-0 p-3 bg-white">Main Footer</div>

        {/*  */}
      </div>

      {/* right side */}
      <div className="dev hidden lg:block md:w-[250px] w-full bg-[#f9f9f9]">
        right
      </div>
    </div>
  );
}
