import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const TrelloCard = ({ skill }) => {
    return (
        <Card style={styles.cardContainer} >
            <CardContent>
                <Typography gutterBottom >
                    {skill}
                </Typography>
            </CardContent>
        </Card>
    )
}


const styles = {
    cardContainer: {
        marginBottom: 8,
        backgroundColor: '#FFFFFF'
    }
}
export default TrelloCard;