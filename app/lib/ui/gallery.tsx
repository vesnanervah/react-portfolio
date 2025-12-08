/* eslint-disable @next/next/no-img-element */
import { GalleryImage, GalleryImageAlign } from "../data/gallery-images";

export default function Gallery(props: GalleryProps) {
    return <div className={`w-screen overflow-hidden flex justify-center ${props.className}`}>
        <div className="w-max h-p[654px] flex gap-5 pl-5 pr-5 shrink-0">
            {
                props.images.map(Item)
            }
        </div>
    </div>

    function Item(i: GalleryImage) {
        return <div key={i.src} className={`flex flex-col h-p[654px] ${getAlignClassName(i)}`}>
            <img src={i.src} alt="An photo from gallery"></img>
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
}

interface GalleryProps {
    className?: string,
    images: Array<GalleryImage>
}