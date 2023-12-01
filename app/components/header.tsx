import { ButtonNav } from "./ui-atoms/button";

export function Header() {
  return (
    <div className="w-full h-20 py-4">
      <div className="px-5 md:px-20 max-w-[1440px] h-full bg-transparent mx-auto flex items-center justify-between">
        <ButtonNav to="#" className="flex justify-center">
          <div className="h-[24px] text-xl">
            <span className="text-[#44c4ff] font-semibold">Piotr Chuchla</span>
          </div>
        </ButtonNav>
        <div>
          <ButtonNav to="#contact" className="animate-pulse">
            <div className="mx-auto flex max-w-screen-sm items-center justify-center">
              <div className="h-10 w-full rounded-md bg-gradient-to-r from-[#44c4ff] to-white p-1">
                <div className="flex h-full w-full items-center justify-center bg-gray-800">
                  <span className="text-xl font-semibold text-white px-2">
                    Contact me
                  </span>
                </div>
              </div>
            </div>
          </ButtonNav>
        </div>
      </div>
    </div>
  );
}
