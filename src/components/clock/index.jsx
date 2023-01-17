import { useEffect, useState } from 'react';
import style from './clock.module.css';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hours = (time.getHours() < 10 ? '0' : '') + time.getHours();
    const minutes = (time.getMinutes() < 10 ? '0' : '') + time.getMinutes();
    const seconds = (time.getSeconds() < 10 ? '0' : '') + time.getSeconds();

    return (
        <div className={style.clock}>
            <div className={style.wrapper}>
                <div className={style.hours}>{hours}</div>
                <span>:</span>
                <div className={style.minutes}>{minutes}</div>
                <span>:</span>
                <div className={style.seconds}>{seconds}</div>
            </div>
        </div>
    );
};

export default Clock;
