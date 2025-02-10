import { FC } from "react";
interface IPostCard {
  children?: React.ReactNode;
  ClassName?: string;
  CardImgs?: {
    CardImg?: string;
    ProfileImg?: string;
  };
  CardAlts?: {
    CardAlt?: string;
    ProfileAlt?: string;
  };
  CardTitle?: string;
  ProfileTitle?: string;
  profileDate?: string;
  CardDesc?: string;
}

export const PostCard: FC<IPostCard> = ({
  children,
  ClassName,
  CardImgs,
  CardAlts,
  CardTitle,
  ProfileTitle,
  profileDate,
  CardDesc,
}) => {
  return (
    <div className={`${ClassName} w-[773px] pr-1 flex justify-between`}>{children}
      <div className="w-[250px] h-[274px] rounded-[40px] bg-[#C4C4C4]">
         <img src={CardImgs?.CardImg} alt={CardAlts?.CardAlt} className="w-full h-full rounded-[40px]"/>
      </div>
      <div className="w-[498px]">
         <h3 className="text-[36px] font-semibold ">{CardTitle}</h3>
         <div className="flex justify-between w-[254px] items-center my-[25px]">
            <div className="h-[64px] w-[64px] rounded-full bg-[#C4C4C4]">
               <img src={CardImgs?.ProfileImg} alt={CardAlts?.ProfileAlt} />
            </div>
            <div>
               <h4 className="text-[28px] font-semibold">{ProfileTitle}</h4>
               <p className="text-[18px] text-[#29313D]">{profileDate}</p>
            </div>
         </div>
         <p className="text-[18px] text-[#29313D]">{CardDesc}</p>
      </div>
    </div>
  );
};
