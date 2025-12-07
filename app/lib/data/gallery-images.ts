export enum GalleryImageAlign { top, center, bottom } 

export interface GalleryImage {
    src: string;
    alignClass: GalleryImageAlign
}

export const galleryImages: Array<GalleryImage> = [
    {
        src:`${process.env.NEXT_PUBLIC_BASE_PATH}/gallery-image1.png`,
        alignClass: GalleryImageAlign.bottom
    },
    {
        src:`${process.env.NEXT_PUBLIC_BASE_PATH}/gallery-image2.png`,
        alignClass: GalleryImageAlign.center
    },
    {
        src:`${process.env.NEXT_PUBLIC_BASE_PATH}/gallery-image3.png`,
        alignClass: GalleryImageAlign.center
    },
    {
        src:`${process.env.NEXT_PUBLIC_BASE_PATH}/gallery-image4.png`,
        alignClass: GalleryImageAlign.top
    },
    {
        src:`${process.env.NEXT_PUBLIC_BASE_PATH}/gallery-image5.png`,
        alignClass: GalleryImageAlign.center
    },
    {
        src:`${process.env.NEXT_PUBLIC_BASE_PATH}/gallery-image6.png`,
        alignClass: GalleryImageAlign.center
    },
    {
        src:`${process.env.NEXT_PUBLIC_BASE_PATH}/gallery-image7.png`,
        alignClass: GalleryImageAlign.top
    },
    {
        src:`${process.env.NEXT_PUBLIC_BASE_PATH}/gallery-image8.png`,
        alignClass: GalleryImageAlign.bottom
    },
    {
        src:`${process.env.NEXT_PUBLIC_BASE_PATH}/gallery-image9.png`,
        alignClass: GalleryImageAlign.center
    },
    {
        src:`${process.env.NEXT_PUBLIC_BASE_PATH}/gallery-image10.png`,
        alignClass: GalleryImageAlign.top
    },
    {
        src:`${process.env.NEXT_PUBLIC_BASE_PATH}/gallery-image11.png`,
        alignClass: GalleryImageAlign.center
    },
    {
        src:`${process.env.NEXT_PUBLIC_BASE_PATH}/gallery-image12.png`,
        alignClass: GalleryImageAlign.top
    },
];