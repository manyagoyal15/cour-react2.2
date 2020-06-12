import React, { Component } from 'react';
import {Card,CardImg,CardImgOverlay,CardTitle,CardText,CardBody} from 'reactstrap';
import { Media } from 'reactstrap';

class DishDetail extends Component {
    render() {
        const sdish=this.props.sdish;
        const comments=this.props.sdish.comments.map((com)=>{
            return(
                    <div key={com.id} className="m-1">
                        <Media tag="li">
                            <Media body className="ml-5">
                                <p>{com.comment}</p>
                                <p>--{com.author},{com.date}</p>
                                
                            </Media>
                        </Media>
                    </div>
            );
        }

        );
        return (
            <div className="container">
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={sdish.image} alt={sdish.name} />
                            <CardBody>
                                <CardTitle>{sdish.name}</CardTitle>
                                <CardText>{sdish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <Media list>
                        <h4>Comments</h4>
                        {comments}
                        
                    </Media>
                </div>
            </div>
        )
    }
}

export default DishDetail
