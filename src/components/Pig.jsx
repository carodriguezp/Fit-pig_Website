import bodyImage from '../images/body.png';
import faceImage from '../images/face.png';
import leftArmImage from '../images/left_arm.png';
import rightArmImage from '../images/right_arm.png';

function Pig() {
    return (
        <div>
            <img src={bodyImage} alt="" />
            <img src={faceImage} alt="" />
            <img src={leftArmImage} alt="" />
            <img src={rightArmImage} alt="" />

        </div>
    )
}

export default Pig
