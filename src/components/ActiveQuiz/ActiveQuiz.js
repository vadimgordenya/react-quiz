import React from 'react';
import classes from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>2.</strong>
                Как дела?
            </span>

            <span>4 из 12</span>
        </p>
        <AnswersList answers={props.answers}/>
    </div>
);

export default ActiveQuiz;