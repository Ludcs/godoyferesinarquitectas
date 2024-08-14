import Image from "next/image";
import LogoFooter from "../../public/assets/logos-png/redondo-white-2.png";
import Link from "next/link";

export default function Footer() {
  const emailAddress = "godoyferesinarquitectas@gmail.com";
  const encodedEmail = encodeURIComponent(emailAddress);
  const gmailLink = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodedEmail}`;

  return (
    <main className="w-full bg-[#161616]">
      <section className="px-2 pt-8 pb-2 flex flex-col items-start justify-center font-semibold text-white gap-5 lg:px-4 xl:px-12 2xl:gap-12 2xl:text-lg 2xl:pt-28 2xl:px-0 2xl:max-w-7xl 2xl:m-auto">
        <Image
          src={LogoFooter}
          alt="Logo Godoy + Feresin Arquitectas - Pie de pagina"
          className="w-36 h-auto"
          priority={true}
        />
        <div className="my-2 flex flex-col gap-2 md:w-full md:flex md:flex-row md:justify-start md:gap-12">
          <div className="my-2 flex flex-col gap-2">
            <p>- dirección:</p>
            <Link
              href={
                "https://www.google.com/maps/place/Godoy+%2B+Feresin+Arquitectas/@-31.7267129,-60.4906119,15z/data=!4m6!3m5!1s0xa05bace33c5d16d7:0x9c0a3f0a6db31968!8m2!3d-31.7267129!4d-60.4906119!16s%2Fg%2F11vpy5p10w?entry=ttu"
              }
              target="_blank"
              className="underline underline-offset-8 "
            >
              <p className="hover:text-gray-400 transition-all duration-200">
                {"Blas Parera 2504, Parana (ARG)"}
              </p>
            </Link>
          </div>
          <div className=" my-2 flex flex-col gap-2">
            <p>- teléfono:</p>
            <Link
              href={"https://api.whatsapp.com/send?phone=5493435028431"}
              target="_blank"
              title="WhatsApp"
              className="underline underline-offset-8"
            >
              <p className="hover:text-gray-400 transition-all duration-200">
                {"343 5028431"}
              </p>{" "}
            </Link>
          </div>
          <div className=" my-2 flex flex-col gap-2">
            <p>- email:</p>
            <Link
              href={gmailLink}
              target="_blank"
              className="underline underline-offset-8"
            >
              <p className="hover:text-gray-400 transition-all duration-200">
                {emailAddress}
              </p>
            </Link>
          </div>
        </div>
        <div className=" my-2 flex justify-start items-center gap-7">
          <Link
            href={
              "https://www.instagram.com/godoyferesin.arquitectura?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            }
            target="_blank"
            className="underline underline-offset-8"
          >
            <p className="hover:text-gray-400 transition-all duration-200">
              {"Instagram"}
            </p>
          </Link>

          <Link
            href={"https://www.linkedin.com/company/godoy-feresin-arquitectas/"}
            target="_blank"
            className="underline underline-offset-8"
          >
            <p className="hover:text-gray-400 transition-all duration-200">
              {"LinkedIn"}
            </p>
          </Link>
        </div>
        <div className="mt-2 mb-3">
          <p className="text-xs font-normal md:text-sm 2xl:text-base">
            ® 2024 - G<span className="italic">+</span>F{" "}
            <span className="italic">arquitectas</span>
          </p>
        </div>
      </section>
    </main>
  );
}
