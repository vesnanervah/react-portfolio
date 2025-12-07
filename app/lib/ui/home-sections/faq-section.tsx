import { useState } from "react";
import { Faq, faqs } from "../../data/faq";
import Accordion from "../accordion";
import SectionHeader, { SectionHeaderColor } from "../section-header";
import { AppSection } from "../../data/nav";

export default function FaqSection() {
    const [openedFaq, setOpenedFaq] = useState<Faq | null>(null)

    return <div id={AppSection.Faq} className="pl-5 pt-15 pr-5 pb-15 bg-stone-900 flex flex-col gap-5 lg:grid lg:grid-cols-2">
        <SectionHeader header="Frequently asked questions" color={SectionHeaderColor.white} className="">Everything You Wanted to Ask (and a Bit More)</SectionHeader>
        <div className="">
            {
                faqs.map(FaqListItem)
            }
        </div>
    </div>

    function FaqListItem(f: Faq) {
        return <Accordion faq={f} key={f.title} isOpened={openedFaq?.title == f.title} onClick={() => onFaqClick(f)}></Accordion>
    }

    function onFaqClick(f: Faq) {
        if (f.title == openedFaq?.title) {
            return setOpenedFaq(null)
        }
        setOpenedFaq(f);
    }
}