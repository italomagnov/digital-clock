import style from './day.module.css';

const Day = () => {
    function getCurrentDay() {
        const days = [
            'sunday',
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
        ];

        const today = new Date().getDay();

        return days[today];
    }

    return (
        <div className={style.day}>
            <h1>{getCurrentDay().toUpperCase()}</h1>
        </div>
    );
};

export default Day;
