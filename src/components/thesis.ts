import thesisFisma from "/images/thesis-fisma.jpg";
import thesisNowAndThen from "/images/thesis-now-and-then.jpg";
import thesisVideo from "/videos/thesis.mp4";
const thesis = `
    <section id='thesis'>
        <div id='thesis-video'>
            <video autoplay loop>
                <source src="${thesisVideo}" type="video/mp4" />
            </video>
        </div>
        <div id='thesis-aside'>
            <div class='thesis-content'>
                <div class='thesis-image'>
                    <img src='${thesisFisma}' alt='Fisma: Design and Prototype'>
                </div>
                <div class='thesis-info'>
                    <h3>Fisma: Design and Prototype</h3>
                    <p>Designer showcase of new prototype product</p>
                </div>
            </div>
            <div class='thesis-content'>
                <div class='thesis-image'>
                    <img src='${thesisNowAndThen}' alt='Research study about New York'>
                </div>
                <div class='thesis-info'>
                    <h3>Now and then</h3>
                    <p>Research study about New York</p>
                </div>
            </div>
        </div>
    </section>
`;

export default thesis;
