import { LinkType } from "../types/LinkType";

function LinkItem({ name, url }: LinkType) {
  return (
    <>
      <li className="flex items-stretch w-full p-3 text-sm font-semibold text-center rounded-xl bg-custom-grey text-custom-white active:bg-primary-green active:text-custom-off-black hover:bg-primary-green hover:text-custom-off-black">
        <a href={url} target="_blank" className="w-full">
          {name}
        </a>
      </li>
    </>
  );
}

export default LinkItem;
