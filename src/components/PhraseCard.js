import { Card, CardContent, Typography } from "@material-ui/core";
import { Component } from "react";

class PhraseCard extends Component {
    render() {
        return <Card>
            <CardContent>
                <Typography gutterBottom>
                    Hello, World
                </Typography>
            </CardContent>
        </Card>
    }
}

export default PhraseCard