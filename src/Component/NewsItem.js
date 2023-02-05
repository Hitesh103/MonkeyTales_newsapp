import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {

        let { title, description, imgUrl, url, date ,author } = this.props;

        return (
            <div className='my-3' >
                <div className="card" >
                    <img src={imgUrl ? imgUrl : "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className='card-text'><small className='text-muted'>
                            {new Date(date).toGMTString()}
                        </small></p>
                        <a href={url} target='_blank' rel="noreferrer" className="btn btn-dark ">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}