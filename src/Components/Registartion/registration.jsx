import './registration.scss';
import Form from 'react-bootstrap/Form';
import { icons } from './icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Registration = () => {
    const [isPerson, setIsPerson] = useState(false)

    return(
        <div className='registration-page px-3'>
            <form>
                <p className='title text-center'>Ստեղծել անձնական էջ</p>
                <p className='sub-title text-center'>Ընտրեք ձեր հաշվի տեսակը</p>
                <div className='row'>
                    <div className="col-md-6 col-sm-6 col-8 btns">
                        <span className={!isPerson ? 'type-btn active': 'type-btn'} 
                            onClick={() => setIsPerson(false)}>Կազմակերպություն
                        </span>
                    </div>
                    <div className="col-md-6 col-sm-6 col-4 btns">
                        <span className={isPerson ? 'type-btn active': 'type-btn'} 
                            onClick={() => setIsPerson(true)}>Անհատ
                        </span>
                    </div>
                </div>

                <div className='inputs'>
                    <div><input type="text" className='input' placeholder='Անուն *' /></div>
                    <div><input type="email" className='input' placeholder='Email *'/></div>
                    <div><input type="password" className='input' placeholder='Գաղտնաբառ *'/></div>
                    <div><input type="password" className='input' placeholder='Կրկնեք գաղտնաբառը *'/></div>
                    <div className='d-flex justify-content-between'>
                        <input type="tel" className='input' placeholder='Հեռ' />
                        <input type="tel" className='input' placeholder='Հեռ' />
                    </div>

                    <div className='radios'>
                        <div className="experiance">
                            <p>Աշխատանքային փորձ</p>
                            <label htmlFor="1"><input type="radio" id='1' name='exper' value='Մինչև 1տ' /> Մինչև 1տ.</label>
                            <label htmlFor="3"><input type="radio" id='3' name='exper' value='1-3տ' /> 1-3տ.</label>
                            <label htmlFor="5"><input type="radio" id='5' name='exper' value='3-5տ' /> 3-5տ.</label>
                            <label htmlFor="6"><input type="radio" id='6' name='exper' value='5 և ավել տ' /> 5 և ավել տ.</label>
                        </div>
                        {isPerson && 
                        <div className='gender'>
                            <p>Սեռ</p>
                            <label htmlFor="man"><input type="radio" id='man' name='gender' value='man'/> Արական</label>
                            <label htmlFor="woman"><input type="radio" id='woman' name='gender' value='woman'/> Իգական</label>
                        </div> }
                    </div>

                    <div className='select' >
                        <Form.Select aria-label="Default select example" className='input'>
                            <option disabled select={'true'} hidden>Երկիր</option>
                            <option defaultValue="Հայաստան">Հայաստան</option>
                            <option defaultValue="Ռուսաստան">Ռուսաստան</option>
                            <option defaultValue="ԱՄՆ">ԱՄՆ</option>
                            <option defaultValue="Կանադա">Կանադա</option>
                        </Form.Select>
                        <Form.Select aria-label="Default select example" className='input'>
                            <option disabled select={'true'} hidden>Քաղաք / մարզ</option>
                            <option defaultValue="Երևան">Երևան</option>
                            <option defaultValue="Մոսկվա">Մոսկվա</option>
                            <option defaultValue="New York">New York</option>
                        </Form.Select>
                    </div>
                    <div className='d-flex align-items-start my-3'>
                        <input type="checkbox" id='agree'/>
                        <label htmlFor="agree" className='agree'>
                            Համաձայն եմ հայտարարությունների հրապարակման կանոններին,
                            նաև Kadr.am կայքի օգտագործման համաձայնագրին:
                        </label>
                    </div>                    
                </div>
                <button className='submit-btn' type='submit'>Գրանցվել</button>
                <div className="social-media">
                    <p>Մուտք սոց. ցանցերի միջոցով</p>
                    <div className='social-media-icons'>
                        {icons.google}
                        {icons.facebook}
                        {icons.instagram}
                        {icons.twitter}
                    </div>
                </div>
                <p className='have-profile'>Ունե՞ք անձնական էջ  |  <Link to='/login'>Մուտք</Link></p>
            </form>
        </div>
    )
}

export default Registration