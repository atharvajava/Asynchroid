import React from "react"
import BaseLayout from "../components/layouts/BaseLayout"
import BasePage from "../components/shared/BasePage"

class About extends React.Component {
    render(){
        return (
            <BaseLayout>
                <BasePage className="about-page">
                    <h1>About Page class</h1>
                </BasePage>
            </BaseLayout>
        )
    }
}
export default About;