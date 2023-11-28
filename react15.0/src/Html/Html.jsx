import Animal from "./images/1.jpg"
import Video from "./video"

// import Audio1 from "./audio/Jawan - Bgm"



const Html= ()=>{
    return(
      <div>
        <center><h1>Welcome to React</h1></center>
        <img src="https://cdn.pixabay.com/photo/2023/10/29/16/07/chrysanthemum-8350644_640.jpg" height={"500px"} width={"49%"}></img>
        <img src={Animal} height={"500px"} width={"49%"}></img>
        <br></br>
        <a href="https://www.youtube.com/">Youtube</a>
        <br></br>
        <iframe height={"500px"} width={"49%"} src="https://www.youtube.com/embed/ev0PUwUctJw?si=kvA9FInodV9_SVaj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.497854444961!2d73.91121207496248!3d18.50639108258448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1c16bfaf76b%3A0xdb993a835fbbba46!2sQspiders%20Pune%20Hadapsar!5e0!3m2!1sen!2sin!4v1700573551030!5m2!1sen!2sin" allowFullScreen height={"500px"} width={"49%"}></iframe>
      <br></br>
      {/* <video src={Video} height={"500px"} width={"100%"} autoplay loop muted></video> */}
      {/* <audio src={Audio1} controls autoplay loop muted></audio> */}
      <br></br>
      <table border={"1"} width={"50%"}>
        <thead>
        <tr>
          <th>Name</th>
          <th>Sal</th>
          <th>Designation</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>A</td>
            <td>10</td>
            <td>JE</td>
          </tr>
          <tr>
            <td>A</td>
            <td>10</td>
            <td>JE</td>
          </tr><tr>
            <td>A</td>
            <td>10</td>
            <td>JE</td>
          </tr>
        </tbody>
        <tfoot>

        </tfoot>
      </table>
      </div>
    )
}
export default Html