import './registration.scss';



const Registration = () => {
    return(
        <div className='registration-page px-3'>
            <form>
                <p className='title text-center'>Ստեղծել անձնական էջ</p>
                <p className='sub-title text-center'>Ընտրեք ձեր հաշվի տեսակը</p>
                <div className='row'>
                    <div className="col-md-6 col-sm-6 col-8 btns">
                        <span className='type-btn active'>Կազմակերպություն</span>
                    </div>
                    <div className="col-md-6 col-sm-6 col-4 btns">
                        <span className='type-btn'>Անհատ</span>
                    </div>
                </div>
                <div className='inputs'>
                    <div><input type="text" placeholder='Անուն *' /></div>
                    <div><input type="email" placeholder='Email *'/></div>
                    <div><input type="password" placeholder='Գաղտնաբառ *'/></div>
                    <div><input type="password" placeholder='Կրկնեք գաղտնաբառը *'/></div>
                </div>
            </form>
        </div>
    )
}

export default Registration