import React from 'react';
import logo from '../../../assets/logo.png'
import { Button, Container } from 'react-bootstrap';
import moment from 'moment';
import Marquee from "react-fast-marquee";

const Header = () => {

    return (
        <Container className='mt-4'>
            <div className="text-center my-5">
                <img src={logo} alt="" />
                <p className='mt-2'>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM DD, YYYY hh:mm:ss a")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={100}>
                    The Meteorological Office has predicted storms with a speed of 45 to 60 km per hour from the west or north-west in 5 divisions of the country. This information was given in the weather forecast for the country's inland river ports till 1 pm on Friday (April 28). According to the weather monitoring agency, between 3 pm and 1 am, 12 districts of the country may experience thundershowers with gusty winds. In the forecast, the Meteorological Office said that rain or thundershowers with a speed of 45 to 60 kmph will occur temporarily over Pabna, Tangail, Dhaka, Jessore, Kushtia, Faridpur, Madaripur, Khulna, Barisal, Patuakhali, Noakhali and Comilla districts. Therefore, the river ports of these areas have been asked to show warning signal number 1. Meanwhile, according to the weather forecast of the whole country, there may be temporary rain or thundershower with gusts and wind in one or two places of Rangpur, Rajshahi, Dhaka, Khulna, Barisal, Mymensingh, Chittagong and Sylhet divisions till 9 am on Saturday (April 29). Along with that, there may be scattered hailstorms at some places.

                    দেশের ৫ বিভাগে পশ্চিম অথবা উত্তর-পশ্চিম দিক থেকে ঘণ্টায় ৪৫ থেকে ৬০ কিলোমিটার বেগে ঝড়ের পূর্বাভাস দিয়েছে আবহাওয়া অফিস। শুক্রবার (২৮ এপ্রিল) রাত ১টা পর্যন্ত দেয়া দেশের অভ্যন্তরীণ নদীবন্দরের জন্য আবহাওয়ার পূর্বাভাসে এ তথ্য জানা গেছে। আবহাওয়া পর্যবেক্ষণকারী সংস্থাটি জানিয়েছে, বিকেল ৩টা থেকে রাত ১টার মধ্যে দেশের ১২টি জেলার ওপর দিয়ে বয়ে যেতে পারে দমকা বা ঝোড়ো হাওয়াসহ বজ্রবৃষ্টি। পূর্বাভাসে আবহাওয়া অফিস জানিয়েছে, পাবনা, টাঙ্গাইল, ঢাকা, যশোর, কুষ্টিয়া, ফরিদপুর, মাদারীপুর, খুলনা, বরিশাল, পটুয়াখালী, নোয়াখালী এবং কুমিল্লা জেলার ওপর দিয়ে ৪৫ থেকে ৬০ কিলোমিটার বেগে অস্থায়ীভাবে দমকা অথবা ঝড়ো হাওয়াসহ বৃষ্টি অথবা বজ্রবৃষ্টি হতে পারে। তাই এসব এলাকার নদীবন্দরগুলোকে ১ নম্বর সতর্ক সংকেত দেখাতে বলা হয়েছে। এদিকে সারা দেশের আবহাওয়ার পূর্বাভাস অনুযায়ী, শনিবার (২৯ এপ্রিল) সকাল ৯টা পর্যন্ত রংপুর, রাজশাহী, ঢাকা, খুলনা, বরিশাল, ময়মনসিংহ, চট্টগ্রাম ও সিলেট বিভাগের দু-এক জায়গায় অস্থায়ীভাবে দমকা ও ঝড়ো হাওয়াসহ বৃষ্টি অথবা বজ্রবৃষ্টি হতে পারে। সেই সঙ্গে কোথাও কোথাও বিক্ষিপ্তভাবে শিলাবৃষ্টিও হতে পারে।
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;