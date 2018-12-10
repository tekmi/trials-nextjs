import Error from 'next/error';
import {HorizontalGridLines, LineSeries, VerticalBarSeries, VerticalGridLines, XAxis, XYPlot, YAxis} from 'react-vis';
import "react-vis/dist/style.css";

export default ({query: {id: id}}) => {
    return (
        (Number.isInteger(parseInt(id, 10))) ? (
            <>
                <h1>Post {id}</h1>

                <XYPlot margin={{bottom: 70}} xType="ordinal" width={300} height={300}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis tickLabelAngle={-45} />
                    <YAxis />
                    <VerticalBarSeries
                        data={[
                            {x: 'Apples', y: 10},
                            {x: 'Bananas', y: 5},
                            {x: 'Cranberries', y: 15}
                        ]}
                    />
                    <VerticalBarSeries
                        data={[
                            {x: 'Apples', y: 12},
                            {x: 'Bananas', y: 2},
                            {x: 'Cranberries', y: 11}
                        ]}
                    />
                </XYPlot>
            </>
        ) : (
            <Error statusCode={500}/>
        )
    );
};
