import React from 'react';

 const Footer = ()=>{

return(

<div>
  
<footer class="footer-distributed bg-gray-900 text-white py-8 px-4 lg:px-24 flex flex-col lg:flex-row items-center">

  <div class="footer-left lg:w-3/4 lg:mr-12">
    <h3 class="text-lg md:text-3xl xl:text-4xl font-normal text-white mb-2">INDIAN INSTITUTE OF TECHNOLOGY <span class=" text-teal-500 font-medium">INDORE</span></h3>

    <p class="footer-links mt-4 lg:mt-10 text-sm lg:text-base">
      District Websites of Madhya Pradesh are powered by S3WaaS Framework of NIC, MeitY in collaboration with District Administration and IT Department, Govt. of Madhya Pradesh
    </p>

    <p class="footer-company-name text-gray-300 mt-8 lg:mt-12 text-sm lg:text-base">© All rights reserved by State Administration</p>
  </div>

  <div class="footer-center lg:w-1/4 flex flex-col items-center lg:items-start mt-8 lg:mt-0">
    <div class="flex items-center mb-4 lg:mb-7">
      <i class="fa fa-map-marker bg-gray-700 text-white text-2xl rounded-full w-10 h-10 flex items-center justify-center mr-3"></i>
      <p  class="text-xs lg:text-sm"><span>Department of</span><br/><span class="text-teal-500 font-semibold">
        Civil Engineering
        </span></p>
    </div>

    <div class="flex items-center mb-4 lg:mb-7">
      <i class="fa fa-phone bg-gray-700 text-white text-2xl rounded-full w-10 h-10 flex items-center justify-center mr-3"></i>
      <p class="text-xs lg:text-sm">+1.555.555.5555</p>
    </div>

    <div class="flex items-center ">
      <i class="fa fa-envelope bg-gray-700 text-white text-2xl rounded-full w-10 h-10 flex items-center justify-center mr-3">
      </i>
      <p class="text-xs lg:text-sm"> civiloff@iiti.ac.in<a href="mailto:support@company.com"></a></p>
    </div>
  </div>

</footer>


</div>
);
  
}

export default Footer;