import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

function Button({ children, to, href, onClick, primary }) {
    let Comp = 'button';
    const cx = classNames.bind(styles);
    const props = {
        onClick
    };

    const classes = cx('wrapper', {
        primary
    });

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
