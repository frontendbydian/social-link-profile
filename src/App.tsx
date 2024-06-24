import LinkItem from "./components/LinkItem";
import { links } from "./data/links-data";
import { LinkType } from "./types/LinkType";

function App() {
  return (
    <>
      <main className="flex items-center justify-center w-screen h-screen bg-custom-off-black ">
        <div className="flex flex-col items-center w-11/12 gap-6 p-4 sm:p-8 rounded-xl max-w-screen-mobile bg-custom-dark-grey">
          <img
            src="/images/avatar-dian.jpg"
            alt="avatar"
            className="w-24 h-24 rounded-full"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-center text-custom-white">
              Dian Prasetyo
            </h1>
            <p className="text-sm font-semibold text-center text-primary-green">
              Boyolali, Indonesia
            </p>
          </div>
          <p className="text-sm text-center text-custom-white">
            "Front-end developer and avid reader."
          </p>
          <ul className="flex flex-col items-stretch w-full gap-4">
            {links.map((item: LinkType, index: number) => {
              return <LinkItem name={item.name} url={item.url} key={index} />;
            })}
          </ul>
        </div>
      </main>
      <footer className="fixed bottom-0 left-0 w-full py-2">
        <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            {" "}
            Frontend Mentor
          </a>
          <br />
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/dianprasetyo-2021/"
            target="_blank"
          >
            Dian Prasetyo
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
