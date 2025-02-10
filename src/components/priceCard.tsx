"use client";
import Link from "next/link";
import { title } from "process";
import { FC } from "react";
interface IPriceCard {
  children?: React.ReactNode;
  className?: string;
  cardTitle?: string;
  Price: string;
  href: string;
  btnName: string;
}

const items = [
  {
    title: "Custom fields (basic)",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.3345 2.75H7.66549C4.64449 2.75 2.75049 4.889 2.75049 7.916V16.084C2.75049 19.111 4.63549 21.25 7.66549 21.25H16.3335C19.3645 21.25 21.2505 19.111 21.2505 16.084V7.916C21.2505 4.889 19.3645 2.75 16.3345 2.75Z"
          stroke="#29313D"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.43994 12L10.8139 14.373L15.5599 9.62695"
          stroke="#29313D"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "web forms (basic)",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.3345 2.75H7.66549C4.64449 2.75 2.75049 4.889 2.75049 7.916V16.084C2.75049 19.111 4.63549 21.25 7.66549 21.25H16.3335C19.3645 21.25 21.2505 19.111 21.2505 16.084V7.916C21.2505 4.889 19.3645 2.75 16.3345 2.75Z"
          stroke="#29313D"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.43994 12L10.8139 14.373L15.5599 9.62695"
          stroke="#29313D"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },

  {
    title: "Workflows (basic)",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.3345 2.75H7.66549C4.64449 2.75 2.75049 4.889 2.75049 7.916V16.084C2.75049 19.111 4.63549 21.25 7.66549 21.25H16.3335C19.3645 21.25 21.2505 19.111 21.2505 16.084V7.916C21.2505 4.889 19.3645 2.75 16.3345 2.75Z"
          stroke="#29313D"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.43994 12L10.8139 14.373L15.5599 9.62695"
          stroke="#29313D"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Reports & Dashboards (basic)",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.3345 2.75H7.66549C4.64449 2.75 2.75049 4.889 2.75049 7.916V16.084C2.75049 19.111 4.63549 21.25 7.66549 21.25H16.3335C19.3645 21.25 21.2505 19.111 21.2505 16.084V7.916C21.2505 4.889 19.3645 2.75 16.3345 2.75Z"
          stroke="#29313D"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.43994 12L10.8139 14.373L15.5599 9.62695"
          stroke="#29313D"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Custom fields (basic)",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.3345 2.75H7.66549C4.64449 2.75 2.75049 4.889 2.75049 7.916V16.084C2.75049 19.111 4.63549 21.25 7.66549 21.25H16.3335C19.3645 21.25 21.2505 19.111 21.2505 16.084V7.916C21.2505 4.889 19.3645 2.75 16.3345 2.75Z"
          stroke="#29313D"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.43994 12L10.8139 14.373L15.5599 9.62695"
          stroke="#29313D"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Custom fields (basic)",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.3345 2.75H7.66549C4.64449 2.75 2.75049 4.889 2.75049 7.916V16.084C2.75049 19.111 4.63549 21.25 7.66549 21.25H16.3335C19.3645 21.25 21.2505 19.111 21.2505 16.084V7.916C21.2505 4.889 19.3645 2.75 16.3345 2.75Z"
          stroke="#29313D"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.43994 12L10.8139 14.373L15.5599 9.62695"
          stroke="#29313D"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Custom fields (basic)",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.3345 2.75H7.66549C4.64449 2.75 2.75049 4.889 2.75049 7.916V16.084C2.75049 19.111 4.63549 21.25 7.66549 21.25H16.3335C19.3645 21.25 21.2505 19.111 21.2505 16.084V7.916C21.2505 4.889 19.3645 2.75 16.3345 2.75Z"
          stroke="#29313D"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.43994 12L10.8139 14.373L15.5599 9.62695"
          stroke="#29313D"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
];

export const PriceCard: FC<IPriceCard> = ({
  children,
  className,
  cardTitle,
  Price,
  href,
  btnName,
}) => {

  return (
    <div className={` ${className} w-[400px] p-[28px] rounded-[30px] bg-[#ffff] hover:bg-[#f8f8f8]`}>
      {children}
      <h4 className="text-[20px] font-medium text-center pb-2 border-b-[2px] border-[#9c9c9d] relative after:content-[''] after:absolute after:bg-[#8454F5] after:w-[50px] after:h-[5px] after:top-[36px] after:left-1/2 after:-translate-x-1/2 after:rounded-xl">
        {cardTitle}
      </h4>

      <div className="flex justify-between mt-5">
        <h3 className="text-[48px] font-semibold ">{Price}</h3>
        <Link
          href={href}
          className="px-[28px] py-[14px] rounded-[18px] bg-[#8454F5]  h-full "
        >
          {btnName}
        </Link>
      </div>
      <div className="mt-[48px]">
        {items.map((item, index) => (
          <div className="flex mb-[16px]" key={index}>
            <picture className="mr-2">{item.icon}</picture>{" "}
            <span className="text-[18px]">{item.title}</span>
          </div>
        ))}
      </div>
    </div>

  );
};

