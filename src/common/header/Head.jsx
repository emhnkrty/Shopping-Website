import React from 'react'

const Head = () => {
    return (
        <>
            <section className='head'>
                <div className='container d_flex'>
                    <div className='left row'>
                        <i className='fa fa-phone'></i>
                        <label>+90 539 866 44 65</label>
                        <i className='fa fa-envelope' ></i>
                        <label>E.kurtay@Hotmail.com</label>
                    </div>
                    <div className='right row RText'>
                        <label>Theme FAQ's</label>
                        <label>Need Helps</label>
                        <span><i class="fa-solid fa-flag"></i></span>
                        <label htmlFor=''>EN</label>
                        <span><i class="fa-solid fa-flag"></i></span>
                        <label htmlFor=' '>USD</label>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Head
