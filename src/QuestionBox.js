import './QuestionBox.css';
function QuestionBox(){
    return <div class="qb-surround">
        <section class="qb-section">
            <h1 class="qb-question-title">What does LatinX stand for ?</h1>
            <section class="qb-question-choices">
                <Answer text="Mexican beer"/>
                <Answer text="A branch language of Latin"/>
                <Answer text="Latin American origin or descent"/>
                <Answer text="X marks the spot !"/>
            </section>
        </section>
        <button class="qb-submit">Submit</button>
    </div>
}
function Answer(props){
    return <p class="qb-answer">{props.text}</p>

}

export default QuestionBox;