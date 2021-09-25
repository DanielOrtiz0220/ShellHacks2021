import './QuestionBox.css';
function QuestionBox(){
    return <div class="qb-surround">
        <section class="qb-section">
            <h1 class="qb-question-title">What does LatinX stand for ?</h1>
            <section class="qb-question-choices">
                <Answer text="A. Mexican beer"/>
                <Answer text="B. A branch language of Latin"/>
                <Answer text="C. Latin American origin or descent"/>
                <Answer text="D. X marks the spot !"/>
            </section>
        </section>
        <div id="topName">
            <div>
        <label for="email">If at any point you enjoy the content, subscribe to our LatinX news letter.</label>
        </div>
        <div>
        <form>
        Email: <input type="Email" name="email" required></input>
        <center><input class="qb-submit" type="submit" value="Sign up!"></input></center>
        </form>
        </div>
     </div>
    
    </div>
}
function Answer(props){
    return <p class="qb-answer">{props.text}</p>

}

export default QuestionBox;