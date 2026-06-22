import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-700 font-sans justify-center items-center min-h-screen">
      <div className="text-center bg-yellow-500 border-2 border-black rounded-2xl w-80 md:w-250 mt-16 p-6 justify-center">
        <h1 className="text-black text-5xl">Welcome to Highlands YSWS!!! ⛰️</h1>
        <p className="text-black text-2xl mt-4">
          Check out #highlands on Slack and scroll down for more info!
        </p>
      </div>

      <Link
        href="https://link.aregus.me/highlands-rsvp"
        className="text-center flex items-center justify-center bg-yellow-500 border-2 border-black font-bold text-2xl text-black h-16 hover:scale-125 cursor-pointer transition-all rounded-xl w-44 mt-16"
      >
        RSVP Now!
      </Link>

      <div className="text-center bg-green-400 border-2 border-black rounded-2xl w-80 md:w-175 content-center items-center mt-16 p-4 justify-center hover:scale-110 transition-all">
        <h1 className="text-black text-5xl">What&#39;s this about?</h1>
        <p className="text-black bg-blue-300 text-2xl w-30 md:w-125 text-center mt-4 p-4 border-2 border-black rounded-2xl justify-center items-center mx-auto">
          This is a mountain themed YSWS where you code hours and can earn
          prizes like earbuds, credits, games, 3d printers, and more! Plus
          we&#39;ll have hiking related stuff as prizes! And if you code for
          enough hours, you can even earn a ticket for a hackathon in Yerevan,
          Armenia!
        </p>
      </div>

      <div className="text-center bg-green-400 border-2 border-black rounded-2xl w-80 md:w-175 content-center items-center mt-16 p-4 justify-center hover:scale-110 transition-all">
        <h1 className="text-black text-5xl">Where is Armenia?</h1>
        <p className="text-black bg-blue-300 text-2xl w-30 md:w-125 text-center mt-4 p-4 border-2 border-black rounded-2xl justify-center items-center mx-auto">
          Armenia is in the Southern Caucasus, between Iran, Georgia, and
          Turkey! Armenia is considered the 10th most mountainous nation, hence
          the name &#34;Highlands.&#34; I would like this YSWS to happen in
          Yerevan, the capital, because it provides the most flexibility. Also,
          most major European and Middle Eastern airlines fly to Armenia, and
          it&#39;s visa-free for most nations.
        </p>
      </div>

      <div className="text-center bg-green-400 border-2 border-black rounded-2xl w-80 md:w-175 content-center items-center mt-16 p-4 justify-center hover:scale-110 mb-10 transition-all">
        <h1 className="text-black text-5xl">Is there anything in Yerevan?</h1>
        <p className="text-black bg-blue-300 text-2xl w-30 md:w-125 text-center mt-4 p-4 border-2 border-black rounded-2xl justify-center items-center mx-auto">
          There are a lot of places to visit in Yerevan. Most famous sites in
          Yerevan include the cascade complex, Tsitsernakaberd, Republic Square,
          The National History Museum, the Opera, and even the Metro here + more
          outside of Yerevan
        </p>
      </div>
    </div>
  );
}
