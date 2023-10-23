import { footerLinks } from "@/constants/constants";
import Image from "next/image";
import link from "next/link";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col justify-between gap-5 sm:px-16 px-6 py-10">
        <section className="flex flex-col flex-wrap justify-start gap-6">
          <Link href="/">
            <Image
              src="/logo.svg"
              width={118}
              height={18}
              alt=""
              className="object-contain"
            />
          </Link>
          <p className="text-base text-gray-700">
            Car Showcase 2023 All Rights Reserved &copy;
          </p>
        </section>
        <section className="footer__links">
          {footerLinks.map((link, index) => (
            <section key={index} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              <section>
                {link.links.map((subfooter, index) => (
                  <section key={index} className="py-4">
                    <Link href={subfooter.url} className="text-gray-500">
                      {subfooter.title}
                    </Link>
                  </section>
                ))}
              </section>
            </section>
          ))}
        </section>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 CarHub. All rights reserved</p>

        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
