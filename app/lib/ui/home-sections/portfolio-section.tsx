import { galleryImages } from "../../data/gallery-images";
import { AppSection } from "../../data/nav";
import Gallery from "../gallery";
import SectionHeader, { SectionHeaderColor } from "../section-header";

export default function PorfolioSection() {
    return <div id={AppSection.Portfolio} className="bg-stone-900 pt-15 pb-15">
        <SectionHeader header="MY PORTFOLIO" color={SectionHeaderColor.white} className="pb-10 pl-5">
            Every shoot is a story. Here you’ll find portraits,<br></br>love stories, family sessions, and more.
        </SectionHeader>
        <Gallery images={galleryImages} ></Gallery>
    </div>
}

