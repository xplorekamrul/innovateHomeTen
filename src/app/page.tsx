import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { PriceCard } from "@/components/priceCard";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

export default function Home() {
  return (
    <>
      <header id="navbar" className="py-1">
        <Container>
          <div className="flex justify-between items-center">
            <Link href="/">
              <picture>
                <img src="/Logo.png" alt="logo.png" />
              </picture>
            </Link>
            <nav className="flex gap-[30px] ">
              <Link href="#" className="group hover:text-[#8454F5] ">
                Home
                <IoIosArrowDown className="inline group-hover:text-[#8454F5] group-hover:rotate-[180deg] transition-[.8s] ease-in" />
              </Link>
              <Link href="#" className="group hover:text-[#8454F5] ">
                About
                <IoIosArrowDown className="inline group-hover:text-[#8454F5] group-hover:rotate-[180deg] transition-[.8s] ease-in" />
              </Link>
              <Link href="#" className="group hover:text-[#8454F5] ">
                Service
                <IoIosArrowDown className="inline group-hover:text-[#8454F5] group-hover:rotate-[180deg] transition-[.8s] ease-in" />
              </Link>
              <Link href="#" className="group hover:text-[#8454F5] ">
                Portfolio
                <IoIosArrowDown className="inline group-hover:text-[#8454F5] group-hover:rotate-[180deg] transition-[.8s] ease-in" />
              </Link>
              <Link href="#" className="group hover:text-[#8454F5] ">
                Price
                <IoIosArrowDown className="inline group-hover:text-[#8454F5] group-hover:rotate-[180deg] transition-[.8s] ease-in" />
              </Link>
              <Link href="#" className="group hover:text-[#8454F5] ">
                Blog
                <IoIosArrowDown className="inline group-hover:text-[#8454F5] group-hover:rotate-[180deg] transition-[.8s] ease-in" />
              </Link>
            </nav>
            <Link
              href="#"
              className="px-[28px] py-[14px] rounded-[18px] bg-[#8454F5] "
            >
              Contact Us
            </Link>
          </div>
        </Container>
      </header>
      <main>
        <section
          id="heroPart"
          className="bg-[url('/herobg.png')] w-full pt-[350px] pb-[150px] bg-[#d7f0f5] bg-center bg-no-repeat bg-cover"
        >
          <div className="w-[464px] mx-auto">
            <h1 className="text-[64px] font-extrabold">
              Discover Our New Apps
            </h1>
            <p className="text-[18px] mt-[20px] mb-[40px]">
              Jolly good excuse my french boot super my good sir cup of char
              richard about chinwag.
            </p>
            <Link
              href="#"
              className="px-[28px] py-[14px] rounded-[18px] text-[18px] bg-[#8454F5] "
            >
              Get A Quate
            </Link>
          </div>
        </section>

        <section id="bestService" className="pt-[50px] pb-[40px]  bg-[#f8f8f6]">
          <Container>
            <h2 className="text-[48px] font-semibold text-center pb-[100px]">
              We Offer Best Services
            </h2>
            <div className="flex justify-between">
              <Card
                classNames={{
                  PreantClass:
                    "w-[300px] pl-3 pt-2 border-[.8px] hover:border-black hover:bg-white hover:rounded-lg",
                  headingClass: "text-[28px] font-semibold py-[20px]",
                  decsClass: "text-[18px]",
                  btnClass: "text-[16px] font-bold py-[20px]",
                }}
                cardHeading="Easy to use"
                cardDecs="Jolly good excuse my french boot super my good sir cup "
                Readmore="Read more"
                color="black"
              ></Card>

              <Card
                classNames={{
                  PreantClass:
                    "w-[300px] pl-3 pt-2 border-[.8px] hover:border-black hover:bg-white hover:rounded-lg",
                  headingClass: "text-[28px] font-semibold py-[20px]",
                  decsClass: "text-[18px]",
                  btnClass: "text-[16px] font-bold py-[20px]",
                }}
                cardHeading="App development"
                cardDecs="Jolly good excuse my french boot super my good sir cup "
                Readmore="Read more"
                color="black"
              ></Card>

              <Card
                classNames={{
                  PreantClass:
                    "w-[300px] pl-3 pt-2 border-[.8px] hover:border-black hover:bg-white hover:rounded-lg",
                  headingClass: "text-[28px] font-semibold py-[20px]",
                  decsClass: "text-[18px]",
                  btnClass: "text-[16px] font-bold py-[20px]",
                }}
                cardHeading="Fully functional"
                cardDecs="Jolly good excuse my french boot super my good sir cup "
                Readmore="Read more"
                color="black"
              ></Card>

              <Card
                classNames={{
                  PreantClass:
                    "w-[300px] pl-3 pt-2 border-[.8px] hover:border-black hover:bg-white hover:rounded-lg",
                  headingClass: "text-[28px] font-semibold py-[20px]",
                  decsClass: "text-[18px]",
                  btnClass: "text-[16px] font-bold py-[20px]",
                }}
                cardHeading="Secured protocol"
                cardDecs="Jolly good excuse my french boot super my good sir cup "
                Readmore="Read more"
                color="black"
              ></Card>
            </div>
          </Container>
        </section>

        <section className="py-[80px]">
          <Container>
            <div className="flex justify-between">
              <div className="w-[48%] ">
                <h2 className="text-[48px] font-semibold mt-5 loading-[140%]">
                  Innovate lets you launch your app in minutes
                </h2>
                <p className="text-[18px] font-semibold mt-5 loading-[200%] pr-[10%]">
                  Jolly good excuse my french boot super my good sir cup of char
                  richard about chinwag.
                </p>
                <div className="flex gap-[50px] mt-10">
                  <Card
                    classNames={{
                      PreantClass:
                        "w-[300px] pl-3 pt-2 border-[.8px] hover:border-black hover:bg-[#EEF1F6] hover:rounded-lg",
                      headingClass: "text-[28px] font-semibold py-[20px]",
                      decsClass: "text-[18px]",
                      btnClass: "text-[16px] font-bold py-[20px]",
                    }}
                    cardHeading="Fully functional"
                    cardDecs="Jolly good excuse my french boot super my good sir cup "
                    Readmore="Read more"
                    color="black"
                  ></Card>

                  <Card
                    classNames={{
                      PreantClass:
                        "w-[300px] pl-3 pt-2 border-[.8px] hover:border-black hover:bg-[#EEF1F6] hover:rounded-lg",
                      headingClass: "text-[28px] font-semibold py-[20px]",
                      decsClass: "text-[18px]",
                      btnClass: "text-[16px] font-bold py-[20px]",
                    }}
                    cardHeading="Fully functional"
                    cardDecs="Jolly good excuse my french boot super my good sir cup "
                    Readmore="Read more"
                    color="black"
                  ></Card>
                </div>
              </div>
              <div className="w-[48%] rounded-lg bg-[#EEF1F6] h-[620px]">
                <div className="w-[50%] h-full mx-auto bg-[#C4C4C4]"></div>
              </div>
            </div>
          </Container>
        </section>
        
        <section className="py-[80px]">
          <Container>
            <div className="flex justify-between">
              <div className="w-[48%] rounded-lg bg-[#EEF1F6] h-[620px]">
                <div className="w-[50%] h-full mx-auto bg-[#C4C4C4]"></div>
              </div>
              <div className="w-[48%] ">
                <h2 className="text-[48px] font-semibold mt-5 loading-[140%]">
                  Innovate lets you launch your app in minutes
                </h2>
                <p className="text-[18px] font-semibold mt-5 loading-[200%] pr-[10%]">
                  Jolly good excuse my french boot super my good sir cup of char
                  richard about chinwag.
                </p>
                <div className="flex gap-[50px] mt-10">
                  <Card
                    classNames={{
                      PreantClass:
                        "w-[300px] pl-3 pt-2 border-[.8px] hover:border-black hover:bg-[#EEF1F6] hover:rounded-lg",
                      headingClass: "text-[28px] font-semibold py-[20px]",
                      decsClass: "text-[18px]",
                      btnClass: "text-[16px] font-bold py-[20px]",
                    }}
                    cardHeading="Fully functional"
                    cardDecs="Jolly good excuse my french boot super my good sir cup "
                    Readmore="Read more"
                    color="black"
                  ></Card>

                  <Card
                    classNames={{
                      PreantClass:
                        "w-[300px] pl-3 pt-2 border-[.8px] hover:border-black hover:bg-[#EEF1F6] hover:rounded-lg",
                      headingClass: "text-[28px] font-semibold py-[20px]",
                      decsClass: "text-[18px]",
                      btnClass: "text-[16px] font-bold py-[20px]",
                    }}
                    cardHeading="Fully functional"
                    cardDecs="Jolly good excuse my french boot super my good sir cup "
                    Readmore="Read more"
                    color="black"
                  ></Card>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-[50px]">
          <Container>
            <h3 className="text-[48px] font-semibold text-center">
              Creative app showcase
            </h3>
            <p className="text-[18px] text-center">
              The app provide design and digital marketing
            </p>
            <div className="flex justify-between mt-[50px]">
              <div className="w-[23%] h-[715px] rounded-lg bg-[#C4C4C4]"></div>
              <div className="w-[23%] h-[715px] rounded-lg bg-[#C4C4C4]"></div>
              <div className="w-[23%] h-[715px] rounded-lg bg-[#C4C4C4]"></div>
              <div className="w-[23%] h-[715px] rounded-lg bg-[#C4C4C4]"></div>
            </div>
          </Container>
        </section>

        <section className="py-[120px]">
          <Container>
            <div className=" flex justify-between">
              <h3 className="w-[471px] text-[48px] font-semibold">
                Creative app showcase
              </h3>
              <Link
                href="#"
                className="px-[28px] py-[14px] rounded-[18px] bg-[#8454F5] h-full"
              >
                Contact Us
              </Link>
            </div>
            <div className=" flex justify-between mt-[60px]">
              <Link
                href="#"
                className="px-[41px] py-[39px] rounded-[18px] bg-[#F3F7FD] hover:bg-[#b1cbf3] h-full"
              >
                <div className="flex gap-3 items-center">
                  <img src="/wapiku.png" alt="wapiku.png" />
                  <p className="">Wapiku</p>
                </div>
              </Link>
              <Link
                href="#"
                className="px-[41px] py-[39px] rounded-[18px] bg-[#F3F7FD] hover:bg-[#b1cbf3] h-full"
              >
                <div className="flex gap-3 items-center">
                  <img src="/creone.png" alt="creone.png" />
                  <p className="">Creone</p>
                </div>
              </Link>
              <Link
                href="#"
                className="px-[41px] py-[39px] rounded-[18px] bg-[#F3F7FD] hover:bg-[#b1cbf3] h-full"
              >
                <div className="flex gap-3 items-center">
                  <img src="/rainfall.png" alt="rainfall.png" />
                  <p className="">Rainfall</p>
                </div>
              </Link>
              <Link
                href="#"
                className="px-[41px] py-[39px] rounded-[18px] bg-[#F3F7FD] hover:bg-[#b1cbf3] h-full"
              >
                <div className="flex gap-3 items-center">
                  <img src="/ulabs.png" alt="ulabs.png" />
                  <p className="">Ulabs</p>
                </div>
              </Link>
              <Link
                href="#"
                className="px-[41px] py-[39px] rounded-[18px] bg-[#F3F7FD] hover:bg-[#b1cbf3] h-full"
              >
                <div className="flex gap-3 items-center">
                  <img src="/spider.png" alt="spider.png" />
                  <p className="">spider</p>
                </div>
              </Link>
            </div>
          </Container>
        </section>

        <section className="py-[120px] bg-[#F8FDFE]">
          <Container>
            <div className="text-center">
              <h3 className=" text-[48px] font-semibold">15 -day free trail</h3>
              <p className="text-18px mt-[24px]">
                Find simple plan for comprehensive automations
              </p>
            </div>
            <div className="flex justify-between mt-[128px]">
            <PriceCard cardTitle="Basic" href="#" Price="$500" btnName="Get Started"></PriceCard>
            <PriceCard cardTitle="Standard" href="#" Price="$700" btnName="Get Started"></PriceCard>
            <PriceCard cardTitle="Premium" href="#" Price="$1200" btnName="Get Started"></PriceCard>
            </div>
          </Container>
        </section>
        
        <section className="py-[120px]">
          <Container>
             
          </Container>
        </section>
      </main>
    </>
  );
}
