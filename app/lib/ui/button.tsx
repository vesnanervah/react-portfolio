export default function Button(props: ButtonProps) {
    return <button onClick={props.onClick} className="bg-stone-900 pt-4 pb-4 pl-5 pr-5 min-w-52 text-base text-white transition-colors ease-in duration-200 hover:bg-rose-600 hover:text-stone-900">
        {props.text.toUpperCase()}
    </button>
}

interface ButtonProps {
    text: string,
    onClick: () => void;
}