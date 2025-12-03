export default function TextField(props: TextFieldProps) {
    return <input placeholder={props.placeholder} 
    className="h-14 border-2 border-neutral-500 pt-4 pb-4 pl-3 pr-3 text-base text-stone-900 outline-0 placeholder:text-neutral-500 hover:border-stone-900 focus:border-stone-900">
    </input>
}

interface TextFieldProps {
    placeholder: string,
}