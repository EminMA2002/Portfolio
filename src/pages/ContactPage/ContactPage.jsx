import React from 'react'
import "./ContactPage.css"
import ContactPageSchedule from '../../components/ContactPageSchedule/ContactPageSchedule';

function ContactPage() {
    return <div className='cp_Container'>
        <div className="cptitle">
            <div className="cptitle1">Let's talk!</div>
            <div className="cptitleline"></div>
            <div className="cptitle2">design</div>
        </div>
        <ContactPageSchedule/>
    </div>

}

export default ContactPage;