import { mulish } from "./fonts"
import { PricingItem } from "../data/pricing"
import Button from "./button"

export default function PricingCard(props: PricingCardProps) {
    return <div className="h-[500px] w-[320px] flex flex-col justify-between border-2 border-stone-900 p-6 text-stone-900">
        {UpperBloc()}
        {BottomBlock()}
    </div>
    
    function UpperBloc() {
        return <div>
            <div className="text-xl pb-3">{props.pricing.title}</div>
            <ul className="list-[square]">
                {props.pricing.properties.map((p) => {
                    return <li key={p} className={`${mulish.className} text-base`}>
                        {p}
                    </li>
                })}
            </ul>
            <div className="text-base pt-3">${props.pricing.price}</div>
        </div>
    }
    
    function BottomBlock() {
        return <div>
            <div className={`${mulish.className} text-base pb-3 italic`}>{props.pricing.description}</div>
            <Button text="book now" onClick={() => {}}></Button>
        </div>
    }
}

interface PricingCardProps {
    pricing: PricingItem
}