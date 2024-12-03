import React, { useState } from 'react'
import "./AboutPageFAQ.css"

function AboutPageFAQ() {
    const [openFaq, setOpenFaq] = useState(false)

    const FAQsData = [
        {
            question: "What services do you offer?",
            answer: "I offer a range of services including web design, branding, digital marketing, UI/UX design etc. Each project is tailored to meet your unique needs and goals."
        },
        {
            question: "How do I get started on a project with you?",
            answer: "Getting started is simple! Just reach out via the contact form on my website with your project details, and I’ll schedule a consultation to discuss how we can work together to achieve your vision."
        },
        {
            question: "Can you help with creative direction or ideas?",
            answer: "Absolutely! Whether you have a clear vision or need help developing ideas, I offer creative direction to guide your project and ensure it reflects your brand or personal style."
        },
        {
            question: "What is your pricing structure?",
            answer: "Pricing varies depending on the scope and complexity of the project. After an initial discussion, I’ll provide you with a customized quote that aligns with your specific requirements."
        },
        {
            question: "Do you work with international clients?",
            answer: "Yes, I work with clients from around the world. Thanks to remote collaboration tools, we can easily communicate and work together regardless of your location."
        },
    ]

    function toggleFaq(index) {
        setOpenFaq(openFaq === index ? null : index)
    }

    return (

        <div className='FAQ' >
            <div className='FAQTITLE'>Frequently Asked Questions</div>
            {
                FAQsData.map((FAQ, index) => (
                    <div className='FAQChild' key={index}>
                        <div onClick={() => toggleFaq(index)} className='FAQHead'>{FAQ.question} <div>{openFaq === index ? "-" : "+"}</div> </div>
                        <div className='FAQAnswer' style={{maxHeight: openFaq === index ? "50px" : "0", transition: "max-height .5s ease"}}>{FAQ.answer}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default AboutPageFAQ;