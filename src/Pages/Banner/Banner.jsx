

const Banner = () => {
 return (
   <div>
     <div className="carousel w-full ">
       <div id="slide1" className="carousel-item flex relative w-full">
         <div
           className="hero min-h-screen"
           style={{
             backgroundImage:
               "url('https://i.ibb.co/25Wy1Z8/White-Dusk-Blue-And-Nile-Blue-Geometric-Web-Design-And-Development-Presentation.jpg')",
           }}
         >
           <div
             data-aos="fade-right"
             className="bg-opacity-60  text-neutral-content"
           >
             <div
               data-aos="fade-down-right"
               data-aos-easing="linear"
               data-aos-duration="1500"
               className="max-w-md   lg:relative lg:top-[10%] lg:right-[70%]"
             ></div>
           </div>
         </div>
         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
           <a href="#slide1" className="btn btn-circle ">
             ❮
           </a>
           <a href="#slide2" className="btn btn-circle ">
             ❯
           </a>
         </div>
       </div>
       <div id="slide2" className="carousel-item flex relative w-full">
         <div
           className="hero min-h-screen"
           style={{
             backgroundImage:
               "url('https://i.ibb.co/KX4Q1Jv/Blue-and-White-Modern-3-D-Digital-Marketing-Agency-Facebook-Ad.png')",
           }}
         >
           <div className="bg-opacity-60   text-neutral-content">
             <div className="max-w-md   mx-auto lg:relative lg:top-[20%] lg:right-[70%]"></div>
           </div>
         </div>
         <div className="absolute   flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
           <a href="#slide2" className="btn  btn-circle">
             ❮
           </a>
           <a href="#slide3" className="btn btn-circle">
             ❯
           </a>
         </div>
       </div>
       <div id="slide3" className="carousel-item flex relative w-full">
         <div
           className="hero min-h-screen"
           style={{
             backgroundImage:
               "url('https://i.ibb.co/k6DfR0b/Gray-and-Brown-Minimalist-Graphic-Designer-Facebook-Cover.png')",
           }}
         >
           <div className="bg-opacity-60   text-neutral-content">
             <div className="max-w-md   mx-auto lg:relative lg:top-[20%] lg:right-[70%]">
              F
             </div>
           </div>
         </div>
         <div className="absolute   flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
           <a href="#slide3" className="btn  btn-circle">
             ❮
           </a>
           <a href="#slide1" className="btn btn-circle">
             ❯
           </a>
         </div>
       </div>
     </div>
   </div>
 );
};

export default Banner;