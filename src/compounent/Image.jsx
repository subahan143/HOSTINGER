import "./image.css"

const Image=()=>{
    return(
        <>
        <div className="img">
            <div className="left">
                <h1>SYNERGE</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi officiis, obcaecati doloribus perferendis minima consequuntur!</p>
                <span className="logos">
                <span><i class="fa-brands fa-facebook"></i></span>
                <span><i class="fa-brands fa-instagram"></i></span>
                <span><i class="fa-brands fa-linkedin"></i></span>
                <span><i class="fa-brands fa-tiktok"></i></span>
                <span><i class="fa-solid fa-phone"></i></span>
                <span><i class="fa-solid fa-music"></i></span>
                </span>
            <button>back</button>
            </div>
            <div className="right"> 
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxNDA4OTE2fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
        </div>
        
        </>
    )
}
export default Image
