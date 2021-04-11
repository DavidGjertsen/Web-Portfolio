//The contacts page component of dooooooom

export const Contacts = () => {
    return(
        <div className="container">
            <section className="panel contact">
                <section className="contactPage">
                    <h1>Get in touch</h1>
                    <p></p>
                    <div className="contacts">
                        <Contact type="Email" link="mailto:davidgjertsen8635@gmail.com" text="davidgjertsen8635@gmail.com"/>
                        <Contact type="Twitter" link="https://twitter.com/david_gjertsen" external text="@david_gjertsen" />
                        <Contact type="Phone" link="tel:(704)352-8053" text="704-352-8053" />
                    </div>
                </section>
            </section>
        </div>
    )
}

const Contact = (props) => {
    return(
        <div className="contact">
            <p>{props.type + ": "}<a href={props.link} target={props.external ? "_blank" : ""} rel="noreferrer">{props.text ? props.text : props.link}</a></p>
        </div>
    )
}
