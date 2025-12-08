/* eslint-disable @next/next/no-img-element */
import { useReducer, useState } from "react";
import { GalleryImage, GalleryImageAlign } from "../data/gallery-images";
import clsx from "clsx";

const slidableId = "slidable"
const sliderInitialPos = 0;

export default function Gallery(props: GalleryProps) {
    const [sliderPos, dispatchSliderPos] = useReducer(sliderPosReducer, sliderInitialPos);


    return <div className={`w-screen overflow-hidden flex flex-col items-center ${props.className ?? ''}`}>
        {/*Images area*/}
        <div id={slidableId} className={clsx("w-max h-[654px] relative flex gap-5 pl-5 pr-5 shrink-0 transition-all duration-200", `translate-x-[${sliderPos}px]`)}>
            {
                props.images.map(Item)
            }
        </div>
        {/*Gestures area*/}
        <div className="h-[654px] w-screen bottom-[654px] relative grid grid-cols-[3fr_4fr_3fr]">
            <div className="min-h-max min-w-max" onClick={() => dispatchSliderPos(SliderMoveDirection.left)}></div>
            <div className="min-h-max min-w-max" onClick={() => dispatchSliderPos(SliderMoveDirection.initial)}></div>
            <div className="min-h-max min-w-max" onClick={() => dispatchSliderPos(SliderMoveDirection.right)}></div>
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

    function sliderPosReducer(state: number, action: SliderMoveDirection): number {
        switch (action) {
            case SliderMoveDirection.initial:
                return sliderInitialPos;
            case SliderMoveDirection.left:
                return calculateNextLeftPos()
            case SliderMoveDirection.right:
                return calculateNextRightPos()    
        }
    }

    function calculateNextLeftPos() {
        return sliderInitialPos
    }

    function calculateNextRightPos() {
        return sliderInitialPos
    }
}

enum SliderMoveDirection { left, right, initial}

interface GalleryProps {
    className?: string,
    images: Array<GalleryImage>
}