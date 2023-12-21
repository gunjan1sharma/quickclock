import ClockImage from "../assets/images/clock.png";

function Header(params: any) {
  return (
    <div>
      <div className="flex justify-center items-center m-2 p-3 h-12 border-2">
        <img
          alt="QuickClock"
          src={ClockImage}
          className="w-8 h-8 animate-spin hover:animate-bounce"
        />
        <h1 className="font-mono ml-3 mr-3 text-2xl font-bold hover:font-sans ">
          QuickClock
        </h1>
        <img
          alt="QuickClock"
          src={ClockImage}
          className="w-8 h-8 animate-spin hover:animate-bounce"
        />
      </div>
    </div>
  );
}

export default Header;
