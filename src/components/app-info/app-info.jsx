import React from 'react'
import './app-info.css'

const AppInfo = ({dataLength, increased}) => {
    return (
        <div className="app-info" >
            <h1>Учет сотрудников в компании Wepro</h1>
            <h2>Общее число сотрудников: {dataLength}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    )
}

export default AppInfo
