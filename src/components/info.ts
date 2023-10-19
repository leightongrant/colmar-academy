import infoMain from "/images/information-main.jpg";
import infoOrientation from "/images/information-orientation.jpg";
import infoCampus from "/images/information-campus.jpg";
import infoGuest from "/images/information-guest-lecture.jpg";

const info = `
    <section id='info'>
        <div>
            <img src='${infoMain}' alt='Emanuel Sr Strategist'>
            <h2>It doesn't hurt to keep practicing</h2>
            <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolor ut, error ab cumque enim doloremque unde dicta omnis sequi. 
                Eos reprehenderit mollitia modi numquam unde omnis quidem ratione atque."
                Vel dolor ut, error ab cumque enim doloremque unde dicta omnis sequi. 
                Eos reprehenderit mollitia modi numquam unde omnis quidem ratione atque.
            </p>
            <p>
                Emanuel, Sr Strategist at Hiring.com
            </p>
        </div>
        <div>
            <div>
                <img src='${infoOrientation}' alt='Orientation'>
                <div>
                    <h3>Orientation date</h3>
                    <p>Tue 10/11 & Wed 10/12: 8am-3pm</p>
                    <a href='#'>Read more</a>
                </div>
            </div>
            <div>
                <img src='${infoCampus}' alt='The campus'>
                <div>
                    <h3>Our campus</h3>
                    <p>Find which campus is close by you</p>
                    <a href='#'>Read more</a>
                </div>
            </div>
            <div>
                <img src='${infoGuest}' alt='Oliver Sack'>
                <div>
                    <h3>Our guest lecture</h3>
                    <p>Join a keynote with Oliver Sack about music in medical treatment</p>
                    <a href='#'>Read more</a>
                </div>
            </div>
        </div>
    </section>
`;
export default info;
