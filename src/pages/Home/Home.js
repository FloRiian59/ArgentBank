import React from "react"
import Banner from "../../components/Banner"
import Item from "../../components/Item"
import '../Home/Home.css'
function Home() {
    return (
        <div>
            <Banner />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <Item />
            </section>
        </div>
    )
}

export default Home