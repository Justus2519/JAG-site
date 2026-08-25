function Resume(){
    const msLink = "https://github.com/Justus2519/Minesweeper-App";
    const snakeLink = "https://github.com/Justus2519/SnakeTkinter";
    const jagLink = "https://github.com/Justus2519/JAG-site";
    return (
        <div>
            Come back at a later date when I get around to this!
            <h1>
                Projects:
            </h1>
            <div style={{display: "flex", flexFlow:"column wrap", gap:"2vh"}}>
                <div className="about-box">
                    <div style={{alignSelf:"stretch"}}>
                        <h1 className="box-title">Minesweeper</h1>
                        <div className="contact-box">
                            <a href={msLink}>
                                <img src="/images/github-logo.png" style={{height: "3vw", padding:"0 1vw 0 1vw"}}/>
                            </a>
                            <a href={msLink}>Source</a>
                        </div>
                    </div>
                    <p className="box-text">
                        Minesweeper is one of my favourite video games. I've always wanted to make my own version of it so I finally did. Currently I'm working on developing more sophisticated board generation and an original mode.
                    </p>
                    <img src="/images/minesweeperLogo.png" alt="minesweeper logo" className="project-img"/>
                </div>
                <div className="about-box">
                    <div style={{alignSelf:"stretch"}}>
                        <h1 className="box-title">Python Snake</h1>
                        <div className="contact-box">
                            <a href={snakeLink}>
                                <img src="/images/github-logo.png" style={{height: "3vw", padding:"0 1vw 0 1vw"}}/>
                            </a>
                            <a href={snakeLink}>Source</a>
                        </div>
                    </div>
                    <p className="box-text">
                        A classic game that I wanted to make to practice my Python skills. There is an available release on GitHub.
                    </p>
                    <img src="/images/snakelogo.png" alt="snake logo" className="project-img"/>
                </div>
                <div className="about-box">
                    <div style={{alignSelf:"stretch"}}>
                        <h1 className="box-title">Personal Website</h1>
                        <div className="contact-box">
                            <a href={jagLink}>
                                <img src="/images/github-logo.png" style={{height: "3vw", padding:"0 1vw 0 1vw"}}/>
                            </a>
                            <a href={jagLink}>Source</a>
                        </div>
                    </div>
                    <p className="box-text">
                        Originally I made an apache server running with AWS to host my Minesweeper app. It soon turned into a personal website to showcase any other projects and other miscellaneous things.
                    </p>
                    <img src="/images/weblogo.png" alt="jag logo" className="project-img"/>
                </div>
            </div>
        </div>
    )
}

export default Resume;