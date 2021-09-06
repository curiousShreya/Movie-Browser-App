import Hero from "./Hero.js"

const Home = () => {
    return (
        <>

        <Hero text={"Welcome to the world of movies"} />
        <div style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80")',
            height: "800px", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"
        }}>
        <div className="container">
       
            <div className="row">
             
              <div className="col-lg-8 my-5">
               
                   
                </div>
             </div>
            </div>
        </div> 
       
        </>
    )
}

export default Home;