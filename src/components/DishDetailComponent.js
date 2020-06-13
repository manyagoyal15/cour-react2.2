import React, { Component } from 'react';
import {Card,CardImg,CardImgOverlay,CardTitle,CardText,CardBody} from 'reactstrap';
import { Media } from 'reactstrap';

class DishDetail extends Component {
    
    renderDish(dish){
        if(dish!=null){
            return(
                <div className="col-12 col-md-5 m-1 mt-3">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            )
        }else{
            return(
                <div></div>
            )
        }
    }
    renderComments(comments){
        if(comments!=null)
            return(
                <div className="col-12 col-md-5 m-1 mt-3">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment)=>{
                            return(
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>--{comment.author}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )
            else{
                return(
                    <div></div>
                );
            }
    }
    render() {
        const dish=this.props.dish;
            if(dish!=null)
            return(
                
                <div className="row">
                    
                        {this.renderDish(dish)}
                        {this.renderComments(dish.comments)}
                    
                </div>
                
                );
            else{
            return(
                <div></div>
            )
        }
            
            
            
        
    }
}

export default DishDetail;
