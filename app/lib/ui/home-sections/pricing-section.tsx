import { pricing } from "../../data/pricing";
import PricingCard from "../pricing-card";
import SectionHeader, { SectionHeaderColor } from "../section-header";

export default function PricingSection() {
    return <div className="pl-5 pt-15 pr-5 pb-15 bg-white">
        <SectionHeader header="Packages & Pricing" color={SectionHeaderColor.black} className="pb-10">
            Choose the package that suits your story. All options are customizable to your needs.
        </SectionHeader>
        {/*TODO: There are should be either 4, 2 or 1 elements in the row*/}
        <div className="max-w-[660px] 2xl:max-w-max mx-auto flex flex-wrap gap-5 2xl:gap-10 justify-center">
            {
                pricing.map((p) => {
                    return <PricingCard key={p.title} pricing={p}></PricingCard>
                })
            }
        </div>
    </div>
}