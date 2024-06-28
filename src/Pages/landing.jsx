import React from 'react'
import '../css/Landing.css'

const Landing = () => {

    return (
        <>
            <div class="navbar">
                <nav class="topnav">
                    <ul class="navitems">
                        <li><a href="/">Home</a></li>
                        <li><a href="scoreboard">Scoreboard</a></li>
                        <li><a href="controller">Controller</a></li>
                        <li><a href="comms">Commentator Overlay</a></li>
                    </ul>
                </nav>
            </div>
            <div class="title">
                <h1>SIMPLIFIED SSBU SCOREBOARD</h1>
            </div>
            <h2>HOW TO USE</h2>

            <div class="instructions">
                <p>welcome to my Simple SSBU scoreboard overlay. I felt like other options out there were too difficult to modify
                    and were too bulky in their default configurations thus I created this web app overlay in order to create
                    something that I hope is more intuitive to use for the average Joe so thank you for giving this a look and I hope
                    to see some more clips made from events using this overlay ;)...
                </p>
                <h3><u>DISCLAMER</u></h3>
                <p>
                    This socreboard overlay was made for my initial use case and may have some bugs depending on your use case. <br />
                    <br />
                    For instance, the current version of the scoreboard does not have support for custom colors, fonts etc. unless you
                    download the scoreboard
                    and controller files from my github and modify them yourself. I eventually plan to add these features into the
                    controller to allow for customization for at least the color scheme. <br /> <br />
                    Secondly, I built this scoreboard for my specific use case and as such the start.gg api integration is hard coded
                    for that case. For instance it will only be able to pull from the
                    start.gg api if your event is set up to only have one large bracket. If your event has pools the current code is
                    not capable of handleing that (I was unaware of this start.gg feature at the time of creation). I intend to
                    resolve this issue at some point
                    so that the scoreboard can pull match data no matter how your bracket is set up.
                    Though in any case, you are always able to control the scoreboard manually to set tags, charecters etc. <br /> <br />
                    Finally, if you want to use this overlay for offline recording, you can download the source code from my github
                    repo and then open the scoreboard and controller as a live server from vs code.
                </p>
                <a href="#advanced">click here to skip down to advanced features to learn how to use the controller with
                    start.gg</a>
                <h3><u>Basic Setup</u></h3>
                <ol>
                    <li>Open the links on the top bar for the controller and scoreboard in a new tab <br /><img src="images/links.PNG" />
                    </li>
                    <li>add the link to the scoreboard as a browser source in OBS Studio
                        <ol>
                            <li> Copy the link to the scoreboard </li>
                            <li> Add a New Browser source in OBS Studio <br /><img src="images/addbrowser_source.png" height="600" /></li>
                            <li> Paste the link and ensure that its size is 1920x1080 (also check your stream settings to ensure that its
                                output and window size is also 1920x1080)<br /><img src="images/scoreboardadd.PNG" width="700" />
                            </li>
                        </ol>
                    </li>
                    <li>add the controller to OBS Studio as a dock, this step is optional but is recommended as it allows you to use
                        the controller from within OBS Studio
                        thus removing the need to flip through tabs
                        <ol>
                            <li> Copy the link to the controller </li>
                            <li> On the top bar in OBS, click on "docks" '{'>'}' "custom browser docks" <br /><img src="images/docks.png"
                                height="700" /></li>
                            <li> paste the link to the controller and name it <br /><img src="images/adock.PNG" />
                            </li>
                        </ol>
                    </li>
                    <li> You are now done with the basic setup and should have somthing like the below screenshot,
                        (docks in OBS sort of behave like windows in windows so if you dont like it floating around you can drag it and
                        place it in the panels as you please)
                        <br /> <img src="images/finalresult.PNG" width="800" />
                    </li>
                </ol>
                <h3 id="advanced"><u>Advanced Features</u></h3>
                <h4>Using Start.gg Match Numbers</h4>
                <p>NOTE: this feature may be buggy as the current code is for the local event this overlay was originally made
                    for and is hard coded to take look for the bracket in a from a certain place (This is as i initially planed to not
                    publish this).<br /><br />
                    That said, it will only work if the ultimate singles brackets that have no pools. If your bracket is not set up
                    this way then the controller
                    will have some trouble pulling matchup data from the start.gg API.
                    So if your event is not set up this way, please consider checking out the
                    <a href="https://github.com/Hunter-McMahon85/simplified-smash-scoreboard">source code and downloading a version to
                        modify yourself.</a> This project is Now made using react and Node JS
                </p>
                <ol>
                    <li>Obtain a <a
                        href="https://developer.start.gg/docs/authentication/#:~:text=Generating%20a%20Token,AND%20fill%20out%20this%20form.">
                        start.gg api token</a>
                        <ul>
                            <li>
                                (these are case sensitive and should be treated as a password, this site does not save token info, for
                                transparency this project is <a href="https://github.com/Hunter-McMahon85/simplified-smash-scoreboard">
                                    open source and hosted via github pages)</a></li>
                            <li>
                                (Additionally, start.gg will only show your token to you once upon generation so be sure to save it
                                somewhere secure)
                            </li>
                        </ul>
                    </li>
                    <li>
                        Enter your generated API token into the controller <br />
                        <img src="images/token.PNG" height="500" />
                    </li>
                    <li>
                        in the tournament link field of the controller, enter the "/tournaments/[event name]" part of the event link.
                        This is the "slug" link for the tournament that the start.gg API uses to know which event to fetch data from
                        <div class="brln">
                            <img src="images/link_example.png" />
                            <br />
                            <img src="images/bracket_link.PNG" />
                        </div>
                    </li>
                    <li>
                        Now you can get tags from matches by simply entering the match id into the match id field (note the images are
                        out of date and that the scoreboard now alos pulls the round name)
                        <br />
                        <img src="images/match.PNG" />
                        <br />
                        <img src="images/entermatch.PNG" />
                        <br />
                        <img src="images/match_num.PNG" />
                        <br />
                        <img src="images/matchonboard.PNG" />
                    </li>
                </ol>
            </div>
        </>
    )
}

export default Landing
