import { FC } from "react"

interface ICard {
    className?: string
    children?: React.ReactNode
    cardHeading?: string
    cardDecs?: string
    Readmore?: string
    imgSrc?: string
    alt?: string
    classNames: {
        PreantClass: string
        headingClass: string
        decsClass:string
        btnClass:string
    }
    color?: string
}
export const Card: FC<ICard> = ({ children, cardHeading, cardDecs, Readmore, classNames, imgSrc, alt, color }) => {
    return (
        <div className={`${classNames.PreantClass} `}>{children}
            <div className="w-[100px] h-[100px] rounded-[30px] bg-[#c4C4C4]">
                <img src={imgSrc} alt={alt} className={``} />
            </div>
            <h3 className={`${classNames.headingClass} `}>{cardHeading}</h3>
            <p className={` ${classNames.decsClass}`}>{cardDecs}</p>
            <p className={` ${classNames.btnClass}  text-${color}-500`}>{Readmore}</p>
        </div>
    )
}
