import Link from "next/link";
import InfoBox from "@/app/Components/InfoBox";

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-700 font-sans justify-center items-center min-h-screen">
      <div className="text-center bg-yellow-500 border-2 border-black rounded-2xl w-80 md:w-250 mt-16 p-6 justify-center">
        <h1 className="text-black text-3xl md:text-5xl">
          Welcome to Highlands YSWS!!! ⛰️
        </h1>
        <p className="text-black text-lg md:text-2xl mt-4">
          Check out #highlands on Slack and scroll down for more info!
        </p>
      </div>

      <Link
        href="https://link.aregus.me/highlands-rsvp"
        className="text-center flex items-center justify-center bg-yellow-500 border-2 border-black font-bold text-lg md:text-2xl text-black h-16 hover:scale-125 cursor-pointer transition-all rounded-xl w-44 mt-16"
      >
        RSVP Now!
      </Link>

      <InfoBox Header="What's this about?">
        This is a mountain themed YSWS where you code hours and can earn prizes
        like earbuds, credits, games, 3d printers, and more! Plus we&#39;ll have
        hiking related stuff as prizes! And if you code for enough hours, you
        can even earn a ticket for a hackathon in Yerevan, Armenia!
      </InfoBox>

      <InfoBox Header="What is the Highlands Challenge?">
        The Highlands challenge involves climbing digital mountains in the
        dashboard to obtain free shop currency. A mountain will have stages,
        which will require certain amounts of hours. For example, a mountain
        could have 5h, 8h, 4h stages. You must complete a stage in the specified
        amount of time or else you&#39;ll fall from the mountain. As the
        mountains get taller, you&#39;ll be rewarded with more shop currency!
      </InfoBox>

      <InfoBox Header="Where is Armenia?">
        Armenia is in the Southern Caucasus, between Iran, Georgia, and Turkey!
        Armenia is considered the 10th most mountainous nation, hence the name
        &#34;Highlands.&#34; I would like this YSWS to happen in Yerevan, the
        capital, because it provides the most flexibility. Also, most major
        European and Middle Eastern airlines fly to Armenia, and it&#39;s
        visa-free for most nations.
      </InfoBox>

      <InfoBox Header="Is there anything in Yerevan?">
        There are a lot of places to visit in Yerevan. Most famous sites in
        Yerevan include the cascade complex, Tsitsernakaberd, Republic Square,
        The National History Museum, the Opera, and even the Metro here + more
        outside of Yerevan
      </InfoBox>
    </div>
  );
}
