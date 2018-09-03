import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {

    constructor(props)
    {
        super(props);
        this.monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    }

    renderComments(comments){
        console.log(comments);
        const comments_list = comments.map((comment) => {
            let comment_date = new Date(comment.date);
            return(
               <ul className="list-unstyled"> 
                    <li>{comment.comment}</li>
                    <li> - - {comment.author}, {this.monthName[comment_date.getMonth()]} {comment_date.getDate() + 1}, {comment_date.getFullYear()}</li>
               </ul>
            );
        });

        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {comments_list}
            </div>
        );
    }

    render(){
        if(this.props.dish != null) {
            return(
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={this.props.dish.image} alt={this.props.dish.title} />
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    {this.renderComments(this.props.dish.comments)}
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }
}

export default DishDetail;