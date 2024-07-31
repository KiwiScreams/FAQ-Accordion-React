import "./Accordion.css"
import { useState } from "react";
import AccordionHeader from "./accordion-header/AccordionHeader";
import AccordionBody from "./accordion-body/AccordionBody";
function Accordion() {
    return (
        <>
            <section className="main-faq">
                <AccordionHeader />
                <AccordionBody />
            </section>
        </>
    )
}
export default Accordion