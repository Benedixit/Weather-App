import { Line } from "react-chartjs-2";
import {Chart as ChartJS, LineElement, LinearScale, PointElement, CategoryScale} from "chart.js"

ChartJS.register(
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
)



const TempChart = ({list}) => {
    console.log(list)

    const tempsData = {
        labels: list && list?.map(key => key.dt_txt),
        datasets: [
          {
            label: 'Dataset 1',
            data: list && list?.map(key=> key.main.temp),
            borderColor: 'rgb(91,192,222)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };


       
    return (
        <>
        <div style={{paddingTop: "30px", paddingBottom: "20px"}}>
          <h3 className="fw-bold text-start">Temperature Forecast</h3>
        </div>
        <Line data={tempsData}/>
        </>
    )
}

export default TempChart