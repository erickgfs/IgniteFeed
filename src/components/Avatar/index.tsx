import { ImgHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar({hasBorder = true, ...rest}: AvatarProps) {

    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            {...rest}
        />
    )
}