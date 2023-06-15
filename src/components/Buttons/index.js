import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

function Button({ children, to, href, onClick, text = false, primary = false, secondary = false, iconleft, className }) {
    let Comp = 'button';
    const cx = classNames.bind(styles);
    const props = {
        onClick
    };

    const classes = cx('wrapper', {
        primary,
        secondary,
        text,
        [className]: className
    });

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...props}>
            {iconleft && <span className={cx('icon')}>{iconleft}</span>}
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

export default Button;
