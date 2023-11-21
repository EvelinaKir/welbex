import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import Image, {ImageProps} from "next/image";

interface IProps extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'children'>, Pick<ImageProps, 'src' | 'alt'> {
}

const IconButton = (props: IProps) => {
    const {src, alt, ...rest} = props
    return (
        <button {...rest} className={'text-white font-bold p-2  rounded-full hover:backdrop-contrast-200'}>
            <Image width={20} height={20} src={src} alt={alt}/>
        </button>
    );
};

export default IconButton;