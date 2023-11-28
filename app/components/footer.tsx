import { ButtonNav } from "./ui-atoms/button";

export function Footer() {
  return (
    <div className="w-full py-4">
      <div className="px-20 max-w-[1440px] mx-auto flex items-center justify-between rounded-t-2xl">
        <div className="ml-2 flex flex-col">
          <ButtonNav to="/" className="font-semibold text-[#44c4ff]">
            Piotr Chuchla
          </ButtonNav>
          <span>piotrchuchla9@gmail.com</span>
          <span>&copy; Piotr Chuchla 2023. All right reserved.</span>
        </div>
      </div>
    </div>
  );
}
