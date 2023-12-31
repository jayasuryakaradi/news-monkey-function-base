import React from 'react'
const NewsItems = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card" style={{minHeight:"390px"}}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0',
                    marginTop:'3px',
                    marginRight:"3px",
                }
                }>
                    <span className="badge rounded-pill bg-danger">
                        {source}
                    </span>
                </div>
                <img  src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top object-fit-cover" width="200px" height="150px" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}  </h5>
                    <p className="card-text textWrap">{description?description:"No description available... "}</p>
                    <p className="card-text"><small className="text-muted position-absolute bottom-0 mb-5">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark position-absolute bottom-0 mb-2">Read More</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItems