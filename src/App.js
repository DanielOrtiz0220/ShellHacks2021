import './App.css';
import QuestionBox from './QuestionBox';

function App() {
  return (
   <div>
     <header>
       <div class="arrow arrow-left"></div>
       <p>Question 1</p>
       <div class="arrow arrow-right"></div>
     </header>
     <div id="topName">
       <p>Test</p>
     </div>
     <QuestionBox />
     <div id="bottomButtons">
       <center>
      <button id="Left">Quiz</button>
      <button id="Right">Are you LatinX ?</button>
      </center>
     </div>
   </div>
  );
}

export default App;
