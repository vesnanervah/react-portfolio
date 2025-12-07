import { Contact, contacts } from "../../data/contact";
import Button from "../button";
import TextField from "../text-field";

export default function ContactsSection() {
    return <div className="">
        <div className="bg-white pt-10 pb-5">
            <div className="text-xl text-center text-stone-900 uppercase">
                Like my portfolio? Sign up for a shoot!
            </div>
            <div className="flex flex-col md:flex-row pt-5 items-center md:justify-center gap-2">
            <TextField placeholder="your name" className="w-[340px] md:w-[256px] lg:w-[380px]"></TextField>
            <TextField placeholder="phone" className="w-[340px] md:w-[256px] lg:w-[380px]"></TextField>
            <Button text="Book now" onClick={() => {}} className="w-[340px] md:w-[200px]"></Button>
            </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center bg-stone-900 pt-5 pb-5">
            {
                contacts.map(Contact)
            }
        </div>
    </div>

    function Contact(c: Contact) {
        // TODO: links
        return <div key={c.label} className="pl-5 pt-4 pr-5 pb-4 text-base text-white hover:text-rose-600 uppercase cursor-pointer">
            {c.label}
        </div>
    }
}