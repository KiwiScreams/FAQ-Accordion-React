import iconStar from "../../assets/images/icon-star.svg"
function Accordion() {
    return (
        <>
            <section className="main-faq">
                <div className="faq-header">
                    <h1 className="flex"><img src={iconStar} alt=""/>FAQs</h1>
                </div>
            </section>
        </>
    )
}
export default Accordion