import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { BiShieldQuarter } from "react-icons/bi";
import { MdOutlineEventAvailable } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";

const Service = () => {
    return (
        <div id='services'>
            <div className="first">
                <div className="firstfirst">
                    <p><TbTruckDelivery /></p>
                    <small>Fast and Free Delivery</small>
                </div>
                <div className="firstsec">
                    <p><MdOutlineEventAvailable /></p>
                    <small>24/7 Service Available</small>
                </div>
            </div>
            <div className="sec">
                <div className="secfirst">
                    <p><GiReceiveMoney /></p>
                    <small>Money Back Gurantee</small>
                </div>
                <div className="secsecond">
                    <p><BiShieldQuarter /></p>
                    <small>None Contact Shipping</small>
                </div>
            </div>
            <div className="third">
                <div className="thirdfirst">
                    <p><RiSecurePaymentLine /></p>
                    <small>Super Secure Payment System</small>
                </div>
                <div className="thirdsec">
                    <p><RiCustomerService2Line /></p>
                    <small>24/7 Customer Care Support</small>
                </div>
            </div>
        </div>
    )
}

export default Service