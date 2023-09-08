import { cn } from "../../lib/utils";
import StarGateLogo from "../../svg/StarGateLogo";
import InstagramOutlineSvg from "../../svg/InstagramSvg";
import FaceBookOutlineSvg from "../../svg/FaceBookOutlineSvg";
import TwitterOutlineSvg from "../../svg/TwitterOutlineSvg";
import LinkedInOutlineSvg from "../../svg/LinkedInOutlineSvg";
import InstagramSolidSvg from "../../svg/InstagramSolidSvg";
import FaceBookSolidSvg from "../../svg/FaceBookSolidSvg";
import TwitterSolidSvg from "../../svg/TwitterSolidSvg";
import LinkedInSolidSvg from "../../svg/LinkedInSolidSvg";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer
      className={cn(
        "relative h-full",
        "w-full pt-0 lg:pt-32",
        "flex flex-col justify-between",
        "bg-white",
      )}
    >
      <div>
        <div className="mx-auto hidden w-3/4 lg:block">
          <div className="flex w-full items-center justify-center">
            <div className="flex w-full items-center gap-10">
              <StarGateLogo classes="h-14" fill="fill-black" />
              <div className="h-[1px] w-full bg-black"></div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-28 hidden w-3/4 gap-40 lg:flex">
          <div className="col-span-1">
            <h3 className="font-lato-normal pb-3 tracking-widest">Info</h3>
            <div className="flex flex-col gap-2">
              <a href="" className="font-lato-light tracking-widest">
                Product
              </a>
              <a href="" className="font-lato-light tracking-widest">
                Contact
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-lato-normal pb-3 tracking-widest">Downloads</h3>
            <div className="flex flex-col gap-2">
              <a
                href="../../assets/pdf/StarGate.pdf"
                className="font-lato-light tracking-widest"
                download="star-gate-brochure-2023.pdf"
              >
                <button>Brochure 2023</button>
              </a>
            </div>
          </div>
        </div>
        <div className="block w-full pl-14 pt-32 lg:hidden">
          <div className="font-lato-normal flex flex-col gap-10 pt-20 tracking-wider">
            <NavLink to="products" className="">
              Product
            </NavLink>
            <NavLink to="contact" className="">
              Contact
            </NavLink>
            <a
              href="../../assets/pdf/StarGate.pdf"
              download="star-gate-brochure-2023.pdf"
            >
              <button>Brochure 2023</button>
            </a>
          </div>
        </div>
      </div>

      <Socials />
    </footer>
  );
};

const Socials = () => {
  return (
    <div className="mb-20 flex flex-col items-center justify-center gap-6">
      <div className="font-lato-light tracking-widest text-black lg:hidden">
        SOCIAL LINKS
      </div>
      <SocialItems />
    </div>
  );
};

const SocialItems = () => {
  return (
    <div className="mb-4 flex min-w-full items-center justify-center gap-4">
      <div className="relative">
        <a href="https://www.linkedin.com/" target="_blank">
          <LinkedInSolidSvg
            classes="absolute opacity-0 hover:opacity-100 hover:scale-[1.1] w-10 transition duration-1000"
            fill="fill-black"
            fillSecond="fill-white"
          />
        </a>
        <LinkedInOutlineSvg
          classes="hover:opacity-0 w-10 transition duration-1000"
          fill="fill-black"
        />
      </div>

      <div className="relative">
        <a href="https://www.instagram.com/" target="_blank">
          <InstagramSolidSvg
            classes="absolute opacity-0 hover:opacity-100 hover:scale-[1.1] w-10 transition duration-1000"
            fill="fill-black"
            fillSecond="fill-white"
          />
        </a>
        <InstagramOutlineSvg
          classes="hover:opacity-0 w-10 transition duration-1000"
          fill="fill-black"
        />
      </div>
      <div className="relative">
        <a href="https://www.facebook.com/" target="_blank">
          <FaceBookSolidSvg
            classes="absolute opacity-0 hover:opacity-100 hover:scale-[1.1] w-10 transition duration-1000"
            fill="fill-black"
            fillSecond="fill-white"
          />
        </a>
        <FaceBookOutlineSvg
          classes="hover:opacity-0 w-10  transition duration-1000"
          fill="fill-black"
        />
      </div>
      <div className="relative">
        <a href="https://www.twitter.com/" target="_blank">
          <TwitterSolidSvg
            classes="absolute opacity-0 hover:opacity-100 hover:scale-[1.1] w-10 transition duration-1000"
            fill="fill-black"
            fillSecond="fill-white"
          />
        </a>
        <TwitterOutlineSvg
          classes="hover:opacity-0 w-10 transition duration-1000"
          fill="fill-black"
        />
      </div>
    </div>
  );
};
