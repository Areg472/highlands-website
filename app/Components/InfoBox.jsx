export default function InfoBox({ Header, children, className }) {
  return (
    <div
      className={`text-center bg-green-400 border-2 border-black rounded-2xl w-80 md:w-175 content-center items-center mt-16 p-4 justify-center hover:scale-110 transition-all ${className}`}
    >
      <h1 className="text-black text-3xl md:text-5xl">{Header}</h1>
      <p className="text-black bg-blue-300 text-lg md:text-2xl w-72 md:w-125 text-center mt-4 p-4 border-2 border-black rounded-2xl justify-center items-center mx-auto">
        {children}
      </p>
    </div>
  );
}
