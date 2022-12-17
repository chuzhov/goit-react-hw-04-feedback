import css from "./Statistics.module.css"

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (<div>
            <p>Good:<span className={css["stat-counter"]}>{good}</span></p>
            <p>Neutral:<span className={css["stat-counter"]}>{neutral}</span></p>
            <p>Bad:<span className={css["stat-counter"]}>{bad}</span></p>
            <p>Total:<span className={css["stat-counter"]}>{total}</span></p>
            <p>Positive feedback:<span className={css["stat-counter"]}>{positivePercentage}</span></p>
        </div>
    )
}

export default Statistics;