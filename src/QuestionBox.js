import "./QuestionBox.css"
function QuestionBox(){
    return <div class="qb-surround">
        <section class="qb-section">
            <h1 class="qb-question-title">What is React?</h1>
            <section class="qb-question-choices">
                <Answer text="A JS framework"/>
                <Answer text="A Programming language"/>
                <Answer text="A Keyboard"/>
                <Answer text="A Human mechanism"/>
            </section>
        </section>
        <button class="qb-submit">Submit</button>
    </div>
}
function Answer(props){
    return <p class="qb-answer">{props.text}</p>

}

export default QuestionBox;