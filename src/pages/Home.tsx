import {MathJaxContext, MathJax} from "better-react-mathjax";
function Home(){
    return (
        <div>
            <div className="about-box">
                <h1 className="box-title">About</h1>
                <div className="box-text">
                    <p>
                        Hello, I'm Justus, a third year computer science student at McGill. Other than school I enjoy playing soccer, video games and going outside with friends.
                    </p>
                </div>
                <img src="/images/Face.png" alt="avatar picture" className="avatar"></img>
            </div>

            <div className="line-seperator"></div>
            <h1>Projects</h1>
            <div className="project-content">
                <div className="project">
                    <h2>Minesweeper</h2>
                    <p>The classic minesweeper game.</p>
                </div>
                <div className="project">
                    <h2>Python Snake</h2>
                    <p>The classic Snake game remade using Python</p>
                </div>
                <div className="project">
                    <h2>PiBot</h2>
                    <p>A personal discord bot for variable fun.</p>
                </div>
            </div>

            <div className="line-seperator"></div>
            <h2>
                My Top 10 Favourite Numbers, Numerical Constants or Identities
            </h2>
            
            <ol type="1">
                <li><details>
                        <summary>π</summary>
                        Who doesn't love pi?
                </details></li>
                <li><details>
                        <summary>19</summary>
                        This number is not a reference to anything, it's just an extremely underrated number.
                </details></li>
                <li><MathJaxContext><MathJax><details>
                        <summary>{"\\(e^{i\\pi} = -1\\)"}</summary>
                        This is like when all your favourite super heroes get together and team up.
                </details></MathJax></MathJaxContext></li>
                <li><details>
                        <summary>1/81</summary>
                        1/81 to the 9th decimal place is 0.012345679. It's just missing the 8, almost perfect.
                </details></li>
                <li><MathJaxContext><MathJax><details>
                        <summary>{"\\(\\aleph_{0}\\)"}</summary>
                        I'd be remiss if I didn't have at least one "large number" on my list of all time numbers.
                </details></MathJax></MathJaxContext></li>
                <li><details>
                        <summary>25</summary>
                        Something funnier than 24.
                </details></li>
                <li><details>
                        <summary>0</summary>
                        It's simply an iconic number. Every other whole number represents something except 0 which represents nothing. That is cool.
                </details></li>
                <li><details>
                        <summary>9.8</summary>
                        What can I say it's my g.
                </details></li>
                <li><details>
                        <summary>2</summary>
                        2 has some notable accomplishments: The smallest prime number, even numbers, the number of suns on the planet Tatooine, atomic number of a noble gas, binary etc.
                </details></li>
                <li><MathJaxContext><MathJax><details>
                        <summary>{"\\(\\sin^2(\\theta)+\\cos^2(\\theta) = 1\\)"}</summary>
                        A classic.
                </details></MathJax></MathJaxContext></li>
            </ol>

            <div className="line-seperator"></div>
            <div className="about-box">
                <h1 className="box-title">Contact Me</h1>
                <div className="box-text">
                    <div className="contact-box">
                        <img src="/images/gmail-icon.png" height="7%" width="7%" className="contact-img"></img>
                        <div>jglasgow.jag3@gmail.com</div>
                    </div>
                    <div className="contact-box">
                        <img src="/images/github-logo.png" height="7%" width="7%" className="contact-img"></img>
                        <a href="https://github.com/Justus2519">Justus2519</a>
                    </div>
                    <div className="contact-box">
                        <img src="/images/LinkedIn_logo.png" height="7%" width="7%" className="contact-img"></img>
                        <a href="https://www.linkedin.com/in/justus-glasgow-5b3b0a344/">Justus Glasgow</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;