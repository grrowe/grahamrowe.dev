export default function NavBar() {
  return (
    <nav className="flex bg-slate-100 justify-between min-h-fit">
      <div className="pl-5 h-1/6 cursor-pointer">
        <a href="/">Graham Rowe</a>
      </div>
      <div className="pr-5 w-1/3 flex justify-around items-center">
        {/* <a className="cursor-pointer" href="about-me">
          about me
        </a>
        <a className="cursor-pointer" href="work">
          work
        </a>
        <a className="cursor-pointer" href="call-me">
          contact
        </a> */}
        {/* <a className="cursor-pointer" href="/cool-stuff">
          cool stuff
        </a> */}
      </div>
    </nav>
  );
}
