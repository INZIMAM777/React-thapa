import style from './SeriesList.module.css';
import styled from 'styled-components';

export const SeriesList=({curr})=>{// getting props from parent.
  // console.log(;
  const {id,img_url,name,rating,description,genre,cast,watch_url}= curr;

  const textCss={
    fontSize:"1.2rem"//Inline css
  }
  const btnSl={
    backgroundColor:`${rating>=8.5?"green":"yellow"}`,
    color:"#000",
    fontWeight:"700",
    fontSize:"1.4rem"
  }
  
//   const Genre = styled.p`
//     color: ${(props) => (props.rating >= 8.5 ? 'green' : 'yellow')};  
//   font-size: 1.3rem;
// `; // template literal component style.

const Genre = styled.p({
  color: `${rating >= 8.5 ? 'green' : 'yellow'}`,
  fontSize: "1.3rem"
})
    


    return(
    <>
          {/* <div> */}
        {/* <img src="Astronomia Tourbillon.jpg" alt="Loading..." width='50%' height='50%' />
        <h2>
          {heading}
          </h2>
          <p>Name: {name}</p>
          <p>Rating: {4+3.4}</p>
          <p>Genre : {returnGenre()}</p>
          <p>
            Lorem ipsum dolor sit, placeat corrupti nisi minus dicta eum fugiat ducimus, dolorum delectus veritatis itaque! Illo magnam a dolorum.
          </p> */}
          {/* <button>{age>=18?"Watch Now":"Age Restriction"}</button> */}
          {/* <button>{canWatch}</button> */}
      {/* </div> */}
      
        
        <li style={textCss} className={style.cards} key={id}>
        <div>
        <img className={style['c-img']} src={img_url} alt="Loading..." width='40%' height='40%'/>
        <h2>Title: {name}</h2>
         <h3>Rating: <span className={`${style.rb} ${rating >= 8.5 ? style['r1-bg'] : style['r2-bg']}`}>{rating}</span></h3>{/*inline conditional css with addtional classess  */}
        <p className='text-3xl font-bold underline'><strong>Description:</strong> {description}</p>
        <Genre rating={rating}><strong>Genre:</strong> {genre}</Genre>
        <p><strong>cast:</strong> {cast}</p>
        <a href={watch_url}><button style={btnSl} className={style['w-btn']} >Watch Now</button></a>{/*inline css as objecet */}
        
      </div>
      </li>  
      </>
  )
}