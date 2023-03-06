import React from 'react'
import './Home.scss'

const Home = () => {
  return (
    <div className="home">
        <div className="top">
            <div className="box1">
                <div className="top">
                    <div className="title">
                    <h1>AGENDA</h1>
                    </div>
                    <div className="top-button">
                        <button>ALL EVENTS</button>
                        <button>EVENTS MARKS</button>
                        <button>FILTERS</button>
                    </div>
                </div>
            </div>
            <div className="box2"> 
                <div className="top">
                    <div className="title">
                    <h1>EVALUATIONS</h1>
                    </div>
                    <div className="top-button">
                        <button>HIDE</button>
                        <button>FEEDBACKS LOGS</button>
                        <button>MANAGE SLOTS</button>
                    </div>
                </div>
                </div>
            <div className="box3">
            <div className="top">
                    <div className="title">
                    <h1>LOGTIME</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home