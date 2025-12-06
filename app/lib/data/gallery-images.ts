export enum GalleryImageAlign { top, center, bottom } 

export interface GalleryImage {
    src: string;
    alignClass: GalleryImageAlign
}

export const galleryImages: Array<GalleryImage> = [
    {
        src:'/gallery-image1.png',
        alignClass: GalleryImageAlign.bottom
    },
    {
        src:'/gallery-image2.png',
        alignClass: GalleryImageAlign.center
    },
    {
        src:'/gallery-image3.png',
        alignClass: GalleryImageAlign.center
    },
    {
        src:'/gallery-image4.png',
        alignClass: GalleryImageAlign.top
    },
    {
        src:'/gallery-image5.png',
        alignClass: GalleryImageAlign.center
    },
    {
        src:'/gallery-image6.png',
        alignClass: GalleryImageAlign.center
    },
    {
        src:'/gallery-image7.png',
        alignClass: GalleryImageAlign.top
    },
    {
        src:'/gallery-image8.png',
        alignClass: GalleryImageAlign.bottom
    },
    {
        src:'/gallery-image9.png',
        alignClass: GalleryImageAlign.center
    },
    {
        src:'/gallery-image10.png',
        alignClass: GalleryImageAlign.top
    },
    {
        src:'/gallery-image11.png',
        alignClass: GalleryImageAlign.center
    },
    {
        src:'/gallery-image12.png',
        alignClass: GalleryImageAlign.top
    },
];