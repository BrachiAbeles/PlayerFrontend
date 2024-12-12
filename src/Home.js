import { useNavigate } from 'react-router-dom';
import './Home.css';
const Home = () => {
    let navigate = useNavigate();
    return (<>
        <div id="container">
            <div id='head'>
                <img id='back' src='/Vector.png' />
                <img id="logo" src="/1f81763b68fcc681d9ec64f32a84f800.png" />
                <img id='category' src='/Vector (1).png' />
            </div>

            <div id="buttonStack">
                <div id="groop" className="toggle" onClick={() => { navigate('/myGroop') }}>
                    הקבוצה שלי
                    <button id="score" className="toggle" onClick={(e) => {
                        e.stopPropagation(); // מונע מעבר אוטומטי של האירוע לכפתור הגדול
                        navigate('/api/players');
                    }}>
                        הניקוד שלי
                    </button>
                </div>
            </div>
        </div>




    </>);
}

export default Home;