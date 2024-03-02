import bodyImage from '../../images/body.png';
// import faceImage from '../../images/face.png';
// import leftArmImage from '../../images/left_arm.png';
// import rightArmImage from '../../images/right_arm.png';
import PropTypes from "prop-types";

function Pig({ bmi }) {

    //variable de estado tamaño cerdo
    const width = ((bmi * 500) / 100); ///concatenar el resultado de with con un string de %
    const style = { width: width }
    //condicional
    return (
        <div className='pig'>
            <img className='pig__body' src={bodyImage} alt="" style={style} />
            {/* <img src={faceImage} alt="" />
            <img src={leftArmImage} alt="" />
            <img src={rightArmImage} alt="" /> */}

        </div>
    )
}

export default Pig

Pig.propTypes = {

    bmi: PropTypes.number,
}
