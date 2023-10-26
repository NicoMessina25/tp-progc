import { Label as LabelShadcn } from "@/shadcnComponents/ui/label"

interface LabelProps{
    text?:string,
    htmlFor?:string,
    required?:boolean,
    className?:string
}

export function Label({htmlFor, text = "", required,className=""}:LabelProps) {
  return <LabelShadcn htmlFor={htmlFor} className={`text-rickMortyLight ${className}`}>{text} {required ? <span>*</span>:<></>}</LabelShadcn>


}
