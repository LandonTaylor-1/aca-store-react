class Carousel extends React.Component {
    state = {}
    render(){
        return (
            <div className="row carousel-holder">
                <div className="col-md-12">
                    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="item active">
                                <img className="slide-image" src="https://randomfox.ca/images/107.jpg" alt=""/>
                            </div>
                            <div className="item">
                                <img className="slide-image" src="https://randomfox.ca/images/108.jpg" alt=""/>
                            </div>
                            <div className="item">
                                <img className="slide-image" src="https://randomfox.ca/images/109.jpg" alt=""/>
                            </div>
                        </div>
                        <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                        </a>
                        <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}