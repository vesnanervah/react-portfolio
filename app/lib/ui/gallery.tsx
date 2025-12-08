/* eslint-disable @next/next/no-img-element */
import { useReducer } from "react";
import { GalleryImage, GalleryImageAlign, galleryImages } from "../data/gallery-images";
import WindowSizeListener from "react-window-size-listener";

const slidableId = "slidable"

const sliderInitialPos = 0;
const sliderNormalMovement = 300;

export default function Gallery(props: GalleryProps) {
    const [sliderPos, dispatchSliderPos] = useReducer(sliderPosReducer, sliderInitialPos);


    return <div className={`w-screen overflow-hidden flex flex-col items-center h-[654px] ${props.className ?? ''}`}>

        {/*Images area*/}
        <div id={slidableId} className={'w-max h-[654px] relative flex gap-5 pl-5 pr-5 shrink-0 transition-all duration-200'} style={{
            transform: `translateX(${sliderPos}px)`
        }}>
            {
                props.images.map(Item)
            }
        </div>

        {/*Gestures area*/}
        <div className="min-h-[654px] w-screen bottom-[654px] relative grid grid-cols-[3fr_4fr_3fr]">
            <div className="min-h-max min-w-max" onClick={() => dispatchSliderPos(SliderMoveDirection.left)}></div>
            <div className="min-h-max min-w-max" onClick={() => dispatchSliderPos(SliderMoveDirection.initial)}></div>
            <div className="min-h-max min-w-max" onClick={() => dispatchSliderPos(SliderMoveDirection.right)}></div>
        </div>

        <WindowSizeListener onResize={onWindowResize}></WindowSizeListener>
    </div>

    function Item(i: GalleryImage) {
        return <div key={i.src} id={`gallery-image-${galleryImages.indexOf(i)}`} className={`flex flex-col ${getAlignClassName(i)}`}>
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

    function sliderPosReducer(state: number, action: SliderMoveDirection): number {
        if (document.getElementById(slidableId)!.offsetWidth < window.innerWidth) {
            // No need to scroll
            return sliderInitialPos
        }

        switch (action) {
            case SliderMoveDirection.initial:
                return sliderInitialPos;
            case SliderMoveDirection.left:
                return calculateNextLeftPos(state)
            case SliderMoveDirection.right:
                return calculateNextRightPos(state)    
        }
    }

    function calculateNextLeftPos(currentPos: number) {
        const windowWidth = window.innerWidth
        // After checkup above we know for sure that offsetWidth >  innerWidth
        // Because the moving part is initially aligned in center, the unseen part from left or from right are equal
        const initiallyUnseenRightWidth = (document.getElementById(slidableId)!.offsetWidth - windowWidth) / 2
        // (windowWidth / 2) - (document.getElementById(`gallery-image-${galleryImages.length - 1}`)!.offsetWidth / 2) means
        // we want not only be able scroll unit we can see last element but also be able to center it
        const edgeScrollPos = initiallyUnseenRightWidth + (windowWidth / 2) - (document.getElementById(`gallery-image-${galleryImages.length - 1}`)!.offsetWidth / 2)
        if (edgeScrollPos <= Math.abs(currentPos - sliderNormalMovement)) {
            return -edgeScrollPos;
        }
        return currentPos - sliderNormalMovement;
    }

    function calculateNextRightPos(currentPos: number) {
        const windowWidth = window.innerWidth
        const initiallyUnseenRightWidth = (document.getElementById(slidableId)!.offsetWidth - windowWidth) / 2
        const edgeScrollPos = initiallyUnseenRightWidth + (windowWidth / 2) - (document.getElementById(`gallery-image-0`)!.offsetWidth / 2)
        if (edgeScrollPos <= Math.abs(currentPos + sliderNormalMovement)) {
            return edgeScrollPos;
        }
        return currentPos + sliderNormalMovement;
    }

    function onWindowResize() {
        dispatchSliderPos(SliderMoveDirection.initial)
    }
}

enum SliderMoveDirection { left, right, initial}

interface GalleryProps {
    className?: string,
    images: Array<GalleryImage>
}