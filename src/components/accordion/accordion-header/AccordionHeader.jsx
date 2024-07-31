import "./AccordionHeader.css";
import iconStar from "../../../assets/images/icon-star.svg";
function AccordionHeader() {
    return (
        <>
            <div className="faq-header">
                <h1 className="flex"><img src={iconStar} alt="" />FAQs</h1>
            </div>
        </>
    )
}
export default AccordionHeader