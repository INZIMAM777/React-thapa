import {SeriesList} from '../component/SeriesList'
import style from './SeriesList.module.css'
import seriesData from '../src/api/seriesData.json'
import "../component/NetfilxCard.css";
export const NetfilixCard=()=>{
//   const heading='Watch Collections';
//   const name='xyz Watch'
//   const returnGenre=()=>{
//     return 'Action, Adventure, Sci-Fi';
//   }
//   const age=13;
//   let canWatch="Watch Now";
//   if(age<18)canWatch="Age Restriction";
  return(
    <>
    <h1 className='Nh'>Netfilix Cards</h1>
    <div className="main-box">
        <ul className={style['u-list']}>
    {seriesData.map((series)=>{
        return(<SeriesList key={series.id} curr={series} />)
    })}
        </ul>
    </div>
    </>
  );

}

//export default NetfilixCard;

const Header=()=>{
    return(
        <>
        <p>Copy Right @InzimamTech</p>
        </>
        
    )
}
export default Header;

export const Footer=()=>{
    return(
        <>
        <p>All rights reserved @InzimamTech</p>
        </>
    )
}

// only one default export is work at one time

// export default { Header, Footer }; for combain
