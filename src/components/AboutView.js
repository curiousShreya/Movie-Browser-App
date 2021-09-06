import Hero from './Hero'

const AboutView = () => {
    return (
        <>
        <Hero text="About" />
        <div style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80")',
            height: "800px", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"
        }}>
        <div className="container">
            <div className="row">
              <div className="col-lg-8 my-5">
                <div className="lead">
                   Here, you can find the picture and description of mostly English movies. Go get a try, by typing any English movie in the search bar above.
                   For instance, type "James Bond" in the Search Bar.
                </div>
             </div>
            </div>
        </div>
       </div>
        </>
    )
}

export default AboutView;