import React from 'react'
import './Architecture.css';
import ArchitectureImg from "../../Assets/Process Flow Chart (1).png"
const Architecture = () => {
    return (
        <div className='arch-container' id='architecture'>

            <h1 className='arch-heading'>Architecture Used</h1>

            <div className='arch-content-container'>

                <div className='arch-content'>

                    <div className='arch-content-strucutre' style={{width: '50vw'}}>

                        <div className='arch-content-box' style={{width: '50vw'}}>

                            <p className='arch-text'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, a illo deserunt fugit nisi eos. Aliquam asperiores labore facere dolor!
                            </p>

                        </div>

                        <div className='arch-content-box '>

                            <p className='arch-text'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, a illo deserunt fugit nisi eos. Aliquam asperiores labore facere dolor!
                            </p>

                        </div>

                        <div className='arch-content-box'>

                            <p className='arch-text'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, a illo deserunt fugit nisi eos. Aliquam asperiores labore facere dolor!
                            </p>

                        </div>

                    </div>

                </div>

                <div className='arch-img'>

                    <div style={{height: '100%'}}>

                    <img src={ArchitectureImg} className='archi' alt="Architecture" style={{height: '100%'}}/>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Architecture