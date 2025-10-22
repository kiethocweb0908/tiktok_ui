import Buttons from '~/components/Buttons';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Buttons className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Buttons>
    );
}

export default MenuItem;
