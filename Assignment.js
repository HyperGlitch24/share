import './Assignment.scss';
import {SlCalender} from "react-icons/sl";
import {FcCamcorderPro} from "react-icons/fc"
import {RiGalleryLine} from "react-icons/ri"


const Assignment =()=>{
    return(
        <div className="AssignmentContainer">
            <div className='AddExercise'>Add Exercise</div>
            <div className='ExerciseName'>
                <div className='ExName'>Exercise Name</div>
                <div className='ExInput '>
                    <input className='Input-height'/>
                </div>
            </div>
            <div className='Duration'>
                <div className='DuName'>Duration</div>
                <div className='DuIcon'>
                <SlCalender className='Calender'/>
                </div>
            </div>
            <div className='Timing'>
                <div className='TiName'>Timing</div>
                <div className='TiInput1'>
                      <input className='Input-height' />
                </div>
                <div className='To'>To</div>
                <div className='TiInput2 '>
                    <input className='Input-height'/>
                </div>
            </div>
            <div className='Description'>
                <div className='DesName'>Exercise Description</div>
                <div className='DesText'>
                    <textarea/>
                </div>
            </div>
            <div className='Bottom'>
                <div className='Texts'>
                    <div className='Sets'>
                        <div className='SetsText'>Sets</div>
                        <div className='SetsInput'>
                            <input className='Input-height'/>
                        </div>
                    </div>
                    <div className='Reps'>
                    <div className='RepsText'>Reps</div>
                        <div className='RepsInput'>
                            <input className='Input-height'/>
                        </div>
                    </div>
                </div>
                <div className='Icons'>
                    <div className='Cam'>
                    <FcCamcorderPro className='Icon'/>
                    <div className='Add'>Add Video</div>
                    </div>
                    <div className='Img'>
                    <RiGalleryLine className='Icon'/>
                    <div className='Add'>Add Images</div>
                    </div>
                </div>
            </div>
            <div className='AddClient'>
                <button className='AddBtn'>Add Clients</button>
            </div>


        </div>
    );
}

export default Assignment;