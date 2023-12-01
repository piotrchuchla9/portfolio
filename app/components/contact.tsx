import { IconLinkedin, IconMail, IconWhatsapp } from "@/public";
import { ButtonNav } from "./ui-atoms/button";

export function Contact() {
  return (
    <div id="contact">
      <p className="text-xl pb-10 pt-10 text-center">CONTACT</p>
      <p className="text-4xl md:text-5xl pb-10 text-center mx-10 md:mx-0">
        Ready to{" "}
        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#44c4ff] via-purple-400 via-pink-500 to-orange-500">
          develop
        </span>{" "}
        your next big thing?
      </p>
      <div className="hidden md:flex py-4 px-8 rounded-lg mb-20 max-w-[400px] md:max-w-[900px] mx-auto justify-between">
        <div className="w-1/2 text-center text-2xl">
          <div className="flex justify-center mb-2">
            <div className="mt-1 mr-2">
              <IconWhatsapp />
            </div>
            <p>Phone: </p>
          </div>
          <p className="font-semibold">+48 666 502 758</p>
          <div className="flex justify-center mb-2 mt-4">
            <div className="mt-1 mr-2">
              <IconMail />
            </div>
            <p>E-mail: </p>
          </div>
          <p className="font-semibold">piotrchuchla9@gmail.com</p>
        </div>
        <div className="w-1/2 text-center text-2xl">
          <div className="flex justify-center mb-2">
            <div className="mt-1 mr-2">
              <IconLinkedin />
            </div>
            <p>LinkedIn: </p>
          </div>
          <p className="font-semibold">in/piotr-chuchla-a6824b232</p>
          <ButtonNav
            to="https://www.linkedin.com/in/piotr-chuchla-a6824b232/"
            target="_blank"
            className="animate-pulse flex mt-12"
          >
            <div className="mx-auto flex max-w-screen-sm items-center justify-center">
              <div className="h-10 w-full rounded-md bg-gradient-to-r from-[#44c4ff] to-white p-1">
                <div className="flex h-full w-full items-center justify-center bg-gray-800">
                  <span className="text-xl font-semibold text-white px-2">
                    Visit my LinkedIn
                  </span>
                </div>
              </div>
            </div>
          </ButtonNav>
        </div>
      </div>
      <div className="py-4 rounded-lg mb-20 max-w-[400px] md:max-w-[900px] mx-auto md:hidden justify-between">
        <div className="text-center text-2xl">
          <div className="flex justify-center mb-2">
            <div className="mt-1 mr-2">
              <IconWhatsapp />
            </div>
            <p>Phone: </p>
          </div>
          <p className="font-semibold">+48 666 502 758</p>
          <div className="flex justify-center mb-2 mt-4">
            <div className="mt-1 mr-2">
              <IconMail />
            </div>
            <p>E-mail: </p>
          </div>
          <p className="font-semibold">piotrchuchla9@gmail.com</p>
        </div>
        <div className="text-center text-2xl">
          <div className="flex justify-center mb-2 mt-4">
            <div className="mt-1 mr-2">
              <IconLinkedin />
            </div>
            <p>LinkedIn: </p>
          </div>
          <p className="font-semibold">in/piotr-chuchla-a6824b232</p>
          <ButtonNav
            to="https://www.linkedin.com/in/piotr-chuchla-a6824b232/"
            target="_blank"
            className="animate-pulse flex mt-6"
          >
            <div className="mx-auto flex max-w-screen-sm items-center justify-center">
              <div className="h-10 w-full rounded-md bg-gradient-to-r from-[#44c4ff] to-white p-1">
                <div className="flex h-full w-full items-center justify-center bg-gray-800">
                  <span className="text-xl font-semibold text-white px-2">
                    Visit my LinkedIn
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
