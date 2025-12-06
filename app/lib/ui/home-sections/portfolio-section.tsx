/* eslint-disable @next/next/no-img-element */
import { GalleryImage, GalleryImageAlign, galleryImages } from "../../data/gallery-images";
import SectionHeader, { SectionHeaderColor } from "../section-header";

export default function PorfolioSection() {
    return <div className="bg-stone-900 pt-15 pb-15">
        {Header()}
        {Gallery()}
    </div>
}

    function Header() {
        return <SectionHeader header="MY PORTFOLIO" color={SectionHeaderColor.white} className="pb-10 pl-5">
            Every shoot is a story. Here you’ll find portraits,<br></br>love stories, family sessions, and more.
        </SectionHeader>
    }

    function Gallery() {
        // TODO: scrollable
        return <div className="w-screen overflow-hidden flex justify-center">
            <div className="w-max h-p[654px] flex gap-5 pl-5 pr-5 shrink-0">
                {
                    galleryImages.map((i) => {
                        return <div key={i.src} className={`flex flex-col h-p[654px] ${getAlignClassName(i)}`}>
                            <img src={i.src} alt="An photo from gallery"></img>
                        </div>
                    })
                }
            </div>
        </div>
    }

function getAlignClassName(i: GalleryImage) {
    switch(i.alignClass) {
        case (GalleryImageAlign.top):
            return 'justify-start';
        case (GalleryImageAlign.center):
            return 'justify-center';
        case (GalleryImageAlign.bottom):
            return 'justify-end';
    }
}