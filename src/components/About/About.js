import React from 'react'
const About = () => {
  return (
    <div className=" container pt-5 mt-5">
      <div className="row">
        <div className="col col-sm-12 col-md-12 col-lg-12 col-md-12  pt-5 mt-5  ">
          <h1 className="text-center pb-4 mb-4 " >About</h1>
        </div>
      </div>
      <div className="row">
        <div className="col col-sm-6 col-lg-6 col-md-6 col-xl-6  ">
          <img src="https://static1.squarespace.com/static/55491642e4b0cb0b033d590e/56b917dd07eaa040707daa40/56b917dd8a65e27e69cbce63/1454970848535/jessiebush_wethepeople_deadlponies1.jpg?format=750w" className="img-rounded"  alt="Avatar"/>
        </div>
        <div className="col col-sm-6 col-lg-6 col-md-6 col-xl-6  ">
          <img src="https://static1.squarespace.com/static/55491642e4b0cb0b033d590e/56b917dd07eaa040707daa40/56b918081bbee0772f2d50a8/1454970891405/jessiebush_croatia_traveldiary1.jpg?format=750w" className="img-rounded" alt="my profile"/> 
        </div>
      </div>
      <div className="row">
        <div className="col col-sm-5 col-xl-5 col-lg-5 col-md-5">
          <h4 className="display-5 mt-5 pt-5  " >Hello, my name is Skye Landvik.</h4>
        </div>
        <div className="col col-sm-7 col-xl-7 col-lg-7 col-md-7">
          <p className="pt-5 pb-3 mb-3 mt-5" >I’m a Stockholm native working in Dublin, Ireland as a software developer. Basically, I can code from anywhere, so I spend as much time as I can traveling. Most of my wanderlust centers around food and fashion, but you’ll find a lot of reflections in my “Diary” too</p>
          <p className="pb-5 mb-8" >I hope this blog inspires you to explore new places. Feel free to leave a comment or follow me on social media!</p>
        </div>
      </div>
    </div>
  )
}

export default  About