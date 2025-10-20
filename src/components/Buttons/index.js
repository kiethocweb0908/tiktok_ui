import classNames from 'classnames/bind';
import styles from './Buttons.module.scss';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Buttons({
    to,
    href,
    type = 'primary', // 'primary' | 'outline' | 'text' | 'rounded'
    size = 'medium', // 'small' | 'large'
    disable = false,
    leftIcon = false,
    rightIcon = false,
    children,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    if (!disable) {
        var props = {
            onClick,
        };
    }
    props = { ...props, ...passProps };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', type, size, {
        [className]: className,
        disable,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Buttons;
