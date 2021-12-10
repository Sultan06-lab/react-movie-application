import '../Config/Config'
import { img_300, unavailable } from '../Config/Config';
import './Trending.css'
import AppModal from '../Modal/AppModal';

const TrendingApiConfig = (props) => {

    const voteColorDefine = (vote) => {
        if (vote <= 5) {

            return 'red';
        }
        else if (vote > 5 & vote <= 7) {
            return 'blue';
        }
        else {
            return 'green';
        }
    };
    return (
        <div>
            {
                <div className='content'>
                    <div className='card-film'>
                        <a href=""><img src={props.data.poster_path ? `${img_300}/${props.data.poster_path}` : `${unavailable}`} alt={props.data.original_title} /></a>
                        <div className='card-info'>
                            <h3>{props.data.original_title ? props.data.original_title : props.data.original_name}</h3>
                            <div className='card-type'>
                                <h3>{props.data.media_type === 'movie' ? 'movie' : 'TV'}</h3>
                                <span className={`${voteColorDefine(props.data.vote_average)}`}>{props.data.vote_average}</span>
                            </div>
                            <div className='card-description'>
                                <AppModal id={props.data.id} media_type={props.data.media_type}/>
                                <h3>Overwiev:</h3>
                                <p>{props.data.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>)
}

export default TrendingApiConfig;

