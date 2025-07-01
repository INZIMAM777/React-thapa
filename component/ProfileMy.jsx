import {ProfileCard} from './ProfileCard';
export const ProfileMy=()=>{
    return(
    <div>
        <h1>Profile Card</h1>
        <ProfileCard
        name="Inzimam"
        age={30}
        greeting={
           <div>
            <strong>Hi hello, Mr.xxxxx</strong>
            </div> 
            }
        
        >
        <p>Hobbies: Coding, sleeping</p>
        <button>contact</button>

        </ProfileCard>


        <ProfileCard
        name="Thouseef"
        age={20}
        greeting={
           <div>
            <strong>Hi hello, Mr.xxxxx</strong>
            </div> 
            }
        
        >
        <p>Hobbies: Coding, runing</p>
        <button>contact</button>

        </ProfileCard>
    </div>
    )   
}