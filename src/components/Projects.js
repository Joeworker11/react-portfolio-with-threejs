import aiImage from './images/projects/aijpeg.jpg';
import chartImage from './images/projects/charts.png';
import companyWebpageImage from './images/projects/eckertmuvek.jpg';
import onlineDictionaryImage from './images/projects/englishtojapanesedictionaryapp.jpg';
import landingPageImage from './images/projects/landingpagestreamlit.jpg';
import movieWatcherImage from './images/projects/moviewatcher.jpg';
import webempireImage from './images/projects/webempire.jpg';
import paranoidImage from './images/projects/paranoid.jpg';


const images = [
    { image: aiImage, title: "Vritual Assistant - Sarah", desc: "I used Python for making this virtual assistant." },
    { image: chartImage, title: "Chart maker application", desc: "This app is created with Python." },
    { image: companyWebpageImage, title: "Eckert Művek co. Ltd company Website", desc: "I brought this website to life with HTML, CSS and Javascript." },
    { image: onlineDictionaryImage, title: "English to Japanese Online Dictionary", desc: "Created with HTML, CSS and Javascript." },
    { image: landingPageImage, title: "Landing page", desc: "This is a one-page landing page made with Python and Streamlit." },
    { image: movieWatcherImage, title: "Movie Watcher (under construction)", desc: "I used ReactJs, when I made this application." },
    { image: webempireImage, title: "Star Wars Web Empire portfolio landing page", desc: "Created with HTML, CSS and Javascript." },
    { image: paranoidImage, title: "Paranoid game", desc: "C and C++ were used to make this pong-styled game." },
    
]




const Projects = () => {
    return (
        <>
         <h1 className='drop-shadow-md text-primary md:text-[70px]'>My Projects</h1>
            <h2 className='pt-2 text-primary'>Check out my previous projects</h2>
            <div>
                <div>
                    <p className='text-white pt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis, justo accumsan dignissim ultrices, ante turpis pretium sapien, at hendrerit justo ipsum nec enim. Pellentesque sodales risus vel arcu lacinia accumsan. Nulla fringilla magna nec sodales efficitur. Cras a orci nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id erat sed nunc maximus interdum sed id dolor. Suspendisse fermentum elit eget feugiat ultrices. Proin eget mattis purus. Cras vitae metus blandit, tincidunt tellus eget, vulputate velit. Mauris dictum libero vel tincidunt cursus.</p>
                    <p className='text-white pt-4'>Sed ut libero id purus volutpat pharetra. In hac habitasse platea dictumst. Fusce a laoreet lorem. Mauris semper mauris eget lorem porttitor laoreet. Vivamus nulla ligula, viverra et venenatis ac, suscipit a augue. Aliquam iaculis, dui in consequat hendrerit, metus nulla sodales diam, et auctor risus sem eget velit. Sed non nisi pretium, gravida turpis et, consectetur eros. Nunc id urna erat.</p>
                </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-4 mt-4">
                {images.map((item, key) =>
                    <div className="mb-4 md:mb-0 rounded-[20px] border-2 border-cover relative overflow-hidden" key={key}>
                        <img src={item.image} alt="" />
                        <div className="absolute bottom-0 z-10 w-full h-[80px]">
                            <div className="absolute bg-black opacity-80 w-full h-full"></div>
                            <h2 className="top-4 left-4 relative font-bold">{item.title}</h2>
                            <p className="top-4 left-4 relative text-white">{item.desc}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )

}

export default Projects;