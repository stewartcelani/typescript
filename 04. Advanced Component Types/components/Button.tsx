import {ComponentPropsWithoutRef, ReactNode} from "react";

type ButtonProps = {
    href?: never;
    children: ReactNode;
} & ComponentPropsWithoutRef<'button'>;

type AnchorProps = {
    href?: string;
    children: ReactNode;
} & ComponentPropsWithoutRef<'a'>;

function IsAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
    return 'href' in props;
}

export default function Button(props: ButtonProps | AnchorProps) {
    if (IsAnchorProps(props)) {
        return <a href={props.href} {...props}>{props.children}</a>
    }

    return (
        <button {...props}>{props.children}</button>
    )
}