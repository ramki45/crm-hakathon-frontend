import axios from 'axios'
import React from 'react'
import { useFormik } from 'formik'

function RequestService() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: async (values) => {
            try {
                await axios.post("https://crmhack.herokuapp.com/service", values);
                alert("service requested");
            } catch (error) {
                console.error('service error');
            }
        }
    })
    return (
        <>

            <div className='row justify-content-center align-items-center'>

                <div className="col-md-9 col-lg-6 col-xl-4 h-70 shadow p-3 mb-5 rounded" style={{ backgroundColor: "white" }}>
                    <h3 className='text-center'>Request Service - CRM</h3><hr />
                    <form onSubmit={formik.handleSubmit}>
                        <div className='row ml-1'>
                            <div className='form-group col-lg-6'>
                                <label>Company</label>
                                <input className='form-control'
                                    name='company'
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.company}
                                ></input>
                            </div>
                            <div className='form-group col-lg-6'>
                                <label>Service Request</label>
                                <input className='form-control'
                                    name='service'
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.service}
                                ></input>
                            </div>
                        </div>
                        <div className='form-group col-lg-6'>
                            <label>Details</label>
                            <input className='form-control'
                                name='details'
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.details}
                                placeholder=''></input>
                        </div>
                        <div className='form-group col-lg-6'>
                            <label>Requested Date</label>
                            <input className='form-control'
                                name='rdate'
                                onChange={formik.handleChange}
                                type="date"
                                value={formik.values.rdate}
                                placeholder='rdate'></input>
                        </div>
                    
                        <div className='form-group col-lg-6'>
                            <label>Solved Date</label>
                            <input className='form-control'
                                name='sdate'
                                onChange={formik.handleChange}
                                type="date"
                                value={formik.values.sdate}
                                placeholder=''></input>
                        </div>
                        
                        
                        
                        
                        <div className='form-group col-lg-12'>
                            <button type='submit' className='btn btn-primary rounded col-lg-12 justify-content-center align-items-center mt-2'>Submit</button>
                        </div><hr />
                    </form>
                </div>
            </div>
        </>
    )
}

export default RequestService
