import { useEffect, useState } from 'react';
import styled from 'styled-components';

export const Pokemon = () => {
  const [content, setContent] = useState(null);
  const [loading,setLoading]=useState(true);
  const [errored,setErrored]=useState(null)

  const fetchData=async()=>{
    try{
    const res=await fetch('https://pokeapi.co/api/v2/pokemon/squirtle');
    const data=await res.json();
    setContent(data);
    setLoading(false);
    }
    catch(error){
        console.log(error)
        setErrored(error.message);
        setLoading(false);
    }
  }

  useEffect(() => {
    // fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
    //   .then((res) => res.json())
    //   .then((data) => {setContent(data);
    //      setLoading(false);
    //   })
    //   .catch((error)=>{setErrored(error.message);
    //     setLoading(false);
    //   });

    fetchData();
  }, []);




  return (
    <Wrapper>
      {loading ? (
        <Loading>Loading...</Loading>
      ):errored ?(<p>{errored}</p>):
        (<Card>
          {content.sprites?.front_default ? (
            <Image src={content.sprites.other.dream_world.front_default} alt={content.name} />
          ) : (
            <ImagePlaceholder>No Image</ImagePlaceholder>
          )}
          <Title>{content.name.toUpperCase()}</Title>
          <Info>Height: {content.height}</Info>
          <Info>Weight: {content.weight}</Info>
          <Info>
            Type: {content.types.map((t) => t.type.name).join(', ')}
          </Info>
        </Card>)
      }
    </Wrapper>
  );
};

// Styled Components
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
  font-family: 'Segoe UI', sans-serif;
`;

const Card = styled.div`
  background: #e0f7fa;
  border: 2px solid #0288d1;
  border-radius: 20px;
  padding: 30px;
  width: 350px;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  object-fit: contain;
`;

const ImagePlaceholder = styled.div`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  background-color: #cfd8dc;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #607d8b;
  font-size: 14px;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #1a237e;
`;

const Info = styled.p`
  font-size: 16px;
  margin: 5px 0;
`;

const Loading = styled.p`
  font-size: 20px;
  color: #555;
`;
