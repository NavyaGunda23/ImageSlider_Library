import React, { useRef, useState } from 'react'
import axios from 'axios'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './Carousel.css'

function CarouselCon(){

    const imageContainer = useRef(null)

    const [data,setData] = useState({
        list:[],
        scrollPositionLeft:0,
        scrollPositionRight:200
    })

    useState(() => {
        
        async function getData(){
            let request = await axios.get('https://picsum.photos/list/')
            var num = Math.floor(Math.random() * request.data.length - 5);
            console.log(request.data.splice(num, 10))
            data.list = request.data.splice(num, 10)
            setData({...data})
        }
        getData()
    })


    return(
        <div>
          <Carousel autoPlay>

                {
                    data.list.map((x,i) => (
                        <div>
                            <img alt="" src={`https://picsum.photos/400/600?image=${x.id}`} />
                            <p className="legend"><span className="author_placeholdr">Author Name</span>{x.author}</p>
                        </div>
                    ))
                }
          </Carousel>
        </div>
    )
}

export default CarouselCon