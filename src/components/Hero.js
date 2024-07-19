import Heroimg from '../assets/Ismail 1.jpg';
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin, } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
export default function Hero() {

        const config = {
            subtitle:' Web Developer',
            social :{
                twitter:'#',
                git:'https://github.com/ismail786-ui',
                linkedin:'https://www.linkedin.com/in/mohamed-ismail-j-9634a629b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium'

            }
        }
    return(
        <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
            <div className='md:w-1/2 flex flex-col'>
        <h1 className=' text-white text-3xl font-hero-font mt-6'>Hi ,<br/> I'm <span className='text-fuchsia-400'>J MD</span>  Ismail
        <p className='text-lg'></p>{config.subtitle}</h1>
        <div className='flex py-8'>
            <a href={config.social.twitter} target='_blank' className='pr-2 hover:text-fuchsia-500'><AiOutlineTwitter  size={40} /></a>
            <a href={config.social.git} target='_blank' className='pr-2  hover:text-fuchsia-500'><FaGithub size={40} /></a>
            <a href={config.social.linkedin} target='_blank'  className='pr-2 hover:text-fuchsia-500'><AiOutlineLinkedin size={40} /></a>

        </div>
    </div>
     
       <img className='md:w-1/6' src={Heroimg}/>
        </section>
    )
}