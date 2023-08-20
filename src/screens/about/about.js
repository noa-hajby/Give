import React from "react";
import '../about/about.css'
import {FaHandHoldingHeart} from 'react-icons/fa';
import {BsSuitHeartFill} from 'react-icons/bs';

export default function About() {
    return (
        <div>
            <div id="title1">
                <div >
                    <h3 >
                        Very nice, the association to give. A non-profit organization that promotes volunteering in Israel
                    </h3>
                </div>
            </div>
            <FaHandHoldingHeart fontSize={'150px'} color='crimson'/>
            <div id="textpart">
                <div className="one">
                    <div >
                        <h2>
                            How do we do it, essays?
                        </h2>
                        <h6 className="two">
                            Ruach Tova connects people who want to volunteer with people who need volunteers, using a unique search engine, which allows finding customized volunteering.
                        </h6>
                        <h6 className="two">
                            On our website, you can choose the volunteering that interests you by location in Israel, and according to the field that interests you, you can choose everything in a customized way.
                        </h6>
                    </div>
                </div>
                <div className="one" >
                    <div>
                        <h2>
                            How is the connection process carried out?
                        </h2>
                        <h6 className="two">
                            The process of connecting the volunteers with those in need of assistance is carried out with the help of the department's advisors, who personally accompany the volunteers from the moment they chose to do good, until the moment they found the most suitable option for them.
                        </h6>
                    </div>
                </div>
                <div className="one">
                    <div >
                        <h2>
                            What is a volunteer department?
                        </h2>
                        <h6 className="two">
                            The volunteering department is a department that connects the number of volunteers who apply to the system each month, and the associations and the public that need volunteers. She is in regular contact with hundreds of people who need assistance, and operates a huge digital database of volunteering opportunities, which is updated according to the needs of the public and inquiries received from the public.

                        </h6>
                    </div>
                </div>
            </div>
            <div className="text2">
                <h4 className="text3" >
                    Although many express a desire to volunteer, the volunteering rates in Israel are significantly lower than what is common in Western countries. Therefore, we decided to collect some data that indicate the benefits of volunteering, and prove that you should start volunteering today.
                </h4>
                <div >
                    <p >
                        Most of us as Israelis walk around with a very clear perception of the mutual guarantee we have for each other. We all grew up with concepts like "all Israel are Arabs to each other", but if for a moment we try to examine these concepts with objective eyes and look at the dry numbers, we will discover a slightly different story. When you look at international comparisons of volunteering indicators (formal and informal) it is clear that the scope of volunteering in Israel is significantly lower than the average in most Western countries; While the percentage of volunteers in Israel is about 20%, in Canada it is 44%, in Great Britain 46% and in Sweden 48%. 
                    </p>
                    <p >
                        The truth is that the choice to go out and help someone else is not obvious. We are all busy with everyday affairs, and among all our obligations there is a real difficulty in finding time that can be devoted to other people. Indeed, this reason (lack of time) is a fundamental obstacle to increasing the number of volunteers in Israel, and the first reason cited by 73% of people who do not volunteer as a factor preventing them from volunteering. The second reason cited by about 50% of those who do not volunteer is the lack of ability to commit to a voluntary framework over time. Indeed, this reason reflects the change that has taken place in recent years in the field of volunteering (in Israel and the rest of the world), where there has been an increase in the number of volunteers, but the number of hours they devote to volunteering is decreasing.
                    </p>
                    <div style={{padding: '10px'}}>
                        <span style={{marginRight: '20px'}}><BsSuitHeartFill color="crimson"/></span>
                        <span style={{marginRight: '20px'}}><BsSuitHeartFill color="crimson"/></span>
                        <span style={{marginRight: '20px'}}><BsSuitHeartFill color="crimson"/></span>
                    </div>
                    <h5 >Volunteers improve skills and acquire new skills</h5>
                    <p >
                        But despite all the difficulties and discomfort, it is hard to argue with the fact that many choose to give of themselves and volunteer in one way or another. So what actually makes them volunteer, and what motivates them to action? It is clear that there is no single reason that makes people volunteer, and that it is a combination of reasons that are partly personal, partly social, and partly environmental. From the research in the field of volunteering, it appears that besides the volunteers' clear desire to contribute to the community, many of them feel that volunteering allows them to learn about their strengths and develop new skills. Many studies have shown how volunteers were able to perfect existing skills or acquire new skills as part of volunteering, and these helped them a lot in the workplace.
                    </p>
                    <p>
                    So that you too can take part in the site's volunteer work, register and select the volunteering you want to do and we will make sure to contact you
                    </p>
                </div>
            </div>
            <div style={{height: '150px'}}></div>
        </div>
    )
}