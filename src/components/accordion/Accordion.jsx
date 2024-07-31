import iconStar from "../../assets/images/icon-star.svg";
import iconPlus from "../../assets/images/icon-plus.svg";
import iconMinus from "../../assets/images/icon-minus.svg";
function Accordion() {
    const [activePanel, setActivePanel] = useState(null);
    const [panels, setPanels] = useState([
        {
            id: 1,
            title: "What is Frontend Mentor, and how will it help me?",
            content: `Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills
                            with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.`
        },
        {
            id: 2,
            title: "Is Frontend Mentor free?",
            content: `The majority of our challenges are free, yes. We do have some that are premium and require a Pro subscription to access. It will say on each challenge whether they are free or premium, so it's easy to tell the difference.`
        },
        {
            id: 3,
            title: "Can I use Frontend Mentor projects in my portfolio?",
            content: `Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!`
        },
        {
            id: 4,
            title: "How can I get help if I'm stuck on a challenge?",
            content: `The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated "help" channel! If you haven't joined yet, you can get an invite to our Discord server here.`
        }
    ]);
    return (
        <>
            <section className="main-faq">
                <div className="faq-header">
                    <h1 className="flex"><img src={iconStar} alt="" />FAQs</h1>
                </div>
                <div class="faq-body">
                    <button class="accordion flex">What is Frontend Mentor, and how will it help me?<img
                        src={iconPlus} alt="" /></button>
                    <div class="panel">
                        <p>Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills
                            with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.</p>
                    </div>

                    <button class="accordion flex">Is Frontend Mentor free?<img
                        src={iconPlus} alt="" /></button>
                    <div class="panel">
                        <p>The majority of our challenges are free, yes. We do have some that are premium and require a Pro subscription to access. It will say on each challenge whether they are free or premium, so it's easy to tell the difference.</p>
                    </div>

                    <button class="accordion flex">Can I use Frontend Mentor projects in my portfolio?<img
                        src={iconPlus} alt="" /></button>
                    <div class="panel">
                        <p>Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!</p>
                    </div>
                    <button class="accordion flex">How can I get help if I'm stuck on a challenge?<img
                        src={iconPlus} alt="" /></button>
                    <div class="panel">
                        <p>The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated "help" channel! If you haven't joined yet, you can get an invite to our Discord server here.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Accordion