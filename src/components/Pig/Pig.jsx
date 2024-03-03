import bodyImage from '../../images/body.png';
import faceImage from '../../images/face.png';
import leftArmImage from '../../images/left_arm.png';
import rightArmImage from '../../images/right_arm.png';
import PropTypes from "prop-types";

function Pig({ bmi }) {

    //variable de estado tamaño cerdo
    const width = bmi ? ((bmi * 500) / 100) : "30vw"; ///concatenar el resultado de with con un string de %
    const style = { width: width }
    //condicional
    return (
        <>
            <div className='pig'>
                <img className='pig__container' src={bodyImage} alt="" style={style} />
                <div className='pig__body'>
                    <div className='pig-face'>
                        <img className='pig-face-img' src={faceImage} alt="" />
                    </div>
                    <div className='pig-arm'>
                        <img className='pig-arm-img' src={leftArmImage} alt="" />
                        <img className='pig-arm-img' src={rightArmImage} alt="" />
                    </div>
                </div>

            </div>



        </>
    )
}

export default Pig

Pig.propTypes = {

    bmi: PropTypes.number,
}
