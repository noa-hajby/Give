import './home.css'
import { BsFillTelephoneOutboundFill, BsFillPersonCheckFill, BsFillFileTextFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { FiUser } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux';
import pic from '../../assets/Depositphotos_63210555_l-2015.jpg'
import x from '../../assets/2581411D3F15535B66B5EDA98188D4A2_800x392.20200714T152011.jpg'
import { AiOutlineLike } from 'react-icons/ai';
import { BsFillEyeFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import VolunteerCard from './volunteerCard';
import { setSelectedkindVolunteer } from '../../store/kindVolunteerSlice';

function Home() {
  const dispatch = useDispatch()
  let nav = useNavigate();
  const kindVolunteers = useSelector((state) => state.kindVolunteer.items);

  const navPageView = (kindVolunteering) => {
    dispatch(setSelectedkindVolunteer(kindVolunteering))
    nav('/view')
  }

  return (
    <div >
      <div id="intro" className="bg-image" >
        <div className="mask text-black "  >
          <div className="container d-flex align-items-center text-center h-100 ">
            <div id="textPicture">
              {/* <h1 id="textpicture" className="mb-5 margin-top-100px  ">give</h1> */}
              {/* <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis molestiae
                laboriosam numquam expedita ullam saepe ipsam, deserunt provident corporis,
                sit non accusamus maxime, magni nulla quasi iste ipsa architecto? Autem!
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <div className='popular'>
        <div>
          <h1 className='text-center ' id='titletwo'><AiOutlineLike color='red' fontSize={'30px'} /> The most popular volunteering <AiOutlineLike color='red' fontSize={'30px'} /></h1>

        </div>
        <div className='warp-card'>
          {
            kindVolunteers.length && kindVolunteers.slice(2, 5).map((item) => {
              return <VolunteerCard 
                  img={item.img}
                  title={item.titel} 
                  description={item.detail} 
                  onClick={() => {navPageView(item)}}
                />
            })
          }
        </div>
      </div>
      <div className='way'>
        <div className='x' >
          <h2 style={{ color: 'black', marginBottom: '50px' }}>how its work?</h2>
        </div>
        <div >
          <div className='partway rounded-4'>
            <h5>1. you choose</h5>
            <p> Custom volunteering through our search engine</p>
            <BsFillPersonCheckFill style={{ fontSize: '60px', color: 'black' }} />
          </div>
          <div className='partway rounded-4'>
            <h5>2. we calling</h5>
            <p>to you and adjust expectations and suitability for the volunteering you have chosen</p>
            <BsFillTelephoneOutboundFill style={{ fontSize: '50px', color: 'black' }} />
          </div>
          <div className='partway rounded-4'>
            <h5>3. getting</h5>
            <p>Contact details for the volunteering place, and at the same time your details are transferred there</p>
            <BsFillFileTextFill style={{ fontSize: '40px', color: 'black' }} />
          </div>
          <div className='partway rounded-4'>
            <h5 className='text-justify"'>4. Start volunteering</h5>
            <p>in a place adapted to you personally</p>
            <FaHeart style={{ fontSize: '60px', color: 'black' }} />
          </div>
        </div>
      </div>
      <div style={{ height: '100px' }}></div>
      <div>
        <div style={{ display: 'flex' }}>
          <div className="one" style={{ textAlign: 'center', width: '600px', marginLeft: '100px' }}>
            <h2>volunteer tells</h2>
            <FiUser fontSize={'30px'} color={'red'} />
            <p className="two">
              The inherent advantages I had as a volunteer stand out to the eye, and immeasurably outweigh its disadvantages. The contribution that volunteering has to the feeling of self-confidence, personal well-being and the social impact is extremely significant, and I recommend everyone to take action and volunteer. Register on the website Choose volunteering Fill in the details when choosing volunteering, and I'm sure you'll enjoy the volunteering experience personally just as much as I do
            </p>
          </div>
          <div id="pic" style={{ width: '400px', height: '400px', marginLeft: '100px', textAlign: 'center' }}>
            <img src={pic} id="pic" style={{ width: '600px', height: '360px' }}></img>
          </div>
        </div>
        <div style={{ display: 'flex', marginTop: '100px', width: '100%' }}>
          <div id="pic1" style={{ width: '500px', height: '400px', marginLeft: '80px', marginTop: '60px' }}>
            <img src={pic} id="pic1" style={{ width: '650px', height: '380px' }}></img>
          </div>
          <div className="one" style={{ marginLeft: '210px', direction: 'rtl', width: '600px', textAlign: 'center', height: 'auto' }}>
            <h2>volunteer tells</h2>
            <FiUser fontSize={'30px'} color={'red'} />
            <p className="two">
              A month ago, I decided it was time to start a third career and fulfill what my soul always wanted. A place where I can feel that I am contributing my ability to other people, that combines good people, creativity and a lot of personal satisfaction, and I started my way of giving. From then until today I am there, every day, waiting for the next challenge that I can solve and help another person to smile and make his life easier. I found myself playing with children with special needs and making them laugh a lot and more interested; and enables people with disabilities to increase their productivity and make the environment accessible to them, solves engineering challenges with occupational therapists and physiotherapists. One of the cases I remember the most is that I was able to help a disabled person fulfill his dream of traveling in Africa for two days despite his difficulty standing for several hours a day. We helped him stand during the trip and enjoy the unique experience. I suggest to every person who defines himself as original, has initiative, and love for people to come and join us.
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', marginTop: '100px', height: '390px' }}>
          <div className="one" style={{ textAlign: 'center', width: '600px', marginLeft: '100px', marginBottom: '40px' }}>
            <h2>
              From studies in Israel, volunteers reported improvement in several areas
            </h2>
            <FiUser fontSize={'30px'} color={'red'} />

            <h6 className="two">
              Gaining experience in teamwork.
            </h6>
            <h6 className='two'>
              Development of organizational and project management skills
            </h6>
            <h6 className='two'>
              Strengthening or developing communication skills
            </h6>
            <h6 className='two'>
              Improving their interpersonal skills
            </h6>
          </div>
          <div id="pic" style={{ width: '400px', height: '400px', marginLeft: '100px', marginBottom: '100px' }}>
            <img src={pic} id="pic" style={{ width: '600px', height: '360px' }}></img>
          </div>
        </div>
      </div>
    </div >

  );
}

export default Home;